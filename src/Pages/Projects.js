import React from "react";
import { FaShoppingCart, FaFilm, FaUtensils } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    title: "E-commerce Website",
    description: [
      'Developed a <strong class="highlight">E-commerce website </strong>using React.js and Redux for efficient state management.',
      "Designed a responsive UI with Material UI and Bootstrap, implementing key features like product listing, filtering, cart management, authentication, and secure checkout.",
      "Enhanced performance with efficient APIs and seamless payments."
    ],
    icon: <FaShoppingCart className="icon" />,
},

  
  {
    title: "Movie Booking Website",
    description: [
      'The <strong class="highlight">Movie Booking Website</strong> is built using React.js for the frontend & ',
      "MongoDB for the database, allowing users to browse movies, select showtimes, and book tickets seamlessly.",
      "Upon booking, an e-ticket with a QR code is generated, containing details like movie name, theater, seat number, date, and time.",
    
    ],
    icon: <FaFilm className="icon" />,
  },
  {
    title: "Food Delivery Website",
    description: [
      'Created a <strong class="highlight">Food delivery Website</strong> with real-time order tracking.',
      "Developed interactive UI elements and smooth navigation using React.js.",
      "Integrated API for restaurant listings, menu selection, and checkout process.",
      "Used Redux for state management and efficient handling of user sessions.",
    ],
    icon: <FaUtensils className="icon" />,
  },
];

export default function ProjectsPage() {
  return (
    <div className="projects-section">
   
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-box">
            <div className="icon-container">{project.icon}</div>
            <h2 className="project-title">{project.title}</h2>
            <ul className="project-description">
              {project.description.map((desc, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: desc }}></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
