import React from "react";
import { useState, useEffect } from "react";
import "./SkillAnalysis.css";
import Button from "./Button";

const NumberInput = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    if (e.target.value === "") {
      setValue("");
      return;
    }
    if (e.target.value < 1 || e.target.value > 24) {
      window.alert("Hours worked today should be a number between 1 and 24");
      return;
    }
    setValue(e.target.value);
  };
  return (
    <input
      type="number"
      min={1}
      max={24}
      value={value}
      onChange={handleChange}
      className="sa-hours-today"
    />
  );
};

const SkillAnalysis = ({ skill, userId }) => {
  const level = 4;
  const skills = [
    "Python",
    "C++",
    "Something",
    "Idk",
    "Somestuff",
    "lmfao",
    ,
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
    "lmfao",
  ];
  if (skill.name === "Add new skill") {
    return (
      <div className="sa-content-wrapper">
        <div className="sa-add-skill-wrapper">
          <h1 className="sa-title">Add a new skill</h1>
          <select
            name="sa-dropdown"
            id="sa-dropdown"
            className="sa-dropdown"
            defaultValue={skills[0]}
          >
            {skills.map((skill, index) => {
              return (
                <option key={index} value={skill}>
                  {skill}
                </option>
              );
            })}
          </select>
          <Button
            text={"Submit"}
            style={"green1 allign-center fill-width"}
          ></Button>
        </div>
      </div>
    );
  }
  const [streak, setStreak] = useState(undefined);
  const [hours, setHours] = useState(undefined);
  useEffect(() => {
    async function fetchStreak(userId) {
      const response = await fetch(
        `http://127.0.0.1:8000/user/${userId}/skill/${skill.tag}/streak`
      );
      const streak = await response.json();
      return streak;
    }
    async function fetchHours(userId) {
      const response = await fetch(
        `http://127.0.0.1:8000/user/${userId}/skill/${skill.tag}/hours`
      );
      const fetchedHours = await response.json();
      return fetchedHours;
    }

    fetchStreak(userId).then((streak) => setStreak(streak));
    fetchHours(userId).then((fetchedHours) => setHours(fetchedHours));
  }, [skill]);
  if (streak === undefined || hours === undefined) return;
  return (
    <div className="sa-content-wrapper">
      <h1 className="sa-title">Analysis and Recommendations</h1>
      <h1 className="sa-label">Skill: {skill.name}</h1>
      <h1 className="sa-label">Streak: {streak}</h1>
      <h1 className="sa-label">
        Hours Worked Today: <br />
        <NumberInput /> <Button text={"Submit"} style={"green2"} />
      </h1>
      <h1 className="sa-label">Total Hours: {hours}</h1>
      <h1 className="sa-label">Category: {skill.category}</h1>
      <h1 className="sa-label">Level: {level}</h1>
    </div>
  );
};

export default SkillAnalysis;
