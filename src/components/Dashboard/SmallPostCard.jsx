/* eslint-disable react/prop-types */
import { HiOutlineStar } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SmallPostCard = ({ post }) => {
  const axiosSecure = useAxiosSecure();
  const deleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/post/${id}`).then(() => {
          post.setLoad(true);
          Swal.fire({
            title: "Deleted!",
            text: "Your post has been deleted.",
            icon: "success",
          });
        });
      }
    });
  };
  return (
    <>
      <div className="card card-compact max-w-md bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{post?.headline}</h2>
          <p>
            On
            <span className="font-medium"> {post?.date || ""}</span>
          </p>
          <div className="flex items-center gap-2">
            <HiOutlineStar className="w-6 h-6" /> <p>{post?.star || 0}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Read</button>
            <Link to={`editreview/${post?._id}`} className="btn btn-info">
              Edit
            </Link>
            <button
              className="btn btn-error"
              onClick={() => deleteHandler(post?._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallPostCard;
