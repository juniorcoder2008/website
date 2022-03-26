import React from 'react';
import '../sass/AboutSection.sass';

const AboutSection = () => {
  return (
    <div id='about'>
      <h1>About me</h1>
      <div className="content">
        <div className="profile"></div>
        <p>Hi! I'm Samuel Thomas as mentioned above, 13 years old and love full stack app development. Through tools like Capacitor I can also create Android apps, but creating native apps with Kotlin or Java are not in my repertoire.</p>
      </div>
    </div>
  )
}

export default AboutSection