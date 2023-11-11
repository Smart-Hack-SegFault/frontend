import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <img src='' alt='logo' className='logo'></img>
      <section className='landing-content'>
        <h1>SkillSync</h1>
        <section className='btn-container'>
          <Link to='/register'>
            <button className='btn btn-block register-btn'>
              Login / Register
            </button>
          </Link>
        </section>
      </section>
      <section className='landing-image'>
        <img src='' className='img' alt='landing-img'></img>
      </section>
    </Wrapper>
  )
}

export default Landing
