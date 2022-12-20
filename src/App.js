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
      <div className="row">
        <div className="col-md-12">
          <header className="header">
            <h1>Kumawat Battery's</h1>
          </header>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div>
            <BrowserRouter>
              <NavbarComponent />
              <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/About" element={<AboutComponent />} />
                <Route path="/ContactUs" element={<ContactUsUsComponent />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <footer className="footer">
            <hr />
            <p>© 2022 Copyright: asp.net1345@gmail.com</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
