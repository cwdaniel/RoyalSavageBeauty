import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
const Header = () => (
  <div className="header">
    <div className="logo">
      <h1>Royal Savage Beauty</h1>
    </div>
    <div className="menu">
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
      </ul>
    </div>
  </div>
);
function App() {
  return (
    <div className="App">
      <Header />
      <div className="site-content">
        <p>
          Welcome to the site, please work with me as I create a space that
          shares my creative outlook.
        </p>
        <p> Thank you,</p>
        <p> the Royal Savage Staff</p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
