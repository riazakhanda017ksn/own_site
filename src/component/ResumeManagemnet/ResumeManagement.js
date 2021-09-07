import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Resume from "../Resume/Resume";
import ResumeSlider from "../ResumeSlider/ResumeSlider";
import Footer from "../Footer/Footer";
const ResumeManagement = () => {
  return (
    <>
      <Navbar></Navbar>
      <ResumeSlider></ResumeSlider>
      <Resume></Resume>
      <Footer></Footer>
    </>
  );
};

export default ResumeManagement;
