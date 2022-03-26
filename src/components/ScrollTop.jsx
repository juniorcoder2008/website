import React from 'react';
import Arrow from '../assets/Arrow';

import '../sass/ScrollTop.sass';

const ScrollTop = () => {
  return (
    <a href='#nav' className='scroll-top'>
      <Arrow />
    </a>
  )
}

export default ScrollTop