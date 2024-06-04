import { HiOutlineStar } from "react-icons/hi2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  //const user = {
  //   username: "AwesomeDev",
  //   avatar:
  //     "https://img.freepik.com/premium-photo/confident-businessman-portrait_220507-11268.jpg",
  //   bio: "Passionate software developer with a focus on building user-friendly and innovative applications. Always learning and excited about the future of tech!",
  //   location: "Silicon Valley, CA",
  //   stats: {
  //     stars: 0,
  //   },
  // };
  const [user, setUser] = useState({});
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/user").then((data) => {
      setUser(data.data);
    });
    // console.log(user);
  }, [axiosSecure]);

  const handleStarClick = () => {
    console.log("Star button clicked!");
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 rounded-full shadow-lg"
              src={user?.avatar || "https://via.placeholder.com/150"}
              alt="Profile"
            />
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
    </>
  );
};

export default Profile;
