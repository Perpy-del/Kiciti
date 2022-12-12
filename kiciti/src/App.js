import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Signup, Login} from "./pages/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "signup" element = {<Signup />} />
          <Route path = "login" element = {<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
