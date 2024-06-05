import { useForm } from "react-hook-form";
import HeadLine from "../../../shared/HeadLine/HeadLine";

const Support = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="w-full md:max-w-2xl mx-auto md:p-8 p-4 m-4 space-y-3 bg-white">
        <HeadLine title={"Support"} />
        <form className="space-y-6" onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
              {...register("name", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              {...register("email", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Support Message</span>
            </label>
            <textarea
              type="text"
              placeholder="Review"
              className="textarea h-36 input-bordered w-full"
              {...register("review", { required: true })}
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Support;
