import React from "react";
import "./nav.css";
// import { Link } from 'react-router-dom';

const Nav = (props) =>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">ChorePool</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/register">Register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signIn">Sign In</a>
        </li>
        <li className="nav-item">
          <a className="nav-link logout" onClick={props.callback}>Sign Out</a>
        </li>
      </ul>
    </div>
  </nav>

export default Nav;