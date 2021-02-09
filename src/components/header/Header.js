import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">На главную</NavLink>
      <NavLink to="/employees">Список сотрудников</NavLink>
    </header>
  );
};

export default Header;
