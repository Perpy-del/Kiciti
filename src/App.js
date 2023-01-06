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
          <Route path = "Editprofile" element = {<Editprofile />} />
          <Route path = "Userfeed" element = {<Userfeed />}/>
          <Route path = "Forgotpassword" element = {<Forgotpassword />} />
          <Route path = "Verifyuser" element = {<Verifyuser />} />
          <Route path = "Error" element = {<Error />} />
          <Route path = "About" element = {<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
