import React from 'react'
import './success.css';
import { Link } from 'react-router-dom'
import kicitilogo from './images/Kiciti Icon.svg'
import fname from '../Signup/Signup'

const Success = () => {
  return (
    <div>
      <div className='overlay'>
      <div className='verify-container'>
      <div className='kiciti'>
        <Link id='kiciti-img' to='/'>
          <img src={kicitilogo} alt="Kicitilogo" />
        </Link>
        <h2>kiciti</h2>
      </div>
      
      <h1>Yay!! Welcome to the <span id='kct'>Kiciti Team</span></h1>
      <h2>Sign Up Successful!!!</h2>
      <h3>Hi {fname}! Use the link below to log in with your details and start enjoying Kiciti.</h3>

      <Link to='/login' id='k-login'>Log in to Kiciti</Link>
      </div>
    </div>
    </div>
  )
}

export default Success