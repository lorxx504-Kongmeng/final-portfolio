import React from 'react'
import Image from 'next/image'
import { IoBusinessSharp, IoSchoolSharp, IoLocation, IoDocument } from "react-icons/io5";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const About = () => {
    const languages = [
        "Typescript", "Javascript", "Java", "Python","C/C++"
    ]
    const frameworks = [
        "Angular", "Spring Boot", "Next.js", "React", "Firebase", "Node.js", "Tailwind CSS"
    ]
  return (
    <div className='w-full h-max text-center break-normal flex justify-center'>
        <div className='p-2 max-w-[1400px] flex justify-center w-full h-full'> 
            <div className='py-24 flex'>
                <div className='px-2'>
                    <div className='shadow-2xl rounded-2xl p-6'>
                        <div className='md:flex md:justify-start'>
                            <h1 className='text-4xl  md:text-6xl md:font-extrabold'>About Me.</h1>
                        </div>
                        {/* <div className='md:flex md:justify-start md:text-start'>
                            <h2 className='text-6xl mt-2 md:font-bold italic'>Who I am.</h2>
                        </div> */}
                        <div className='md:flex md:justify-start md:mt-4 md:text-start flex justify-center'>
                            <p className='mt-2 text-base md:text-xl md:leading-normal'>Hello, my name is Kongmeng Lor and I am a Full Stack Engineer hailing from Minnesota. I hold a Bachelor's degree in Information Technology Infrastructure of Data Management from the University of Minnesota, Twin Cities, supplemented by a minor in Computer Science. In addition, I have successfully completed the York Solution B2E Full Stack Software Engineer Bootcamp. As I advance in my software development career, I am continuously enhancing my skills and knowledge. If you have any job openings or opportunities available, I would greatly appreciate the chance to connect with you.</p>
                        </div>
                    
                    <Image src="/profile/headshot.png" width={1000} height={100} className='md:p-4 md:ml-5 md:hidden'></Image>
                    <div className='md:hidden'>
                        <div className='flex justify-center'>
                            <IoSchoolSharp className='mt-1'></IoSchoolSharp>
                            <h1 className='ml-1 text-start'>Information Technology Infrastructure & Computer Science Minor</h1>
                        </div>
                        <div className='flex justify-center text-start'>
                            <IoBusinessSharp className='mt-1'></IoBusinessSharp>
                            <h1 className='ml-1'>University of Minnesota, Twin Cities</h1>
                        </div>
                        <div className='flex justify-center'>
                            <IoDocument className='mt-1'></IoDocument>
                            <h1 className='ml-1'>York Solutions B2E Full Stack Software Engineer Bootcamp</h1>
                        </div>
                        <div className='flex justify-center'>
                            <IoLocation className='mt-1'></IoLocation>
                            <h1 className='ml-2'>Minneapolis, MN</h1>
                        </div>
                    </div>  
                    <div className='md:hidden'>
                        <div className='mt-2'>
                            <p className='text-xl font-bold'>Languages:</p>
                            <div className='flex justify-center mt-2'>
                                {languages.map((item) => {
                                    return <div className='ml-2 bg-slate-600 rounded-lg px-1 py-2 text-white cursor-pointer'>{item}</div>
                                })}
                            </div>
                        </div>
                        <div className='mt-2'>
                            <p className='text-xl mt-2 font-bold'>Frameworks:</p>
                            <div className='flex mt-2 justify-center'>
                                {frameworks.map((item) => {
                                    return <div className='ml-1 bg-slate-600 rounded-lg px-1 py-2 text-white cursor-pointer'>{item}</div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:block py-8'>
                        <div className='flex mt-5 text-xl'>
                            <IoSchoolSharp size={35}></IoSchoolSharp>
                            <h1 className='ml-2 mt-2'>Information Technology Infrastructure & Computer Science Minor</h1>
                        <h1></h1>
                        </div>
                        <div className='flex mt-2 text-xl'>
                            <IoBusinessSharp size={35}></IoBusinessSharp>
                            <h1 className='ml-2 mt-2'>University of Minnesota, Twin Cities</h1>
                        </div>
                            <div className='flex mt-2 text-xl'>
                            <IoDocument size={35}></IoDocument>
                        <h1 className='ml-2 mt-2'>York Solutions B2E Full Stack Software Engineer Bootcamp</h1>
                        </div>
                            <div className='flex mt-2 text-xl'>
                            <IoLocation size={35}></IoLocation>
                        <h1 className='ml-2 mt-2'>Minneapolis, MN</h1>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className='mt-2'>
                            <div className='flex'>
                                <h1 className='text-xl font-bold mt-2'>Languages:</h1>
                                <div className='flex'>
                                    {languages.map((item) => {
                                        return <div className='ml-2 bg-slate-600 rounded-lg px-1 py-2 text-white cursor-pointer hover:bg-blue-600'>{item}</div>
                                    })}
                                </div>
                            </div>
                            <div className='flex mt-5'>
                                <h1 className='text-xl font-bold mt-2'>Frameworks:</h1>
                                <div className='flex'>
                                    {frameworks.map((item) => {
                                        return <div className='ml-2 bg-slate-600 rounded-lg px-1 py-1 text-white cursor-pointer hover:bg-blue-600'>{item}</div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='hidden md:block shadow-2xl '>
                    <Image src="/profile/headshot.png" width={3000} height={100} className='p-4 ml-5 cursor-pointer hover:shadow-gray-800'></Image>
                    <div className='flex justify-center'>
                        <div className='flex items-center justify-start max-w-[330px] md:max-w-[800px] m-auto py-4'>
                        <div className="rounded-xl shadow-lg shadow-gray-600 p-8 cursor-pointer hover:scale-90">
                            <Link href="https://www.linkedin.com/in/kongmengl" target="_blank"><FaLinkedin/></Link>
                        </div>
                        <div className="rounded-xl shadow-lg shadow-gray-600 p-8 cursor-pointer hover:scale-90 ml-4">
                            <Link href="https://github.com/lorxx504-Kongmeng" target='_blank'><FaGithub /></Link>
                        </div>   
                    </div>
                    
                    </div>
                </div>
                <div className='hidden md:block'>
                    
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default About