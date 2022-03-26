import React from 'react';
import '../sass/Projects.sass';

import solveScreen from '../img/solve-screenshot.png';
import taekwondoAppScreen from '../img/taekwondo-app-screenshot.png';
import tsProjectScreen from '../img/ts-project-screenshot.png';
import GithubIcon from '../icons/GithubIcon';
import GlobeIcon from '../icons/GlobeIcon';

const Projects = () => {
  return (
    <div id='projects'>
      <h1 className='heading'>My Projects</h1>

      <div className="solve project">
        <h1>Solve</h1>
        <p className="frameworks">Frameworks: <span>Svelte, Firebase, TailwindCSS</span></p>
        <p className='desc'>JC Solve (JuniorCoder Solve) is a webapp that allows teachers/lecturers and students to manage assignments. The teacher/lecturer can create a free account and log in with it to create an assignment. Here <span>. . .</span></p>
        <div className="icons">
          <a href="https://github.com/juniorcoder2008/solve" target='_blank' rel="noreferrer"><GithubIcon /></a>
          <a href="https://solve.juniorcoder.de/" target='_blank' rel="noreferrer"><GlobeIcon /></a>
        </div>
        <img src={solveScreen} alt='' />
      </div>
      <div className="taekwondo project">
        <h1>Taekwondo App</h1>
        <p className="frameworks">Frameworks: <span>React, Capacitor</span></p>
        <p className='desc'>In this app you can look up all hyongs from first to eighth and also generate random exercises for them. This happens based on the listed movement types for each hyong.</p>
        <div className="icons">
          <a href="https://github.com/juniorcoder2008/taekwondo-app" target='_blank' rel="noreferrer"><GithubIcon /></a>
        </div>
        <img src={taekwondoAppScreen} alt='' />
      </div>
      <div className="solve project">
        <h1>Typescript Project Command</h1>
        <p className="frameworks">Frameworks: <span>Gulp, Typescript, Sass</span></p>
        <p className='desc'>This project command automatically creates a typescript project and starts a live server with BrowserSync. You don´t have to worry about compiling the TS, because here everything is automated with Gulp. In the app folder are all files in which the code is written. A mandatory index.html, a style fold <span>. . .</span></p>
        <div className="icons">
          <a href="https://github.com/juniorcoder2008/typescript-project" target='_blank' rel="noreferrer"><GithubIcon /></a>
        </div>
        <img src={tsProjectScreen} alt='' />
      </div>
    </div>
  )
}

export default Projects