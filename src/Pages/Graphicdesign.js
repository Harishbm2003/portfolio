import React from "react";
import GD1 from "../Images/GD1.png";
import GD2 from "../Images/GD2.png";
import GD3 from "../Images/GD3.png";
import GD4 from "../Images/GD4.png";
import GD5 from "../Images/GD5.png";
import GD6 from "../Images/GD6.png";
import GD7 from "../Images/GD7.png";
import GD8 from "../Images/GD8.png";
import GD9 from "../Images/GD9.png";
import "./Graphicdesign.css";

const Graphicdesign = () => {
  const images = [GD1, GD2, GD3, GD4, GD5, GD6, GD7, GD8, GD9];

  return (
    <div className="graphicdesign-page">
      <div className="designs-wrapper">
        <h2 className="designs-title">Graphic Design Works</h2>
        <div className="designs-gallery">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Graphic Design ${index + 1}`} className="designs-image" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Graphicdesign;
