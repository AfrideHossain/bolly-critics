import { useForm } from "react-hook-form";
import GoogleLogin from "../components/Auth/GoogleLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthContextHook from "../hooks/useAuthContextHook";

const Register = () => {
  // functions form authcontext
  const { signUpWithEmailAndPass } = useAuthContextHook();
  // useform
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const onSubmitHandler = (data) => {
    const { username, email, password } = data;
    signUpWithEmailAndPass(email, password).then((result) => {
      // console.log(result);
      fetch(`${import.meta.env.VITE_BASEURL}/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: result.user.email,
          username: username,
          avatar: result.user?.photoURL || "",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            navigate(from, { replace: true });
          }
        });
    });
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full md:max-w-md md:p-8 p-4 m-4 space-y-3 rounded-xl shadow-lg bg-white">
          <h1 className="text-2xl font-bold text-center">Join Us!</h1>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered w-full"
                {...register("username", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
                {...register("password", { required: true })}
              />
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Create
            </button>
          </form>
          <div className="divider">OR</div>
          <div className="space-y-3">
            <GoogleLogin />
            <button className="btn btn-outline w-full flex items-center justify-center">
              <img
                src="/icons/github.png"
                alt="GitHub"
                className="w-5 h-5 mr-2"
              />
              Login with GitHub
            </button>
          </div>
          <p className="text-center">
            <Link to="/auth" className="link link-primary">
              Already have an account!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
