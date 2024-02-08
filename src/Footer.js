import React from 'react';
import './Footer.css';
import { FaFacebook } from "react-icons/fa6";        
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HashLink as NavLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot-line1">
        <div className="">
        <NavLink to='#home' id='web-name'>All Gen Toys</NavLink>
        </div>
        <div className="footer-nav">
                <NavLink to='#home'> Home</NavLink>
                <NavLink to='#WhatsNew'> What's Hot</NavLink>
                <NavLink to='#KidsProducts'>Kid toys</NavLink>
                <NavLink to='#UniversalToys'>Universal Toys</NavLink>
                <NavLink to='#SmartElectric'>Smart Electric</NavLink>
        </div>
      <div className="social-icons">
        <FaFacebook />
        <RiInstagramFill />
        <FaSquareXTwitter />
      </div>        
      </div>
     <div className="lines"></div>
      <div className="foot-line2">
        <div className="contact-info">
          <p>Email: example@example.com</p>
          <p>|</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>|</p>
          <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by David Marrucate </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
