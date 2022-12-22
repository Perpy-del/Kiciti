import React from 'react'
import closebtn from './images/closebtn.svg'
import './editProfile.css'

const Editprofile = () => {
    return (
      <>
        <div className='editprofile'>
          <div className='top_edit'>
            <h2>Edit Profile</h2>
            <img src={closebtn} alt='close' />
          </div>
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
            <label htmlFor='profile'>Profile Picture</label> <br />
            <input type="file" id='profile' name='profile' /> <br/>
            <label htmlFor='about'>About</label> <br />
            <textarea id='about' name='about' rows='4' cols="30" /> <br/>
            <input type='submit' id='submit-btn' value='Save Changes' /> <br/>
          </form>
        </div>

        <div className='changepassword'>
          <label id='change_pwd'>Change Password</label> <br />
          <label htmlFor='old_password'>Old Password</label>
          <input type='password' id="old_password" /> 
          <label htmlFor='new_password'>New Password</label>
          <input type='password' id="new_password" /> 
          <label htmlFor='cpassword'>Confirm Password</label>
          <input type='password' id="cpassword" /> 
          <input type='submit' id='reset_pwd' value='Reset Password' />
        </div>       
    </>
    )
}

export default Editprofile