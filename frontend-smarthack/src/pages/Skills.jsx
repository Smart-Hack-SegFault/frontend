import React from "react";
import "../index.css";
import Navbar from "../Components/Navbar";
import "./Skills.css";
import Skill from "../Components/Skill";

const Skills = () => {
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
                {hardSkills.map((skill, index) => {
                  return <Skill key={index} skillName={skill} />;
                })}
              </div>
            </div>

            {/* Soft skills go here */}

            <div className="skills-category-wrapper">
              <h1 className="skills-category-title">Soft Skills</h1>
              <div className="skills-scroll-box">
                {softSkills.map((skill, index) => {
                  return <Skill key={index} skillName={skill} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
