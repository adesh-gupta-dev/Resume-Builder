import React from 'react';
import './componentCss/herocard.css'; 
// import heroCardBackground from '../assets/images/hero.card.background.png';
import heroCardHoverBackground from '../../assets/images/hero.card.hover.background.png'; // Ensure this path is correct
const Card = () => {
  return (
<div className="container-card noselect">
  <div className="canvas">
    <div className="tracker tr-1"></div>
    <div className="tracker tr-2"></div>
    <div className="tracker tr-3"></div>
    <div className="tracker tr-4"></div>
    <div className="tracker tr-5"></div>
    <div className="tracker tr-6"></div>
    <div className="tracker tr-7"></div>
    <div className="tracker tr-8"></div>
    <div className="tracker tr-9"></div>
    <div id="card">
      <div className="card-content">
        <div className="card-glare"></div>
        <div className="cyber-lines">
          <span></span><span></span><span></span><span></span>
        </div>
        <img src={heroCardHoverBackground} alt="images" height={'100%'} width={'100%'} />
        <div className="title">CYBER<br />CARD</div>
        <div className="glowing-elements">
          <div className="glow-1"></div>
          <div className="glow-2"></div>
          <div className="glow-3"></div>
        </div>
        <div className="subtitle">
          <span>ATS</span>
          <span className="highlight">Friendly</span>
        </div>
        <div className="card-particles">
          <span></span><span></span><span></span> <span></span><span></span
          ><span></span>
        </div>
        <div className="corner-elements">
          <span></span><span></span><span></span><span></span>
        </div>
        <div className="scan-line"></div>
      </div>
    </div>
  </div>
</div>
    );
    }   
    export { Card };
