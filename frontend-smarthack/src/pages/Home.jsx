<<<<<<< HEAD
import React from "react";
import Button from "../Components/Button";
import Navbar from "../Components/Navbar";

const Home = ({ userName }) => {
  const navLinks = [
    { text: "Home", link: "home" },
    { text: "Statistics", link: "statistics" },
    { text: "Skills", link: "slills" },
    { text: "Profile", link: "profile" },
  ];

  return (
    <>
      <Navbar links={navLinks} />
      <section className="section"></section>
    </>
  );
};

export default Home;
=======
import React, { useEffect } from 'react'
import Button from '../Components/Button'
import Navbar from '../Components/Navbar'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/Home'

const Home = () => {
  const { userId } = useParams()
  const { getCurrentUser, getSkills, user } = useAppContext()

  useEffect(() => {
    getCurrentUser(userId)
    getSkills(userId)
  }, [])

  const navLinks = [
    { text: 'Home', link: '/user' },
    { text: 'Statistics', link: `/user/statistics/${userId}` },
    { text: 'Tasks', link: '/user/tasks' },
    { text: 'Profile', link: '/user/profile' },
  ]

  return (
    <Wrapper>
      <section className='home page'>
        <Navbar links={navLinks} />

        <section className='home-left'>
          <h1>
            Great to see you again, <br></br> {user.name}
          </h1>
        </section>
      </section>
    </Wrapper>
  )
}

export default Home
>>>>>>> e448ebd (statistics page structure, charts, global context added)
