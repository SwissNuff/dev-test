import React from "react";
import "./profile.css";
import { useState, useEffect } from "react";

const Profile = () => {
  const [username, setUsername] = useState("df");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [number, setNumber] = useState(0);
  const [country, setCountry] = useState("");
  const [fetchNew, setFetchNew] = useState(0);
  const [image, setImage] = useState("");

  const newFetch = () => {
    setFetchNew((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const url = "https://randomuser.me/api";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setUsername(json.results[0].login.username);
        setName(json.results[0].name.first);
        setCountry(json.results[0].location.country);
        setDate(json.results[0].registered.date.slice(0, 10));
        setNumber(json.results[0].location.street.number);
        setImage(json.results[0].picture.medium);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [fetchNew]);

  return (
    <>
      <div className="post-container">
        <div className="profile">
          <img src={image} width="68" height="68" />
          <div className="flex-col">
            <span>{name}</span>
            <span>@{username}</span>
          </div>
        </div>
        <div className="content">
          <span>
            Hi! I'm {name}, a software developer based in {country}.
          </span>
          <span>{date}</span>
          <span>{number}</span>
        </div>
        <hr />
        <div className="footer"></div>
      </div>
      <br />
      <br />
      <button className="back" onClick={newFetch}>
        <span className="front">Refresh Feed</span>
      </button>
    </>
  );
};

export default Profile;
