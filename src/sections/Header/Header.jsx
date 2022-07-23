import React from 'react';
import { BiChevronDownCircle } from 'react-icons/bi'

import { motion } from 'framer-motion';
import Typed from 'react-typed';

import { AppWrap, MotionWrap} from '../../wrappers';
import './Header.scss';

const Header = () => {
  return (
    <>
      <div className="app__header-content">
        <h2>I Am Tarik Neaj.</h2>
        <Typed
          className="app__header-loop"
          strings={[
            "Software Engineer",
            "Full Stack Developer",
            "Freelance Developer"
          ]}
          typeSpeed={25}
          backSpeed={25}
          startDelay={100}
          backDelay={2000}
          loop
          
        />
        <a href="#about" className="app__arrow-down">
          <motion.div
            animate={{ y: [0, 55, 35, 55, 45, 55,  0] }}
            transition={{ duration: 5, type: "spring", repeat: Infinity, times: [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1] }}
          >
            <BiChevronDownCircle size="4rem" />
          </motion.div> 
        </a>
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Header, 'app__header'), 
  'home',
  'app__primarybg'
);