import React from "react";
import { Link } from 'react-router-dom';

export const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/broken-functional-component">#1</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/state-hook">#2</Link>
      </li>
    </ul>
  </nav>
);
