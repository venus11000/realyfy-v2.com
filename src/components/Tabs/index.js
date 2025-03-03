import React from "react";

const Tabs = ({ tabs = [], handleClick = () => {}, activeTab = "CREATED" }) => {
  return (
    <div>
      {tabs?.map((status, index) => (
        <button
          className={`px-4 py-2 bg-gray-100 hover:bg-[#6415ff] hover:text-white ${
            activeTab === status?.value ? "bg-[#6415ff] text-white" : ""
          } ${
            index === 0
              ? "rounded-tl-lg"
              : index === tabs.length - 1
              ? "rounded-tr-lg"
              : ""
          }`}
          onClick={() => handleClick(status)}
        >
          {status?.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
