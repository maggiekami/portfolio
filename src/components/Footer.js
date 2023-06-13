import "./FooterStyles.css";

import React from "react";
import { Link } from "react-router-dom";

import { FaMailBulk, FaHome, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const email = "marg.kaminska@gmail.com";
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>London, UK</p>
            </div>
          </div>
          <div>
            <h4 className="email">
              <a href={`mailto:${email}`}>
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                marg.kaminska@gmail.com
              </a>
            </h4>
          </div>
        </div>

        <div className="right">
          <div className="social">
            <Link to="https://github.com/maggiekami">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>
            <Link to="https://www.linkedin.com/in/margaret-kaminska/">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
