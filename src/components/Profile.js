import React from "react";
import "./profile.css";
import { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Profile = () => {
  const [username, setUsername] = useState("df");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [number, setNumber] = useState(0);
  const [country, setCountry] = useState("");
  const [fetchNew, setFetchNew] = useState(0);
  const [image, setImage] = useState("");
  const [isLiked, setIsLiked] = useState(false);

  const newFetch = () => {
    setFetchNew((prevCount) => prevCount + 1);
  };

  const likeOnClick = () => {
    if (isLiked == false) {
      setIsLiked(true);
      setNumber((prevCount) => prevCount + 1);
    } else {
      setIsLiked(false);
      setNumber((prevCount) => prevCount - 1);
    }
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
        setIsLiked(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [fetchNew]);

  return (
    <div className="container">
      <div className="post-container">
        <div className="profile">
          <img src={image} width="48" height="48" />
          <div className="flex-col">
            <span className="name">{name}</span>
            <span className="details">@{username}</span>
          </div>
        </div>
        <div className="content">
          <span>
            Hi! I'm {name}, a software developer based in {country}.<br />
            <br />
            This is my first dev twit!
          </span>
          <div>
            <span className="hashtag">#GDSC </span>
            <span className="hashtag">#DeveloperTwit</span>
          </div>
          <span className="details">{date}</span>
        </div>
        <div className="footer">
          {isLiked ? (
            <AiFillHeart
              onClick={likeOnClick}
              style={{ color: "#EA4335" }}
              size={18}
            />
          ) : (
            <AiOutlineHeart
              onClick={likeOnClick}
              style={{ color: "rgb(128, 151, 158)" }}
              size={18}
            />
          )}
          <span className="details">{number}</span>
        </div>
      </div>
      <button className="back" onClick={newFetch}>
        <span className="front">Refresh Feed</span>
      </button>
    </div>
  );
};

export default Profile;
