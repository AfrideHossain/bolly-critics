import AboutFromHome from "../components/Home/AboutFromHome/AboutFromHome";
import Banner from "../components/Home/Banner/Banner";
import PopularCritics from "../components/Home/PopularCritcs/PopularCritics";

const Home = () => {
  return (
    <>
      <Banner />
      <section className="md:max-w-7xl px-4 py-10 mx-auto">
        <PopularCritics />
      </section>
      <section className="md:max-w-7xl px-4 py-10 mx-auto">
        <AboutFromHome />
      </section>
    </>
  );
};

export default Home;
