import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Auth.scss";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log("hey");

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
      console.log(res.data.token);
    } catch (err) {
      console.log(err.response.data.errors[0].msg);
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
