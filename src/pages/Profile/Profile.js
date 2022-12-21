import React from 'react'
import './profile.css'
import { Link } from 'react-router-dom'
import chevron from './images/arrow_back.svg'
import profileimage from './images/profile_img.svg'
import ellipsis from './images/mdi_ellipsis.svg'

const profile = () => {
  return (
    <>
    <Link to='/' className='prev_page'>
        <img src={chevron} alt='chevron-back' />
        <h3>Back to previous page</h3>
    </Link>
    <div className='profile_container'>


        <div className='top_content'>
            <img src={profileimage} alt='profile_image' />
            <div>
                <h3>200</h3>
                <h4>Friends</h4>
            </div>
            <div>
                <h3>1000</h3>
                <h4>Posts</h4>
            </div>
        </div>

        <div className='mid-content'>
            <h1>Emily Vonne</h1>
            <h3>About</h3>
            <h4>A happy mother of two lovely children who is also an accomplished caterer.</h4>
            <Link to='/editProfile' id='edit_profile'>Edit Profile</Link>
        </div>

        <div className='activity'>
            <h2>Activity</h2>
            <div>
                <button id='posts'>Posts</button>
                <button id='likes'>Likes</button>
                <button id='rooms'>Rooms</button>
            </div>
        </div>

        <div className='post_view'>
            <img src={profileimage} alt='profile_image' />
            <div>
                <h5>Emily Vonne</h5>
                <h6>Today at 2:03 AM</h6>
                <h6 id='comment'>What are your biggest fears about parenting?</h6>
            </div>
            <button id='more'>
                <img src={ellipsis} alt='ellipsis' />
            </button>
        </div>
        <div className='post_view'>
            <img src={profileimage} alt='profile_image' />
            <div>
                <h5>Emily Vonne</h5>
                <h6>Today at 7:45 PM</h6>
                <h6 id='comment'>What are your biggest fears about parenting?</h6>
            </div>
            <button id='more'>
                <img src={ellipsis} alt='ellipsis' />
            </button>
        </div>
    </div>
    </>
  )
}

export default profile