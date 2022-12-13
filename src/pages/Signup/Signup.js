import React from 'react';
import "./signup.css";
import Kiciti_logo from '../../assets/images/Kiciti Icon.svg'
import user from '../../assets/images/user_icon.svg'
import email from '../../assets/images/email_icon.svg'
import location from '../../assets/images/location_icon.svg'
import gender from '../../assets/images/gender_icon.svg'
import password from '../../assets/images/password_icon.svg'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='main_container'>
            <img src={Kiciti_logo} alt="Kiciti Logo" id='kiciti_logo'/>
            <h1>Let's Get Started!</h1>
            <h4>Create An Account with Kiciti</h4>
            <form action='' className='form_container'>
                <div className='input_field'>
                    <img src={user} alt="user_icon" />
                    <input type="text" id='fname' placeholder='First Name' onKeyUp="filledInput()"/>
                </div>

                <div className='input_field'>
                    <img src={user} alt="user_icon" />
                    <input type="text" id='lname' placeholder='Last Name' onKeyUp="filledInput()"/>
                </div>

                <div className='input_field'>
                    <img src={email} alt="user_icon" />
                    <input type="email" id='email' placeholder='Email' onKeyUp="filledInput()"/>
                </div>

                <div className='input_field'>
                    <img src={location} alt="country_icon" />
                    <input type="text" id='country' placeholder='Country of residence' onKeyUp="filledInput()"/>
                </div>

                <div className='input_field'>
                    <img src={gender} alt="gender_icon" />
                    <input type="text" id='gender' placeholder='Gender' onKeyUp="filledInput()"/>
                </div>

                <div className='input_field'>
                    <img src={password} alt="password_icon" />
                    <input type="password" id='password' placeholder='Password' onKeyUp="filledInput()"/>
                </div>

                <div className='input_field'>
                    <img src={password} alt="password_icon" />
                    <input type="password" id='cpassword' placeholder='Confirm Password' onKeyUp="filledInput()"/>
                </div>

                <button type='submit' id='create_btn'>
                    CREATE
                </button>
            </form>

            <h5>Already have an account? 
                <Link to="/login" id='login'>
                    Log In Here
                </Link>
            </h5>
        </div>
    )
}

export default Signup