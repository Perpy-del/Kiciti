import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import Kiciti_logo from "../../assets/images/Kiciti Icon.svg";
import user from "../../assets/images/user_icon.svg";
import Email from "../../assets/images/email_icon.svg";
import location from "../../assets/images/location_icon.svg";
import Gender from "../../assets/images/gender_icon.svg";
import Password from "../../assets/images/password_icon.svg";
import DOB from "./images/date_icon.svg";
import chevron from "./images/arrow_back.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDOB] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      username.length === 0 ||
      fname.length === 0 ||
      lname.length === 0 ||
      email.length === 0 ||
      password.length < 8 ||
      country === 0 ||
      gender.length === 0 ||
      dob.length === 0
    ) {
      setError(true);
    }
    if (
      fname &&
      lname &&
      email &&
      password &&
      country &&
      gender &&
      username &&
      dob
    ) {
      // console.log("Username", username, "First Name", fname, "Last Name", lname, "Email", email, "Password", password, "Country", country, "Gender", gender, "Confirm Password", cpassword, "Date of Birth", dob)
    }

    const response = await fetch("https://api.alexius.tech/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        first_name: fname,
        last_name: lname,
        email: email,
        password: password,
        country: country,
        gender: gender.toLowerCase(),
        dob: dob,
      }),
    });

    // Wrong email or password
    if (response.status === 400) {
      console.log("Email or password incorrect");
    } else {
      const data = await response.json();

      // Get User ID
      localStorage.setItem("user_id", data.user._id);

      // Get user authentication token
      const user_token = data["X-auth-token"];
      // Save to local storage
      localStorage.setItem("X-auth-token", user_token);

      // redirect to feed page and login user
      navigate("/posts");
    }
  }

  return (
    <div className="main_container">
      <img src={Kiciti_logo} alt="Kiciti Logo" id="kiciti_logo" />
      <Link to="/" className="prev_page">
        <img src={chevron} alt="chevron-back" />
        <h3>Back to previous page</h3>
      </Link>
      <h1>Let's Get Started!</h1>
      <h4>Create An Account with Kiciti</h4>
      <form action="" onSubmit={handleSubmit} className="form_container">
        <div className="input_field">
          <img src={user} alt="user_icon" />
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            placeholder="Username"
            onKeyUp="filledInput()"
          />
        </div>
        {error && username.length <= 0 ? (
          <label>What should we call you?</label>
        ) : (
          ""
        )}

        <div className="input_field">
          <img src={user} alt="user_icon" />
          <input
            onChange={(e) => setFName(e.target.value)}
            type="text"
            id="fname"
            placeholder="First Name"
            onKeyUp="filledInput()"
          />
        </div>
        {error && fname.length <= 0 ? (
          <label>Please input your first name</label>
        ) : (
          ""
        )}

        <div className="input_field">
          <img src={user} alt="user_icon" />
          <input
            onChange={(e) => setLName(e.target.value)}
            type="text"
            id="lname"
            placeholder="Last Name"
            onKeyUp="filledInput()"
          />
        </div>
        {error && lname.length <= 0 ? (
          <label>Please input your last name</label>
        ) : (
          ""
        )}

        <div className="input_field">
          <img src={Email} alt="user_icon" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="Email"
            onKeyUp="filledInput()"
          />
        </div>
        {error && email.length <= 0 ? (
          <label>Please input your valid email address</label>
        ) : (
          ""
        )}

        <div className="input_field">
          <img src={location} alt="country_icon" />
          <select
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            id="country"
            name="country"
            onKeyUp="filledInput()"
          >
            <option>Country of residence</option>
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
        </div>
        {error && country.length <= 0 ? (
          <label>Where are you currently located?</label>
        ) : (
          ""
        )}

        <div className="input_field">
          <img src={DOB} alt="date_icon" />
          {/* <input name="date" type="text" onfocus="(this.type='date')" onblur="if(!this.value)this.type='text'">  */}
          <input
            onChange={(e) => setDOB(e.target.value)}
            type="text"
            id="dob"
            placeholder="Date of Birth(dd/mm/yyyy)"
            onKeyUp="filledInput()"
          />
        </div>
        {error && dob.date <= 0 ? (
          <label>Age should not be less than 18 years</label>
        ) : (
          ""
        )}

        <div className="input_field">
          <img src={Gender} alt="gender_icon" />
          <select
            onChange={(e) => setGender(e.target.value)}
            type="text"
            id="gender"
            onKeyUp="filledInput()"
          >
            <option>Gender</option>
            <option>Female</option>
            <option>Male</option>
            {/* <option>Would rather not say</option> */}
          </select>
        </div>
        {error && gender <= 0 ? <label>Please input your gender</label> : ""}

        <div className="input_field">
          <img src={Password} alt="password_icon" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            placeholder="Password"
            onKeyUp="filledInput()"
          />
        </div>
        {error && password < 5 ? (
          <label>
            Password must contain the following:
            <ul>
              <li>A lowercase letter (a)</li>
              <li>An uppercase letter (A)</li>
              <li>A number (0, 1, 2, 3...)</li>
              <li>A special character (!,@,#,$,%...)</li>
              <li>At least 5 characters</li>
            </ul>
          </label>
        ) : (
          ""
        )}

        <input type="submit" value="CREATE" id="create_btn" />
      </form>

      <h5>
        Already have an account?
        <Link to="/login" id="login">
          Log In Here
        </Link>
      </h5>
    </div>
  );
};

export default Signup;
