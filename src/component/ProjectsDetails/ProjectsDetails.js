import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import "./ProjectsDetails.css";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import loader from "../../images/loading.a5f3206c.gif";
import AwesomeSlider from "react-awesome-slider";
import Aos from "aos";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ProjectsDetails = (props) => {
  const { name, githubOne, githubTwo, liveLink, image, postOne, postTwo } =
    props.projects;

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, [0]);
  return (
    <>
      <div className="col-lg-12 mt-5 " data-aos="fade-right">
        <div className="blog-main-div">
          <LazyLoadImage
            alt={image}
            height="100%"
            src={image} // use normal <img> attributes as props
            width="100%"
          />

          <div className="flex-items-for-preview mt-5">
            <p className="font-changing-of-caption" style={{ color: "#DDD" }}>
              Click here for client, server, and live sites -{" "}
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                Live Site
              </a>
              <a href={githubOne} target="_blank" rel="noopener noreferrer">
                Client Site
              </a>
              <a href={githubTwo} target="_blank" rel="noopener noreferrer">
                Server Site
              </a>
            </p>
          </div>
          <div className="text-sizing">
            <h2>{name}</h2>
            <p>{postOne}</p>
            <p>{postTwo}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsDetails;
