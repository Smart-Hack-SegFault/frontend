import React from 'react'
import "./Navbar.css";

const Navbar = ( { links } ) => {
  
  return (
    <section className='navbar'>
        <div className="navbar-wrapper">
            <div className="navbar-content-wrapper">
                <div className="navbar-logo-wrapper"></div>
                <div className="navbar-links-wrapper">
                    {links.map((link, index) => {
                        return <div className="navbar-link-wrapper" key={index}>
                                    <a href={link.link} className="navbar-link">{link.text}</a>
                                </div>
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar