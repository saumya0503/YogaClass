import { useState } from 'react'
import '../Css/Div1.css'
const Div1 = () => {
  const handleNavigation = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
<div className="group-1">
      <div className="background" />
      <div className="design group">
        <div className="shape-holder">
          <img className="masking" src="images/masking.png" alt="" />
        </div>
        <div className="col-3">
          <div className="text">
            <p className="title">YOGA CLASS</p>
            <p className="body-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              fringilla neque euismod volutpat cursus. Vestibulum ac pretium
              orci,
            </p>
            <button className="button">Join Now</button>
          </div>
          <img className="shape" src="images/shape_32.png" alt="" />
        </div>
      </div>
      <div className="header-2 group">
        <div className="shape-holder-2">
          <img
            className="place-your-logo-here-double-click-to-edit"
            src="images/place_your_logo_here_doub.png"
            alt=""
          />
        </div>
        <div className="shape-2"></div>
        <nav className="wrapper-3">
      <div className="text-3 group">
        <a href="#home" className="home" onClick={() => scrollToSection("home")}>HOME</a>
        <a href="#about" className="text-4" onClick={() => scrollToSection("about")}>ABOUT US</a>
        <a href="#services" className="services" onClick={() => scrollToSection("services")}>SERVICES</a>
        <a href="#contact" className="text-5" onClick={() => scrollToSection("contact")}>CONTACT US</a>
      </div>
      
    </nav>
    
      </div>
    </div>
    </>
  )
}

export default Div1
