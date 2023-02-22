import React from "react";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";

import Navbar2 from "./Components/Navbar2/Navbar2";


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      
      <BrowserRouter>
      <Navbar2/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
