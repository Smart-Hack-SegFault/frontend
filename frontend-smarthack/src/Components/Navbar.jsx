<<<<<<< HEAD
import React from "react";
import "./Navbar.css";
=======
import React from 'react'
import './Navbar.css'
>>>>>>> e448ebd (statistics page structure, charts, global context added)

/**
 *  Renders Navbar
 *
 * @param links: A list of object containing a link and a text. Ex:
 *              links = [
 *                  {link: "home", text: "Home"}
 *              ]
 *
 */

const Navbar = ({ links }) => {
  return (
<<<<<<< HEAD
    <section className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-content-wrapper">
          <div className="navbar-logo-wrapper"></div>
          <div className="navbar-links-wrapper">
            {links.map((link, index) => {
              return (
                <div className="navbar-link-wrapper" key={index}>
                  <a href={link.link} className="navbar-link">
                    {link.text}
                  </a>
                </div>
              );
=======
    <section className='navbar'>
      <div className='navbar-wrapper'>
        <div className='navbar-content-wrapper'>
          <div className='navbar-logo-wrapper'></div>
          <div className='navbar-links-wrapper'>
            {links.map((link, index) => {
              return (
                <div className='navbar-link-wrapper' key={index}>
                  <a href={link.link} className='navbar-link'>
                    {link.text}
                  </a>
                </div>
              )
>>>>>>> e448ebd (statistics page structure, charts, global context added)
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar
>>>>>>> e448ebd (statistics page structure, charts, global context added)
