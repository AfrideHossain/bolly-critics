import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <div className="banner w-full min-h-screen flex flex-col justify-center items-center">
        <div className="z-10 w-full h-full flex flex-col justify-center items-center gap-4">
          <div className="max-w-3xl flex flex-col justify-center items-center gap-4">
            <h1 className="text-3xl font-semibold text-center leading-loose text-white">
              Your Guide to,{" "}
              <span className="block text-green-400 text-5xl font-bold">
                Honest Bollywood Reviews
              </span>
            </h1>
            <p className="text-gray-200 text-center text-lg font-medium">
              Welcome to Bolly Critics, the ultimate destination for authentic
              Bollywood movie reviews. Here, avid filmgoers can explore detailed
              critiques and ratings to make informed viewing choices. Our
              platform empowers professional critics to share their expert
              opinions, fostering a community of discerning cinema enthusiasts.
              Discover the latest hits and misses straight from the voices you
              trust. Join Bolly Critics today, where every review counts and
              every opinion matters.
            </p>
          </div>
          {/* buttons */}
          <div className="mt-4">
            <Link
              to={"/auth/signup"}
              className="btn btn-lg btn-primary btn-wide rounded-full"
            >
              Get started for free
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
