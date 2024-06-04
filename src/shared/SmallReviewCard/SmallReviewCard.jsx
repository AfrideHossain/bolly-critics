import { HiOutlineStar } from "react-icons/hi2";

const SmallReviewCard = () => {
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Movie</h2>
          <p>
            By <span className="text-blue-600 font-medium">Author</span> on
            <span> 21/4/2024</span>
          </p>
          <div className="flex items-center gap-2">
            <HiOutlineStar className="w-6 h-6" /> <p>4.5</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Read Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallReviewCard;
