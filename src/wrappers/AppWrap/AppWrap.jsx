import React, { useRef, useEffect } from 'react'

import { NavigationDots, SocialMedia } from '../../components';

import './AppWrap.scss';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <div   className="app__wrapper section app__flex">
        <Component />
      </div>

      <NavigationDots active={idName} />
    </div>
  );
}

export default AppWrap;