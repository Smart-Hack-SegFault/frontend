import React from "react";
import { useState, useEffect } from "react";
import "../index.css";
import Navbar from "../Components/Navbar";
import "./Skills.css";
import Skill from "../Components/Skill";
import SkillAnalysis from "../Components/SkillAnalysis";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const Skills = () => {
  const { userId } = useParams();
  const navLinks = [
    { text: "Home", link: `/home/${userId}` },
    { text: "Statistics", link: `/statistics/${userId}` },
    { text: "Skills", link: `/skills/${userId}` },
    { text: "Profile", link: `/profile/${userId}` },
  ];
  const softSkills = [],
    hardSkills = [];

  const { getSkills, skills } = useAppContext();
  const [streak, setStreak] = useState(false);
  useEffect(() => {
    getSkills(userId);
    const fetchStreak = async (userId) => {
      const streak = await fetch(`http://127.0.0.1:8000/user/${userId}/skill/`);
    };
  }, []);
  if (!skills) return;
  for (const skill of skills) {
    if (skill.Tags.Categories.type === 1) {
      hardSkills.push({
        name: skill.Tags.name,
        category: skill.Tags.Categories.category,
        tag: skill.tag,
        score: skill.points,
        id: skill.id,
        type: skill.Tags.Categories.type,
      });
    } else {
      softSkills.push({
        name: skill.Tags.name,
        category: skill.Tags.Categories.category,
        tag: skill.tag,
        score: skill.points,
        id: skill.id,
        type: skill.Tags.Categories.type,
      });
    }
  }
  const [selectedSkill, setSelectedSkill] = useState(false);
  console.log(skills);
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
                  skill={{ name: "Add new skill", type: 1 }}
                  style={"violet"}
                  setSelectedSkill={setSelectedSkill}
                />
                {hardSkills.map((skill, index) => {
                  return (
                    <Skill
                      key={index}
                      skill={skill}
                      style={"green1"}
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
                  skill={{ name: "Add new skill", type: 0 }}
                  style={"violet"}
                  setSelectedSkill={setSelectedSkill}
                />
                {softSkills.map((skill, index) => {
                  return (
                    <Skill
                      key={index}
                      skill={skill}
                      style={"green1"}
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
                userId={userId}
                type={selectedSkill.type}
              />
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
