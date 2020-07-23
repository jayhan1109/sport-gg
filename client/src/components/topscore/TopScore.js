import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import TopScoreItem from "./TopScoreItem";

const TopScore = ({ match }) => {
  const [league, setLeague] = useState("");
  const [season, setSeason] = useState("");
  const [topscore, setTopscore] = useState([]);
  useEffect(() => {
    setLeague(match.params.league);
    setSeason(match.params.season);
  }, [match.params.season, match.params.league]);

  useEffect(() => {
    try {
      const getTopscore = async () => {
        let res = await axios.get(`/api/topscore/${league}/${season}`);
        console.log(res);
        setTopscore(res.data);
      };
      getTopscore();
    } catch (e) {
      console.log("Fail");
    }
  }, [league, season]);

  return (
    <Fragment>
      {topscore.map((player, index) => {
        return (
          <TopScoreItem
            rank={index + 1}
            team={player.team}
            name={player.name}
            age={player.age}
            goals={player.goals}
          />
        );
      })}
    </Fragment>
  );
};

export default TopScore;
