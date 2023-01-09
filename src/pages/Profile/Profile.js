import React, { useEffect, useState } from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import chevron from "./images/arrow_back.svg";
import profileimage from "./images/profile_img.svg";
import ellipsis from "./images/mdi_ellipsis.svg";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  // const [gender, setGender] = useState(genderOptions[0].value);
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(false);
  const [pfp, setPfp] = useState("");

  const user_token = localStorage.getItem("X-auth-token");
  const user_id = localStorage.getItem("user_id");
  const navigate = useNavigate();

  // Fetch user details
  const fetchUser = async () => {
    try {
      const response = await fetch(
        `http://34.228.198.103/api/users/${user_id}`,
        {
          method: "GET",
          headers: {
            "X-auth-token": user_token,
          },
        }
      );
      const data = await response.json();
      setFirstName(data.first_name);
      setMiddleName(data.middle_name);
      setLastName(data.last_name);
      setUsername(data.username);
      setPhoneNumber(data.phone_number);
      setCountry(data.country);
      setDob(data.dob);
    } catch (error) {
      navigate("/login");
    }
  };

  const fetchPfp = async () => {
    try {
      const response = await fetch(
        `http://34.228.198.103/api/users/${user_id}/pfp`,
        {
          method: "GET",
          headers: {
            "X-auth-token": user_token,
            "Content-Type": "application/json",
          },
        }
      );
      const blob = await response.blob();
      const image = URL.createObjectURL(blob);
      setPfp(image);
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchUser();
    fetchPfp();
  }, []);

  return (
    <>
      <Link to="/" className="prev_page">
        <img src={chevron} alt="chevron-back" />
        <h3>Back to previous page</h3>
      </Link>
      <div className="profile_container">
        <div className="top_content">
          <img className="pfp" src={pfp} alt="profile_image" />
          <div>
            <h3>200</h3>
            <h4>Friends</h4>
          </div>
          <div>
            <h3>1000</h3>
            <h4>Posts</h4>
          </div>
        </div>

        <div className="mid-content">
          <h1>
            {firstName.charAt(0).toUpperCase() + firstName.slice(1)}
            {middleName !== null ? " " + middleName.charAt(0).toUpperCase() + middleName.slice(1) : ""}{" "}
            {lastName.charAt(0).toUpperCase() + lastName.slice(1)}
          </h1>
          <h3>About</h3>
          <h4>
            A happy mother of two lovely children who is also an accomplished
            caterer.
          </h4>
          <Link to="/editProfile" id="edit_profile">
            Edit Profile
          </Link>
        </div>

        <div className="activity">
          <h2>Activity</h2>
          <div>
            <button id="posts">Posts</button>
            <button id="likes">Likes</button>
            <button id="rooms">Rooms</button>
          </div>
        </div>

        <div className="post_view">
          <img src={profileimage} alt="profile_image" />
          <div>
            <h5>Emily Vonne</h5>
            <h6>Today at 2:03 AM</h6>
            <h6 id="comment">What are your biggest fears about parenting?</h6>
          </div>
          <button id="more">
            <img src={ellipsis} alt="ellipsis" />
          </button>
        </div>
        <div className="post_view">
          <img src={profileimage} alt="profile_image" />
          <div>
            <h5>Emily Vonne</h5>
            <h6>Today at 7:45 PM</h6>
            <h6 id="comment">What are your biggest fears about parenting?</h6>
          </div>
          <button id="more">
            <img src={ellipsis} alt="ellipsis" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
