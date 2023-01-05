import React, { useState } from 'react';
import closebtn from './images/closebtn.svg';
import './editProfile.css';
import { Link } from 'react-router-dom';

const Editprofile = () => {
  const [profile, setProfile] = useState({});
  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setProfile(img);
    console.log(setProfile());
  }
  const handleProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('pfp', profile.data)
    
    const response = await fetch('http://34.228.198.103/api/users/63a0ebb4a73f55168ad68c7b/pfp', {
      method: 'POST',
      headers: {
        'Content-Type': 'image/*',
      },
      body: formData
      
    });
  };
    
    return (
      <>
        <div className='editprofile'>
          <div className='top_edit'>
            <h2>Edit Profile</h2>
            <Link to='/profile'><img src={closebtn} alt='close' /></Link>
          </div> 
          <form onSubmit={handleProfile} className='form_con'>
            <div>
              <h4> Change Profile Picture </h4> <br />
              <label htmlFor='photo'>Profile Picture</label> <br />
              <input onChange={(e) => {handleFileChange(e)}} type="file" id='pfp' name='pfp' /> <br/>
              <input type='submit' value="Change Image" />
            </div> <br /> <hr/> <br/> <br/>
          </form>

          <form className='form_con'>
            <label htmlFor='fname'>First Name</label> <br />
            <input type='text' id='fname' name='fname' /> <br/>
            <label htmlFor='mname'>Middle Name</label> <br />
            <input type='text' id='mname' name='mname' /> <br/>
            <label htmlFor='lname'>Last Name</label> <br />
            <input type='text' id='lname' name='lname' /> <br/>
            <label htmlFor='username'>Username</label> <br />
            <input type='text' id='username' name='username' /> <br/>
            <label htmlFor='gender'>Gender</label> <br />
            <select id='gen'> <br />
              <option>Female</option>
              <option>Male</option>
              <option>Would rather not say</option>
            </select> <br />
            <label htmlFor='dob'>Date of Birth</label> <br />
            <input type='date' id='dob' name='dob' /> <br/>
            
            <label htmlFor='about'>About</label> <br />
            <textarea id='about' name='about' rows='4' cols="30" /> <br/>
            <input type='submit' id='submit-btn' value='Save Changes' /> <br/>
          </form>
        </div>

        <form className='changepassword'>
          <label id='change_pwd'>Change Password</label> <br />
          <label htmlFor='old_password'>Old Password</label>
          <input type='password' id="old_password" /> 
          <label htmlFor='new_password'>New Password</label>
          <input type='password' id="new_password" /> 
          <label htmlFor='cpassword'>Confirm Password</label>
          <input type='password' id="cpassword" /> 
          <input type='submit' id='reset_pwd' value='Reset Password' />
        </form>       
    </>
    )
};

export default Editprofile;
