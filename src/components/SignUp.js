import axios from "axios";
import React, { useState } from "react";
import "../css/SignUp.css";

function SignUp() {
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmitdHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }

    console.log("Email", Email);
    console.log("Password", Password);
  };

  return (
    <div className="SignUpForm">
      <form className="signup-form" onSubmit={onSubmitdHandler}>
        <h1 className="signup-text">Register</h1>
        <label className="signup-label">E-mail</label>
        <input
          className="signup-input"
          type="email"
          value={Email}
          onChange={onEmailHandler}
        />

        <label className="signup-label">Name</label>
        <input
          className="signup-input"
          type="text"
          value={Name}
          onChange={onNameHandler}
        />

        <label className="signup-label">Password</label>
        <input
          className="signup-input"
          type="password"
          value={Password}
          onChange={onPasswordHandler}
        />

        <label className="signup-label">Confirm Password</label>
        <input
          className="signup-input"
          type="password"
          value={ConfirmPassword}
          onChange={onConfirmPasswordHandler}
        />

        <br />
        <button className="signup-button" type="submit">
          Join us!
        </button>
      </form>
    </div>
  );
}

export default SignUp;
