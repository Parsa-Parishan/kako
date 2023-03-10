import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Nav() {
  const [slide, setSlide] = useState();

  const handleClick = () => {
    setSlide(!slide);
  };
  return (
    <div className="nav-wrapper">
      <div className="nav">
        <div className="logo">
          <Link to="/kako">
            <h2>
              kako<span>.</span>ai
            </h2>
          </Link>
        </div>
        <div className={`menu-bar ${slide && "active"}`} onClick={handleClick}>
          <FaBars />
        </div>
      </div>
      <div className={`options ${slide && "slide-down"}`}>
        <div value="but">Buy</div>
        <div value="sell">Sell</div>
        <div value="rent">Rent</div>
        <div value="mortgage">Mortgage</div>
        <div value="pricing">Pricing</div>
        <div className="resources">Resources</div>
      </div>
    </div>
  );
}
