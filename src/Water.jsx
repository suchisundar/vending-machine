import React, { useState } from "react";
import { Link } from "react-router-dom";

import juiceImage from "./Juice.jpg"; 
import "./Water.css"; 

const Water = () => {
  const [juiceBottles, setJuiceBottles] = useState([]);

  const getJuice = () => {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    setJuiceBottles((items) => [...items, { x, y }]);
  };

  const juiceImgs = juiceBottles.map((bottle, i) => (
    <img
      src={juiceImage}
      alt="Juice Bottle"
      key={i}
      className="water-img"
      style={{ top: `${bottle.y}px`, left: `${bottle.x}px` }}
    />
  ));

  return (
    <div className="water">
      <div className="water-card">
        <p>So far you have {juiceBottles.length} juices</p>
        <p>Buy another one?</p>
        <button onClick={getJuice} className="action-button">Buy Juice</button>
        <button className="action-button">
          <Link to="/" className="button-link">Go Back</Link>
        </button>
        {juiceImgs}
      </div>
    </div>
  );
};

export default Water;
