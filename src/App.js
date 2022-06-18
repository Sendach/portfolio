import React from 'react';

import { About, Contact, Header, Skills, Testimonial, Projects } from './sections';
import { Navbar, FloatingFooter, NavigationDots } from './components';
import './App.scss';

const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Skills />
        <Testimonial />
        <Contact />
        <NavigationDots />
        <FloatingFooter />
      </div>
    </>

  );
}

export default App;