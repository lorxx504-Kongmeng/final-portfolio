import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import projects from "../../public/data/projects.json"


const Projects = () => {
  return (
    <div className='h-max w-full text-center break-normal font-mono py-20 flex flex-col justify-around'>
      <div>
        <div className='flex justify-center'>
          <div>
            <div className='mt-6'>
              <heading className='text-4xl'>Projects</heading>
            </div>
            <div className='w-full h-full mx-auto p-2'>
              <div className='p-2 m-2'>
                {
                  projects.map((item) => {
                    return <div>
                    <Image src={item.image} width={400} height={0} />
                    <div className=' text-start'>
                    <h1 className='text-xl mt-2 font-bold'>{item.title}</h1>
                    <h1 className='mt-2'>{item.description}</h1>
                    <div className='flex mt-4 text-white justify-center'>
                      <div className='flex p-2'>
                        {item.languages.map((item) => {
                          return <p className='p-1 bg-black m-1'>{item}</p>
                        })}
                      </div>
                    </div>
                    <div className='flex justify-center mt-4 p-2 m-2 bg-black'>
                      <Link href={item.github} target='_blank' className='shadow-2xl rounded text-white '>< FaGithub size={35} className='hover:scale-75'/></Link>
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