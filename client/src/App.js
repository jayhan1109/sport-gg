import React, { Fragment } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/Landing";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Fragment>
  );
};

export default App;
