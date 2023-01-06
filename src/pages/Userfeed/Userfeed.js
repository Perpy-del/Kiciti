import React from 'react'
import './userfeed.css'
import { Link } from 'react-router-dom'
import profileimage from './images/newimages2.svg';
import photo from './images/photo-library.svg';
import help from './images/help_icon.svg';
import search from './images/search_icon.svg';
import comment from './images/comments-icon.svg';
import fav from './images/favorite-icon.svg';
import baby from './images/newbaby.svg';
import profile from './images/newimages.svg';
import newimg from './images/newimages3.svg';
import ellipsis from './images/mdi_ellipsis.svg';
import notification from './images/notifications.svg';
import logout from './images/logout.svg';
import userprofile from './images/user_profile.png';
import home from './images/home.svg';

const Userfeed = () => {
  // const [ profile, setProfile ] = useState({ preview: "", data: "" });
  
  // const handleFileChange = (e) => {
  //   const img = {
  //     preview: URL.createObjectURL(e.target.files[0]),
  //     data: e.target.files[0],
  //   };
  //   setProfile(img);
  // }

  return (
    <>
      <div className='feed-header'>
        <Link><img src={help} alt='help-icon' id='help'/></Link>
        <h3> Feed </h3>
        <div className='icon-set'>
          <div>
            <Link to='/'><img src={home} alt='home-icon' id='i-set' /></Link>
          </div>
          <div id='i-set'>
            <Link><img src={notification} alt='notification-icon' id='i-set' /></Link>
          </div>
          <div id='i-set'>
            <Link to='/profile'><img src={userprofile} alt='user-profile-icon' id='i-set' /></Link>
          </div>
          <div className='search'>
            <img src={search} alt='search-icon' />
            <input type='text' placeholder='Search'/>  
          </div>
        </div>
        <div>
          <Link to='/login' id='logout' >
            <img src={logout} alt='logout-icon' id='i-set' />
          </Link>
        </div>
      </div>

      <div className='maincontainer'>
        <div className='share'>
          <Link to='/editProfile' id='prof_img'><img src={newimg} alt='profile-icon' /></Link>
          <input type='text' placeholder='Share A Post' id='share' />
          <button type='submit' id='ph_submit'> <img src={photo} alt='img' id='post_share' /> </button>
          <button type='submit' id='share_button'>Share Post</button>
        </div>

        <div className='post'>
          <div className='primary_post'>
            <img src={profileimage} alt='profile-icon' id='profile'/>
            <div className='post_content'>
              <h4>Van Nguyen</h4>
              <h6>Today at 3:08 AM</h6>
              <h6 id='comments'>My baby will be here in two weeks</h6>
            </div>
          </div>  
          <div>
            <img src={ellipsis} alt="ellipsis-icon" id='ellipsis'/>
          </div>
          
        </div>
        <div className='social-icon'>
          <div>
            <button>
              <img src={fav} alt="favorite-icon" /> 
            </button>
            <h6>1,223 Likes</h6>
          </div>
          <div>
            <button>
              <img src={comment} alt="comment" />
            </button>
            <h6>560 Comments</h6>
          </div>
        </div>

        <div>
          <input type="text" placeholder="Add a Comment" id='add_comment' />
        </div>

        <div className='post'>
          <div className='primary_post'>
            <img src={profile} alt='profile-icon' id='profile' />
            <div className='post_content'>
              <h4>Me Bhan Ho</h4>
              <h6>Just Now</h6>
              <h6 id='comments'>He is here and he is perfect</h6>
            </div>
          </div>
          <div>
            <button>
            <img src={ellipsis} alt="ellipsis-icon" id='ellipsis'/>
            </button>
          </div>
        </div>
        <div className='social-icon'>
          <div>
            <button>
            <img src={fav} alt="favorite-icon" />
            </button>
            <h6>1,223 Likes</h6>
          </div>
          <div>
            <button>
            <img src={comment} alt="comment" />
            </button>
            <h6>560 Comments</h6>
          </div>
        </div>
        <div>
          <input type="text" placeholder="Add a Comment" id='add_comment' />
        </div>
        <img src={baby} alt="baby" id='babypic' />
        
      </div>
    </>
  )
}

export default Userfeed