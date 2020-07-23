import React from "react";
import "../../styles/TopScoreItem.scss";

const StandingItem = ({ rank, team, name, age, goals }) => {
  if (!rank) {
    return <div></div>;
  }
  return (
    <div className="standing">
      <div className="standing-content">
        <h4 className="standing-content-rank">RANK : {rank}</h4>
        <h2 className="standing-content-title">{name}</h2>
        <div className="standing-content-body">
          <div className="standing-content-body-points">GOALS: {goals}</div>
          <div className="standing-content-body-draw">TEAM: {team}</div>
          <div className="standing-content-body-win">AGE: {age}</div>
        </div>
      </div>
    </div>
  );
};

export default StandingItem;
