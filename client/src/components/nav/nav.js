import React from "react";
import "./nav.css";
import { Link } from 'react-router-dom';

const Nav = () =>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className={'nav-item ' + (window.location.pathname === '/' ? 'active' : '')}>
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className={'nav-item ' + (window.location.pathname === '/register' ? 'active' : '')}>
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        <li className={'nav-item ' + (window.location.pathname === '/addChore' ? 'active' : '')}>
          <Link className="nav-link" to="/addChore">Add a Chore</Link>
        </li>
      </ul>
    </div>
  </nav>
export default Nav;