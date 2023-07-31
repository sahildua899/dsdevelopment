import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterThree from "../components/FooterThree";
import NavbarThree from "../components/NavbarThree";
import PricingAreaOne from "../components/PricingAreaOne";
import ServiceAreaGroup from "../components/ServiceAreaGroup";

const Service = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Navigation Bar */}
      <Breadcrumb title={"Service"} />

      {/* Service Area One */}
      <ServiceAreaGroup />

      {/* Pricing Area One */}
      <PricingAreaOne />

      {/* Footer One */}
      <FooterThree />
    </>
  );
};

export default Service;
