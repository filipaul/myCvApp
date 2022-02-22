import React from 'react';
import { Button } from '../Button/Button';

import "./HeroSection.css";



function HeroSection() {
  return (
  <div className="hero-container">
      <h1>HELLO WORLD,</h1>
      <p>My name is Filip Paul.</p>
      <div className="hero-btns">
          <Button/>
      </div>
  </div>
  )
}

export default HeroSection;
