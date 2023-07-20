"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <nav className='fixed w-full h-20 shadow-xl z-[10] top-0 left-0 bg-black text-white font-mono'>
      <div className='flex justify-between items-center h-full w-full px-2'>
        <div className='p-4'>
          <Link href="/#home"><h1 className='hover:font-bold hover:border-b text-2xl hover:shadow'>developedbyKongmengLor</h1></Link>
        </div>
        <div className='p-4'>
          <ul className='hidden md:flex'>
            <Link href="/#about"><li className='ml-10 uppercase text-xl hover:font-bold '>About</li></Link>
            <Link href="/#experiences"><li className='ml-10 uppercase text-xl hover:font-bold'>Experinces</li></Link>
            <Link href="/#projects"><li className='ml-10 uppercase text-xl hover:font-bold'>Project</li></Link>
            <Link href="/#contact"><li className='ml-10 uppercase text-xl hover:font-bold'>Contact</li></Link>
          </ul>
        </div>
        <div onClick={handleNav } className='md:hidden cursor-pointer pl-24'>
          <AiOutlineMenu size={25} className='hover:shadow-xl hover:scale-90'/>
        </div>
        <div className={menuOpen ? "fixed left-0 top-0 w-[65%] m:hidden h-screen p-10 ease-in duration-500 bg-black" : "fixed left-[-100%] top-0 p-10 ease-in duartion-500" }>
          <div className='flex w-full items-center justify-end'>
            <div onClick={handleNav} className='cursor-pointer rounded-full shadow-lg shadow-gray-700 p-2'>
              <AiOutlineClose size={25} className='hover:scale-90'></AiOutlineClose>
            </div>
          </div>
          <div className='w-full items-center'>
            <ul className='pt-10'>
              <Link href="/" onClick={handleNav}><li className='mt-10 uppercase hover:border-b text-xl hover:font-bold'>Home</li></Link>
              <Link href="/#about" onClick={handleNav}><li className='mt-10 uppercase hover:border-b text-xl hover:font-bold'>About</li></Link>
              <Link href="/#experiences" onClick={handleNav}><li className='mt-10 uppercase hover:border-b text-xl hover:font-bold'>Experinces</li></Link>
              <Link href="/#projects" onClick={handleNav}><li className='mt-10 uppercase hover:border-b text-xl hover:font-bold'>Project</li></Link>
              <Link href="/#contact" onClick={handleNav}><li className='mt-10 uppercase hover:border-b text-xl hover:font-bold'>Contact</li></Link>
            </ul>
          </div>
          <div className='flex pt-10 items-center'>
            <a href='https://www.linkedin.com/in/kongmengl/' target='_blank'><AiOutlineLinkedin size={30} className='mr-2 cursor-pointer hover:scale-90' ></AiOutlineLinkedin></a> 
            <a href='https://github.com/lorxx504-Kongmeng' target='_blank'><AiOutlineGithub size={30} className='ml-2 cursor-pointer hover:scale-90'></AiOutlineGithub></a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;