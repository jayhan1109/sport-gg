import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../styles/Auth.scss";
import axios from "axios";
import { useSetRecoilState, useRecoilState } from "recoil";
import { alertState } from "../../recoil/alert";
import { authState } from "../../recoil/auth";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const setAlert = useSetRecoilState(alertState);
  const [auth, setAuth] = useRecoilState(authState);

  if (auth) {
    return <Redirect to="/" />;
  }

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    login();
  };

  const login = async () => {
    try {
      const res = await axios.post("/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setAlert({ msg: "Login Success", type: "success" });
      setAuth(true);
      console.log(res.data);
    } catch (err) {
      localStorage.removeItem("token");
      setAlert({ msg: err.response.data.errors[0].msg, type: "danger" });
      setAuth(false);
    }
  };

  return (
    <div className="auth-container">
      <p className="auth-title">Login</p>
      <form className="auth-form" onSubmit={onSubmit}>
        <input
          className="auth-form-input"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        <input
          className="auth-form-input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
        />
        <input className="auth-form-btn" type="submit" value="submit" />
      </form>

      <p className="auth-bottom">
        Not registered?{" "}
        <Link className="auth-bottom-link" to="/register">
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default Login;
