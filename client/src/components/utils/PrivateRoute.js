import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../../recoil/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useRecoilValue(authState);

  return (
    <Route
      {...rest}
      render={(props) =>
        !auth ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
