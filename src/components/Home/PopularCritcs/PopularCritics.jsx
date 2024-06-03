import HeadLine from "../../../shared/HeadLine/HeadLine";
import CriticCardSmall from "../../../shared/CriticCardSmall/CriticCardSmall";
const PopularCritics = () => {
  return (
    <>
      <HeadLine title={"Popular Critics"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-10">
        <CriticCardSmall />
        <CriticCardSmall />
        <CriticCardSmall />
        <CriticCardSmall />
      </div>
    </>
  );
};

export default PopularCritics;
