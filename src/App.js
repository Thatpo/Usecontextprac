import './App.css';
import React, { useState, useContext } from 'react';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import { LoginContext } from "./helpers/Context";


function App() {
  const [loggedIn, setLoggedIn] = useState("1st")
  const [score, setScore] = useState("1st")


  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn, score, setScrore }}>
      {(loggedIn === "2nd") && <Login />}
      {(loggedIn === "1st") && <Home />}
      {(loggedIn === "3rd") && <Profile />}

      {/* These if gamestate===whatere are just saying if this
      is true then render x component, its called
      short circuit evaluation*/}
    </LoginContext.Provider>
  );
}

export default App;
