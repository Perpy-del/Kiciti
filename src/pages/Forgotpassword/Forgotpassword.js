import React from 'react'
import './forgotpassword.css'
import { Link } from 'react-router-dom'
import Email from '../Login/images/email_icon.svg';
import chevron from '../Login/images/arrow_back.svg';

const Forgotpassword = () => {
  return (
    <>
      <Link to='/Login' className='prev_page'>
                <img src={chevron} alt='chevron-back' />
                <h3>Back to previous page</h3>
      </Link>
      <div className='forgot_password'>
        <h1> Forgot Password </h1>
        <p>Please input your email address to reset your password</p>
        <form action='' className='f_container'>
                <div className='form_content'>
                    <img src={Email} alt="email_icon" />
                    <input type="email" id='email' placeholder='Email' />
                </div>
                <input type="submit" id="reset" value="Reset Password" />
        </form>
      </div>
    </>
  )
}

export default Forgotpassword