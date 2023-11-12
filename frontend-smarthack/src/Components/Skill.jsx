import React from "react";
import "./Skill.css";
import Button from "./Button";

const Skill = ({ skill, setSelectedSkill, style }) => {
  return (
    <div className="skill-wrapper">
      <Button
        text={skill.name}
        style={`${style} fill-container`}
        handleSubmit={() => {
          console.log({
            name: skill.name,
            category: skill.category,
            tag: skill.tag,
            score: skill.score,
            id: skill.id,
            type: skill.type,
          });
          setSelectedSkill({
            name: skill.name,
            category: skill.category,
            tag: skill.tag,
            score: skill.score,
            id: skill.id,
            type: skill.type,
          });
        }}
      />
    </div>
  );
};

export default Skill;
