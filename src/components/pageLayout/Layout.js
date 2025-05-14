import React from "react";

function Layout({ children }) {
  return (
    <div className="page">
      <div id="background"></div>
      <div className="page-frame"></div>
      <div className="mask"></div>
      {children} {/* This allows other components (like Header) to be placed inside */}
    </div>
  );
}

export default Layout;
