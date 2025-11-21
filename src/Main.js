import React from "react";
import Nav from "./Nav";
import "./Main.css";

function Main() {
  return (
    <div className="main-page" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/Images/Home.jpg)`
    }}>
      <Nav />
      <div className="main-content">
        <h1>Welcome to Shopy 🎉</h1>
        <p>You are now logged in!</p>
      </div>
    </div>
  );
}

export default Main;
