import React from 'react';
import './Home.css'; // Ensure the correct import
import myimg from '../Images/myimg.png'; // Adjust the path as needed
import { FaLinkedin, FaInstagram, FaEnvelope, FaDownload } from 'react-icons/fa'; // Import icons

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/HARISH B.docx'; // Ensure this file exists in your public folder
    link.setAttribute('download', 'HARISH B.docx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="homepage">
      <div className="content">
        {/* Left Side: Text Content */}
        <div className="summary">
          <h1 className="heading">HI I'M HARISH</h1>
          <p className="text">
            Passionate <span className="highlight">React.js Developer</span> with internship and project experience in building interactive, responsive UIs using  
            <span className="highlight"> React.js</span>, <span className="highlight">MERN</span>, and modern  
            <span className="highlight uppercase"> frontend</span> technologies.  
            Seeking an entry-level role to contribute and grow within a dynamic team.
          </p>

        
          <div className="social-media">
            <a href="https://www.linkedin.com/in/harish-balamurali-ba7a14205" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://www.instagram.com/_harish.bm?igsh=MXVldDh0OGI3MHEwOA==" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="mailto:your-email@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={30} />
            </a>
          </div>

          {/* Download CV Button (Below Icons) */}
          <button onClick={handleDownload} className="download-cv">
            <FaDownload /> Download CV
          </button>
        </div>

        {/* Right Side: Profile Image */}
        <div className="image-container">
          <img src={myimg} alt="Profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
