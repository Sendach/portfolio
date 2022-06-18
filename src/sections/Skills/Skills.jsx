import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactToolTip from 'react-tooltip'

import { AppWrap, MotionWrap } from '../../wrappers';
import { client, urlFor } from '../../client';
import './Skills.scss'

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const data = await client.fetch('*[_type == "skills"] | order(_createdAt asc)');
      setSkills(data);
    }

    const fetchExperiences = async () => {
      const data = await client.fetch('*[_type == "experiences"] | order(_createdAt asc)');
      console.log(data)
      setExperience(data);
    }

    fetchSkills();
    fetchExperiences();
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1]}}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name && skill.name}
            >
              <div className="app__flex">
                {skill.icon &&<img src={urlFor(skill.icon)} alt={skill.name && skill.name} />}
              </div>
              <p className="p-text">{skill.name && skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experience.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year&& experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year && experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-jobs">
                {experience.jobs.map((job) => (
                  <>
                    <motion.div
                    whileInView={{ opacity: [0, 1]}}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-job"
                    data-tip
                    data-for={job.name}
                    key={job.name}
                    >
                      <h4 className="bold-text">{job.name}</h4>
                      <p className="p-text">{job.company}</p>
                    </motion.div>
                    <ReactToolTip 
                      id={job.name}
                      effect="solid"
                      arrowColor="#fff"
                      class="skills-tooltip"
                    >
                      {job.desc}
                    </ReactToolTip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}          
        </motion.div>
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'), 
  'skills',
  'app__whitebg'
);