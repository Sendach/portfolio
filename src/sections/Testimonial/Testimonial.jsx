import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrappers';
import { client, urlFor } from '../../client';
import './Testimonial.scss'

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = await client.fetch('*[_type == "testimonials"]');
      setTestimonials(data);
    }

    const fetchBrands = async () => {
      const data = await client.fetch('*[_type == "brands"]');
      setBrands(data);
    }

    fetchTestimonials();
    fetchBrands();
  }, []);


  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  const testimonial = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(testimonial.imageurl)} alt="testimonial" />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonial.feedback}</p>
              <div>
                <h4 className="bold-text">{testimonial.name}</h4>
                <h6 className="p-text">{testimonial.role}</h6>
                <p className="p-text">{testimonial.company}</p>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>
            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
            >
              <img src={urlFor(brand.imgUrl)} alt={brand.name} />

            </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonials'), 
  'testimonials',
  'app__primarybg'
);