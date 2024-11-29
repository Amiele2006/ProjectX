import React from "react";
import '../index.css';
import { Link } from 'react-router-dom';

// Images
import Savearns from "../assets/images/Logo-2.png";

function Footer() {

  // function Onclick(){
  //   window.scrollTo(0, 0); // Scroll to the top
  // } 
    return(
        <footer className="footer pb-6 xsm:w-full">
          <div className="flex gap-16 link-contain pt-8">
            <div className="ml-auto flex flex-col gap-3">
                <Link to="/" className="footer-links">Home</Link>
                <Link to="/about" className="footer-links">About</Link>
                <Link to="/contact" className="footer-links">Get in Touch</Link>
                <Link to="/project" className="footer-links">Project</Link>
                <Link to="/notfound" className="footer-links">How it works</Link>
                <Link to="/notfound" className="footer-links">The process</Link>
                <Link to="/notfound" className="footer-links">Faq</Link>
                <Link to="/notfound" className="footer-links">Blog</Link>
            </div>
            <div className="mr-6 flex flex-col gap-3">
            <a href="index.html" className="footer-links">X</a>
            <a href="index.html" className="footer-links">Facebook</a>
            <a href="index.html" className="footer-links">Linkedin</a>
            <a href="index.html" className="footer-links">Medium</a>
            </div>
          </div>

          <div className="pt-28 flex gap-3 items-start">
            <img src={ Savearns } alt="logo" className="pl-4 logo-footer"/> 
            <p className="logo-side pt-2 w-97">Project X</p>
          </div>

          <div className="lg:flex lg:pt-16 lg:pl-4">
          <div className="flex pt-16 place-content-center pb-4 bottom-links lg:pt-0">
          <p>Powered by Conspro Initiative <span className="lines">|</span></p>
          <p>© 2024 Savearns Enterprise <span className="lines">|</span></p>
          </div>

          <div className="flex place-content-center bottom-links">
          <p>Privacy Policy <span className="lines">|</span></p>
          <p>Terms and Conditions</p>
          </div>
          </div>

       </footer>
    )
}

export default Footer;