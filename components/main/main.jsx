import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {IoIosPaper} from 'react-icons/io'
import Link from 'next/link';

const Main = () => {
  return (
<div className="w-full h-screen text-center break-normal font-mono">
    <div className='w-full h-full mx-auto p-2 flex justify-center items-center md:w-[650px]'>
        <div className='p-2 m-2'>
            <div className='flex justify-start'>
                <h1 className='text-2xl m-2 p-2 md:text-3xl'>
                    Hello there!
                </h1>
            </div>
            <div className='m-4'>
                <h1 className='text-4xl text-start md:text-5xl'>
                    I'm Kongmeng Lor.
                </h1>
            </div>
            <div className='flex justify-center'>
                <h1 className='text-start m-2 p-2 text-light font-light md:text-xl'>
                    I am a passionate Full Stack Software Engineer actively seeking new opportunities. I have a natural curiosity that drives me to constantly explore and learn new technologies, ensuring that I stay updated and proficient in the ever-evolving tech landscape.
                </h1>
            </div>
            <div className='flex'>
                <Link href="https://www.linkedin.com/in/kongmengl/" className='mr-2 m-4 hover:scale-75' target='_blank'><FaLinkedin size={45} /> </Link>
                <Link href="https://github.com/lorxx504-Kongmeng" className='mr-2 m-4 hover:scale-75' target='_blank'><FaGithub size={45} /></Link>
                <Link href="https://lorxx504-kongmeng.github.io/resume/Kongmeng%20Lor's%20latest%202023%20Resume.pdf" className='mr-2 m-4 hover:scale-75' target='_blank'><IoIosPaper size={45}/></Link>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Main;