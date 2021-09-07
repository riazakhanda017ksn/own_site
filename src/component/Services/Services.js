import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAd,
  faClipboardCheck,
  faCode,
  faLaptopCode,
  faLightbulb,
  faMoneyBill,
  faPhotoVideo,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCreativeCommons,
  faServicestack,
} from "@fortawesome/free-brands-svg-icons";
import "aos/dist/aos.css";
import Aos from "aos";
import ServiceItems from "../ServiceItems/ServiceItems";
import one from "../../images/design.e5323b41.jpg";
import two from "../../images/ptpt.jpg";
import three from "../../images/payment.e6cfa018.jpg";
import four from "../../images/r3.jpg";
import five from "../../images/ttc.jpg";
import six from "../../images/lastP.jpg";
const Services = () => {
  const myServices = [
    {
      name: "Web Design",
      about:
        "Web design is a similar process of creation, with the intention of presenting. I can do unique design provide if you want, and I can look at any template and copy exactly.I give 100% guarantee in all of them.",
      image: one,
    },
    {
      name: "Web Development",
      about:
        "The website is built by web language that’s why we need to code for every website. it’s very important to have hand coding, clean and developer friendly coding. I give 100% guarantee in all of them.",
      image: two,
    },
    {
      name: "Payment System",
      about:
        "Online store and shopping I am capable of creating a fully functional online store with payment gateway. Using your e-commerce website and service applications, I can easily make a payment.",
      image: three,
    },
    {
      name: "Brand Identity",
      about:
        "The website is built by web language that’s why we need to code for every website. it’s very important to have hand coding, clean and developer friendly coding. I give 100% guarantee in all of them.",
      image: four,
    },
    {
      name: "Adobe PhotoShop",
      about:
        "The website is built by web language that’s why we need to code for every website. it’s very important to have hand coding, clean and developer friendly coding. I give 100% guarantee in all of them.",
      image: five,
    },
    {
      name: "Website Done",
      about:
        "As soon as we have reviewed everything, we are going to the final step and publishing it for everyone. As a project manager, I always ensure that the clients are supported to the fullest extent",
      image: six,
    },
  ];
  return (
    <div className=" service-bg ">
      <div className="text-center my-services">
        <h6>What can I do for you</h6>
        <h1>My Services</h1>
        <p>
          Here are all my services. I provide all the services here. And I am
          comfortable with these and also in Expertise .If there is any
          confusion in providing these services, you must share it with me .
        </p>
      </div>
      <div className="container mt-5">
        <div className="row">
          {myServices.map((service) => (
            <ServiceItems items={service}></ServiceItems>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
