import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection(props) {

  return (
    <div className={props.showConfirmationPopup ? 'hero-container-opacity' : 'hero-container'}>
      <video src='/videos/shutterstock_31249135.mp4' autoPlay loop muted />
      <h1>MAISON DU VAPEUR</h1>
      {/* <p>is coming up soon</p> */}
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;