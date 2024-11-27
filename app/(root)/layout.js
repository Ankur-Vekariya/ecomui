import Header from "@/components/Header";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <div className="pt-24">{children}</div>
    </div>
  );
};

export default Layout;
