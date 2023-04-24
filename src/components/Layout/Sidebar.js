import React from "react";
import { Link, useLocation } from "react-router-dom";
import { classNames } from "../../utils/helpers/common";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="bg-dark-1 py-2 h-full">
      <ul>
        <li>
          <Link to={"/dashboard"}>
            <button
              className={classNames(
                "text-base text-left text-white hover:bg-primary-2 px-3 py-4 w-full",
                location.pathname === "/dashboard" ? "bg-primary-2" : ""
              )}
            >
              Dashboard
            </button>
          </Link>
        </li>
        <li>
          <Link to={"/dashboard/requests/contact-us"}>
            <button
              className={classNames(
                "text-base text-left text-white hover:bg-primary-2 px-3 py-4 w-full",
                location.pathname === "/dashboard/requests/contact-us"
                  ? "bg-primary-2"
                  : ""
              )}
            >
              Contact Us Requests
            </button>
          </Link>
        </li>
        <li>
          <Link to={"/dashboard/requests/servicing"}>
            <button
              className={classNames(
                "text-base text-left text-white hover:bg-primary-2 px-3 py-4 w-full",
                location.pathname === "/dashboard/requests/servicing"
                  ? "bg-primary-2"
                  : ""
              )}
            >
              Servicing Requests
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
