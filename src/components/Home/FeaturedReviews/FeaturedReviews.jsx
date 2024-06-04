import HeadLine from "../../../shared/HeadLine/HeadLine";
import SmallReviewCard from "../../../shared/SmallReviewCard/SmallReviewCard";
const FeaturedReviews = () => {
  return (
    <>
      <HeadLine title={"Featured Reviews"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <SmallReviewCard />
        <SmallReviewCard />
        <SmallReviewCard />
        <SmallReviewCard />
      </div>
    </>
  );
};

export default FeaturedReviews;
