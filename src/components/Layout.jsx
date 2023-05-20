import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-primary">
      <Header />
      <div className="p-2 min-h-[92vh]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
