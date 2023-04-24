import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ children, fullWidthHeader, showSidebar, hideFooterLink }) => {
  return (
    <div>
      <Header fullWidthHeader={fullWidthHeader} />
      <div className="grid grid-cols-12">
        {showSidebar && <div className="col-span-3 xl:col-span-2 h-full"><Sidebar /></div>}
        <main className={showSidebar ? "col-span-9 xl:col-span-10" : "col-span-12"}>
          {children}
        </main>
      </div>
      <Footer hideFooterLink={hideFooterLink} />
    </div>
  );
};

export default Layout;
