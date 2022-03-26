/* eslint-disable react-hooks/exhaustive-deps */
// Import React
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import AboutSection from './components/AboutSection';
import SkillSection from './components/SkillSection';
import ScrollTop from './components/ScrollTop';

// Import styling
import './sass/App.sass';

const App = () => {

  const tl = gsap.timeline();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    tl
      .from('header', { y: -500, duration: 1.2 })
      .from('#hero-section .hero-title', {y: -50, opacity: 0, duration: 0.8})
      .from('#hero-section .intro-text', {y: -50, opacity: 0, duration: 0.8}, '-=.5')
      .from('#hero-section .icons svg', {y: 50, opacity: 0, stagger: 0.2, duration: .5})
      .from('#hero-section .dots-01', { x: -450, duration: .8 })
      .from('#hero-section .dots-02', { x: 450, duration: .8 }, '-=.5')
      .from('#hero-section .go-down', { y: -50, opacity: 0, duration: .8 }, '-=.5')
      .from('#projects', {y: -50, duration: .5, opacity: 0})
  }, []);

  const [showScrollTop, setShowScrollTop] = useState(false);

  window.addEventListener('scroll', () => {
    if(window.scrollY >= 600) {
      setShowScrollTop(true);     
    } else {
      setShowScrollTop(false);
    }
  });

  return (
    <div>
      <Header />
      <HeroSection />
      <Projects />
      <SkillSection />
      <AboutSection />

      <footer>
        <p>© 2022 by Samuel Thomas</p>
      </footer>

      {showScrollTop ? <ScrollTop /> : ''}
    </div>
  )
}

export default App