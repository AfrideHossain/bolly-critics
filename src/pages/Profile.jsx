import { HiOutlineStar, HiPencilSquare } from "react-icons/hi2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Profile = () => {
  const [user, setUser] = useState({});
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axiosSecure.get("/user").then((data) => {
      setUser(data.data);
    });
    // console.log(user);
  }, [axiosSecure]);

  const handleStarClick = () => {
    console.log("Star button clicked!");
  };

  const onSubmitHandler = (data) => {
    const formData = new FormData();
    formData.append("image", data.poster[0]);
    // post image
    fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((resData) => {
        data.avatar = resData.data.display_url;
        axiosSecure
          .put(`/user/${user._id}`, data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((data) => {
            if (data.data.success) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Picture Updated",
                showConfirmButton: false,
                timer: 2000,
              });
            }
          });
      });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                className="w-24 h-24 rounded-full shadow-lg"
                src={user?.avatar || "https://via.placeholder.com/150"}
                alt="Profile"
              />
              <button
                className="absolute -right-3 bottom-0 btn btn-sm  rounded-full"
                onClick={() => document.getElementById("updateDp").showModal()}
              >
                <HiPencilSquare className="w-5 h-5 rounded-full" />
              </button>
            </div>
            <h2 className="mt-4 text-2xl font-semibold">{user?.username}</h2>
            <p className="mt-2 text-gray-600">{user?.email}</p>
            <div className="mt-4 space-x-2">
              <button
                className="btn btn-ghost btn-sm"
                onClick={handleStarClick}
              >
                <HiOutlineStar className="w-6 h-6" /> {user?.stars || 0}
              </button>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold">About</h3>
            <p className="mt-2 text-gray-600">{user?.bio || ""}</p>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-2 text-gray-600">Email: {user?.email}</p>
            <p className="mt-2 text-gray-600">Phone: {user?.phone || "--"}</p>
          </div>
          <div className="mt-5 flex justify-center items-center">
            <Link to="/dashboard/update" className="btn btn-primary">
              Update Profile
            </Link>
          </div>
        </div>
      </div>

      {/* modal */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="updateDp" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h3 className="font-bold text-lg mb-6">Change Picture</h3>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="form-control">
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                {...register("poster", { required: true })}
              />
            </div>
            <button type="submit" className="btn btn-primary float-right mt-4">
              Save
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Profile;
