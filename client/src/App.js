import React, { Fragment, useEffect } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/layout/Landing";
import Alert from "./components/alert/Alert";
import { useRecoilState } from "recoil";
import axios from "axios";
import { authState, userState } from "./recoil/auth";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/utils/PrivateRoute";
import Navbar from "./components/layout/Navbar";
import Menu from "./components/layout/Menu";
import Standing from "./components/standing/Standing";
import TopScore from "./components/topscore/TopScore";

const App = () => {
  const [auth, setAuth] = useRecoilState(authState);
  const [user, setUser] = useRecoilState(userState);

  console.log(auth);

  useEffect(() => {
    if (auth) {
      axios.defaults.headers.common["x-auth-token"] = localStorage.getItem(
        "token"
      );
      const getUser = async () => {
        try {
          const res = await axios.get("/auth");
          setUser(res.data);
          console.log(res.data);
        } catch (err) {
          delete axios.defaults.headers.common["x-auth-token"];
          setAuth(false);
          localStorage.removeItem("token");
          setUser("");
        }
      };
      getUser();
    }
  }, [auth]);

  return (
    <Fragment>
      <Navbar />
      <Alert />
      <Menu />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/standing/:league/:season" component={Standing} />
        <Route exact path="/topscore/:league/:season" component={TopScore} />
        <PrivateRoute exact path="/dashboard/:username" component={Dashboard} />
      </Switch>
    </Fragment>
  );
};

export default App;
