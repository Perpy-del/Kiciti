import React from 'react'
import './Verifyuser.css'
import { Link } from 'react-router-dom'
import kicitilogo from './images/Kiciti Icon.svg'
import fname from '../Signup/Signup'
import email from '../Signup/Signup'

const Verifyuser = () => {
  return (
    <div className='overlay'>
      <div className='verify-container'>
      <div className='kiciti'>
        <Link id='kiciti-img' to='/'>
          <img src={kicitilogo} alt="Kicitilogo" />
        </Link>
        <h2>kiciti</h2>
      </div>

      <h1>Verify your email</h1>
      <h3>Hi {fname}! Use the link below to verify your email and start enjoying Kiciti.</h3>

      <Link to={email} id='verify'>Verify email</Link>
      </div>
    </div>
  )
}

export default Verifyuser