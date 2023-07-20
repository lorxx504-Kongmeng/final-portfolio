import React from 'react'
import Image from 'next/image'
import projects from '../../public/data/projects.json'
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link'

export const metadata = {
  title: "Projects"
}

const Project = () => {

  return (
    <div id="projects" className='h-max w-full text-center break-normal flex justify-center font-mono'>
      <div className='flex justify-center w-full h-full'>
        <div className='py-18'>
          <h1 className='text-4xl font-bold pb-4 md:uppercase text-gray-900'>Projects.</h1>
          <div>
            <div className='md:p-4'>
              {projects.map((project) => {
                return <div className='mt-5 md:shadow-2xl md:p-10'> 
                  <div className='md:flex'>
                    <div>
                      <div className='flex justify-center'>
                        <Image src={project.image} width={300} height={500} ></Image>
                      </div>
                    </div>
                    <div className='md:ml-4 mt-6'>
                      <div className="flex justify-center items-center ">
                        <Link href={project?.website} target='_blank'> <h1 className='text-2xl font-extrabold text-start text-gray-600'>{project.title}</h1></Link> 
                        
                      </div>
                      <div className='md:w-[38rem] mt-4 flex justify-center items-center '>
                        <div className='flex justify-center items-center pb-4'>
                          <p className='text-light'>{project.description}</p>
                        </div>
                      </div>
                      <div className='flex justify-center text-center'>
                        {project.languages.map((item) => {
                          return <div className='px-4 py-2 shadow-2xl rounded-full text-white bg-gray-600 mt-2'>
                              <h1 >{item}</h1>
                            </div>
                        })}
                      </div>
                      <div className='mt-4'>
                        <Link href={project.link} target='_blank'><h1 className='mt-2 p-2 shadow-2xl bg-gray-600 text-white rounded' >View Codes</h1></Link>
                      </div>
                    </div>
                  </div>

                </div>
              })}
              <div className='py-16 flex justify-center md:justify-center'>
                <div className=''>
                  <h1 className='text-xl'>View My GitHub For more Projects.</h1>
                  <div className='flex justify-center  cursor-pointer '>
                    <Link href="https://github.com/lorxx504-Kongmeng" className='ease-out duration-300' target='_blanket'><FaGithub size={35}></FaGithub></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Project