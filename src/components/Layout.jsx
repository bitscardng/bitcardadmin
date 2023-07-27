import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-primary">
      <Header />
      <div className="min-h-screen p-2 mr-4">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
