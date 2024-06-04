import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContextProvider";

const useAuthContextHook = () => {
  const context = useContext(AuthContext);
  return context;
};

export default useAuthContextHook;
