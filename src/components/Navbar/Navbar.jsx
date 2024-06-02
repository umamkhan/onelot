import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo1 from '../../assets/logo1.webp';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo1} width={150} height={53} />
        </div>
        <div className="gpt3__navbar-links_container ">
          <p><a href="#home">Home</a></p>
          <p><a href="#product">Product</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#contact">Contact</a></p>
        
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Log in</p>
        <button type="button">Inquire now</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#201e1e" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#181515" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#product">Product</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#contact">Contact</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Log in</p>
            <button type="button">Inquire Now</button>
          </div>
        </div>
        )}
      </div>
    </div>
   
  );
};

export default Navbar;