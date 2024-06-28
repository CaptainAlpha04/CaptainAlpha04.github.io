'use client'
import React, {useState, useEffect} from 'react';
import Navigation from '../designs/Navigation';
import ThemeSwitch from '../designs/themeSwitch';

function Header() {

  const [innerWidth, setInnerWidth] = useState(0);
  
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
  
  if(innerWidth < 1200) {
    return (
      <div className="navbar bg-base-100 p-3 px-5 fixed top-0 bg-opacity-30 z-10 flex justify-between backdrop-blur-md text-base-content">
      
      <Navigation />

      <div className="font-josefin text-md gap-1 text-center z-10">
          <h1 className='font-extrabold'>MUHAMMAD</h1>
          <h1 className='font-light'>ALI</h1>
          <h1 className='font-extrabold'>IMRAN</h1>   
    </div>

    <ThemeSwitch />
    </div>

    )

  } else {
  return (
    <div className="navbar bg-base-100 p-3 px-5 fixed top-0 bg-opacity-30 z-10 flex justify-between backdrop-blur-md text-base-content">
        {/* Branding */}
        <div className="font-josefin text-md gap-1">
            <h1 className='font-extrabold'>MUHAMMAD</h1>
            <h1 className='font-light'>ALI</h1>
            <h1 className='font-extrabold'>IMRAN</h1>   
      </div>

        {/* Navigation */}
        <Navigation />
        
        {/* Theme Switch */}
        <ThemeSwitch />
      </div>
  )
}}

export default Header
