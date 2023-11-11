import React from "react";
import "./SkillAnalysis.css";

const SkillAnalysis = ({ skill, streak, hours, category, level }) => {
  return (
    <div className="sa-content-wrapper">
      <h1 className="sa-title">Analysis and Recommendations</h1>
      <h1 className="sa-label">Skill: {skill}</h1>
      <h1 className="sa-label">Streak: {streak}</h1>
      <h1 className="sa-label">Hours: {hours}</h1>
      <h1 className="sa-label">Category: {category}</h1>
      <h1 className="sa-label">Level: {level}</h1>
    </div>
  );
};

export default SkillAnalysis;
