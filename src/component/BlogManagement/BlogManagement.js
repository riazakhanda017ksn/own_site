import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import BlogSlider from "../BlogSlider/BlogSlider";
import BlogArrangement from "../BlogArrangement/BlogArrangement";
const BlogManagement = () => {
  return (
    <>
      <Navbar></Navbar>
      <BlogSlider></BlogSlider>
      <BlogArrangement></BlogArrangement>
      <Footer></Footer>
    </>
  );
};

export default BlogManagement;
