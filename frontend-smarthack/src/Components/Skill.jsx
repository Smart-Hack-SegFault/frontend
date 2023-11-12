import React from "react";
import "./Skill.css";
import Button from "./Button";

const Skill = ({ skill, setSelectedSkill, style, type }) => {
  return (
    <div className="skill-wrapper">
      <Button
        text={skill.name}
        style={`${style} fill-container`}
        handleSubmit={() =>
          setSelectedSkill({
            name: skill.name,
            type: type,
            category: skill.category,
            tag: skill.tag,
            score: skill.score,
          })
        }
      />
    </div>
  );
};

export default Skill;
