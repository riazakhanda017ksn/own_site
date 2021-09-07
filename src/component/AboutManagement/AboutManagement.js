import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import AboutSlider from "../AboutSlider/AboutSlider";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";

const AboutManagement = () => {
  return (
    <>
      <Navbar></Navbar>
      <AboutSlider></AboutSlider>
      <AboutMe></AboutMe>
      <Services></Services>
      <Footer></Footer>
    </>
  );
};

export default AboutManagement;
