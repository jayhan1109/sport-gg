import React from "react";
import "../../styles/Menu.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-content">
        <h2 className="menu-content-header">Premier League</h2>
        <div className="menu-content-body">
          <Link to="/standing/eng/1920">Standing</Link>
          <Link to="/topscore/eng/1920">Top Score</Link>
        </div>
      </div>
      <div className="menu-content">
        <h2 className="menu-content-header">LaLiga</h2>
        <div className="menu-content-body">
          <Link to="/standing/spa/1920">Standing</Link>
          <Link to="/topscore/spa/1920">Top Score</Link>
        </div>
      </div>

      <div className="menu-content">
        <h2 className="menu-content-header">Bundesliga</h2>
        <div className="menu-content-body">
          <Link to="/standing/ger/1920">Standing</Link>
          <Link to="/topscore/ger/1920">Top Score</Link>
        </div>
      </div>

      <div className="menu-content">
        <h2 className="menu-content-header">Ligue 1</h2>
        <div className="menu-content-body">
          <Link to="/standing/fr/1920">Standing</Link>
          <Link to="/topscore/fr/1920">Top Score</Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
