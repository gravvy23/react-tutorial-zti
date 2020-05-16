import React from "react";
import { Link } from "react-router-dom";

export const NavLink = ({ path, text }) => (
  <li className="nav-item">
    <Link className="nav-link" to={path}>
      {text}
    </Link>
  </li>
);
