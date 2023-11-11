import React from "react";
import "./Skill.css";
import Button from "./Button";

const Skill = ({ skillName, setSelectedSkill, style, type }) => {
  return (
    <div className="skill-wrapper">
      <Button
        text={skillName}
        style={`${style} fill-container`}
        handleSubmit={() => setSelectedSkill({ name: skillName, type: type })}
      />
    </div>
  );
};

export default Skill;
