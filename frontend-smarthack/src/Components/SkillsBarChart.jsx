import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SkillsBarChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SkillsBarChart = ({ typeName, typeValue }) => {
  const { skills } = useAppContext();

  console.log(skills);

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Skills Chart",
      },
    },
  };

  const labels = skills
    .filter((skill) => skill.Tags.Categories.type == typeValue)
    .reduce((acc, currentSkill) => {
      const tagName = currentSkill.Tags.name;

      acc.push(tagName);
      return acc;
    }, []);

  const data = {
    labels,
    datasets: [
      {
        label: typeName,
        data: skills.map((skill) => skill.init_hours),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Wrapper>
      <Bar options={options} data={data}></Bar>
    </Wrapper>
  );
};

export default SkillsBarChart;
