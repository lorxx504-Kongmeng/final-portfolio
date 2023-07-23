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
        <div className=''>
          <div className={nav ? 'fixed bg-black left-0 top-0 w-[75%] h-full overflow-auto ease-in duartion-800 whitespace-nowrap flex flex-col justify-between' : "fixed left-[-100%] top-0 p-10 ease-in duartion-500"} >
              <div>
                <div className='flex w-full items-center justify-between border p-10'>
                  <div>
                    <h1 className='text-light'>KongmengLorDev</h1>
                  </div>
                  <div className='shadow-2xl rounded-full' onClick={handle}>
                    <AiOutlineClose className='cursor-pointer hover:scale-75'/>
                  </div>
                </div>
                <div className='text-white border p-10 m-10'>
                  <Link href="/" onClick={handle}><h1 className='border p-4 m-4 hover:scale-95 text-xl'>Home</h1></Link> 
                  <Link href="/about" onClick={handle}><h1 className='border p-4 m-4 hover:scale-95 text-xl'>About</h1></Link> 
                  <Link href="/" onClick={handle}><h1 className='border p-4 m-4 hover:scale-95 text-xl'>Experiences</h1></Link> 
                  <Link href="/projects" onClick={handle}><h1 className='border p-4 m-4 hover:scale-95 text-xl'>Projects</h1></Link> 
                  <Link href="/" onClick={handle}><h1 className='border p-4 m-4 hover:scale-95 text-xl'>Contact</h1></Link> 
                  <div className='border p-4 m-4 flex justify-between'>
                    <Link href="/"><AiOutlineLinkedin size={40} className='hover:scale-75'/></Link> 
                    <Link href="/"><AiOutlineGithub size={40} className='hover:scale-75'/></Link> 
                  </div>
                  <Link href="/"><h1 className='border p-4 m-4 hover:scale-95 text-center text-xl'>Resume</h1></Link> 
                </div>
              </div>
              <Footer />

          </div>
          <div onClick={handle}>
            <AiOutlineMenu className='hover:scale-75 cursor-pointer'/>
          </div>
        </div>

      </div>
      {/* This will be a openNav. */}

    </nav>
  )
}

export default Navbar;