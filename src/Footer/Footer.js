import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import kicitilogo from './images/Kiciti Icon.svg'
import facebook from './images/facebook.svg'
import twitter from './images/twitter.svg'
import instagram from './images/instagram.svg'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-left'>
        <Link to='/'><img src={kicitilogo} alt='Kiciti logo'/></Link>
        <h2>kiciti</h2>
      </div> 

      <div className='footer-mid'>
        <div className='footer-social'>
          <img src={instagram} alt='Instagram logo'/>
          <img src={twitter} alt='Twitter logo'/>
          <img src={facebook} alt='Facebook logo'/>
        </div>

        <h6> (c) 2022 Copyright by alx-projects</h6>
      </div>

      <div className='footer-col'>
        <Link to='/About' id='links'><b>About Us</b></Link>
        <Link to='/About' id='links'>About</Link>
        <Link id='links'>Features</Link>
        <Link id='links'>News & Blog</Link>
      </div>

      <div className='footer-col'>
        <Link id='links'><b>Movement</b></Link>
        <Link id='links'>What Kiciti</Link>
        <Link id='links'>Support Us</Link>
      </div>

      <div className='footer-col'>
        <Link id='links'><b>Support</b></Link>
        <Link id='links'>Support Center</Link>
        <Link id='links'>FAQs</Link>
        <Link id='links'>Contact Us</Link>
      </div>

    </div>
  )
}

export default Footer