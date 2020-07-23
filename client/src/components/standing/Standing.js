import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import StandingItem from "./StandingItem";

const Standing = ({ match }) => {
  const [league, setLeague] = useState("");
  const [season, setSeason] = useState("");
  const [standing, setStanding] = useState([]);
  useEffect(() => {
    setLeague(match.params.league);
    setSeason(match.params.season);
  }, [match.params.season, match.params.league]);

  useEffect(() => {
    try {
      const getStanding = async () => {
        let res = await axios.get(`/api/standing/${league}/${season}`);
        console.log(res);
        setStanding(res.data.standings);
      };
      getStanding();
    } catch (e) {
      console.log("Fail");
    }
  }, [league, season]);

  return (
    <Fragment>
      {standing.map((team) => {
        return (
          <StandingItem
            rank={team.rank}
            points={team.points}
            win={team.all.win}
            draw={team.all.draw}
            lose={team.all.lose}
            name={team.team.name}
            logo={team.team.logo}
          />
        );
      })}
    </Fragment>
  );
};

export default Standing;
