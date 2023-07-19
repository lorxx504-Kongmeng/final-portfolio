import React from 'react'
import data from '../main/introduction.json'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {IoIosPaper} from 'react-icons/io'
import Link from 'next/link';


const Main = () => {
  return (
    <div className='w-full h-screen text-center break-normal shadow-xl'>
        {/* <div style={{position: 'relative', height: '200px'}}>
                    <Image src="/main/shot.png" fill></Image>
                    <div className='text-white'>
                        <h1>Hello</h1>
                    </div>
            </div> */}

        <div className='w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div className='p-2 max-w-[1000px] md:pl-24'>
                <div className='md:flex md:justify-start text-2xl flex pl-14 text-gray-600'>                
                    <div className='flex'>
                        <h1 className='ml-2'>Hello,</h1>
                        <h1 className='ml-2 '>I'm</h1>
                    </div>    
                </div>
                <div className='flex justify-center text-5xl font-bold md:text-8xl md:flex md:justify-start md:pl-10'>
                    <div className='flex'>
                        <h1 className=''>{data.first_Name}</h1>
                        <h1 className='ml-4'>{data.last_Name}.</h1>
                    </div>
                </div>
                <div className= 'pl-12 mt-4'>
                    {/* <p className='text-xl font-lgiht'>{data.description}</p> */}
                    <div className='md:flex md:justify-start'>
                        <h4 className='text-base md:text-lg'>I am a passionate Full Stack Software Engineer actively seeking new opportunities. I have a natural curiosity that drives me to constantly explore and learn new technologies, ensuring that I stay updated and proficient in the ever-evolving tech landscape.</h4>
                    </div>
                </div>
                <div className='flex items-center justify-center max-w-[330px] m-auto py-4'>
                    <div className="rounded-full shadow-lg shadow-gray-600 p-8 cursor-pointer hover:scale-90">
                        <Link href="https://www.linkedin.com/in/kongmengl" target="_blank"><FaLinkedin/></Link>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-600 p-8 cursor-pointer hover:scale-90 ml-4">
                        <Link href="https://github.com/lorxx504-Kongmeng" target='_blank'><FaGithub /></Link>
                    </div>   
                    <div className='rounded-full shadow-lg shadow-gray-600 p-8 cursor-pointer hover:scale-90 ml-4'>
                        <Link href="/"><IoIosPaper/></Link>
                    </div> 
                </div>
            </div>

        </div>
    </div>
  )
}

export default Main;