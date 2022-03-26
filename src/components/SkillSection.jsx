import React from 'react';
import '../sass/SkillSection.sass';

const SkillSection = () => {
  return (
    <div id='skill-section'>
      <h1>My Skills</h1>
      <ul className="skills">
        <li><span>Languages:</span> HTML, Pug/Jade, CSS, Sass, JavaScript, Typescript, JSON, Python, Java, Kotlin, Markdown</li>
        <li><span>Frameworks:</span> Angular, React, Svelte, NodeJS, Deno, Flutter, React Native, Capacitor, Ionic</li>
        <li><span>Libraries:</span> jQuery, GSAP, Express, TailwindCSS, Gulp, Firebase, MongoDB/Mongoose</li>
        <li><span>Programs:</span> Adobe Creative Cloud (Photoshop, XD, Audition, Premiere Pro, After Effects, Media Encoder), Figma, Visual Studio Code, OBS Studio, Office 365</li>
      </ul>
    </div>
  )
}

export default SkillSection