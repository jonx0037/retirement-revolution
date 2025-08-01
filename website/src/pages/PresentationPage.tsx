import React from 'react';
import PresentationApp from '../PresentationApp';
import './PresentationPage.css';

const PresentationPage: React.FC = () => {
  return (
    <div className="presentation-page">
      <div className="presentation-header">
        <h1>Interactive Presentation</h1>
        <p>Navigate through our 10-slide presentation using the controls below</p>
      </div>
      <div className="presentation-container">
        <PresentationApp />
      </div>
    </div>
  );
};

export default PresentationPage;
