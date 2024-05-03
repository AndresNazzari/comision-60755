import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("isAuth");

  useEffect(() => {
    if (isAuth == "false") {
      navigate("/");
    }
  }, [isAuth]);

  return <Outlet />;
};
