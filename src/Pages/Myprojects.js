import React from "react";
import "./Myprojects.css";
import po1 from "../Images/po1.png";
import po2 from "../Images/po2.png";
import po3 from "../Images/po3.png";
import po4 from "../Images/po4.png";
import po5 from "../Images/po5.png";
import po6 from "../Images/po6.png";
import po7 from "../Images/po7.png";
import po8 from "../Images/po8.png";
import po9 from "../Images/po9.png";
import po10 from "../Images/po10.png";
import po11 from "../Images/po11.png";
import po12 from "../Images/po12.png";
import po13 from "../Images/po13.png";
import po14 from "../Images/po14.png";
import po15 from "../Images/po15.png";
import po16 from "../Images/po16.png";
import po17 from "../Images/po17.png";
import po18 from "../Images/po18.png";
import po19 from "../Images/po19.png";
import po20 from "../Images/po20.png";
import po21 from "../Images/po21.png";
import po22 from "../Images/po22.png";
import po23 from "../Images/po23.png";
import po25 from "../Images/po25.png";
import po26 from "../Images/po26.png";

const MyProjects = () => {
  return (
    <div className="myprojects-container">
      <h2 className="projects-title">Featured Projects</h2>
      <h3 className="projects-subtitle">Using HTML and CSS</h3>
      <div className="projects-grid">
        {[po12, po13, po14].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`po${12 + index}`}
            className={`project-image ${index === 2 ? "last-image-center" : ""}`} // Center po14
          />
        ))}
      </div>

      <h2 className="projects-title">Clone Projects</h2>
      <h3 className="projects-subtitle">KFC Website (React JS, MongoDB)</h3>
      <div className="projects-grid">
        {[po15, po16, po17, po18, po19, po20, po21, po22, po23, po25, po26].map(
          (img, index) => (
            <img
              key={index}
              src={img}
              alt={`po${15 + index}`}
              className={`project-image ${index === 10 ? "last-image-center" : ""}`} // Center po26
            />
          )
        )}
      </div>
 
      <h2 className="projects-subtitle">Movie Booking Website</h2>
     
      <div className="projects-grid">
        {[po1, po2, po3, po4, po5, po6, po7, po8, po9, po10, po11].map(
          (img, index) => (
            <img
              key={index}
              src={img}
              alt={`po${index + 1}`}
              className={`project-image ${index === 10 ? "last-image-center" : ""}`} // Center po11
            />
          )
        )}
      </div>
    </div>
  );
};

export default MyProjects;
