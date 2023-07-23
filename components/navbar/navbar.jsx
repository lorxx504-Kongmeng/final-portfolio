"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai'
import Footer from '../footer/footer';
import Image from 'next/image';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handle = () => {
    setNav(!nav);
  }



  return (
    <nav className='fixed w-full h-20 shadow-xl top-0 left-0 bg-black text-white font-mono'>
      <div className='flex justify-between items-center h-full w-full px-8'>
        <div className='hover:underline text-xl'>
            <Link href="/"><h1>KongmengLorDev</h1></Link>
        </div>
        <div className='md:hidden'>
          <div className={nav ? 'fixed bg-black left-0 top-0 w-[75%] h-full overflow-auto ease-in duartion-800 whitespace-nowrap flex flex-col justify-between' : "fixed left-[-100%] top-0 p-10 ease-in duartion-500"} >
              <div>
                <div className='flex w-full items-center justify-between p-10'>
                  <div>
                    <h1 className='text-light'>KongmengLorDev</h1>
                  </div>
                  <div className='shadow-2xl rounded-full' onClick={handle}>
                    <AiOutlineClose className='cursor-pointer hover:scale-75'/>
                  </div>
                </div>
                <div className='text-white p-10 m-10'>
                  <Link href="/" onClick={handle}><h1 className='p-4 m-4 hover:scale-95 text-xl'>Home</h1></Link> 
                  <Link href="/about" onClick={handle}><h1 className='p-4 m-4 hover:scale-95 text-xl' target='_blank'>About</h1></Link> 
                  <Link href="/experiences" onClick={handle}><h1 className='p-4 m-4 hover:scale-95 text-xl' target='_blank'>Experiences</h1></Link> 
                  <Link href="/projects" onClick={handle}><h1 className='p-4 m-4 hover:scale-95 text-xl' target='_blank'>Projects</h1></Link> 
                  <Link href="/contact" onClick={handle}><h1 className='p-4 m-4 hover:scale-95 text-xl' target='_blank'>Contact</h1></Link> 
                  {/* <Link href="https://lorxx504-kongmeng.github.io/resume/Kongmeng-Lor-2023-Resume.pdf" target='_blank'><h1 className='p-4 m-4 hover:scale-95 text-start text-xl'>Resume</h1></Link> 
                  <div className='p-4 m-4 flex justify-between'>
                    <Link href='https://www.linkedin.com/in/kongmengl/' target='_blank'><AiOutlineLinkedin size={40} className='hover:scale-75'/></Link> 
                    <Link href='https://github.com/lorxx504-Kongmeng' target='_blank'><AiOutlineGithub size={40} className='hover:scale-75'/></Link> 
                  </div> */}
                </div>
              </div>
              <Footer />
          </div>
          <div onClick={handle}>
            <AiOutlineMenu className='hover:scale-75 cursor-pointer'/>
          </div>
        </div>
        <div className='hidden md:block'>
          <div className='text-white flex'>
                  <Link href="/about" onClick={handle}><h1 className='hover:scale-95 text-xl mr-4' target='_blank'>About</h1></Link> 
                  <Link href="/experiences" onClick={handle}><h1 className='hover:scale-95 text-xl mr-4' target='_blank'>Experiences</h1></Link> 
                  <Link href="/projects" onClick={handle}><h1 className='hover:scale-95 text-xl mr-4' target='_blank'>Projects</h1></Link> 
                  <Link href="/contact" onClick={handle}><h1 className='hover:scale-95 text-xl mr-4' target='_blank'>Contact</h1></Link> 
          </div>
        </div>

      </div>
      {/* This will be a openNav. */}

    </nav>
  )
}

export default Navbar;