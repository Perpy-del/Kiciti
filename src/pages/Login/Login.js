import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import klogo from '../Login/images/Kiciti Icon.svg';
import email from '../Login/images/email_icon.svg';
import password from '../Login/images/password_icon.svg';
import facebook from '../Login/images/facebook_icon.svg';
import google from '../Login/images/google_icon.svg';

const Login = () => {
    return (
        <div className='container'>
            <img src={klogo} alt="Kiciti logo" id='klogo'/>
            <h1>Welcome Back!</h1>
            <h4>Log In to your existing Kiciti Account</h4>
            <form action='' className='f_container'>
                <div className='form_content'>
                    <img src={email} alt="email_icon" />
                    <input type="email" id='email' placeholder='Email' />
                </div>

                <div className='form_content'>
                    <img src={password} alt="password_icon" />
                    <input type="password" id='password' placeholder='Password' />
                </div>

                <Link id='forgot_password'> Forgot Password </Link>

                <p>or connect using</p>

                <div className='socials'>
                    <div className='facebook_identifier'>
                        <img src={facebook} alt="Facebook_icon" />
                        <h5>facebook</h5>
                    </div>

                    <div className='google_identifier'>
                        <img src={google} alt="Google_icon" />
                        <h5>Google</h5>
                    </div>
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
