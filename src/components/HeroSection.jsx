import React from 'react';
import '../sass/HeroSection.sass';

import CodepenIcon from '../icons/CodepenIcon';
import YoutubeIcon from '../icons/YoutubeIcon';
import GithubIcon from '../icons/GithubIcon';

import Arrow from '../assets/Arrow';
import Dots from '../assets/Dots';

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className="hero-title">
        <p>Frontend - Backend</p>
        <h1>Full Stack Developer</h1>
      </div>
      <p className="intro-text">Hi! I´m Samuel Thomas aka. JuniorCoder and I love programming since I´ve been 10 y/o</p>
      <div className="icons">
        <YoutubeIcon />
        <CodepenIcon />
        <GithubIcon />
      </div>

      <Dots className='dots-01' />
      <Dots className='dots-02' />

      <a href="/" className='go-down'><Arrow /></a>
    </div>
  )
}

export default HeroSection