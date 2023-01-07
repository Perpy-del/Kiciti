// import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home, Signup, Login, Profile, Editprofile, Userfeed, Forgotpassword, Verifyuser, Error, About } from "./pages/index";
import React from 'react'

import Footer from './Footer/Footer'

const App = () => {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/signup" element = {<Signup />} />
          <Route path = "login" element = {<Login />} />
          <Route path = "profile" element = {<Profile />} />
          <Route path = "editprofile" element = {<Editprofile />} />
          <Route path = "posts" element = {<Userfeed />}/>
          <Route path = "forgotpassword" element = {<Forgotpassword />} />
          <Route path = "verifyuser" element = {<Verifyuser />} />
          <Route path = "error" element = {<Error />} />
          <Route path = "about" element = {<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
