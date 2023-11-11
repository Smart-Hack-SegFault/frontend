import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SkillsBarChart from '../Components/SkillsBarChart'
import { useAppContext } from '../context/appContext'
import Navbar from '../Components/Navbar'
import RoundChart from '../Components/RoundChart'
import HeatMap from '@uiw/react-heat-map'
import Wrapper from '../assets/wrappers/Statistics'

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

const Statistics = () => {
  const navLinks = [
    { text: 'Home', link: '' },
    { text: 'Statistics', link: 'statistics' },
    { text: 'Tasks', link: 'tasks' },
    { text: 'Profile', link: 'profile' },
  ]

  const { userId } = useParams()
  const { getCurrentUser, getSkills, skills, user } = useAppContext()

  useEffect(() => {
    getCurrentUser(userId)
    getSkills(userId)
  }, [])

  return (
    <Wrapper className='page'>
      <Navbar links={navLinks} />
      <SkillsBarChart typeName='hard skills' typeValue='1' />
      <SkillsBarChart typeName='soft skills' typeValue='0' />
      <div className='heat-map'>
        <HeatMap
          value={value}
          weekLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
          startDate={new Date('2016/01/01')}
          panelColors={{
            0: '#b6fdd9cc',
            1: '#e77903',
          }}
          width={800}
          style={{ color: '#ad001d', '--rhm-rect-active': 'red' }}
        />
      </div>
    </Wrapper>
  )
}

export default Statistics
