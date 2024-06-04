import { useLocation, useNavigate } from "react-router-dom";
import useAuthContextHook from "../../hooks/useAuthContextHook";

const GoogleLogin = () => {
  const { signInWithGoogle } = useAuthContextHook();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSocialLogin = () => {
    signInWithGoogle().then((result) => {
      fetch(`${import.meta.env.VITE_BASEURL}/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: result.user.email,
          username: result.user.displayName,
          avatar: result.user?.photoURL || "",
        }),
      });
      navigate(from, { replace: true });
    });
  };
  return (
    <button
      className="btn btn-outline w-full flex items-center justify-center"
      onClick={() => handleSocialLogin()}
    >
      <img src="/icons/google.png" alt="Google" className="w-5 h-5 mr-2" />
      Login with Google
    </button>
  );
};

export default GoogleLogin;
