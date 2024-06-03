import { Link } from "react-router-dom";
import HeadLine from "../../../shared/HeadLine/HeadLine";

const AboutFromHome = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <HeadLine title={"About Bolly Ctirics"} />
        <p className="my-7">
          Welcome to Bolly Critics, your go-to hub for comprehensive Bollywood
          movie reviews. Founded with the aim of providing honest and insightful
          critiques, we cater to both movie enthusiasts and professional
          critics. Our platform is designed to bridge the gap between viewers
          and reviewers, ensuring that every opinion is heard and valued. At
          Bolly Critics, we believe in the power of informed choices. That's why
          we offer a space where critics can share their detailed analyses, and
          users can explore diverse perspectives on the latest Bollywood
          releases. Whether you're looking for in-depth reviews, ratings, or
          just a quick read before watching a movie, Bolly Critics has got you
          covered. Join us in celebrating the vibrant world of Bollywood cinema.
          Explore, review, and share your thoughts with a community that
          appreciates the art of filmmaking. Bolly Critics – where every movie
          gets its true review.
        </p>

        <Link to="/about" className="btn btn-outline btn-info">
          Learn more
        </Link>
      </div>
    </>
  );
};

export default AboutFromHome;
