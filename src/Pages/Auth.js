import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useUser";

const AuthGuard = ({ children }) => {
  const auth = useContext(useAuth);
  const navigate = useNavigate();

  if (!auth) {
    navigate("/");
  }

  return children;
};

export default AuthGuard;
