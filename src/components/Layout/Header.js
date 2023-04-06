import React from "react";

import Container from "../Container";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
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
