import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='h-max w-full bg-slate-800 text-white text-center break-normal flex flex-col'>
      
      <div className='flex justify-center py-24 w-full h-full mx-auto'>
        <div>
          <h1 className='text-4xl font-extrabold'>Get In Touch.</h1>
          <div className='flex justify-center w-[22rem] mt-6'>
            <p>Whether you have inquiries about code or just want to say hello, feel free to reach out to me anytime. My inbox is open for you. I'll try my best to get back to you!</p>
          </div>
          
          <div className='mt-4'>
            <div className='shadow-xl rounded bg-white px-2 py-1 text-black' >
                <Link href="/">Resume</Link>
            </div>
            <div className='flex mt-4 justify-center bg-white text-black shadow-xl rounded px-2 py-1'>
              <Link href="/">Linkedin</Link>
              <FaLinkedin size={18} />
            </div>
          </div>
        </div>
      </div>
      <footer className='sticky mb-4 font-thin'>
            <p className='text-light'>Designed & Built by Kongmeng Lor</p>
            <p>2023</p>
      </footer>
    </div>
  )
}

export default Contact