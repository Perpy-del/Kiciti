import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './home.css'
import kicitilogo from './images/Kiciti Icon.svg'
import preggie from './images/preggie.svg'
import feed from './images/feed.svg'
import post from './images/post.svg'
import social from './images/social.png'
import help from './images/help.svg'
import pregwoman from './images/preg-woman.svg'
import menu from './images/menu.svg'

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className='maincontent'>
      <nav className={nav ?'navcontainer': 'nav-maxi'}>
        <div className='nav-content'>
          <div className='kiciti-icon'>
            <Link id='kiciti-icon' to='/'>
              <img src={kicitilogo} alt="Kicitilogo" />
            </Link>
            <h2>kiciti</h2>
          </div>

          <div>
            <img src={menu} alt='menu-icon' onClick={handleNav}/>
          </div>
        </div>

        <div className={nav ? 'nav-links' : 'nav-others'}>
        <ul>
          <li>
            <NavLink to='/' id='navlinks'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/posts' id='navlinks'>
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to='/About' id='navlinks'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/' id='navlinks'>
              Blog
            </NavLink>
          </li>
        </ul>
        

        <div className='onboarding'>
          <Link to='/login' id='signin'>
            Log In
          </Link>
          <Link to='signup' id='signup'>
          Sign Up
          </Link>
        </div>
        </div>
      </nav>

      <nav className='navdesktop'>
          <div className='kiciti-icon'>
            <Link id='kiciti-icon' to='/'>
              <img src={kicitilogo} alt="Kicitilogo" />
            </Link>
            <h2>kiciti</h2>
          </div>
          
        <ul>
          <li>
            <NavLink to='/' id='navlinks'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/posts' id='navlinks'>
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to='/About' id='navlinks'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/' id='navlinks'>
              Blog
            </NavLink>
          </li>
        </ul>
        

        <div className='onboarding'>
          <Link to='/login' id='signin'>
            Log In
          </Link>
          <Link to='signup' id='signup'>
          Sign Up
          </Link>
        </div>
      </nav>

      <div className='hero-container'>
        <div className='hero-content'>
          <h1> The trendy social media platform for expectant mothers</h1>
          <h4> Connect with other experienced mothers and have all your pending questions answered while you make amazing friends.</h4>
          <Link to='/signup' id='getstarted'>
            Get Started
          </Link>
        </div>
        <img src={preggie} alt='pregnantwoman' />
      </div>

      <div className='mid-container'>
        <div className='first-container'>
          <img src={feed} alt='feed-icon' />
          <h1>Great Interactions</h1>
          <h3>Chatting has never been more interesting as you share your experience with other mothers</h3>
          <Link to='/posts' id='start'>Start Chatting</Link>
        </div>

        <div className='first-container'>
          <img src={post} alt='post-icon' />
          <h1>Great Posts&Views</h1>
          <h3>Get amazing posts and views of other beautiful and amazing mothers around you.</h3>
          <Link to='/posts' id='start'>Start Viewing</Link>
        </div>

        <div className='first-container'>
          <img src={social} alt='social-icon' />
          <h1>Great Responses</h1>
          <h3>Get 97 percent accurate responses to your good questions and preggy-related inquiries</h3>
          <Link to='/posts' id='start'>Start Asking</Link>
        </div>

        <div className='first-container'>
          <img src={help} alt='help-icon' />
          <h1>Great Contributions</h1>
          <h3>Help someone get through the journey while getting the necessary help</h3>
          <Link to='/posts' id='start'>Start Contributing</Link>
        </div>
      </div>

      <div className='bottom-content'>
      <img src={pregwoman} alt='pregnantwoman' />
        <div className='hero-content'>
          <h1> Connect with other kiciti mums and have a fun, smooth transition</h1>
          <h4> Get ready-made answers to your questions to help you as you transition from pregnancy to delivery</h4>
          <Link to='/signup' id='getstarted'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
