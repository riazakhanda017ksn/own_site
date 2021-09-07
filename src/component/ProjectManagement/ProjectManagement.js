import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ProjectSlider from "../ProjectSlider/ProjectSlider";
import Project from "../Project/Project";
const ProjectManagement = () => {
  return (
    <>
      <Navbar></Navbar>
      <ProjectSlider></ProjectSlider>
      <Project></Project>
      <Footer></Footer>
    </>
  );
};

export default ProjectManagement;
