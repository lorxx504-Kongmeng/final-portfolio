import React from 'react'
import Image from 'next/image'
import projects from '../../public/data/projects.json'

const Project = () => {
  return (
    <div className='h-screen w-full text-center break-normal flex justify-center'>
      <div className='flex justify-center w-full h-full'>
        <div className='py-18 border'>
          <h1 className='text-3xl font-bold'>Projects.</h1>
          <div>
            <div className='border'>
              {projects.map((project) => {
                return <div className='border'> 
                  <h1 >{project.title}</h1>

                </div>
              })}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Project