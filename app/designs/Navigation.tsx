'use client';
import React, { useEffect, useState } from 'react';
import {Link, Events } from 'react-scroll';

const Menu = () => {
  const [innerWidth, setInnerWidth] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    // Set initial width
    setInnerWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (innerWidth < 768) {
    return <h1></h1>;
  } else {
    return (
      <nav className="-ml-32 flex justify-center items-center space-x-4 text-base-content font-josefin text-md">
        <Link to="home" smooth={true} duration={500} 
        className={`cursor-pointer nav-link relative ${activeSection === 'home'? 'nav-selected': ''}`}
        onClick={()=>{setActiveSection('home')}}>Home</Link>
        <span className="dividing-line"></span>
        <Link to="about" smooth={true} duration={500} 
        className={`cursor-pointer nav-link relative ${activeSection === 'about'? 'nav-selected': ''}`}
        onClick={()=>{setActiveSection('about')}}>About</Link>
        <span className="dividing-line"></span>
        <Link to="projects" smooth={true} duration={500} 
        className={`cursor-pointer nav-link relative ${activeSection === 'projects'? 'nav-selected': ''}`}
        onClick={()=>{setActiveSection('projects')}}>Projects</Link>
        <span className="dividing-line"></span>
        <Link to="contact" smooth={true} duration={500} 
        className={`cursor-pointer  ${activeSection === 'contact'? 'nav-selected': ''}`}
        onClick={()=>{setActiveSection('contact')}}>Contact</Link>
      </nav>
    );
  }
};

export default Menu;
