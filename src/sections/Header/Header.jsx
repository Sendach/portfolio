import React from 'react';

import { AppWrap, MotionWrap} from '../../wrappers';

import './Header.scss';

const Header = () => {
  return (
    <>
      <h2 className='header-text'>
        <><span>const</span> greeting <span>=</span> <span className="string">'Hello!'</span><span>;</span></> <br />
        <><span>const</span> name <span>=</span> <span className="string">'Tarik Neaj'</span><span>;</span></> <br />
        <><span>const</span> role <span>=</span> <span className="string">'Full Stack Developer'</span><span>;</span></> <br /><br /> 
        <>{'<Header '}</> <br />
        <span className="component">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'greeting'}<span >=</span><span className="variable">{'{'}greeting{`}`}</span></span> <br />
        <span className="component">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'name'}<span >=</span><span className="variable">{'{'}name{`}`}</span></span> <br />
        <span className="component">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'role'}<span >=</span><span className="variable">{'{'}role{`}`}</span></span> <br />
        <>{'>'}</>
      </h2>
    </>
  );
}

export default AppWrap(
  MotionWrap(Header, 'app__header'), 
  'home',
  'app__primarybg'
);