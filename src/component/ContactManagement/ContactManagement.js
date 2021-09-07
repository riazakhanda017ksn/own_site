import React from "react";
import Contact from "../Contact/Contact";
import ContactSlider from "../ContactSlider/ContactSlider";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const ContactManagement = () => {
  return (
    <>
      <Navbar></Navbar>
      <ContactSlider></ContactSlider>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default ContactManagement;
