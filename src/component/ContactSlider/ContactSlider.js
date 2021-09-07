import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered } from "@fortawesome/free-solid-svg-icons";
import video1 from "../../video/newV/pexels-pavel-danilyuk-5495783.mp4";
import video2 from "../../video/pexels-hugo-butery-7272375.mp4";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";

const ContactSlider = () => {
  return (
    <div className="video-section">
      <video src={video1} muted loop autoPlay></video>
      <div className="video-overly"></div>
      <div className="text container-fluid mt-5 animate__animated animate__fadeInLeft need-padding pb-5 ">
        <div className="pb-5 mb-5">
          <div className="need-padding ">
            <h5 className="pt-5">Welcome To My World</h5>
            <h1>
              I'm <span>Riaz</span>
            </h1>
            <div className="visible">
              <h1 className="customize ">
                {" "}
                I'm A{" "}
                <span className="need-more-position">
                  <Typewriter
                    options={{
                      strings: [
                        "Web Designer",
                        "Web Developer",
                        "MERN Stack Developer",
                        "React JS Developer",
                        "Javascript Developer",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />{" "}
                </span>
              </h1>
            </div>
            <div className="notVisible">
              <h1 className="customize ">
                {" "}
                I'm A{" "}
                <span className="need-more-position">
                  <Typewriter
                    options={{
                      strings: [
                        "Web Designer",
                        "Web Developer",
                        "ReactJS Developer",
                        "JS Developer",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />{" "}
                </span>
              </h1>
            </div>
            <p style={{ lineHeight: "34px" }}>
              Web Design & Development is my passion , Always I Do Hard Work To
              Make it Success <br />I Always Try To Make Something Better Than
              Others.
            </p>
            <div className="social-icon d-flex mt-5">
              <p className="font-changing">
                Visit My Social Media -
                <a href="https://www.facebook.com/nisshongojiboner.pothik/">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.linkedin.com/in/riaz-ahmed-akhanda-752b84210/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/riazakhanda017ksn">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSlider;
