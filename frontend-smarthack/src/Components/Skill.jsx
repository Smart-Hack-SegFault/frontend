import React from "react";
import "./Skill.css";
import Button from "./Button";

const Skill = ({ skillName, setSelectedSkill }) => {
  function handleOnClick(e) {
    console.log(`${skillName} was clicked`);
  }
  return (
    <div className="skill-wrapper">
      <Button
        text={skillName}
        style={"green1 fill-container"}
        handleSubmit={() => setSelectedSkill(skillName)}
      />
    </div>
  );
};

export default Skill;
