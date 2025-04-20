import React, { useState } from "react";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

const Auth = () => {
  //We need to dispatch some actions
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //If either field is empty, an alert is shown.
     if(id.trim() === "" || password.trim() === ""){
      alert("Please enter both ID and Password.");
      return;
     }
     // Dispatch login action
    dispatch(authActions.login());
    console.log(`Logged in with ID: ${id} and Password: ${password}`);
  };
  return (
    <div className="container">
      <h1>Login </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" 
        name="id" 
        id="id"
        value= {id}
        autoComplete="off" 
        onChange={(e) => setId(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value ={password}
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
