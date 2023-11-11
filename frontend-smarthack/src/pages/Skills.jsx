import React from "react";
import { useState, useEffect } from "react";
import "../index.css";
import Navbar from "../Components/Navbar";
import "./Skills.css";
import Skill from "../Components/Skill";
import SkillAnalysis from "../Components/SkillAnalysis";
import { useParams } from "react-router-dom";
import { supabase } from "../utils/supabaseConfig";

const Skills = () => {
  const { userId } = useParams();
  console.log(userId);
  const navLinks = [
    { text: "Home", link: "home" },
    { text: "Statistics", link: "statistics" },
    { text: "Skills", link: "slills" },
    { text: "Profile", link: "profile" },
  ];
  const hardSkills = [
    "Java",
    "Python",
    "C++",
    "C",
    "JavaScript",
    "Brainfuck",
    "Assembly x86",
  ];
  const softSkills = [
    "Vrajeala1",
    "Vrajeala2",
    "Vrajeala3",
    "Vrajeala4",
    "Vrajeala5",
    "Vrajeala6",
    "Vrajeala7",
  ];

  const [selectedSkill, setSelectedSkill] = useState(false);
  return (
    <>
      <Navbar links={navLinks} />
      <section className="section">
        <div className="skills-content-wrapper">
          <div className="skills-left-wrapper">
            {/* Hard skills go here */}

            <div className="skills-category-wrapper">
              <h1 className="skills-category-title">Hard Skills</h1>
              <div className="skills-scroll-box">
                <Skill
                  skillName={"Add new skill"}
                  style={"violet"}
                  type={"hard"}
                  setSelectedSkill={setSelectedSkill}
                />
                {hardSkills.map((skill, index) => {
                  return (
                    <Skill
                      key={index}
                      skillName={skill}
                      style={"grey"}
                      type={"hard"}
                      setSelectedSkill={setSelectedSkill}
                    />
                  );
                })}
              </div>
            </div>

            {/* Soft skills go here */}

            <div className="skills-category-wrapper">
              <h1 className="skills-category-title">Soft Skills</h1>
              <div className="skills-scroll-box">
                <Skill
                  skillName={"Add new skill"}
                  style={"violet"}
                  type={"soft"}
                  setSelectedSkill={setSelectedSkill}
                />
                {softSkills.map((skill, index) => {
                  return (
                    <Skill
                      key={index}
                      skillName={skill}
                      style={"grey"}
                      type={"soft"}
                      setSelectedSkill={setSelectedSkill}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="skills-right-wrapper">
            {selectedSkill ? (
              <SkillAnalysis
                skill={selectedSkill}
                streak={"4"}
                hours={"100"}
                category={"Programming"}
                level={"4"}
              />
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
