// Footer.jsx

import React from "react";
import "./Footer.css";
<<<<<<< HEAD
import logofot from "./assets/logofot.png";
import l8 from "./assets/l8.jpeg";

import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (

    <footer className="footer">

=======
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";
import Orbit from "./assets/Orbit.png";

function Footer() {
  return (
    <footer className="footer">
>>>>>>> 1d39347 (local changes)
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-col footer-brand">
<<<<<<< HEAD

          <div className="logo-wrap">

            <img
              src={logofot}
              alt="logo"
              className="footer-logo"
            />

          </div>

          <div className="location">

            <h3>Location</h3>

            <p>Bangalore</p>

          </div>

        </div>

     
        <div className="footer-col company-col">

          <h3> Our Company</h3>

          <ul>

            <li>
              <Link to="/home" onClick={scrollTop}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={scrollTop}>
                About us
              </Link>
            </li>

            <li>
              <Link to="/services" onClick={scrollTop}>
                Services
              </Link>
            </li>

            <li>
              <Link to="/gallery" onClick={scrollTop}>
                Gallery
              </Link>
            </li>

            <li>
              <Link to="/blogs" onClick={scrollTop}>
                Blogs
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={scrollTop}>
                Contact
              </Link>
            </li>

          </ul>

        </div>

        {/* SERVICES */}
        <div className="footer-col services-col">

          <h3>Our Services</h3>

          <ul>

            <li>
              <Link to="/services/corporate" onClick={scrollTop}>
                Corporate
              </Link>
            </li>

            <li>
              <Link to="/services/conference" onClick={scrollTop}>
                Conference
              </Link>
            </li>

            <li>
              <Link to="/services/product" onClick={scrollTop}>
                Product Launch
              </Link>
            </li>

            <li>
              <Link to="/services/exhibition" onClick={scrollTop}>
                Exhibition
              </Link>
            </li>

            <li>
              <Link to="/services/brand" onClick={scrollTop}>
                Brand Activation
              </Link>
            </li>

            <li>
              <Link to="/services/team" onClick={scrollTop}>
                Team Events
              </Link>
            </li>

            <li>
              <Link to="/services/experiential" onClick={scrollTop}>
                Experiential
              </Link>
            </li>

            <li>
              <Link to="/services/social" onClick={scrollTop}>
                Social Events
              </Link>
            </li>

            <li>
              <Link to="/services/artists" onClick={scrollTop}>
                Artist Management
              </Link>
            </li>

          </ul>

        </div>

       
        <div className="footer-col contact-col">

          <h3>Get In Touch</h3>

         
          <div className="contact-box">

           <div className="contact-icon">
              <HiOutlineMail />
            </div> 

            <a
              href="mailto:eventmanagment76@gmail.com"
              className="contact-link"
            >
              eventmanagment76@gmail.com
            </a>

          </div>

          <div className="contact-box">

            <div className="contact-icon">
              <FaPhoneAlt />
            </div>

            <a
              href="tel:+917483264039"
              className="contact-link"
            >
              +91 7483 264 039
            </a>

          </div>

         
         <div className="foo-img">

            <img
              src={l8}
              alt="event"
              className="footer-image"
            />

          </div> 

        </div>

      </div>

     
      <div className="footer-bottom">

        <p>
          © 2026 Orbit events and experiences Event Management.
          All rights reserved.
        </p>

      </div>

=======
          <div className="logo-wrap">
            <h1 className="logo">
                <img src={Orbit} alt="logo" className="footer-logo" />
                </h1>

            </div>

          <h3>Follow Our Journey</h3>

          <div className="socials">
            <a href="/">
              <FaLinkedinIn />
            </a>

            <a href="/">
              <FaInstagram />
            </a>

            <a href="/">
              <FaFacebookF />
            </a>

            <a href="/">
              <FaYoutube />
            </a>
          </div>

          <div className="location">
            <h3>Location</h3>
            <p>Bangalore</p>
          </div>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h3>Our Services</h3>

          <ul>
            <li><a href="/">All Services</a></li>
            <li><a href="/">Corporate Events</a></li>
            <li><a href="/">Celebrations</a></li>
            <li><a href="/">Inaugurations</a></li>
            <li><a href="/">Hybrid Events</a></li>
            <li><a href="/">Special Projects</a></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h3>Company</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Our Team</a></li>
            <li><a href="/">Our Clients</a></li>
            <li><a href="/">Careers</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col contact-col">
          <h3>Get In Touch</h3>

          <div className="email">
            <HiOutlineMail />
            <span>info@whitemassif.com</span>
          </div>

          <div className="map">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Bangalore&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 White Massif Event Management. All rights reserved.</p>

        <p>Bangalore, Karnataka, India</p>
      </div>

      {/* WHATSAPP BUTTON */}
      <div className="help-btn">
        <span>💬</span>
        <p>Need help?</p>
      </div>
>>>>>>> 1d39347 (local changes)
    </footer>
  );
}

export default Footer;