import React from "react";
import "../../styles/StandingItem.scss";

const StandingItem = ({ rank, points, win, lose, draw, name, logo }) => {
  if (!rank) {
    return <div></div>;
  }
  return (
    <div className="standing">
      <div className="standing-img">
        <img src={logo} alt="" />
      </div>
      <div className="standing-content">
        <h4 className="standing-content-rank">RANK : {rank}</h4>
        <h2 className="standing-content-title">{name}</h2>
        <div className="standing-content-body">
          <div className="standing-content-body-points">POINTS: {points}</div>
          <div className="standing-content-body-win">WIN: {win}</div>
          <div className="standing-content-body-draw">DRAW: {draw}</div>
          <div className="standing-content-body-lose">LOSE: {lose}</div>
        </div>
      </div>
    </div>
  );
};

export default StandingItem;
