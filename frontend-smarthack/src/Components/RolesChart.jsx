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

const RolesChart = ({ organizationId, roleId }) => {
  console.log(roleId)
  const [skillLevel, setSkillLevel] = useState([])
  const [stats, setStats] = useState([])

  useEffect(() => {
    const fetchSkillLevel = async () => {
      try {
        const response = fetch(
          `http://127.0.0.1:8000/role/${roleId}/top_employees`
        )
          .then((res) => res.json())
          .then((data) => setSkillLevel(data))
      } catch (error) {
        console.log(error)
      }
    }

    const fetchStats = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/org/${organizationId}/${roleId}/stats`
        )

        const data = await response.json()
        setStats(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchSkillLevel()
    fetchStats()
  }, [roleId])

  const chooseColor = (skillLevels) => {
    return skillLevels.map((person) => {
      if (person.points >= 5000) {
        return 'rgba(167,0,0, 0.7)'
      } else if (person.points >= 3000) {
        return 'rgba(255,0,0, 0.7)'
      } else if (person.points >= 1000) {
        return 'rgba(255,82,82, 0.7)'
      } else if (person.points >= 250) return 'rgba(255,123,123, 0.7)'
      else return 'rgba(255,186,186, 0.7)'
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
      <div className='average-stats'>
        <h1>Median work hours: {stats.mean} </h1>
        <h1>Average work hours: {stats.median}</h1>
        <h1>Standard deviation: {stats.std}</h1>
      </div>

      <Bar options={options} data={data}></Bar>
    </section>
  )
}

export default RolesChart
