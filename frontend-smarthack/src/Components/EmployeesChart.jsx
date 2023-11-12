import React from 'react'
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

const EmployeesBarChart = ({ employees }) => {
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
    labels: employees.map((employee) => employee.name),
    datasets: [
      {
        label: 'hours worked',
        data: employees.map((employee) => employee.org_hours),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  return (
    <section>
      <Bar options={options} data={data}></Bar>
    </section>
  )
}

export default EmployeesBarChart
