import { useEffect, useState } from "react";
import SmallPostCard from "../components/Dashboard/SmallPostCard";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASEURL}/posts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-10 p-4">
        {posts?.map((post) => (
          <SmallPostCard key={post._id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Posts;
