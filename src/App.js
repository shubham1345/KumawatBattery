import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./component/Home";
import AboutComponent from "./component/About";
import ContactUsUsComponent from "./component/ContactUs";
import NavbarComponent from "./component/Navbar";


function App() {
  return (
    <>
      <header className="header">
        <h1>Kumawat Battery's</h1>
      </header>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/About" element={<AboutComponent />} />
          <Route path="/ContactUs" element={<ContactUsUsComponent />} />
        </Routes>
      </BrowserRouter>
      
      <footer className="footer">
        <hr/>
        <p>© 2022 Copyright: asp.net1345@gmail.com</p>
      </footer>
    </>
  );
}

export default App;
