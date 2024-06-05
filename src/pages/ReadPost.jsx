import { useLoaderData } from "react-router-dom";

const ReadPost = () => {
  const post = useLoaderData();
  console.log(post);
  return (
    <>
      <div className="w-full md:max-w-7xl mx-auto min-h-screen">
        <div className="w-full flex justify-center items-center">
          <img
            src={post?.poster}
            alt=""
            className="w-full h-96 md:h-[600px] object-cover"
          />
        </div>
        <div className="space-y-2 my-10">
          <h1 className="text-3xl font-bold">{post?.haedline}</h1>
          <p className="text-lg">
            Author:{" "}
            <span className="font-semibold">
              {post?.author || "Anonymous user"}
            </span>{" "}
          </p>
          <p>
            Published on: <span className="font-semibold">{post?.date}</span>{" "}
          </p>
        </div>
        <div className="mb-10">
          <p>{post?.review}</p>
        </div>
      </div>
    </>
  );
};

export default ReadPost;
