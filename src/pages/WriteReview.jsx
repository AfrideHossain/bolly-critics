import { useForm } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const WriteReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();
  const onSubmitHandler = (data) => {
    axiosSecure.post("/post", data).then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Review Posted",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full md:max-w-2xl md:p-8 p-4 m-4 space-y-3 rounded-xl shadow-lg bg-white">
          <h1 className="text-2xl font-bold text-center">Create Post</h1>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Poster</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                {...register("poster")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Headline</span>
              </label>
              <input
                type="text"
                placeholder="headline"
                className="input input-bordered w-full"
                {...register("headline")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Review Body</span>
              </label>
              <textarea
                type="text"
                placeholder="Review"
                className="textarea h-96 input-bordered w-full"
                {...register("review")}
              />
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default WriteReview;
