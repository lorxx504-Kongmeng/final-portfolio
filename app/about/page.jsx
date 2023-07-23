import React from 'react'
import Image from 'next/image';
import { IoBusinessSharp, IoSchoolSharp, IoLocation, IoDocument } from "react-icons/io5";
import { SiTypescript, SiJavascript, SiAngular, SiReact, SiNextdotjs, SiSpring, SiFirebase } from "react-icons/si";
import { DiJava, DiPython, DiPostgresql,  } from "react-icons/di";
import {FaJava} from "react-icons/fa"


const About = () => {
  return (
    <div className='h-max w-full text-center break-normal font-mono py-20'>
        <div className='p-4 flex'>
            <heading className='text-4xl'>About</heading>
            <heading className="text-4xl ml-4 font-extrabold">Me.</heading>
        </div>
        <div className='w-full h-full mx-auto p-2'>
            <div>
                <Image src="/profile/profile.png" width={450} height={300} className='shadow-2lg rounded max-w-full h-auto align-middle border m-4' />
                <div>
                    <h1 className='p-1 text-2xl'>Welcome to my page!</h1>
                    <h1 className='m-4 text-start'>My name is Kongmeng Lor and I am a Full Stack Engineer hailing from Minnesota. </h1>
                    <h1 className='m-4 text-start'>I hold a Bachelor's degree in Information Technology Infrastructure of Data Management from the University of Minnesota, Twin Cities, supplemented by a minor in Computer Science.</h1>
                    <h1 className='m-4 text-start'>As I advance in my software development career, I am continuously enhancing my skills and knowledge.</h1>
                    <h1 className='m-4 text-start'>If you have any job openings or opportunities available, I would greatly appreciate the chance to connect with you.</h1>
                    <h1 className='text-start p-1 m-4'> I also have successfully completed the York Solution B2E Full Stack Software Engineer Bootcamp as well.</h1>
                    <div className='flex'>
                        <IoSchoolSharp size={25} className='ml-4'/>
                        <div className='text-light font-extralight text-start ml-2'>
                            <h1>Information Technology Infrastructure Data Management Bachelor's Degree </h1>
                            <h1> & Computer Science Minor</h1>
                        </div>
                    </div>
                    <div className='flex'>
                        <IoBusinessSharp className='ml-4' size={16}/>
                        <h1 className='text-light font-extralight text-start ml-2'>University of Minnesota, Twin Cities</h1>
                    </div>
                    <div className='flex'>
                        <IoDocument size={18} className='ml-4'/>
                        <h1 className='text-light font-extralight text-start ml-2'>York Solutions B2E Full Stack Software Engineer Bootcamp Certificate</h1>
                    </div>
                    <div className='flex mt-2 justify-center'>
                        <div className='flex'>
                            <h1 className='mr-2 rounded bg-slate-800 text-white p-1'> <SiTypescript/> Typescript</h1>
                            <h1 className='mr-2 rounded bg-slate-800 text-white p-1'> <SiJavascript />Javascipt</h1>
                            <h1 className='mr-2 rounded bg-slate-800 text-white p-1'> <FaJava/>Java</h1>
                            <h1 className='mr-2 rounded bg-slate-800 text-white p-1'> <DiPython />Python</h1>
                            <h1 className='mr-2 rounded bg-slate-800 text-white p-1'>C/C++</h1>
                        </div>
                    </div>
                    <div className='flex mt-2 justify-center'>
                        <div className='flex'>
                            <h1 className='mr-2 rounded bg-slate-800 text-white text-light'> <SiAngular />Angular</h1>
                            <h1 className='mr-2 rounded bg-slate-800 text-white p-1'> <SiSpring />Spring Boot</h1>
                            <h1 className='mr-2 rounded bg-slate-800 text-white p-1'> <SiNextdotjs /> Next.js</h1>
                            <h1 className='mr-2 rounded bg-slate-800 text-white p-1'> <SiReact />React.js</h1>
                            <h1 className='mr-2 rounded bg-slate-800 text-white p-1'> <SiFirebase />Firebase</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
export default About;