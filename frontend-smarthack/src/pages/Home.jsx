import React, { useEffect } from "react";
import Button from "../Components/Button";
import Navbar from "../Components/Navbar";
import RoundChart from "../Components/RoundChart";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Home";

const Home = () => {
  const { userId } = useParams();
  const { getCurrentUser, getSkills, user } = useAppContext();

  useEffect(() => {
    getCurrentUser(userId);
    getSkills(userId);
  }, []);

  const navLinks = [
    { text: "Home", link: "" },
    { text: "Statistics", link: "statistics" },
    { text: "Tasks", link: "tasks" },
    { text: "Profile", link: "profile" },
  ];

  return (
    <Wrapper>
      <section className="home page">
        <Navbar links={navLinks} />

        <section className="home-left">
          <h1>
            Great to see you again, <br></br> {user.name}
          </h1>
        </section>
        <section className="home-right">
          <RoundChart />
        </section>
      </section>
    </Wrapper>
  );
};

export default Home;
