import React from 'react'

import { NavigationDots, SocialMedia } from '../../components';
import './FloatingFooter.scss'

const FloatingFooter = () => {
  return (
    <div className="app__footer">
      <SocialMedia />
    
      <div className="copyright">
        <p className="p-text">All rights reserved</p>
        <p className="p-text">@ 2022 Tarik Neaj</p>
      </div>

    </div>
  );
}

export default FloatingFooter;