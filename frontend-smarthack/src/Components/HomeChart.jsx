import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import Wrapper from '../assets/wrappers/HomeChart'
import { useAppContext } from '../context/appContext'

ChartJS.register(ArcElement, Tooltip, Legend)

const HomeChart = () => {
  const { skills } = useAppContext()

  console.log(skills)

  const data = {
    labels: skills.map((skill) => skill.Tags.name),
    datasets: [
      {
        label: 'hours',
        data: skills.map((skill) => skill.points),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <Wrapper>
      <h1>Overall skills</h1>
      <Pie data={data}></Pie>
    </Wrapper>
  )
}

export default HomeChart
