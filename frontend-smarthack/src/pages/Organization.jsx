import React from "react";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";

const Organization = () => {
  const { organizationId } = useParams();

  const navLinks = [
    { text: "Home", link: `/organization/${organizationId}` },
    { text: "Statistics", link: `/organization/statistics/${organizationId}` },
  ];

  return (
    <section className="page">
      <Navbar links={navLinks} />
    </section>
  );
};

export default Organization;
