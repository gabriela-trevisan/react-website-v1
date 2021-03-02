import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/Digital Human Face.mp4' autoPlay loop muted /> */}
      {/* <img src="/images/img-1.jpg"></img> */}
      <h1>GABRIELA TREVISAN LETURIONDO</h1>
      <div className='hero-btns'>
        <a href={"https://www.google.com"} target="_blank">
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          ><i class="fab fa-linkedin"/>
        </Button></a>
        {/* </Link> */}
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          ><i class="fab fa-github"/>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          ><i class="fab fa-itch-io"/>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          ><i class="fab fa-google"/>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
