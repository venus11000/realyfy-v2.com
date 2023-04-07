import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Button from "../Button";
import InlineLoader from "../Loader/InlineLoader";

import { handleLogout } from "../../store/common/User/actions";

const AuthMenu = () => {
  const [showMenu, setShowMenu] = useState();

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (user?.loading) return <InlineLoader />;

  if (user?.data)
    return (
      <div
        className="relative cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        {user?.data?.fullName}{" "}
        <i class="fa fa-angle-down" aria-hidden="true"></i>
        {showMenu && (
          <div className="absolute top-16 right-0 bg-white shadow-xl rounded-sm">
            <li className="border-b border-primary">
              <Link to="/dashboard">
                <div className="p-2">Dashboard</div>
              </Link>
            </li>
            <li
              className="p-2 border-b border-primary"
              onClick={() => {
                dispatch(handleLogout());
                navigate("/");
              }}
            >
              Logout
            </li>
          </div>
        )}
      </div>
    );

  return (
    <Link to="/login">
      <Button label="Login" variant="secondary" />
    </Link>
  );
};

export default AuthMenu;
