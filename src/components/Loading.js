import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Loading.css'; 
import blue from '../Images/blue.jpg';

const Loading = () => {
  return (
    <div className="loading-screen">
      <h1 className="mb-4">HARISH'S PORTFOLIO</h1>
      <div className="progress">
        <div 
          className="progress-bar progress-bar-striped progress-bar-animated custom-progress" 
          role="progressbar"
        />
      </div>
    </div>
  );
};

export default Loading;