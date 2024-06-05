import { useEffect, useState } from "react";
import HeadLine from "../../../shared/HeadLine/HeadLine";
import SmallReviewCard from "../../../shared/SmallReviewCard/SmallReviewCard";
const FeaturedReviews = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASEURL}/featuredposts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <>
      <HeadLine title={"Featured Reviews"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {posts &&
          posts?.map((post) => <SmallReviewCard key={post?._id} post={post} />)}

      </div>
    </>
  );
};

export default FeaturedReviews;
