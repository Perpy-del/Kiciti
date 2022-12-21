import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import klogo from '../Login/images/Kiciti Icon.svg';
import Email from '../Login/images/email_icon.svg';
import Password from '../Login/images/password_icon.svg';
import facebook from '../Login/images/facebook_icon.svg';
import google from '../Login/images/google_icon.svg';
import chevron from '../Login/images/arrow_back.svg';

const Login = () => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [error, setError]=useState(false)
    
    const handleSubmit=(e)=> {
        e.preventDefault();
        if( email.length===0 || password.length < 8) {
            setError(true)
        }
        if(email&&password)
        {
        console.log("Email", email, "Password", password)
        }
    }
    return (
        <div className='container'>
            <img src={klogo} alt="Kiciti logo" id='klogo'/>
            <Link to='/' className='prev_page'>
                <img src={chevron} alt='chevron-back' />
                <h3>Back to previous page</h3>
            </Link>
            <h1>Welcome Back!</h1>
            <h4>Log In to your existing Kiciti Account</h4>
            <form action='' onSubmit={handleSubmit} className='f_container'>
                <div className='form_content'>
                    <img src={Email} alt="email_icon" />
                    <input onChange={e=>setEmail(e.target.value)} type="email" id='email' placeholder='Email' />
                </div>

                <div className='form_content'>
                    <img src={Password} alt="password_icon" />
                    <input onChange={e=>setPassword(e.target.value)} type="password" id='password' placeholder='Password' />
                </div>
                {error&&(password.length<8||email<=0)?
                <label>Invalid Email address or Password!</label>:""}

                <Link id='forgot_password'> Forgot Password </Link>

                <p>or connect using</p>

                <div className='socials'>
                    <Link className='facebook_identifier'>
                        <img src={facebook} alt="Facebook_icon" />
                        <h5>facebook</h5>
                    </Link>

                    <Link className='google_identifier'>
                        <img src={google} alt="Google_icon" />
                        <h5>Google</h5>
                    </Link>
                </div>

                <button id='create_btn'>
                    LOG IN
                </button>
            </form>

            <h5>Don't have an account? <Link to="/" id='login'>Sign Up</Link></h5>
        </div>
    )
}

export default Login;
