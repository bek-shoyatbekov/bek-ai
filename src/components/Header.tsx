import React from "react";

import "./Header.module.css";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="header">
      <h1 className="title">{title} </h1>
    </header>
  );
};

export default Header;
