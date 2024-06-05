import AboutFromHome from "../components/Home/AboutFromHome/AboutFromHome";
import Banner from "../components/Home/Banner/Banner";
import FeaturedReviews from "../components/Home/FeaturedReviews/FeaturedReviews";
import PopularCritics from "../components/Home/PopularCritcs/PopularCritics";
import FaqHome from "../components/Home/Faq/FaqHome";
import Support from "../components/Home/Support/Support";

const Home = () => {
  return (
    <>
      <Banner />
      <section className="md:max-w-7xl px-4 py-10 mx-auto">
        <FeaturedReviews />
      </section>
      <section className="md:max-w-7xl px-4 py-10 mx-auto">
        <PopularCritics />
      </section>
      <section className="md:max-w-7xl px-4 py-10 mx-auto">
        <AboutFromHome />
      </section>
      <section className="md:max-w-7xl px-4 py-10 mx-auto">
        <FaqHome />
      </section>
      <section className="md:max-w-7xl px-4 py-10 mx-auto">
        <Support />
      </section>
    </>
  );
};

export default Home;
