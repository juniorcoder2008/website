// Import React
import React from 'react';

// Import components
import Header from './components/Header';
import HeroSection from './components/HeroSection';

// Import styling
import './sass/App.sass';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  )
}

export default App