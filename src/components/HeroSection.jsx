import React from 'react';
import '../sass/HeroSection.sass';

import CodepenIcon from '../icons/CodepenIcon';
import YoutubeIcon from '../icons/YoutubeIcon';
import GithubIcon from '../icons/GithubIcon';

import Arrow from '../assets/Arrow';
import Dots from '../assets/Dots';

const HeroSection = () => {
  return (
    <div id='hero-section'>
      <div className="hero-title">
        <p>Frontend - Backend</p>
        <h1>Full Stack Developer</h1>
      </div>
      <p className="intro-text">Hi! I´m Samuel Thomas aka. JuniorCoder and I love programming since I´ve been 10 y/o</p>
      <div className="icons">
        <a href="https://www.youtube.com/channel/UCS19Yq0xKeFo4xVMc6ux1pA" target='_blank' rel="noreferrer"><YoutubeIcon /></a>
        <a href="https://codepen.io/thejuniorcoder" target='_blank' rel="noreferrer"><CodepenIcon /></a>
        <a href="https://github.com/juniorcoder2008/" target='_blank' rel="noreferrer"><GithubIcon /></a>
      </div>

      <Dots className='dots-01' />
      <Dots className='dots-02' />

      <a href="#projects" className='go-down'><Arrow /></a>
    </div>
  )
}

export default HeroSection