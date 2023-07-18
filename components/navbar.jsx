"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuFunction = (()=> {

    setMenuOpen(!menuOpen);
    console.log(menuOpen)
  })
  return (
    <nav className='fixed w-full h-20 shadow-xl'>
      <div className='flex justify-between items-center h-full w-full px-2'>
        <div>
          <Link href="/"><h1 className='hover:font-bold hover:border-b text-xl hover:shadow'>developedbyKongmengLor</h1></Link>
        </div>
        <div>
          <ul className='hidden sm:flex'>
            <Link href="/about"><li className='ml-10 uppercase hover:border-b text-xl hover:font-bold'>About</li></Link>
            <Link href="/projects"><li className='ml-10 uppercase hover:border-b text-xl hover:font-bold'>Project</li></Link>
            <Link href="/experinces"><li className='ml-10 uppercase hover:border-b text-xl hover:font-bold'>Experinces</li></Link>
            <Link href="/experinces"><li className='ml-10 uppercase hover:border-b text-xl hover:font-bold'>Contact</li></Link>
          </ul>
        </div>
        <div onClick={menuFunction} className='md:hidden cursor-pointer pl-24'>
          <AiOutlineMenu size={25} className='hover:shadow-xl'/>
        </div>
        <div className={menuOpen ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 p-10 ease-in duartion-500" }>

        </div>
        <div>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar;