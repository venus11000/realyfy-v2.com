import React from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { defaultSeo } from "../../utils/constants/site-settings";

// seo = {
//  titile, description, keywords, url
// }

const Layout = ({ children, seo, fullWidthHeader, showSidebar, hideFooterLink }) => {
  return (
    <div>
      {seo && <Helmet>
        <meta charSet="utf-8" />
        <title>{seo?.title || defaultSeo?.title}</title>
        <link rel="description" content={seo?.description || defaultSeo?.description} />
        <link rel="keywords" content={seo?.description || defaultSeo?.keywords} />
        {seo?.url && <link rel="canonical" href={seo?.url} />}
      </Helmet>}
      <Header fullWidthHeader={fullWidthHeader} />
      <div className="grid grid-cols-12">
        {showSidebar && (
          <div className="col-span-3 xl:col-span-2 h-full">
            <Sidebar />
          </div>
        )}
        <main
          className={showSidebar ? "col-span-9 xl:col-span-10" : "col-span-12"}
          style={{
            minHeight: "calc(100vh - 96px - 104px)",
          }}
        >
          {children}
        </main>
      </div>
      <Footer hideFooterLink={hideFooterLink} />
    </div>
  );
};

export default Layout;
