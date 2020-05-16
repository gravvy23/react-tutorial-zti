import React from "react";
import { NavLink } from './NavLink';

export const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <ul className="navbar-nav mr-auto">
        <NavLink path="/" text="Home" />
        <NavLink path="/broken-functional-component" text="#1" />
        <NavLink path="/state-hook" text="#2" />
        <NavLink path="/setcount-callback" text="#3" />
        <NavLink path="/use-effect" text="#4" />
    </ul>
  </nav>
);
