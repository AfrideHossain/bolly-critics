/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuthContextHook from "../../hooks/useAuthContextHook";

const SecretRoute = ({ children }) => {
  const { user, loading } = useAuthContextHook();
  const location = useLocation();
  if (loading) {
    return <progress className="progress w-56 progress-primary"></progress>;
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/auth"} state={{ from: location }} replace />;
};

export default SecretRoute;
