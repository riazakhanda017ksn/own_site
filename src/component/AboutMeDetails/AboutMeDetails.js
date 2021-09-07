import React from "react";
import "./AboutMeDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faDownload } from "@fortawesome/free-solid-svg-icons";
const AboutMeDetails = () => {
  return (
    <div>
      <div className="skill-progressBar">
        <ul>
          <li class="html">
            <p>
              HTML <FontAwesomeIcon icon={faHtml5} />
            </p>{" "}
            <p>95%</p>
          </li>
          <li class="css">
            <p>
              CSS <FontAwesomeIcon icon={faCss3} />
            </p>{" "}
            <p>90%</p>
          </li>
          <li class="bootstrap">
            <p>
              Bootstrap <FontAwesomeIcon icon={faBootstrap} />
            </p>{" "}
            <p>96%</p>
          </li>
          <li class="js">
            <p>
              JavaScript <FontAwesomeIcon icon={faJs} />
            </p>{" "}
            <p>70%</p>
          </li>
          <li class="react">
            <p>
              React <FontAwesomeIcon icon={faReact} />
            </p>{" "}
            <p>80%</p>
          </li>
          <li class="node">
            <p>
              Node <FontAwesomeIcon icon={faNodeJs} />
            </p>{" "}
            <p>60%</p>
          </li>
          <li class="express">
            <p>
              Express JS <FontAwesomeIcon icon={faNodeJs} />
            </p>{" "}
            <p>80%</p>
          </li>
          <li class="mongodb">
            <p>
              MongoDB <FontAwesomeIcon icon={faDatabase} />
            </p>{" "}
            <p>89%</p>
          </li>
          <li class="heroku">
            <p>
              Heroku <FontAwesomeIcon icon={faDatabase} />
            </p>{" "}
            <p>92%</p>
          </li>
        </ul>

        <div className="resume-button">
          <a
            href="https://drive.google.com/file/d/1VYLQFwWcL7h3KkLaAig9MvtNlNO4xaHw/view?fbclid=IwAR2lFsp-h-GUozgpUj-Dn6gKa_SPuG8wj1SQ8f_Ae5qGfna-MtCoCCdMvCs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              Download Resume <FontAwesomeIcon icon={faDownload} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMeDetails;
