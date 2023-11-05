import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
  console.log("allowedRoles", allowedRoles);
  const { token, role } = useContext(authContext);
  console.log("token", token);
  console.log("role", role);
  const isAllowed = allowedRoles.includes(role);

  const accessibleRoute =
    token && isAllowed ? children : <Navigate to="/login" replace={true} />;
  return accessibleRoute;
};

export default ProtectedRoute;
