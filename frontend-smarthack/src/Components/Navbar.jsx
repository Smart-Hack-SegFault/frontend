<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import "./Navbar.css";
=======
import React from 'react'
import './Navbar.css'
>>>>>>> e448ebd (statistics page structure, charts, global context added)
=======
import React from 'react'
import './Navbar.css'
>>>>>>> e0ec19c87aaa321226516f5aca97f1e9967d2b3b

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
<<<<<<< HEAD
    <section className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-content-wrapper">
          <div className="navbar-logo-wrapper"></div>
          <div className="navbar-links-wrapper">
=======
    <section className='navbar'>
      <div className='navbar-wrapper'>
        <div className='navbar-content-wrapper'>
          <div className='navbar-logo-wrapper'></div>
          <div className='navbar-links-wrapper'>
>>>>>>> e0ec19c87aaa321226516f5aca97f1e9967d2b3b
            {links.map((link, index) => {
              return (
                <div className='navbar-link-wrapper' key={index}>
                  <a href={link.link} className='navbar-link'>
                    {link.text}
                  </a>
                </div>
<<<<<<< HEAD
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
=======
              )
>>>>>>> e0ec19c87aaa321226516f5aca97f1e9967d2b3b
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

<<<<<<< HEAD
<<<<<<< HEAD
export default Navbar;
=======
export default Navbar
>>>>>>> e448ebd (statistics page structure, charts, global context added)
=======
export default Navbar
>>>>>>> e0ec19c87aaa321226516f5aca97f1e9967d2b3b
