import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
// import React1 from "../assets/react1.jpg";
// import React2 from "../assets/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <p>I'm an aspiring full-stack web developer.</p>

        <p>
          <span className="tech">Frontend: </span> JavaScript, React, HTML, CSS,
          Sass
        </p>
        <p>
          <span className="tech">Backend: </span>Node.js, Express, JSON, MySQL,
          Knex
        </p>
        <p>
          <span className="tech">Development: </span>Axios, GitFlow, Postman,
          Jest
        </p>
      </div>
      <div className="btn-container">
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutContent;
