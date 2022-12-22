import React from 'react'
import './userfeed.css'
import { Link } from 'react-router-dom'
import chevron from '../Login/images/arrow_back.svg';
import profileimage from './images/newimages2.svg';
import photo from './images/photo-library.svg';
import help from './images/help_icon.svg';
import search from './images/search_icon.svg';
import comment from './images/comments-icon.svg';
import fav from './images/favorite-icon.svg';
import comm from './images/comments.svg';
import baby from './images/newbaby.svg';
import profile from './images/newimages.svg';
import newimg from './images/newimages3.svg';
import ellipsis from './images/mdi_ellipsis.svg';

const Userfeed = () => {
  return (
    <>
      <Link to='/' className='prev_page'>
        <img src={chevron} alt='chevron-back' />
        <h3>Back to previous page</h3>
      </Link>
      <div className='feed-header'>
        <img src={help} alt='help-icon' />
        <h3> Feed </h3>
        <div>
          <img src={search} alt='search-icon' />
          <img src={comm} alt='comment-icon' />
        </div>
      </div>

      <div className='maincontainer'>
        <div className='share'>
          <img src={newimg} alt='profile-icon' />
          <input type='text' placeholder='Share A Post' id='share' />
          <img src={photo} alt='img' />
        </div>

        <div className='post'>
          <img src={profileimage} alt='profile-icon' />
          <div>
            <h4>Van Nguyen</h4>
            <h6>Today at 3:08 AM</h6>
            <h6 id='comments'>My baby will be here in two weeks</h6>
          </div>
          <img src={ellipsis} alt="ellipsis-icon" id='ellipsis'/>
        </div>
        <div className='social-icon'>
          <div>
            <img src={fav} alt="favorite-icon" />
            <h6>1,223</h6>
          </div>
          <div>
            <img src={comment} alt="comment" />
            <h6>560</h6>
          </div>
        </div>

        <div className='post'>
          <img src={profile} alt='profile-icon' id='profile' />
          <div>
            <h4>Me Bhan Ho</h4>
            <h6>Just Now</h6>
            <h6 id='comments'>He is here and he is perfect</h6>
          </div>
          <img src={ellipsis} alt="ellipsis-icon" id='ellipsis2'/>
        </div>
        <img src={baby} alt="baby" id='babypic' />
      </div>
    </>
  )
}

export default Userfeed