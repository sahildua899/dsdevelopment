import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CaseStudyArea from "../components/CaseStudyArea";
import FooterThree from "../components/FooterThree";
import NavbarThree from "../components/NavbarThree";

const CaseStudyDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Navigation Bar */}
      <Breadcrumb title={"Case Study Details"} />

      {/* Case Study Area */}
      <CaseStudyArea />

      {/* Footer One */}
      <FooterThree />
    </>
  );
};

export default CaseStudyDetails;
