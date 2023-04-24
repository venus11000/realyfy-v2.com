/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "../Container";
import Logo from "./Logo";
import Menu from "./Menu";

import { getUserDetailsAction } from "../../store/common/User/actions";
import { LOCAL_STORAGE_KEYS } from "../../utils/constants/site-settings";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const protectedRoutes = ["/dashboard"];

  useEffect(() => {
    const authToken = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
    if (!user?.loading && !user?.data && authToken) {
      dispatch(getUserDetailsAction());
    } else if (
      protectedRoutes.includes(location.pathname) &&
      (!authToken || (!user.loading && user.error))
    ) {
      navigate("/");
    }
  }, [user]);

  return (
    <header className="shadow-md">
      <Container className="flex items-center justify-between h-16 md:h-24">
        <Logo />
        <Menu />
      </Container>
    </header>
  );
};

export default Header;
