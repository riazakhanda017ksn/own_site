import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import MySkill from "../MySkill/MySkill";

import Navbar from "../Navbar/Navbar";
import Optional from "../Optional/Optional";
import Project from "../Project/Project";
import Resume from "../Resume/Resume";
import Services from "../Services/Services";
import Slider from "../slider/slider";

const HaederManagement = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Slider></Slider>
      </div>
      <AboutMe></AboutMe>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default HaederManagement;
