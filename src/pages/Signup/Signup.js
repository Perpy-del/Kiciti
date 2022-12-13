import React, { useState } from 'react';
import "./signup.css";
import Kiciti_logo from '../../assets/images/Kiciti Icon.svg'
import user from '../../assets/images/user_icon.svg'
import Email from '../../assets/images/email_icon.svg'
import location from '../../assets/images/location_icon.svg'
import Gender from '../../assets/images/gender_icon.svg'
import Password from '../../assets/images/password_icon.svg'
import { Link } from 'react-router-dom';

const Signup = () => {
    const [fname, setFName]=useState('')
    const [lname, setLName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [cpassword, setCPassword]=useState('')
    const [country, setCountry]=useState('')
    const [gender, setGender]=useState('')
    const [error, setError]=useState(false)

    const handleSubmit=(e)=> {
        e.preventDefault();
        if(fname.length===0 || lname.length===0 || email.length===0 || password.length < 8 || country.length===0 || gender.length===0 || cpassword !== password) {
            setError(true)
        }
        if(fname&&lname&&email&&password&&cpassword&&country&&gender)
        {
        console.log("First Name", fname, "Last Name", lname, "Email", email, "Password", password, "Country", country, "Gender", gender, "Confirm Password", cpassword)
        }
    }
    return (
        <div className='main_container'>
            <img src={Kiciti_logo} alt="Kiciti Logo" id='kiciti_logo'/>
            <h1>Let's Get Started!</h1>
            <h4>Create An Account with Kiciti</h4>
            <form action='' onSubmit={handleSubmit} className='form_container'>
                <div className='input_field'>
                    <img src={user} alt="user_icon" />
                    <input onChange={e=>setFName(e.target.value)} type="text" id='fname' placeholder='First Name' onKeyUp="filledInput()"/>
                </div>
                {error&&fname.length<=0?
                <label>Please input your first name</label>:""}

                <div className='input_field'>
                    <img src={user} alt="user_icon" />
                    <input onChange={e=>setLName(e.target.value)} type="text" id='lname' placeholder='Last Name' onKeyUp="filledInput()"/>
                </div>
                {error&&lname.length<=0?
                <label>Please input your last name</label>:""}

                <div className='input_field'>
                    <img src={Email} alt="user_icon" />
                    <input onChange={e=>setEmail(e.target.value)} type="email" id='email' placeholder='Email' onKeyUp="filledInput()"/>
                </div>
                {error&&email.length<=0?
                <label>Please input your valid email address</label>:""}

                <div className='input_field'>
                    <img src={location} alt="country_icon" />
                    <input onChange={e=>setCountry(e.target.value)} type="text" id='country' placeholder='Country of residence' onKeyUp="filledInput()"/>
                </div>
                {error&&country.length<=0?
                <label>Where are you currently located?</label>:""}

                <div className='input_field'>
                    <img src={Gender} alt="gender_icon" />
                    <input onChange={e=>setGender(e.target.value)} type="text" id='gender' placeholder='Gender' onKeyUp="filledInput()"/>
                </div>
                {error&&gender<=0?
                <label>Please input your gender</label>:""}

                <div className='input_field'>
                    <img src={Password} alt="password_icon" />
                    <input onChange={e=>setPassword(e.target.value)} type="password" id='password' placeholder='Password' onKeyUp="filledInput()"/>
                </div>
                {error&&password<8?
                <label>
                    Password must contain the following:
                    <ul>
                        <li>A lowercase letter (a)</li>
                        <li>An uppercase letter (A)</li>
                        <li>A number (0, 1, 2, 3...)</li>
                        <li>A special character (!,@,#,$,%...)</li>
                        <li>At least 8 characters</li>
                    </ul>
                </label>:""}
                
                <div className='input_field'>
                    <img src={Password} alt="password_icon" />
                    <input onChange={e=>setCPassword(e.target.value)} type="password" id='cpassword' placeholder='Confirm Password' onKeyUp="filledInput()"/>
                </div>
                {error&&cpassword!==password?
                <label>Please ensure the passwords match</label>:""}

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