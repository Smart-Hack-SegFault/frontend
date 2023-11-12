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
  }, [roleId])

  const chooseColor = (skillLevels) => {
    return skillLevels.map((person) => {
      if (person.points >= 5000) {
        return 'rgb(238, 127, 220)' // Example color for high skill level
      } else if (person.points >= 3000) {
        return 'rgb(78, 168, 164)' // Example color for medium skill level
      } else if (person.points >= 1000) {
        return 'rgb(135, 45, 195)' // Example color for low skill level
      } else if (person.points >= 250) return 'rgb(218, 102, 102)'
      else return 'rgb(209, 140, 228)'
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
        text: 'Chart.js Horizontal Bar Chart',
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
