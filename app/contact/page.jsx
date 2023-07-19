import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='h-screen w-full bg-slate-800 text-white text-center break-normal'>
      
      <div className='flex justify-center py-24 w-full h-full mx-auto'>
        <div>
          <h1 className='text-4xl font-extrabold'>Get In Touch.</h1>
          <div className='flex justify-center w-[22rem] mt-6'>
            <p>Whether you have inquiries about code or just want to say hello, feel free to reach out to me anytime. My inbox is open for you. I'll try my best to get back to you!</p>
          </div>
          
          <div className='mt-2'>
            <div className='shadow-xl rounded bg-white px-2 py-1 text-black' >
                <Link href="/">Resume</Link>
            </div>

            

          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Contact