'use client';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import useActiveSection from '../hooks/useActiveSection';

const Menu = () => {
  const [innerWidth, setInnerWidth] = useState(0);
  const sectionIds = ['home', 'about', 'projects', 'contact'];
  const { activeSection, setActiveSection, sectionRefs } = useActiveSection(sectionIds);

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

  if (innerWidth < 1200) {
    return (
      <>
      <label className="btn btn-ghost swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />

        {/* hamburger icon */}
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 512 512">
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        {/* close icon */}
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 512 512">
          <polygon
            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
      </>
    )
  } else {
    return (
      <nav className="-ml-32 flex justify-center items-center space-x-4 text-base-content font-josefin text-md">
        <Link to="home" smooth={true} duration={500} 
        className={`cursor-pointer nav-link relative ${activeSection === 'home'? 'nav-selected': ''}`}
        onClick={() => setActiveSection('home')}>Home</Link>
        <span className="dividing-line"></span>
        <Link to="about" smooth={true} duration={500} 
        className={`cursor-pointer nav-link relative ${activeSection === 'about'? 'nav-selected': ''}`}
        onClick={() => setActiveSection('about')}>About</Link>
        <span className="dividing-line"></span>
        <Link to="projects" smooth={true} duration={500} 
        className={`cursor-pointer nav-link relative ${activeSection === 'projects'? 'nav-selected': ''}`}
        onClick={() => setActiveSection('projects')}>Projects</Link>
        <span className="dividing-line"></span>
        <Link to="contact" smooth={true} duration={500} 
        className={`cursor-pointer nav-link relative  ${activeSection === 'contact'? 'nav-selected': ''}`}
        onClick={() => setActiveSection('contact')}>Contact</Link>
      </nav>
    );
  }
};

export default Menu;
