import axios from "axios";
import React, { useState } from "react";
import "../css/SignIn.css";
import snackMerge from "../images/snack_merge.PNG";

function SignIn() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitdHandler = (event) => {
    event.preventDefault();

    console.log("Email", Email);
    console.log("Password", Password);
  };

  return (
    <div className="SignInForm">
      <div>
        <h1 className="signin-text">
          {/* <img src={snackMerge} className="snackMerge-img" /> */}
          Login
        </h1>
        <form onSubmit={onSubmitdHandler} className="signin-form">
          <label className="signin-label">E-mail</label>
          <input
            className="signin-input"
            type="email"
            value={Email}
            onChange={onEmailHandler}
          />

          <label className="signin-label">Password</label>
          <input
            className="signin-input"
            type="password"
            value={Password}
            onChange={onPasswordHandler}
          />

          <br />
          <button className="signin-button">OK!</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
