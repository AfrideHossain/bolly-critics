/* eslint-disable react/prop-types */
import { HiOutlineStar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const SmallReviewCard = ({ post }) => {
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        {post?.poster && (
          <figure>
            <img src={post?.poster} alt={post?.headline} />
          </figure>
        )}
        <div className="card-body">
          <h2 className="card-title">{post?.headline}</h2>
          <p>
            By{" "}
            <span className="text-blue-600 font-medium">
              {post?.author || "Anonymous user"}
            </span>{" "}
            on
            <span> {post?.date}</span>
          </p>
          <div className="flex items-center gap-2">
            <HiOutlineStar className="w-6 h-6" /> <p>{post?.star || 0}</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`read/${post?._id}`} className="btn btn-primary">
              Read Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallReviewCard;
