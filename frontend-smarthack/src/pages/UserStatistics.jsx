import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SkillsBarChart from '../Components/SkillsBarChart'
import { useAppContext } from '../context/appContext'
import Navbar from '../Components/Navbar'
import RoundChart from '../Components/RoundChart'
import HeatMap from '@uiw/react-heat-map'
import Wrapper from '../assets/wrappers/Statistics'
<<<<<<< HEAD

const value = [
  { date: '2016/01/11', count: 2 },
  { date: '2016/01/12', count: 20 },
  { date: '2016/01/13', count: 10 },
  ...[...Array(17)].map((_, idx) => ({
    date: `2016/02/${idx + 10}`,
    count: idx,
    content: '',
  })),
  { date: '2016/04/11', count: 2 },
  { date: '2016/05/01', count: 5 },
  { date: '2016/05/02', count: 5 },
  { date: '2016/05/04', count: 11 },
]
=======
import { supabase } from '../utils/supabaseConfig'
>>>>>>> e0ec19c87aaa321226516f5aca97f1e9967d2b3b

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
<<<<<<< HEAD
<<<<<<< HEAD
  }, [])

=======
=======
>>>>>>> e0ec19c87aaa321226516f5aca97f1e9967d2b3b

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

<<<<<<< HEAD
>>>>>>> 545dba3 (nothing special)
  return (
    <Wrapper className='page'>
      <Navbar links={navLinks} />
      <SkillsBarChart typeName='hard skills' typeValue='1' />
      <SkillsBarChart typeName='soft skills' typeValue='0' />
=======
  return (
    <Wrapper className='page'>
      <Navbar links={navLinks} />
      <div className='charts-1'>
        <SkillsBarChart typeName='hard skills' typeValue='1' />
      </div>
      <div className='charts-2'>
        <SkillsBarChart typeName='soft skills' typeValue='0' />
      </div>
>>>>>>> e0ec19c87aaa321226516f5aca97f1e9967d2b3b
      <div className='heat-map'>
        <HeatMap
          value={value}
          weekLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
<<<<<<< HEAD
          startDate={new Date('2016/01/01')}
=======
          startDate={new Date('2023/01/01')}
>>>>>>> e0ec19c87aaa321226516f5aca97f1e9967d2b3b
          panelColors={{
            0: '#b6fdd9cc',
            1: '#e77903',
          }}
          width={800}
<<<<<<< HEAD
          style={{ color: '#ad001d', '--rhm-rect-active': 'red' }}
        />
      </div>
<<<<<<< HEAD
=======
=======
        />
      </div>
>>>>>>> e0ec19c87aaa321226516f5aca97f1e9967d2b3b

      <div className='r-charts-1 center'>
        <RoundChart categoriesData={categories[0]} />
      </div>
      <div className='r-charts-2 center'>
        <RoundChart categoriesData={categories[1]} />
      </div>
      <div className='r-charts-3 center'>
        <RoundChart categoriesData={categories[2]} />
      </div>
<<<<<<< HEAD
>>>>>>> 545dba3 (nothing special)
=======
>>>>>>> e0ec19c87aaa321226516f5aca97f1e9967d2b3b
    </Wrapper>
  )
}

export default Statistics
