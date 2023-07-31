import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterThree from "../components/FooterThree";
import NavbarThree from "../components/NavbarThree";
import TeamAreaGroup from "../components/TeamAreaGroup";

const Team = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Breadcrumb */}
      <Breadcrumb title={"Team"} />

      {/* Team Area Group */}
      <TeamAreaGroup />

      {/* Footer One */}
      <FooterThree />
    </>
  );
};

export default Team;
