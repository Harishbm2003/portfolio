import React, { useState } from "react";
import "./Courses.css";
import MERN from "../Images/MERN.jpg";
import IMACC from "../Images/IMACC.jpg";

const Courses = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <>
      <section className="courses-section">
        <h1 className="courses-title">Course Completion Certifications</h1>

        {/* MERN Stack Certification */}
        <div className="course-item">
          <img
            src={MERN}
            alt="MERN Stack Certification"
            className="course-image"
            onClick={() => setFullscreenImage(MERN)}
          />
          <div className="course-text">
            <h2 className="course-heading">MERN Stack Certification</h2>
            <p className="course-description">
              Successfully completed the <span className="highlight">MERN Stack</span> course covering MongoDB, Express.js, React.js, and Node.js at <span className="highlight">AITECH Academy</span>.
            </p>
          </div>
        </div>

        {/* Graphic Design Certification */}
        <div className="course-item">
          <img
            src={IMACC}
            alt="Graphic Design Certification"
            className="course-image"
            onClick={() => setFullscreenImage(IMACC)}
          />
          <div className="course-text">
            <h2 className="course-heading">Graphic Design Certification</h2>
            <p className="course-description">
              Successfully completed a <span className="highlight">Graphic Design</span> course, which included training in Adobe applications.
            </p>
          </div>
        </div>
      </section>

      {/* Fullscreen Image Viewer */}
      {fullscreenImage && (
        <div className="fullscreen-container" onClick={() => setFullscreenImage(null)}>
          <img src={fullscreenImage} alt="Fullscreen View" className="fullscreen-image" />
          <button className="close-btn" onClick={() => setFullscreenImage(null)}>X</button>
        </div>
      )}
    </>
  );
};

export default Courses;
