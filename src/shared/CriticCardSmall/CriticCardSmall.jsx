/* eslint-disable react/prop-types */
import { HiOutlineStar } from "react-icons/hi2";
const CriticCardSmall = ({ critic }) => {
  return (
    <>
      <div className="card lg:card-side md:h-56 bg-base-100 shadow-xl">
        <figure className="w-full md:w-56 h-full">
          <img
            src={
              critic?.avatar ||
              "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
            }
            alt={critic?.username}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body h-full">
          <h2 className="card-title">{critic?.username}</h2>
          <div className="mt-2 flex gap-2 items-center">
            <HiOutlineStar className="w-7 h-7 " />{" "}
            <span>{critic?.star || 0}</span>
          </div>
          <div className="card-actions justify-end mt-auto">
            <button className="btn btn-sm btn-primary">Give Star</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CriticCardSmall;
