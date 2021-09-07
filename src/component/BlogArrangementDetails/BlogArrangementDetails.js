import React, { useEffect, useState } from "react";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import loader from "../../images/loading.a5f3206c.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ClockLoader, RingLoader } from "react-spinners";
const BlogArrangementDetails = (props) => {
  const { image, name, postOne, postTwo, link } = props.blogItems;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  useEffect(() => {
    Aos.init({
      duration: 8000,
    });
  }, [0]);
  return (
    <div className="col-lg-12" data-aos="fade-up">
      <div className="blog-main-div">
        {image.length === 0 ? (
          <div className="text-center">
            <ClockLoader color={"#FD0155"} loading={loading} size={150} />
          </div>
        ) : (
          <LazyLoadImage alt={image} height="100%" src={image} width="100%" />
        )}

        <div className="social-icon d-flex mt-5">
          <p className="font-changing" style={{ color: "#DDD" }}>
            For more blogs, follow us on -
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
        <div className="text-sizing">
          <h2>{name}</h2>
          <p>{postOne}</p>
          <p>{postTwo}</p>
        </div>
        <div className="text-position">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogArrangementDetails;
