import React from 'react';
import Button from "../Components/Button";
import Navbar from '../Components/Navbar';

const Home = ({ userName }) => {
    const navLinks = [
        { text: "Home", link: "home"},
        { text: "Statistics", link: "statistics"},
        { text: "Tasks", link: "tasks"},
        { text: "Profile", link: "profile"},
    ];
    
    return (
    <>
        <Navbar links={navLinks}/>
        <section className="section">
            
        </section>
    </>
  )
}

export default Home