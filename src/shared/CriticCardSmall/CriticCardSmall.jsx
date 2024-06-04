import { HiOutlineStar } from "react-icons/hi2";
const CriticCardSmall = () => {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-full md:w-96 h-full">
          <img
            src="https://goldenglobes.com/wp-content/uploads/2023/10/chopra_-anupama.jpg"
            alt="Critic"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body h-full">
          <h2 className="card-title">Anupama Chopra</h2>
          <div className="mt-2 flex gap-2 items-center">
            <HiOutlineStar className="w-7 h-7 " /> <span>4.9</span>
          </div>
          <div className="card-actions justify-end mt-auto">
            <button className="btn btn-sm btn-primary">View</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CriticCardSmall;
