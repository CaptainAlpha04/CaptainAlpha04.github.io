import React from 'react'
import Link from 'next/link'
//import {Link} from 'react-scroll';

function Page() {
  return (
    <>
    {/* Home */}
      <section id="home" className="w-screen h-screen mx-10 flex flex-col font-josefin">
        <div className='mt-32'>
        <div className="max-w-screen w-96 max-h-screen h-96 bg-gradient-conic from-cyan-500 to-purple-500 blur-3xl rounded-full absolute right-24 top-64 animate-spin -z-10"></div>
        <div className="max-w-full w-96 max-h-screen h-96 bg-gradient-conic from-cyan-500 to-purple-500 blur-3xl rounded-full animate-pulse absolute right-64 top-48 -z-10"></div>
        <div className="absolute right-20 z-1">
          <img src="/res/adam.png" alt="Avatar" className='h-screen min-h-screen' />
        </div>
        </div>
        <div className='p-20 w-1/2'>
          <div>
            <h1 className='text-6xl font-josefin text-balance font-light'>In a realm of <br />
            <b className='bg-gradient-to-l from-cyan-500 to-emerald-500 bg-clip-text text-transparent font-bold' >bytes and pixels</b>,
            <br /> I am the <br /> 
            <b className='bg-gradient-to-l from-purple-500 to-indigo-500 bg-clip-text text-transparent font-bold'>sorcerer supreme</b>.</h1>
            <p>probably...</p>
          </div>
          <div>
            <h1 className="text-pretty text-lg">
            <br />Want to see what I've been up to?</h1>
            <br />
            <button className="btn btn-outline">Check out my Experience</button>
            <button className="btn btn-outline mx-2">Check out my Projects</button>
          </div>
        </div>
      </section>

    {/* About */}
      <section id="about" className="w-screen h-screen mt-32 flex flex-col font-josefin">
          <h1 className='text-5xl mt-20 font-bold text-center'>About</h1>
          <div className='flex p-5 flex-col'>
            <h1 className='text-xl'>About Me</h1>
            <br />
            <div className="flex">
              <img src="/res/logo2.svg" alt="logo" className='h-40 w-40 opacity-30'/>
              <div className="flex flex-col">
                <p className='text-lg py-5 px-10'>Hola 👋! I'm Muhammad Ali Imran, a coding enthusiast who wrote my first line of code at the age of ten in 2016. Now, I'm an undergraduate Computer Science student with a passion for web, mobile, game development. When I'm not busy unraveling the mysteries of quantum computing or teaching machines to learn, you can find me pushing the boundaries of technology and having a blast while doing it.</p>
                <Link href="#contact" className='btn btn-outline w-96 ml-10'>Let's create something amazing together!</Link>  
              </div>
            </div>
          </div>

          <div className='flex p-5 flex-col'>
          <h1 className='text-xl'>Skills</h1>
          <br />
          <div className='flex flex-row gap-x-48 gap-y-10 overflow-x-auto box-content pb-10'>
            <label>
              Web Development
              <progress className="progress progress-primary w-96 ml-2" value="80" max="100"></progress>
            </label>

            <label>
              Machine Learning
              <progress className="progress progress-accent w-96 ml-2" value="30" max="100"></progress>
            </label>

            <label>
              Game Development
              <progress className="progress progress-secondary w-96 ml-2" value="50" max="100"></progress>
            </label>

            <label>
              Mobile Development
              <progress className="progress progress-info w-96 ml-2" value="70" max="100"></progress>
            </label>

            <label>
              UI/UX design
              <progress className="progress progress-accent w-96 ml-2" value="60" max="100"></progress>
            </label>

            <label>
              Rizz
              <progress className="progress progress-secondary w-96 ml-2" value="100" max="100"></progress>
            </label>
          </div>
          </div>

          
      </section>
    
    {/* Projects */}
    <section id="projects" className="w-screen h-screen mt-32 flex flex-col font-josefin">
        <div className='hero'>
          <h1 className='text-5xl mt-20 font-bold'>Projects</h1>
        </div>
      </section>

    {/* Contact */}
    <section id="contact" className="w-screen h-screen mt-32 flex flex-col font-josefin max-h-full">
        <h1 className='text-5xl mt-20 font-bold text-center'>Contact</h1> 
        <p className='text-lg text-center'>Get in touch. </p>
        <div className='flex mt-10'>

        <div className='flex p-10 w-1/2 flex-col text-center gap-2'>
          <h1 className='text-2xl'>Join me On Social Media</h1>
          <br />
          <a href="https://facebook.com/" target = "_blank" className='btn hover:bg-blue-600 hover:text-slate-200 '>
          <i className="fi fi-brands-facebook"></i>
            Facebook
          </a>
          <a href="https://linkedin.com/in/Muhammad-AI" target = "_blank" className='btn hover:bg-cyan-600 hover:text-slate-200 '>
          <i className="fi fi-brands-linkedin"></i>
            LinkedIn
          </a>
          <a href="https://github.com/captainAlpha04" target = "_blank" className='btn hover:bg-indigo-600 hover:text-slate-200 '>
          <i className="fi fi-brands-github"></i>
            Github
          </a>
          <a href="https://Instagram.com/" target = "_blank" className='btn hover:bg-orange-400 hover:text-slate-200 '>
          <i className="fi fi-brands-instagram"></i>
            Instagram
          </a>
          <a href="https://Youtube.com/@scienceCentrum" target = "_blank"  className='btn hover:bg-red-600 hover:text-slate-200 '>
          <i className="fi fi-brands-youtube"></i>
            Youtube
          </a>
        </div>

        <span className='divider divider-horizontal'>OR</span>
        <div className='flex p-10 w-1/2 flex-col text-center gap-2'>
          <h1 className='text-2xl'>Leave a message!</h1>
          
          <div className="card bg-base-200 min-w-screen w-4/6 shadow-xl self-center">
          <div className="card-body gap-1">
            <h2 className="card-title">Contact Card</h2>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Username" />
            </label>

            <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>

          <textarea placeholder='Message' className='input input-bordered flex h-32 p-2 resize-none'></textarea>

            <div className="card-actions">
              <button className="btn btn-outline w-full">Contact</button>
            </div>
          </div>
        </div>

        </div>
        </div>
    </section>
    </>
  )
}

export default Page
