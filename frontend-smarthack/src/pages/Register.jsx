import Wrapper from '../assets/wrappers/Register'
import FormRow from '../Components/FormRow'
import Button from '../Components/Button'

import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import { HiOutlineMail } from 'react-icons/hi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { BsPersonCircle } from 'react-icons/bs'

const Register = () => {
  const [state, setState] = useState({ email: '', password: '', name: '' })
  const [isMember, setIsMember] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('register')

    const { email, password, name, type } = state
    if (!email || !password || (!type && !name && !isMember)) {
      console.log('error')
      return
    }

    const user = { email, password, name, type }

    // if user is not a member, register, else login
    // if (!isMember) register(user)
    // else login(user)
  }

  const toggleMember = () => {
    setIsMember(!isMember)
  }

  // const user = {
  //   name: 'john doe',
  //   password: '1234',
  //   email: 'john_doe@gmail.com',
  // }

  // const user = {}

  // useEffect(() => {
  //   if (user) {
  //     setTimeout(() => {
  //       navigate('/')
  //     }, 3000)
  //   }
  // }, [user])

  return (
    <Wrapper>
      <section className='form-container'>
        <h1>{`${isMember ? 'Login' : 'Register'}`}</h1>
        <form action='submit'>
          {!isMember && (
            <FormRow
              icon={<RiLockPasswordLine />}
              handleChange={(e) => handleChange(e)}
              value={state.name}
              name='name'
              type='text'
              labelText='name'
            />
          )}
          <FormRow
            icon={<HiOutlineMail />}
            handleChange={(e) => handleChange(e)}
            value={state.email}
            name='email'
            labelText='email'
            type='email'
          />
          <FormRow
            icon={<BsPersonCircle />}
            handleChange={(e) => handleChange(e)}
            value={state.password}
            name='password'
            labelText='password'
            type='password'
          />

          {!isMember && (
            <select>
              <option>Organization</option>
              <option>User</option>
            </select>
          )}

          <div className='btn-container'>
            <Button
              type='submit'
              handleSubmit={(e) => handleSubmit(e)}
              text={`${isMember ? 'Login' : 'Register'}`}
              style='violet'
            ></Button>

            <h3 className='link-container'>
              {`${
                isMember ? "You don't have an account? " : 'Already a member? '
              }`}
              <Link onClick={toggleMember}>
                {`${isMember ? 'Register' : 'Login'}`}
              </Link>
            </h3>
          </div>
        </form>
      </section>
    </Wrapper>
  )
}

export default Register
