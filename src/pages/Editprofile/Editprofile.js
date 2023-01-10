import React, { useEffect, useState } from "react";
import closebtn from "./images/closebtn.svg";
import "./editProfile.css";
import location from "../../assets/images/location_icon.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const genderOptions = [
  {
    name: "Female",
    value: "female",
  },
  {
    name: "Male",
    value: "male",
  },
];

const user_token = localStorage.getItem("X-auth-token");

const Editprofile = () => {
  const [profile, setProfile] = useState({ preview: "", data: "" });
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  // const [gender, setGender] = useState(genderOptions[0].value);
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [old_password, setOldPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [pfp, setPfp] = useState("");

  const navigate = useNavigate();
  // Get User ID
  const user_id = localStorage.getItem("user_id");
  // Get user authentication token
  const user_token = localStorage.getItem("X-auth-token");

  // Fetch user details
  const fetchUser = async () => {
    try {
      const response = await fetch(
        `http://34.228.198.103/api/users/${localStorage.getItem("user_id")}`,
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
      const image = (
        <img className="pfp" src={URL.createObjectURL(blob)} alt="Profile" />
      );
      setPfp(image);
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchUser();
    fetchPfp();
  }, []);

  useEffect(() => {
    // confirm new password
    if (new_password === "" && confirm_password === "") {
      setError(false);
    } else if (new_password.length <= 5) {
      setError(true);
    } else {
      setError(false);
    }
  }, [new_password, confirm_password]);

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setProfile(img);
  };

  const handleProfile = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    profile.data.filename = profile.data.name;
    delete profile.data.name;
    formData.append("pfp", profile.data);

    const response = await fetch(
      `http://34.228.198.103/api/users/${user_id}/pfp`,
      {
        method: "POST",
        headers: {
          "X-auth-token": user_token,
        },
        body: formData,
      }
    );

    // Notify user that pfp has been updated successfully
    if (response.status === 201) {
      console.log("pfp updated successfully");
      alert("Profile picture updated successfully");
      window.location.reload(true);
    }
  };

  const handlePassword = async (e) => {
    e.preventDefault();

    // confirm new password
    if (old_password === new_password) {
      // render error message to user
      alert("New password cannot be same as old password");
      return;
    }
    if (error || old_password === "") {
      alert("Please enter password correctly");
      return;
    }

    const body = JSON.stringify({
      old_password: old_password,
      new_password: new_password,
    });

    const response = await fetch(
      `http://34.228.198.103/api/users/${user_id}/password`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-auth-token": user_token,
        },
        body: body,
      }
    );

    // Notify user that password has been updated successfully
    if (response.status === 200) {
      alert("Password updated successfully");
      window.location.reload(true);
    } else {
      // Notify user that password update failed
      alert("Incorrect password");
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    // Get User ID
    const user_id = localStorage.getItem("user_id");
    // Get user authentication token
    const user_token = localStorage.getItem("X-auth-token");

    const body = JSON.stringify({
      username: username.toLowerCase(),
      first_name: firstName.toLowerCase(),
      middle_name: middleName.toLowerCase(),
      last_name: lastName.toLowerCase(),
      dob: dob,
      phone_number: phoneNumber,
      country: country,
    });

    const response = await fetch(`http://34.228.198.103/api/users/${user_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-auth-token": user_token,
      },
      body: body,
    });

    // Notify user that pfp has been updated successfully
    if (response.status === 200) {
      alert("Profile updated successfully");

      window.location.reload(true);
    } else {
      alert("Failed to update profile");
    }
  };

  return (
    <>
      <div className="editprofile">
        <div className="top_edit">
          <h2>Edit Profile</h2>
          <Link to="/profile">
            <img src={closebtn} alt="close" />
          </Link>
        </div>
        {/* 
        <div id="prof_pic">
          {pfp}
        </div> */}

        <form
          onSubmit={handleProfile}
          encType="multipart/form-data"
          method="post"
          className="form_con"
        >
          <div>
            <div id="prof_pic">{pfp}</div>
            <h4> Change Profile Picture </h4> <br />
            <label htmlFor="photo">Profile Picture</label> <br />
            <input
              onChange={handleFileChange}
              accept="image/*"
              type="file"
              id="pfp"
              name="pfp"
            />{" "}
            <br />
            <input type="submit" value="Change Image" id="change_img" />
          </div>{" "}
          <br /> <br /> <br /> <br />
        </form>

        <form className="form_con" onSubmit={handleUpdateProfile}>
          <label htmlFor="fname">First Name</label> <br />
          <input
            type="text"
            id="fname"
            name="fname"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />{" "}
          <br />
          <label htmlFor="mname">Middle Name</label> <br />
          <input
            type="text"
            id="mname"
            name="mname"
            value={middleName}
            onChange={(e) => {
              setMiddleName(e.target.value);
            }}
          />{" "}
          <br />
          <label htmlFor="lname">Last Name</label> <br />
          <input
            type="text"
            id="lname"
            name="lname"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />{" "}
          <br />
          <label htmlFor="username">Username</label> <br />
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />{" "}
          <br />
          {/* <label htmlFor="gender">Gender</label> <br />
          <select
            id="gen"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            {" "}
            <br />
            {genderOptions.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              );
            })}
          </select>{" "} */}
          <label htmlFor="lname">Phone Number</label> <br />
          <input
            type="text"
            id="phonenumber"
            name="phonenumber"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />{" "}
          <br />
          <label htmlFor="lname">Country of residence</label> <br />
          <div className="national">
            <img src={location} alt="country_icon" />
            <select
              onChange={(e) => {
                setCountry(e.target.value);
              }}
              type="text"
              id="country"
              name="country"
            >
              <option>Afghanistan</option>
              <option>Albania</option>
              <option>Algeria</option>
              <option>Andorra</option>
              <option>Angola</option>
              <option>Antigua and Barbuda</option>
              <option>Argentina</option>
              <option>Armenia</option>
              <option>Australia</option>
              <option>Austria</option>
              <option>Azerbaijan</option>
              <option>Bahamas</option>
              <option>Bahrain</option>
              <option>Bangladesh</option>
              <option>Barbados</option>
              <option>Belarus</option>
              <option>Belgium</option>
              <option>Belize</option>
              <option>Benin</option>
              <option>Bhutan</option>
              <option>Bolivia</option>
              <option>Bosnia and Herzegovina</option>
              <option>Botswana</option>
              <option>Brazil</option>
              <option>Brunei</option>
              <option>Bulgaria</option>
              <option>Burkina Faso</option>
              <option>Burundi</option>
              <option>Cote d'Ivoire</option>
              <option>Cabo Verde</option>
              <option>Cambodia</option>
              <option>Cameroon</option>
              <option>Canada</option>
              <option>Central African Republic</option>
              <option>Chad</option>
              <option>Chile</option>
              <option>China</option>
              <option>Colombia</option>
              <option>Comoros</option>
              <option>Congo (Congo-Brazzaville)</option>
              <option>Costa Rica</option>
              <option>Croatia</option>
              <option>Cuba</option>
              <option>Cyprus</option>
              <option>Czechia (Czech Republic)</option>
              <option>Democratic Republic of the Congo</option>
              <option>Denmark</option>
              <option>Djibouti</option>
              <option>Dominica</option>
              <option>Dominican Republic</option>
              <option>Ecuador</option>
              <option>Egypt</option>
              <option>El Salvador</option>
              <option>Equatorial Guinea</option>
              <option>Eritrea</option>
              <option>Estonia</option>
              <option>Eswatini (fmr."Saaziland")</option>
              <option>Ethiopia</option>
              <option>Fiji</option>
              <option>Finland</option>
              <option>France</option>
              <option>Gabon</option>
              <option>Gambia</option>
              <option>Georgia</option>
              <option>Germany</option>
              <option>Ghana</option>
              <option>Greece</option>
              <option>Grenada</option>
              <option>Guatemala</option>
              <option>Guinea</option>
              <option>Guinea-Bissau</option>
              <option>Guyana</option>
              <option>Haiti</option>
              <option>Holy See</option>
              <option>Honduras</option>
              <option>Hungary</option>
              <option>Iceland</option>
              <option>India</option>
              <option>Indonesia</option>
              <option>Iran</option>
              <option>Iraq</option>
              <option>Ireland</option>
              <option>Israel</option>
              <option>Italy</option>
              <option>Jamaica</option>
              <option>Japan</option>
              <option>Jordan</option>
              <option>Kazakhstan</option>
              <option>Kenya</option>
              <option>Kiribati</option>
              <option>Kuwait</option>
              <option>Krygyzstan</option>
              <option>Laos</option>
              <option>Latvia</option>
              <option>Lebanon</option>
              <option>Lesotho</option>
              <option>Liberia</option>
              <option>Libya</option>
              <option>Liechtenstein</option>
              <option>Lithuania</option>
              <option>Luxembourg</option>
              <option>Madagascar</option>
              <option>Malawi</option>
              <option>Malaysia</option>
              <option>Maldives</option>
              <option>Mali</option>
              <option>Malta</option>
              <option>Marshall Islands</option>
              <option>Mauritania</option>
              <option>Mauritius</option>
              <option>Mexico</option>
              <option>Micronesia</option>
              <option>Moldova</option>
              <option>Monaco</option>
              <option>Mongolia</option>
              <option>Montenegro</option>
              <option>Morocco</option>
              <option>Mozambique</option>
              <option>Myanmar (formerly Burma)</option>
              <option>Namibia</option>
              <option>Nauru</option>
              <option>Nepal</option>
              <option>Netherlands</option>
              <option>New Zealand</option>
              <option>Nicaragua</option>
              <option>Niger</option>
              <option>Nigeria</option>
              <option>North Korea</option>
              <option>North Macedonia</option>
              <option>Norway</option>
              <option>Oman</option>
              <option>Pakistan</option>
              <option>Palau</option>
              <option>Palestine State</option>
              <option>Panama</option>
              <option>Papua New Guinea</option>
              <option>Paraguay</option>
              <option>Peru</option>
              <option>Philippines</option>
              <option>Poland</option>
              <option>Portugal</option>
              <option>Qatar</option>
              <option>Romania</option>
              <option>Russia</option>
              <option>Rwanda</option>
              <option>Saint Kitts and Nevis</option>
              <option>Saint Lucia</option>
              <option>Saint Vincent and the Grenadines</option>
              <option>Samoa</option>
              <option>San Marino</option>
              <option>Sao Tome and Principe</option>
              <option>Saudi Arabia</option>
              <option>Senegal</option>
              <option>Serbia</option>
              <option>Seychelles</option>
              <option>Sierra Leone</option>
              <option>Singapore</option>
              <option>Slovakia</option>
              <option>Slovenia</option>
              <option>Solomon Islands</option>
              <option>Somalia</option>
              <option>South Africa</option>
              <option>South Korea</option>
              <option>South Sudan</option>
              <option>Spain</option>
              <option>Sri Lanka</option>
              <option>Sudan</option>
              <option>Suriname</option>
              <option>Switzerland</option>
              <option>Syria</option>
              <option>Tajikistan</option>
              <option>Tanzania</option>
              <option>Thailand</option>
              <option>Timor-Leste</option>
              <option>Togo</option>
              <option>Tonga</option>
              <option>Trinidad and Tobago</option>
              <option>Tunisia</option>
              <option>Turkey</option>
              <option>Turkmenistan</option>
              <option>Tuvalu</option>
              <option>Uganda</option>
              <option>Ukraine</option>
              <option>United Arab Emirates</option>
              <option>United Kingdom</option>
              <option>United States of America</option>
              <option>Uruguay</option>
              <option>Uzbekistan</option>
              <option>Vanuatu</option>
              <option>Venezuela</option>
              <option>Vietnam</option>
              <option>Yemen</option>
              <option>Zambia</option>
              <option>Zimbabwe</option>
            </select>
          </div>{" "}
          <br />
          <label htmlFor="dob">Date of Birth</label> <br />
          <input
            type="date"
            id="dob"
            name="dob"
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />{" "}
          <br />
          {/* <label htmlFor="about">About</label> <br /> */}
          {/* <textarea id="about" name="about" rows="4" cols="30" /> <br /> */}
          <input type="submit" id="submit-btn" value="Save Changes" /> <br />
        </form>
      </div>

      <form className="changepassword" onSubmit={handlePassword}>
        <label id="change_pwd">Change Password</label> <br />
        <label htmlFor="old_password">Old Password</label>
        <input
          type="password"
          id="old_password"
          onChange={(e) => {
            setOldPassword(e.target.value);
          }}
        />
        <label htmlFor="new_password">New Password</label>
        <input
          type="password"
          id="new_password"
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
        />
        {error ? (
          <label>
            Password must contain the following:
            <ul>
              <li>A lowercase letter (a)</li>
              <li>An uppercase letter (A)</li>
              <li>A number (0, 1, 2, 3...)</li>
              <li>A special character (!,@,#,$,%...)</li>
              <li>At least 8 characters</li>
            </ul>
          </label>
        ) : (
          ""
        )}
        <label htmlFor="cpassword">Confirm Password</label>
        <input
          type="password"
          id="cpassword"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        {confirm_password !== "" &&
        (error || confirm_password !== new_password) ? (
          <label>Password must be the same !</label>
        ) : (
          ""
        )}
        <input type="submit" id="reset_pwd" value="Reset Password" />
      </form>
    </>
  );
};

export default Editprofile;
