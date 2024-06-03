/* eslint-disable react/prop-types */
const HeadLine = ({ title }) => {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-2xl font-bold px-4 py-2 border-b-2 border-blue-500">
        {title}
      </h1>
    </div>
  );
};

export default HeadLine;
