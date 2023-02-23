import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const userLogged = useSelector((store) => store.userInfo.isLoggedIn);
  if (!userLogged) {
    return <Navigate to="/" />;
  }
  return children;
};
export default PrivateRoute;
