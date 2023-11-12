import React, { useEffect } from 'react'
import Button from '../Components/Button'
import Navbar from '../Components/Navbar'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/Home'
import HomeChart from '../Components/HomeChart'

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
        ======= >>>>>>> e0ec19c87aaa321226516f5aca97f1e9967d2b3b
        <section className='home-left'>
          <h1>
            Great to see you again, <br></br>
            <span>{user.name}</span>
          </h1>
        </section>
        <section className='home-right'>
          <HomeChart />
        </section>
      </section>
    </Wrapper>
  )
}

export default Home
