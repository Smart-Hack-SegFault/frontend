import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SkillsBarChart from '../Components/SkillsBarChart'
import { useAppContext } from '../context/appContext'
import Navbar from '../Components/Navbar'
import RoundChart from '../Components/RoundChart'
import HeatMap from '@uiw/react-heat-map'
import Wrapper from '../assets/wrappers/Statistics'

import { supabase } from '../utils/supabaseConfig'

const Statistics = () => {
  const [value, setValue] = useState([])
  const [categories, setCategories] = useState([])

  const { userId } = useParams()

  const navLinks = [
    { text: 'Home', link: '' },
    { text: 'Statistics', link: 'statistics' },
    { text: 'Tasks', link: 'tasks' },
    { text: 'Profile', link: 'profile' },
  ]

  const { getCurrentUser, getSkills, skills, user } = useAppContext()

  useEffect(() => {
    getCurrentUser(userId)
    getSkills(userId)

    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/user/${userId}/daily-activity`
        )

        const data = await response.json()
        setValue(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/user/${userId}/top-categories`
        )

        const data = await response.json()
        setCategories(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
    fetchCategories()
  }, [])

  console.log(categories)

  return (
    <Wrapper className='page'>
      <Navbar links={navLinks} />
      <div className='charts-1'>
        <SkillsBarChart typeName='hard skills' typeValue='1' />
      </div>
      <div className='charts-2'>
        <SkillsBarChart typeName='soft skills' typeValue='0' />
      </div>
      <div className='heat-map'>
        <HeatMap
          value={value}
          weekLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
          startDate={new Date('2023/01/01')}
          panelColors={{
            0: '#b6fdd9cc',
            1: '#e77903',
          }}
          width={800}
          style={{ color: '#ad001d', '--rhm-rect-active': 'red' }}
        />
      </div>

      <div className='r-charts-1 center'>
        <RoundChart categoriesData={categories[0]} />
      </div>
      <div className='r-charts-2 center'>
        <RoundChart categoriesData={categories[1]} />
      </div>
      <div className='r-charts-3 center'>
        <RoundChart categoriesData={categories[2]} />
      </div>
    </Wrapper>
  )
}

export default Statistics
