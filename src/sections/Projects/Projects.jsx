import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrappers';
import { client, urlFor } from '../../client';
import { AiFillEye, AiFillGithub, AiOutlineCloudDownload} from 'react-icons/ai'
import './Projects.scss'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1});
  const [projects, setProjects] = useState([]);
  const [filterProject, setFilterProject]= useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await client.fetch('*[_type == "projects"]');
      data.sort((a, b) => a.order - b.order);
      setProjects(data);
      setFilterProject(data)
    }
    fetchProjects();
  }, []);

  const handleProjectFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard( [{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard( [{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterProject(projects);
      } else {
        
        setFilterProject(projects.filter((project) => project.tags.includes(item)));
      }
    }, 500)
  }

  return (
    <>
      <h2 className="head-text">
        My <span>Projects</span>
      </h2>

      <div className="app__project-filter">
        {['Front End', 'Back End', 'Game', 'All'].map((item, i) => (
          <div
            key={i}
            onClick={() => handleProjectFilter(item)}
            className={`app__project-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__project-portfolio"
      >
        {filterProject.map((project, i) => (
          <div className="app__project-item app__flex" key={i}>
            <div className="app__project-img">
              <img src={urlFor(project.imgUrl)} alt={project.name} style={{ objectFit: project.objectFit && 'cover' }} />

              <motion.div 
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__project-hover app__flex"
              >
                <a href={project.projectLink && project.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [1, 1] }}
                    whileHover={{ scale: [1, 0.75] }}
                    transition={{ duration: 0.1 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>

                <a href={project.codeLink && project.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [1, 1] }}
                    whileHover={{ scale: [1, 0.75] }}
                    transition={{ duration: 0.1 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__project-content app__flex">
              <h4 className="bold-text">{project.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{project.description}</p>

              <div className="app__project-tag app__flex">
                <p className="p-text">{project.tags && project.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Projects, 'app__project'), 
  'projects',
  'app__primarybg'
);