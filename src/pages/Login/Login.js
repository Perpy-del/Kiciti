import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Link } from 'react-router-dom';
import klogo from '../Login/images/Kiciti Icon.svg';
import Email from '../Login/images/email_icon.svg';
import Password from '../Login/images/password_icon.svg';
import facebook from '../Login/images/facebook_icon.svg';
import google from '../Login/images/google_icon.svg';
import chevron from '../Login/images/arrow_back.svg';


const Login = () => {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [error, setError]=useState(false);

    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if( email.length===0 || password.length < 5) {
            setError(true)
        }
        if(email&&password)
        {
        // console.log("Email", email, "Password", password)
        }
        
        const response = await fetch('http://34.228.198.103/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: email,
                password: password,
            })
        });

        // Wrong email or password
        if (response.status === 400) {
            console.log("Email or password incorrect");
        } else {
            const data = await response.json();

            // Get User ID
            localStorage.setItem('user_id', data.user._id);
            
            // Get user authentication token
            const user_token = data["X-auth-token"]
            // Save to local storage
            localStorage.setItem("X-auth-token", user_token);

            // redirect to feed page and login user
            navigate("/userfeed");
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
                {error&&(password.length<5||email<=0)?
                <label>Invalid Email address or Password!</label>:""}

                <Link to="/Forgotpassword" id='forgot_password'> Forgot Password </Link>

                <button type='submit' id='create_btn'>
                    LOG IN
                </button>
                
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

                {/* <input id='create_btn' type='submit' value='LOG IN'/> */}
            </form>

            <h5>Don't have an account? <Link to="/signup" id='login'>Sign Up</Link></h5>
        </div>
    )
 
}

export default Login;
