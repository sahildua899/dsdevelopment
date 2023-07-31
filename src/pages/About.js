import React from "react";
import AboutAreaOne from "../components/AboutAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import ContactAreaOne from "../components/ContactAreaOne";
import CounterAreaOne from "../components/CounterAreaOne";
import FaqAreaOne from "../components/FaqAreaOne";
import FooterThree from "../components/FooterThree";
import NavbarThree from "../components/NavbarThree";
import TeamAreaOne from "../components/TeamAreaOne";
import WorkProcessOne from "../components/WorkProcessOne";

const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Navigation Bar */}
      <Breadcrumb title={"About Us"} />

      {/* About Area One */}
      <AboutAreaOne />

      {/* FAQ Area One */}
      <FaqAreaOne />

      {/* Team Area One */}
      <TeamAreaOne />

      {/* Counter Area One */}
      <CounterAreaOne />

      {/* Contact Area One */}
      <ContactAreaOne />

      {/* Work Process One */}
      <WorkProcessOne />

      {/* Footer One */}
      <FooterThree />
    </>
  );
};

export default About;
