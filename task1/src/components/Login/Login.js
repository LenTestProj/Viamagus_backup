import React from "react";
import classes from "./Login.module.css";
import LoginForm from "../LoginForm/LoginForm";
import TreesBackground from "../../data/Trees.jpg";

const Login = () => {
  return (
    <div className={classes.container}>
      <div className={classes.backgroundSection}>
        <img
          src={TreesBackground}
          alt="test.jpg"
          className={classes.backgroundImage}
        />
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
