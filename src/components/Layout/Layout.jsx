/* eslint-disable react/prop-types */
import { Footer } from "./Footer/Footer";
import { Navigation } from "./Navigation/Navigation";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
