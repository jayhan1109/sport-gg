import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../styles/Auth.scss";
import axios from "axios";
import { useSetRecoilState, useRecoilState } from "recoil";
import { alertState } from "../../recoil/alert";
import { authState } from "../../recoil/auth";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const setAlert = useSetRecoilState(alertState);
  const [auth, setAuth] = useRecoilState(authState);

  if (auth) {
    return <Redirect to="/" />;
  }

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert({ msg: "Password Not Same", type: "danger" });
    } else {
      register();
    }
  };

  const register = async () => {
    try {
      const res = await axios.post("/auth/register", {
        name,
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setAlert({ msg: "Register Success", type: "success" });
      setAuth(true);
    } catch (err) {
      localStorage.removeItem("token");
      setAlert({ msg: err.response.data.errors[0].msg, type: "danger" });
      setAuth(false);
    }
  };

  return (
    <div className="auth-container">
      <p className="auth-title">Register</p>
      <form className="auth-form" onSubmit={onSubmit}>
        <input
          className="auth-form-input"
          type="text"
          name="name"
          placeholder="Username"
          value={name}
          onChange={onChange}
        />
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
        <input
          className="auth-form-input"
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={password2}
          onChange={onChange}
        />
        <input className="auth-form-btn" type="submit" value="submit" />
      </form>
      <p className="auth-bottom">
        Already registered?{" "}
        <Link className="auth-bottom-link" to="/login">
          Sign into account
        </Link>
      </p>
    </div>
  );
};

export default Register;
