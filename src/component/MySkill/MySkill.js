import {
  faBootstrap,
  faCss3,
  faGithub,
  faHtml5,
  faJs,
  faNeos,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./MySkill.css";
const MySkill = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-6">
          <div className="progress-bar-section">
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
                <p>85%</p>
              </li>
              <li class="bootstrap">
                <p>
                  Bootstrap <FontAwesomeIcon icon={faBootstrap} />
                </p>{" "}
                <p>90%</p>
              </li>
              <li class="js">
                <p>
                  JavaScript <FontAwesomeIcon icon={faJs} />
                </p>{" "}
                <p>75%</p>
              </li>
              <li class="bootstrap">
                <p>
                  MongoDB <FontAwesomeIcon icon={faDatabase} />
                </p>{" "}
                <p>90%</p>
              </li>
              <li class="bootstrap">
                <p>
                  Heroku <FontAwesomeIcon icon={faDatabase} />
                </p>{" "}
                <p>90%</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="progress-bar-section">
            <ul>
              <li class="css">
                <p>
                  React <FontAwesomeIcon icon={faReact} />
                </p>{" "}
                <p>80%</p>
              </li>
              <li class="js">
                <p>
                  Firebase Authentication <FontAwesomeIcon icon={faFire} />
                </p>{" "}
                <p>75%</p>
              </li>
              <li class="node">
                <p>
                  Node <FontAwesomeIcon icon={faNodeJs} />
                </p>{" "}
                <p>50%</p>
              </li>
              <li class="css">
                <p>
                  Express JS <FontAwesomeIcon icon={faNodeJs} />
                </p>{" "}
                <p>80%</p>
              </li>
              <li class="node">
                <p>
                  Next Js <FontAwesomeIcon icon={faNeos} />
                </p>{" "}
                <p>58%</p>
              </li>
              <li class="css">
                <p>
                  Git/Github <FontAwesomeIcon icon={faGithub} />
                </p>{" "}
                <p>80%</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
