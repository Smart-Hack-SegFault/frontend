import React from "react";
import { useState, useEffect } from "react";
import "./SkillAnalysis.css";
import Button from "./Button";
import { supabase } from "../utils/supabaseConfig";

const NumberInput = ({ setInputNumber }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    if (e.target.value === "") {
      setValue("");
      setInputNumber(false);
      return;
    }
    if (e.target.value < 1 || e.target.value > 24) {
      window.alert("Hours practices today should be a number between 1 and 24");
      return;
    }
    setValue(e.target.value);
    setInputNumber(e.target.value);
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

const RangeInput = ({ setRangeNumber, min, max }) => {
  const [value, setValue] = useState(0);
  function handleChange(e) {
    setRangeNumber(e.target.value);
  }
  return (
    <input
      type="range"
      min={min}
      max={max}
      defaultValue={0}
      onChange={handleChange}
    />
  );
};

const SkillAnalysis = ({ skill, userId, type }) => {
  console.log(type);
  function getLevel(xp) {
    const x = Math.floor(Math.log2(Math.floor(xp / 100)));
    return x < 0 ? 0 : x;
  }
  const [streak, setStreak] = useState(undefined);
  const [hours, setHours] = useState(undefined);
  const [inputNumber, setInputNumber] = useState(false);
  const [recSkills, setRecSkills] = useState([]);
  const [rangeNumber, setRangeNumber] = useState(0);
  const [generatedRec, setGeneratedRec] = useState("");
  async function submitToDB(data) {
    let date = new Date();
    date =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    if (!data) return;
    const { d, err } = await supabase
      .from("DailyWork")
      .insert([{ hours: Number(data.hours), date: date, user_skill: data.id }])
      .select();
    setHours(Number(data.hours) + Number(hours));
  }
  function displayDifficulty(difficulty) {
    switch (difficulty) {
      case 0:
        return "Easy";
      case 1:
        return "Medium";
      case 2:
        return "Hard";
      case 3:
        return "Expert";
      case 4:
        return "Master";
    }
  }
  function handleGenerate(difficulty) {
    setGeneratedRec({
      project: "Loading...",
      description: "Loading...",
      hours: "Loading...",
    });
    const response = fetch(
      `http://127.0.0.1:8000/user/recommendation/${skill.name}/${difficulty}`
    )
      .then((gen) => gen.json())
      .then((caca) => setGeneratedRec(caca));
  }
  useEffect(() => {
    setGeneratedRec({ project: "", description: "", hours: "" });
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
    async function fetchRecSkills(userId) {
      const response = await fetch(
        `http://127.0.0.1:8000/user/${userId}/skill/recommend`
      );
      const fetchedRecSkills = await response.json();
      return fetchedRecSkills;
    }
    if (skill.name === "Add new skill") {
      fetchRecSkills(userId).then((fetchedRecSkills) => {
        const skills = [];
        for (const { name, Categories } of fetchedRecSkills) {
          console.log(name, type);
          if (Categories.type == type)
            skills.push({ name: name, category: Categories.type });
        }
        setRecSkills(skills);
      });
      return;
    }
    fetchStreak(userId).then((streak) => setStreak(streak));
    fetchHours(userId).then((fetchedHours) => setHours(fetchedHours));
  }, [skill]);
  if (
    (streak === undefined || hours === undefined) &&
    skill.name !== "Add new skill"
  )
    return;
  if (skill.name === "Add new skill" && !recSkills) return;
  if (skill.name === "Add new skill") {
    return (
      <div className="sa-content-wrapper">
        <div className="sa-add-skill-wrapper">
          <h1 className="sa-title">Add a new skill</h1>
          <select
            name="sa-dropdown"
            id="sa-dropdown"
            className="sa-dropdown"
            defaultValue={recSkills[0]}
          >
            {recSkills.map((skill, index) => {
              return (
                <option key={index} value={skill.name}>
                  {skill.name}
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
  return (
    <>
      <h1 className="sa-title">Analysis and Recommendations</h1>
      <div className="sa-content-wrapper">
        <div className="sa-content-left">
          <h1 className="sa-label">Skill: {skill.name}</h1>
          <h1 className="sa-label">Streak: {streak}</h1>
          <h1 className="sa-label">
            Hours Practices Today: <br />
            <NumberInput setInputNumber={setInputNumber} />{" "}
            <Button
              text={"Submit"}
              style={"green2"}
              handleSubmit={() => {
                submitToDB({ hours: inputNumber, id: skill.id });
              }}
            />
          </h1>
          <h1 className="sa-label">Total Hours: {hours}</h1>
          <h1 className="sa-label">Category: {skill.category}</h1>
          <h1 className="sa-label">Level: {getLevel(skill.score)}</h1>
        </div>
        <div className="sa-content-right">
          <h1 className="sa-content-subtitle">Get Recommendations</h1>
          <h1 className="sa-label">
            Difficulty:{" "}
            <RangeInput min={0} max={4} setRangeNumber={setRangeNumber} />
          </h1>
          <h1 className="sa-label">{displayDifficulty(Number(rangeNumber))}</h1>
          <Button
            style={"green2"}
            text={"Generate"}
            handleSubmit={() => {
              handleGenerate(rangeNumber);
            }}
          ></Button>
          <h1 className="generated-rec">
            Project Title: <br />
            {generatedRec.project}
          </h1>
          <h1 className="generated-rec">
            Project Description:{" "}
            <p className="description">{generatedRec.description}</p>
          </h1>
          <h1 className="generated-rec">
            Estimated Time Investment: {generatedRec.hours}
          </h1>
        </div>
      </div>
    </>
  );
};

export default SkillAnalysis;
