import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center mx-auto px-2 max-w-2xl min-h-screen">
      {children}
    </div>
  );
};

export default Layout;
