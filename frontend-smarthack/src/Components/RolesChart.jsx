import React, { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const RolesChart = ({ roleId }) => {
  console.log(roleId)
  const [skillLevel, setSkillLevel] = useState([])

  useEffect(() => {
    const fetchSkillLevel = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/role/${roleId}/top_employees`
        )

        const data = await response.json()
        setSkillLevel(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchSkillLevel()
  }, [])

  const chooseColor = (skillLevels) => {
    return skillLevels.map((person) => {
      if (person.points >= 5000) {
        return 'rgb(236, 8, 8)'
      } else if (person.points >= 3000) {
        return 'rgb(192, 201, 67))'
      } else if (person.points >= 1000) {
        return 'rgb(174, 91, 61)'
      } else if (person.points >= 250) return 'rgb(87, 51, 51)'
      else return 'rgb(57, 41, 36)'
    })
  }

  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Roles Chart',
      },
    },
  }

  const data = {
    labels: skillLevel.map((person) => person.name),
    datasets: [
      {
        label: 'skill level',
        data: skillLevel.map((person) => person.points),
        backgroundColor: chooseColor(skillLevel),
      },
    ],
  }

  if (!skillLevel) return

  return (
    <section>
      <Bar options={options} data={data}></Bar>
    </section>
  )
}

export default RolesChart
