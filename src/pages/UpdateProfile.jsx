import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [user, setUser] = useState({});
  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.get("/user").then((data) => {
      setUser(data.data);
    });
    // console.log(user);
  }, [axiosSecure]);

  const onSubmitHandler = (data) => {
    // console.log(data);
    axiosSecure
      .put(`/user/${user._id}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        if (data.data.success) {
          navigate("/dashboard/profile");
        }
      });
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full md:max-w-md md:p-8 p-4 m-4 space-y-3 rounded-xl shadow-lg bg-white">
          <h1 className="text-2xl font-bold text-center">
            Update personal information
          </h1>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmitHandler)}>
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                {...register("avatar")}
              />
            </div> */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered w-full"
                {...register("username", { value: user?.username || "" })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Email (You can{"'"}t change it.)
                </span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                value={user?.email}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="Phone"
                className="input input-bordered w-full"
                {...register("phone", { value: user?.phone || "" })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Bio</span>
              </label>
              <textarea
                type="text"
                placeholder="Bio"
                className="textarea input-bordered w-full"
                {...register("bio", { value: user?.bio || "" })}
              />
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
