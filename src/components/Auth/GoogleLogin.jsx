import useAuthContextHook from "../../hooks/useAuthContextHook";

const GoogleLogin = () => {
  const { signInWithGoogle } = useAuthContextHook();
  const handleSocialLogin = () => {
    signInWithGoogle().then((result) => {
      console.log(result.user);
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
