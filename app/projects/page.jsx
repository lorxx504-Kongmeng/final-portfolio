import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import projects from "../../public/data/projects.json"

export const metadata = {
  title: "Projects"
}

const Projects = () => {
  return (
    <div className='h-max w-full text-center break-normal font-mono py-20 flex flex-col justify-around'>
      <div>
        <div className='flex justify-center'>
          <div>
            <div className='mt-6'>
              <heading className='text-4xl font-extrabold'>Projects.</heading>
            </div>
            <div className='w-full h-full mx-auto p-2 md:w-[700px]'>
              <div className='p-2 m-2'>
                {
                  projects.map((item, key) => {
                    return <div key={key} className='mt-4 md:shadow-xl md:p-4  border-t' >
                      <div className='flex justify-center mt-5'>
                        <Image src={item.image} width="0" height="0" className='h-auto w-[300px]'/>
                      </div>


                    <div className='flex justify-center flex-wrap'>
                      <div className='md:w-[500px] w-[420px] text-start '>
                      <h1 className='text-xl mt-2 font-bold md:mb-4 ml-12'>{item.title}</h1>
                      <h1 className='mt-2 md:mb-4 ml-12'>{item.description}</h1>
                      <div className='flex mt-4 text-white justify-center flex-warp w-[440px]'>
                        <div className='flex'>
                          {item.languages.map((item, key) => {
                            return <p key={key} className='p-1 bg-black m-1 text-base'>{item}</p>
                          })}
                        </div>
                      </div>
                      <div className='flex justify-center mt-4 p-2 m-2 bg-black ml-12'>
                        <Link href={item.github} target='_blank' className='shadow-xl rounded text-white hover:scale-75 px-2'>Github</Link>
                      </div>

                    </div>
                  </div>
                  </div>
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className='p-2 m-2'>
            <h1 className='m-2'>More Projects On My Github</h1>
            <div className='flex justify-center '>
                <Link href="https://github.com/lorxx504-Kongmeng" target='_blank'><FaGithub size={35} className='hover:scale-75'/></Link> 
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects;