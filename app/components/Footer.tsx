import React from 'react'
import Link from 'next/link'

function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer className="footer bg-base-300 text-base-content items-center p-4 font-josefin">
        <aside className="grid-flow-col items-center">
          <img src="/res/logo.svg" alt="logo" className="h-20 w-20 opacity-40" />
          <p>Copyright © {new Date().getFullYear()} - CaptainAlpha04 - All right reserved <br />
          Fixing code and killing bugs since 2016</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <Link href="#home" className='link link-hover'>Home</Link>
            <Link href="#about" className='link link-hover'>About</Link>
            <Link href="#experience" className='link link-hover'>Experience</Link>
            <Link href="#projects" className='link link-hover'>Projects</Link>
            <Link href="#contact" className='link link-hover'>Contact</Link>
        </nav>
      </footer>
    )
}

export default Footer
