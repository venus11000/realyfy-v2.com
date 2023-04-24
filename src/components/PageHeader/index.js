import React from "react";

const PageHeader = ({ heading }) => {
  return (
    <div className="text-3xl font-semibold text-primary text-center pb-10">
      {heading}
    </div>
  );
};

export default PageHeader;
