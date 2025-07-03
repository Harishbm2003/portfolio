import React from "react";
import "./Education.css"; // Import the CSS file

const Education = () => {
  return (
    <div className="education-section">
     <div>
       <h1 className="education-title">Education</h1>
      <div className="timeline">
        
        {/* Higher Secondary Education */}
        <div className="timeline-item">
          <div className="timeline-date">2017-2020</div>
          <div className="timeline-content">
            <h2>Bharani Park Matric Hr Sec School</h2>
            <p>Higher Secondary Education</p>
          </div>
        </div>

        {/* Undergraduate Education */}
        <div className="timeline-item">
          <div className="timeline-date">2020-2024</div>
          <div className="timeline-content">
            <h2>Sri Ramakrishna Institute of Technology</h2>
            <p>Undergraduate</p>
          </div>
        </div>

        {/* Professional Courses */}
        <div className="timeline-item">
          <div className="timeline-date">2023-2024</div>
          <div className="timeline-content">
            <h2>Professional Courses</h2>
            <p><strong>ADVFX:</strong> IMACC 3D Animation, Coimbatore</p>
            <p><strong>MERN Stack:</strong> App Innovations, Coimbatore</p>
            <p><strong>Technologies:</strong> MongoDB, Express, React.js, Node.js</p>
          </div>
        </div>

      </div>
     </div>
    </div>
  );
};

export default Education;
