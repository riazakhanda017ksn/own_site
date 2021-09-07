import React, { useEffect } from "react";
import "./AboutMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import riaz2 from "../../images/riaz2.jpg";
import AboutMeDetails from "../AboutMeDetails/AboutMeDetails";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "aos/dist/aos.css";
import Aos from "aos";
const aboutMe = [
  {
    name: "Education Skill",
    about:
      "Now  Im Studying Computer Engineering at Dhaka PolyTechnic Institute In Dhaka Bangladesh",
  },
  {
    name: "My Strategy",
    about:
      "I have Skills In html,css,bootstrap,javascript,reactJS, firebase Authentication, Express Js And also have in MongoDB",
  },
  {
    name: "Development Strategy",
    about:
      "I have Skills In html,css,bootstrap,javascript,reactJS, firebase Authentication, Express Js And also have in MongoDB",
  },
  {
    name: "My Quality",
    about:
      "I try to do everything with my mind and time so that the work is always good with best quality",
  },
];
const AboutMe = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, [0]);
  return (
    <div className="background-need">
      <div className="row">
        <div className="col-lg-6 background-need-for-style">
          <div className="">
            <div className=" row  px-5" data-aos="fade-right">
              <div className="about-me">
                <h1>
                  About <span className="text-color">Me</span>
                </h1>
                <p className="text">
                  I am Riaz Ahmed. I live In Dhaka. My Hometown Is Cumilla. I’m
                  working mini -mum of 13-14 hours every day. I love to do this
                  it’s my life everything. <br /> I have Introduce Myself In
                  Below.Now Im Studying Computer Engineering <br /> at Dhaka
                  PolyTechnic Institute In Dhaka Bangladesh And Always I try to
                  do everything with my mind and time so that the work is always
                  good with best quality.
                </p>
                <h4 className="myFont">
                  I've outlined my{" "}
                  <span style={{ color: "rgb(253, 1, 85)" }}>
                    web development strategy here
                  </span>
                </h4>
                <AboutMeDetails></AboutMeDetails>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
