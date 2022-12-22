import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Signup, Login, Profile, Editprofile, Userfeed, Forgotpassword } from "./pages/index";
import React from 'react'

const App = () => {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Signup />} />
          <Route path = "login" element = {<Login />} />
          <Route path = "profile" element = {<Profile />} />
          <Route path = "Editprofile" element = {<Editprofile />} />
          <Route path = "Userfeed" element = {<Userfeed />}/>
          <Route path = "Forgotpassword" element = {<Forgotpassword />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
