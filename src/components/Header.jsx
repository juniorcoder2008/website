import React from 'react';
import '../sass/Header.sass';

import HeaderBG from '../assets/HeaderBG';

const Header = () => {



  return (
    <header className='header' id='nav'>
      <div className="logo-container">
        <svg className='logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 958.89 489.51"><defs><style></style></defs><g id="a"/><g id="b"><g id="c"><g id="d"><path class="e" d="M769.99,364.71l-185.01,.26c-14.59,.02-24.3-15.09-18.2-28.35l92.17-200.54c3.25-7.08,10.32-11.63,18.12-11.65l223.04-.62c7.77-.02,14.83-4.54,18.09-11.59l38.82-83.82C963.15,15.15,953.47,0,938.87,0h-340.74c-7.81,0-14.9,4.54-18.17,11.64l-206.95,449.51c-6.1,13.25,3.58,28.36,18.17,28.36h339.31c7.77,0,14.84-4.5,18.13-11.55l39.54-84.81c6.19-13.27-3.51-28.47-18.16-28.45Z"/><path class="e" d="M149.14,6.05l-47.9,103.32c-3.21,6.93,1.85,14.85,9.49,14.84l215-.3c7.64-.01,12.71,7.91,9.49,14.84l-102.2,220.44c-1.71,3.69-5.4,6.05-9.47,6.05l-49.02,.04c-7.64,0-12.7-7.91-9.49-14.84l22.71-48.97c3.21-6.92-1.85-14.84-9.48-14.84H94.6c-4.07,0-7.77,2.37-9.48,6.06L.98,474.68c-3.2,6.92,1.86,14.83,9.48,14.83H303.16c4.08,0,7.79-2.37,9.49-6.08L522.17,28.36c7.18-15.6-.99-28.36-18.17-28.36H158.62c-4.07,0-7.77,2.36-9.48,6.05Z"/></g></g></g></svg>
        <div className="line"></div>
        <h1>JuniorCoder</h1>
        <HeaderBG />
      </div>
      <ul className="nav">
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skill-section">Skills</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </header>
  )
}

export default Header