import React from 'react'
import closebtn from './images/closebtn.svg'
import './editProfile.css'

const Editprofile = () => {
    return (
        <div className='editprofile'>
          <div className='top_edit'>
            <h2>Edit Profile</h2>
            <img src={closebtn} alt='close' />
          </div>
          <form>
            <label htmlFor='fname'>First Name</label>
            <input type='text' id='fname' name='fname' /> <br/>
            <label htmlFor='mname'>Middle Name</label>
            <input type='text' id='mname' name='mname' /> <br/>
            <label htmlFor='lname'>Last Name</label>
            <input type='text' id='lname' name='lname' /> <br/>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' name='username' /> <br/>
            <label htmlFor='gender'>Gender</label>
            <select id='gender'>
              <option>Female</option>
              <option>Male</option>
              <option>Would rather not say</option>
            </select> <br />
            <label htmlFor='dob'>Date of Birth</label>
            <input type='date' id='dob' name='dob' /> <br/>
            <label htmlFor='profile'>Profile Picture</label>
            <input type="file" id='profile' name='profile' /> <br/>
            <label htmlFor='about'>About</label>
            <textarea id='about' name='about' rows='4' cols="30" /> <br/>
            <input type='submit' id='submit-btn' value='Save Changes' /> <br/>
          </form>
          <select>
            <option>Old Password</option>
            <option>New Password</option>
            <option>Confirm Password</option>
            <option>Reset Password</option>
          </select>
        </div>
    )
}

export default Editprofile