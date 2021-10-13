import React from "react";
import "./incrementor.css";
import { useState, useEffect } from "react";

const Fetcher = () => {
  const [displayText, setDisplayText] = useState("Fetching API...");
  const [fetchNew, setFetchNew] = useState(0);

  const newFetch = () => {
    setFetchNew((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const url = "https://randomuser.me/api";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        var obj = JSON.stringify(json);
        console.log(obj);
        setDisplayText(obj);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [fetchNew]);

  return (
    <div>
      <pre>{displayText}</pre>
      <button className="back" onClick={newFetch}>
        <span className="front">FETCH API</span>
      </button>
    </div>
  );
};

export default Fetcher;
