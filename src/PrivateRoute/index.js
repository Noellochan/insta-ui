import { useNavigate } from "react-router-dom";
import { Login } from "../Components/Login";

export const PrivateRoute = ({ route }) => {
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("token");

  if (!isAuthenticated) {
    localStorage.clear();
    navigate("/login");
  }

  return isAuthenticated ? route : <Login />;
};
