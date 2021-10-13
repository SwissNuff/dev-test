import React from "react";
import { useState } from "react";
import "./incrementor.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="container">
      <h1>{count}</h1>
      <br />
      <button className="back" onClick={addCount}>
        <span className="front">PUSH TO ADD</span>
      </button>
    </div>
  );
};

export default Counter;
