import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-section">
    

      <div className="skills-container">
        {/* Technical Skills */}
        <div className="skills-box">
          <div className="skills-category">
            <h2>Technical Skills</h2>
            <ul>
              <li>
                <strong>Frontend:</strong> React.js, Redux, HTML5, CSS3, JavaScript, Bootstrap
                <div className="skill-level-container">
                  <div className="skill-fill skill-frontend"></div>
                </div>
              </li>
              <li>
                <strong>Backend:</strong> Node.js (Basics), Express.js (Basics)
                <div className="skill-level-container">
                  <div className="skill-fill skill-backend"></div>
                </div>
              </li>
              <li>
                <strong>State Management:</strong> Redux
                <div className="skill-level-container">
                  <div className="skill-fill skill-state"></div>
                </div>
              </li>
              <li>
                <strong>Tools & Platforms:</strong> Git, GitHub, Postman,<br/> VS Code
                <div className="skill-level-container">
                  <div className="skill-fill skill-tools"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skills-box">
          <div className="skills-category">
            <h2>Soft Skills</h2>
            <ul>
              <li>Problem-Solving</li>
              <li>Team Collaboration</li>
              <li>Communication</li>
              <li>Time Management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
