import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';



export function Button() {
  
    return (
      <Link to='//letsplay.filipaul.online/' target="_blank">
       <div id="wrapper">
  <a href="http://letsplay.filipaul.online/" target="_blank" rel="noreferrer" class="my-super-cool-btn">
    <div class="dots-container">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <span>Lets Play</span>
  </a>
</div>
      </Link>
   );
};