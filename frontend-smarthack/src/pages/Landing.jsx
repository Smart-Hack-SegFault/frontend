import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Landing'
import Button from '../Components/Button'
import landing from '../assets/landing.svg'

const Landing = () => {
  return (
    <Wrapper>
      {/* <img src='' alt='logo' className='logo'></img> */}
      <section className='landing-content'>
        <h1>SkillSync</h1>
        <h3>Not just a skill tracker</h3>
        <section className='btn-container'>
          <Link to='/register'>
            <Button text='Login/Register' style='violet landing'></Button>
          </Link>
        </section>
      </section>
      <section className='landing-image'>
        <img src={landing} className='img' alt='landing-img'></img>
      </section>
    </Wrapper>
  )
}

export default Landing
