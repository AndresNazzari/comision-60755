/* eslint-disable react/prop-types */
import { Footer } from "./Footer/Footer";
import { Navigation } from "./Navigation/Navigation";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Navigation />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
