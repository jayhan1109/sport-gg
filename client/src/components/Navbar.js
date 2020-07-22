import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {
  console.log("y");
  return (
    <Fragment>
      <div className="navbar">
        <div className="navbar-title">
          <Link className="navbar-title-nav" to="/">
            SportGG
          </Link>
        </div>
        <div className="navbar-navs">
          <Link className="navbar-navs-nav" to="/login">
            Login
          </Link>
          <Link className="navbar-navs-nav" to="/register">
            Register
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
