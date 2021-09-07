import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import swal from "sweetalert";
import Aos from "aos";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_in1cinu",
        "template_beh3o3b",
        e.target,
        "user_GFZkak7lkFm9Ad6G3J8K1"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal(
            "Thanks for your message!",
            "Keep checking back with us",
            "success"
          );
        },
        (error) => {
          console.log(error.text);
          swal(
            "oops something went wrongs",
            "Please try again later",
            "danger"
          );
        }
      );
    e.target.reset();
  }

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, [0]);
  return (
    <div className="contact">
      <div className="my-services ">
        <div className="text-center">
          <h6>If you need any help please </h6>
          <h1> Get in touch</h1>
          <p>
            If you would like to hear from me, please email me. Please feel free
            to contact us if you have a question or just want to say hi. Please
            expect a reply from me as soon as possible!
          </p>
        </div>
      </div>
      <div className="container" data-aos="fade-right">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 mt-5 pt-4">
            <div className="button-customize">
              <form onSubmit={sendEmail}>
                <div className="contact-flex">
                  <p>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="name*"
                    />
                  </p>

                  <p>
                    <input
                      type="email"
                      name="email"
                      placeholder="email*"
                      required
                    />
                  </p>
                </div>

                <div className="form ">
                  <p>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="subject*"
                    />
                  </p>
                </div>
                <div className="another-div ">
                  <p>
                    <textarea
                      placeholder=" message*"
                      textarea
                      name="message"
                      cols="30"
                      rows="2"
                    ></textarea>
                  </p>
                </div>
                <button type="submit">send</button>
              </form>
            </div>
            <div className="social-icon d-flex mt-5 pt-5 ">
              <p style={{ color: "#fafafa" }}>
                I can be reached via social media -
                <a href="https://www.facebook.com/nisshongojiboner.pothik/">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.linkedin.com/in/riaz-ahmed-akhanda-752b84210/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/riazakhanda017ksn"
                  className="visiblity"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
