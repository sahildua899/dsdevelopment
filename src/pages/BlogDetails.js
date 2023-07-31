import React from "react";
import BlogDetailsArea from "../components/BlogDetailsArea";
import Breadcrumb from "../components/Breadcrumb";
import FooterThree from "../components/FooterThree";
import NavbarThree from "../components/NavbarThree";

const BlogDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Navigation Bar */}
      <Breadcrumb title={"Blog Details"} />

      {/* Blog Details Area */}
      <BlogDetailsArea />

      {/* Footer One */}
      <FooterThree />
    </>
  );
};

export default BlogDetails;
