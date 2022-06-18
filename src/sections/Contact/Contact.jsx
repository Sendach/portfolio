import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

import { images} from '../../constants';
import { AppWrap, MotionWrap } from '../../wrappers';
import { client } from '../../client';
import './Contact.scss'

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);  

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }
  
  const handleSubmit = async (e) => {
    setLoading(true);
    console.log('1')
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }
    console.log('2')
    const success = await client.create(contact);
    if (success) {
      setLoading(false);
      setIsFormSubmitted(true)
    }
    console.log('3')
    console.log('sending email')
    console.log(e.target.value)
    emailjs.sendForm('service_iv7jtoo', 'template_wlmfrjx', form.current, 'DFlc-45pQ7bIvwdhz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
      <h2 className="head-text">Get in touch with me!</h2>

      <div className="app__contact-cards">
        <div className="app__contact-card">
          <img src={images.email} alt="email" />
          <a href="mailto:contact@tarikneaj.com" className="p-text">contact@tarikneaj.com</a>
        </div>
        <div className="app__contact-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +46 072 321-2455" className="p-text">+46 072 321-2455</a>
        </div>
      </div>

      {!isFormSubmitted 
        ?
        <div ref={form} className="app__contact-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea 
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={(e) => handleSubmit(e)}>{loading ? 'Sending...' : 'Send Message'}</button>
        </div>
        :
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      }
    </>
  );
}

export default AppWrap(
  MotionWrap(Contact, 'app__contact'), 
  'contact',
  'app__whitebg'
);