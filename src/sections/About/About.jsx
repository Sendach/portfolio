import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap} from '../../wrappers';

import { client, urlFor } from '../../client';
import './About.scss';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const fetchAbouts = async () => {
      const data = await client.fetch('*[_type == "abouts"] | order(_createdAt desc)');
      setAbouts(data);
    }
    fetchAbouts();
  }, []);

  return (
    <>
      <h2 className="head-text">
        With <span>Great Development</span> <br /> comes <span>Great Business</span>
      </h2>


      <div className="app__profiles">
        {abouts.map((about, i) => (
          <motion.div
            whileInView={{ opacity: 1}}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.35, type: 'tween' }}
            className="app__profile-item"
            key={about.title + i}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title } />
            <h2 className="bold-text">{about.title}</h2>
            <p className="p-text">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  'app__whitebg'
);