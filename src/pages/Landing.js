import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">
      <div className="intro">
        <h2 className="first">Chat By Kako.ai:</h2>
        <h2 className="second">Ask your Kako,</h2>
        <h2 className="third">Whatever you need</h2>
      </div>
      <div className="cha">
        <p>
          <span>Find, Buy, Sell, or rent</span> houses with Kako.ai
          <br />
          Faster than any other Kako.ai
        </p>
      </div>
      <div className="button">
        <Link to="chat">Try Chat with Kako.ai</Link>
      </div>
    </div>
  );
}
