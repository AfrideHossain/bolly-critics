import HeadLine from "../shared/HeadLine/HeadLine";

const About = () => {
  return (
    <div className="w-full md:max-w-7xl min-h-screen flex flex-col justify-center items-center mx-auto p-4">
      <HeadLine title={"About Bolly Critics"} />
      <p className="mt-10 mb-4">
        Welcome to <span className="font-bold">Bolly Critics</span>, your
        ultimate destination for Bollywood movie reviews. Our mission is to
        provide insightful and unbiased reviews to help movie enthusiasts make
        informed decisions. Whether you are looking for the latest blockbuster
        or a hidden gem, Bolly Critics is here to guide you through the world of
        Bollywood cinema.
      </p>
      <p className="mb-4">
        We understand that everyone has different tastes and preferences, which
        is why we encourage diverse perspectives. Our platform allows users to
        share their own reviews and ratings, creating a community of movie
        lovers who can engage in thoughtful discussions and debates.
      </p>
      <p className="mb-4">
        Thank you for visiting Bolly Critics. We hope you enjoy exploring our
        site and find it to be a valuable resource for all your Bollywood movie
        needs. If you have any questions or feedback, please do not hesitate to
        contact us.
      </p>
    </div>
  );
};

export default About;
