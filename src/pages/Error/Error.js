import React from 'react'
import './error.css'
import { Link } from 'react-router-dom'
import kicitilogo from './images/Kiciti Icon.svg'
import baby from './images/babyimg.svg'

const Error = () => {
  return (
    <div className='error-container'>
        <div className='k-logo'>
          <Link id='kiciti-icon' to='/'>
            <img src={kicitilogo} alt="Kicitilogo" />
          </Link>
          <h2>kiciti</h2>
        </div>

        <div className='hero'>
          <img src={baby} alt="screenshot of a baby" />
          <div className='content'>
            <h3>404 - ERROR!!</h3>
            <h1>Lost your way?</h1>
            <h3> This may not be the page you are looking for as this page does not exist. </h3>
            <Link to='/' id='k-home'>Kiciti Home</Link>
          </div>

        </div>

    </div>
  )
}

export default Error