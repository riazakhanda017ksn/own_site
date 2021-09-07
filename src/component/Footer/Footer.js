import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const getYear = date.getFullYear();
  console.log(getYear);
  return (
    <div className="footer">
      <div className="container need-postion-for-footer">
        <div className="row">
          <div className="col-lg-3">
            <div className="design">
              <p>@ {getYear},design and develop by Riaz</p>
            </div>
          </div>
          <div className="col-lg-5"></div>
          <div className="col-lg-4">
            <div className="list-map">
              <ul>
                <li>
                  privacy policy <span className="need-color">|</span>
                </li>
                <li>
                  Site map <span className="need-color">|</span>
                </li>
                <li>All right are reserved</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
