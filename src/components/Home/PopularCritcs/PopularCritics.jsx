import HeadLine from "../../../shared/HeadLine/HeadLine";
import CriticCardSmall from "../../../shared/CriticCardSmall/CriticCardSmall";
import { useEffect, useState } from "react";
const PopularCritics = () => {
  const [critics, setCritics] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASEURL}/featuredusers`)
      .then((res) => res.json())
      .then((data) => {
        setCritics(data);
      });
  }, []);
  return (
    <>
      <HeadLine title={"Popular Critics"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-10">
        {critics &&
          critics?.map((critic) => (
            <CriticCardSmall key={critic?._id} critic={critic} />
          ))}
        {/* <CriticCardSmall />
        <CriticCardSmall />
        <CriticCardSmall /> */}
      </div>
    </>
  );
};

export default PopularCritics;
