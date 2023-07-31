import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterThree from "../components/FooterThree";
import NavbarThree from "../components/NavbarThree";
import TeamDetailsGroup from "../components/TeamDetailsGroup";

const TeamDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Breadcrumb */}
      <Breadcrumb title={"Team Details"} />

      {/* Team Details Group */}
      <TeamDetailsGroup />

      {/* Footer One */}
      <FooterThree />
    </>
  );
};

export default TeamDetails;
