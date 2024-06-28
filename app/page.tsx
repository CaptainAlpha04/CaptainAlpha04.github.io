'use client'
import React from 'react'
import Link from 'next/link'
import useActiveSection from './hooks/useActiveSection';

const sections = ['home', 'about', 'projects', 'contact'];

function Page() {

  const { sectionRefs } = useActiveSection(sections);
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
            <Link href='#experience' className="btn btn-outline">Check out my Experience</Link>
            <Link href='#projects' className="btn btn-outline mx-2">Check out my Projects</Link>
          </div>
        </div>
      </section>

    {/* About */}
      <section id="about" className="w-screen h-screen mt-32 flex flex-col font-josefin">
          <h1 className='text-5xl mt-20 font-bold text-center'>About</h1>
          <div className='flex flex-wrap flex-col'>
            <div className='w-2/3 p-10 self-center relative'>
            <div className="max-w-full w-48 max-h-screen h-48 bg-gradient-conic from-cyan-500 to-purple-500 blur-3xl rounded-full animate-spin absolute  top-96 -z-10"></div>
            <div className="max-w-full w-64 max-h-screen h-64 bg-gradient-conic from-cyan-500 to-purple-500 blur-3xl rounded-full animate-pulse absolute right-0 top-32 -z-10"></div>
            <div className='backdrop-blur-3xl p-10 rounded-box border-t-2 border-r-2 border-indigo-400'>
            <p className='text-xl font-josefin'>
              <b className='text-7xl font-dancing bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent text-center'>Hey there!</b><br /><br />
               I'm <b>Muhammad Ali Imran</b>, a tech enthusiast and coding prodigy who started programming at the age of ten back in 2016. Currently, I'm an undergraduate Computer Science student with a passion for Web Development, Mobile Development, Game Development, and Windows Application Development. I thrive on pushing the boundaries of what's possible, diving deep into Quantum Computing and Machine Learning. I'm a strong advocate for free and open-source solutions, contributing to numerous open-source projects to make technology accessible for everyone. When I'm not coding, I'm exploring new tech trends, constantly learning, and always seeking innovative ways to solve complex problems.
               <br /> <br /> <br /> <a href="" className='btn btn-outline'>Let's code the future together!</a>
              </p>
            </div>
            </div>
          </div>
        </section>
      
      {/* Experience */}
      <section id="experience" className="w-screen h-screen mt-32 flex flex-col font-josefin">
          <h1 className='text-5xl mt-20 font-bold text-center'>My Experience</h1>
          <div className='self-center w-full h-screen pt-20'>
            <div className="carousel carousel-vertical max-h-screen h-screen w-screen">
            
            <div className='carousel-item h-full flex flex-row'>
              <div className="w-96 h-96 ml-10 rounded-box">
                <img src="/res/cpp.png" alt="boring" className='h-full'/>
              </div>
            <div className='ml-40 w-1/2 flex flex-col pl-20'>
              <h1 className="text-xl bg-purple-500 text-white p-3 w-fit rounded-full">2016</h1>
              <br />
              <h1 className='text-3xl font-bold'>Beginning of an Era</h1>
              <br />
              <p className='text-justify text-lg'>2016 was the year when I started coding, initially I started with Windows Terminal commands, changing colors, using Loops and conditionals to make cool, interactive shells. Followed by C/C++ as my first official and professional Programming language. C/C++ taught me Programming Fundamentals along with key skills that have helped me ever since. </p>
            </div> 
            </div>

            <div className='carousel-item h-full flex flex-row'>
              <div className="w-96 h-96 ml-10 rounded-box">
                <img src="/res/html.png" alt="boring" className='h-full'/>
              </div>
            <div className='ml-40 w-1/2 flex flex-col pl-20'>
              <h1 className="text-xl bg-purple-500 text-white p-3 w-fit rounded-full">2017</h1>
              <br />
              <h1 className='text-3xl font-bold'>A Small step for Man</h1>
              <br />
              <p className='text-justify text-lg'>In 2017, I delved in the basic of web development. I initally started with HTML5, and CSS3 looking deeper into ever evolving field of Frontend Development. I started learning concepts like animations, transitions and boostrap css to make more robust and powerful static website. This later helped me in 2019 when I started working on Wordpress.</p>
            </div> 
            </div>

            <div className='carousel-item h-full flex flex-row'>
              <div className="w-96 h-96 ml-10 rounded-box">
                <img src="/res/cs.png" alt="boring" className='h-full'/>
              </div>
            <div className='ml-40 w-1/2 flex flex-col pl-20'>
              <h1 className="text-xl bg-purple-500 text-white p-3 w-fit rounded-full">2018</h1>
              <br />
              <h1 className='text-3xl font-bold'>A window to Visual Software Dev</h1>
              <br />
              <p className='text-justify text-lg'>In 2018, I dived into Software development using dotnet framework for Microsoft Windows. The dotnet framework is used for developing powerful win32 and now winUI applications. Initially I started with rather obsolete and depreciated VB.net but soon trasfered to a more powerful C#. Using this framework I learned how to develop powerful windows Applications like Web Broweser, Music Players etc.</p>
            </div> 
            </div>

            <div className='carousel-item h-full flex flex-row'>
              <div className="w-96 h-96 ml-10 rounded-box">
                <img src="/res/unity.png" alt="boring" className='h-full'/>
              </div>
            <div className='ml-40 w-1/2 flex flex-col pl-20'>
              <h1 className="text-xl bg-purple-500 text-white p-3 w-fit rounded-full">2019</h1>
              <br />
              <h1 className='text-3xl font-bold'>Unity it is!</h1>
              <br />
              <p className='text-justify text-lg'>Thanks to my prior experience in C# because of Windows Application Development. I decided to change my route, and go on a little venture of exploring Gaming Technologies. I learned Unity from some of the greatest Game Developers on Youtube. I Loved making both 2D and 3D games, but 3D games always fascinated me alot more. So I made an RPG based game in the midst of 2019 and won a prize in our school hackathon.</p>
            </div> 
            </div>

            <div className='carousel-item h-full flex flex-row'>
              <div className="w-96 h-96 ml-10 rounded-box">
                <img src="/res/android.png" alt="boring" className='h-full'/>
              </div>
            <div className='ml-40 w-1/2 flex flex-col pl-20'>
              <h1 className="text-xl bg-purple-500 text-white p-3 w-fit rounded-full">2020</h1>
              <br />
              <h1 className='text-3xl font-bold'>I'm an Android guy!</h1>
              <br />
              <p className='text-justify text-lg'>In 2020, I decided to take a look at platform other than Windows. Hence my work in Unity lead to Android Software Development. To understand the Android paradigm deeper, I learned Java: the hallmark of Object Oriented Programming, followed by Kotlin, a more robust implementation of Java. Using the Google's Android Studio, I implemented the applications I have previously developed for Windows like a browser, notepad etc.</p>
            </div> 
            </div>

            <div className='carousel-item h-full flex flex-row'>
              <div className="w-96 h-96 ml-10 rounded-box">
                <img src="/res/linux.png" alt="boring" className='h-full'/>
              </div>
            <div className='ml-40 w-1/2 flex flex-col pl-20'>
              <h1 className="text-xl bg-purple-500 text-white p-3 w-fit rounded-full">2021</h1>
              <br />
              <h1 className='text-3xl font-bold'>I use Arch btw</h1>
              <br />
              <p className='text-justify text-lg'>It seems like I got too curious in Android, and thankfully that curiosity lead me the kernel of Android: Linux, the Greatest Operating System ever developed. So I decided to take a break from traditional programming and take a look at different concepts of Operating System as well as learn the BASH. In my Linux era, I explored various different versions like Ubuntu, Debian, and RedHat. This also helped me later in Deployment using Dockers.</p>
            </div> 
            </div>

            <div className='carousel-item h-full flex flex-row'>
              <div className="w-96 h-96 ml-10 rounded-box">
                <img src="/res/wp.png" alt="boring" className='h-full'/>
              </div>
            <div className='ml-40 w-1/2 flex flex-col pl-20'>
              <h1 className="text-xl bg-purple-500 text-white p-3 w-fit rounded-full">2022</h1>
              <br />
              <h1 className='text-3xl font-bold'>You guys use Wordpress?</h1>
              <br />
              <p className='text-justify text-lg'>In 2022, I decided to take a break from programming in general. I kept myself to understanding core concepts such as version control with git, hosting, deployment, dockers and so on. One technology that particularly intrigued me was Wordpress. Although I am not a big Fan of PHP. Wordpress definitely transformed the web and it was one of the technologies I decided to have my hands On.</p>
            </div> 
            </div>

            <div className='carousel-item h-full flex flex-row'>
              <div className="w-96 h-96 ml-10 rounded-box">
                <img src="/res/js.png" alt="boring" className='h-full'/>
              </div>
            <div className='ml-40 w-1/2 flex flex-col pl-20'>
              <h1 className="text-xl bg-purple-500 text-white p-3 w-fit rounded-full">2023</h1>
              <br />
              <h1 className='text-3xl font-bold'>Let's finish what we Started</h1>
              <br />
              <p className='text-justify text-lg'>I decided to take a look back at Web Development. I started by Learning Javascript, followed by JS frameworks and Libraries like React, and Svelte. I also decided to take a look at Backend. So I Learned Node, Express, NEXT and databases like mongoDB and postgreSQL. This led me to cross platform technologies like React Native and Flutter.</p>
            </div> 
            </div>


            <div className='carousel-item h-full flex flex-row'>
              <div className="w-96 h-96 ml-10 rounded-box">
                <img src="/res/py.png" alt="boring" className='h-full'/>
              </div>
            <div className='ml-40 w-1/2 flex flex-col pl-20'>
              <h1 className="text-xl bg-purple-500 text-white p-3 w-fit rounded-full">2024</h1>
              <br />
              <h1 className='text-3xl font-bold'>To err is Machine Learning</h1>
              <br />
              <p className='text-justify text-lg'>If chatGPT ain't smart enough, why don't make your own? That was the idea that motivated me to learn Machine Learning. I took a look at basic concepts like Supervised, Unsupervised learning, followed by different algorithms to develop Powerful Neural Networks, I also decided to understand Natural Language Processing, and computer vision.</p>
            </div> 
            </div>

            {/* <div className='carousel-item h-full flex flex-row'>
              <div className="w-96 h-96 ml-10 rounded-box">
              <img src="/res/html.png" alt="boring" className='h-full'/>
              </div>
              <div className='ml-40 w-1/2 flex flex-col pl-20'>
              <h1 className="text-xl bg-purple-500 text-white p-3 w-fit rounded-full">20XX</h1>
              <br />
              <h1 className='text-3xl font-bold'>A window to Visual Software Dev</h1>
              <br />
              <p className='text-justify text-lg'></p>
              </div> 
              </div> */}
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
function openFullscreen() {
  throw new Error('Function not implemented.');
}

