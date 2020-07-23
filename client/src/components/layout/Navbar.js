import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../styles/Navbar.scss";
import { useRecoilState } from "recoil";
import { authState, userState } from "../../recoil/auth";
import { alertState } from "../../recoil/alert";

const Navbar = () => {
  const [auth, setAuth] = useRecoilState(authState);
  const [user, setUser] = useRecoilState(userState);
  const [alert, setAlert] = useRecoilState(alertState);

  const logout = (e) => {
    e.preventDefault();
    setAuth(false);
    setUser("");
    localStorage.removeItem("token");
    setAlert({ msg: "Logout Success", type: "success" });
    return <Redirect to="/" />;
  };

  if (auth) {
    return (
      <Fragment>
        <div className="navbar">
          <div className="navbar-title">
            <Link className="navbar-title-nav" to="/">
              SportGG
            </Link>
          </div>
          <div className="navbar-navs">
            <Link className="navbar-navs-nav" to={`/dashboard/${user._id}`}>
              {user.name}
            </Link>
            <a className="navbar-navs-nav" onClick={logout}>
              Logout
            </a>
          </div>
        </div>
      </Fragment>
    );
  }

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
