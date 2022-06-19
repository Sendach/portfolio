import React from 'react';
import { IoArrowDownOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap} from '../../wrappers';
import './Header.scss';

const Header = () => {
  return (
    <>
      <h1>Hey, my name is </h1>
      <h1 className="hero-static">
        <span>Tarik Neaj</span>
      </h1>
      <h1>I'm a <span>Full Stack Developer</span></h1>
      <a href="#about" className="app__arrow-down">
        <motion.div
          animate={{ scale: [1 , 0.9, 1] }}
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
        >
          <IoArrowDownOutline size="4rem" />
        </motion.div> 
      </a>
    </>
  );
}

export default AppWrap(
  MotionWrap(Header, 'app__header'), 
  'home',
  'app__primarybg'
);

{/* <h2 className='header-text'>
<><span>const</span> greeting <span>=</span> <span className="string">'Hello!'</span><span>;</span></> <br />
<><span>const</span> name <span>=</span> <span className="string">'Tarik Neaj'</span><span>;</span></> <br />
<><span>const</span> role <span>=</span> <span className="string">'Full Stack Developer'</span><span>;</span></> <br /><br /> 
<>{'<Header '}</> <br />
<span className="component">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'greeting'}<span >=</span><span className="variable">{'{'}greeting{`}`}</span></span> <br />
<span className="component">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'name'}<span >=</span><span className="variable">{'{'}name{`}`}</span></span> <br />
<span className="component">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'role'}<span >=</span><span className="variable">{'{'}role{`}`}</span></span> <br />
<>{'/>'}</>
</h2> */}