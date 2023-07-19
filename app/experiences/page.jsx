import React from 'react'
import experiences from '../../public/data/experiences.json'

const Experiences = () => {
  return (
    <div className='w-full h-max text-center break-normal flex justify-center'>
      <div className='flex justify-center w-full h-full'> 
          <div className='py-24'>
            <div>
              <h1 className='text-3xl font-bold md:text-6xl md:uppercase'>Experiences.</h1>
              <div className='mt-2'>
                <div className='md:flex md: justify-center items-center'>
                  <div className=''>
                    {experiences.map((item) => {
                      return <div className='text-xl p-2 mt-2 md:max-w-[60rem] rounded-b-3xl shadow-2xl md:p-4'>
                        <div className='text-start'>
                          <div className='flex justify-between'>
                            <h1 className='font-bold md:text-2xl'>{item.title}</h1>
                            <h1 className='text-sm pt-1 md:text-base'>{item.date}</h1>
                          </div>
                          <h1 className='text-base font-light md:text-xl'>{item.company}</h1>
                          <h1 className='text-sm md:text-base'>{item.location}</h1>

                          <div className='flex mt-2 mb-2 md:hidden'>
                            {item.skills.map((skill) => {
                              return <div className='shadow-xl rounded-full mr-2'>  
                                    <h1 className='text-sm bg-blue-500 rounded py-1 p-2 text-white cursor-pointer '>{skill}</h1>
                                </div>
                            })}
                          </div>
                          <p className='text-base mt-2 md:mt-4'>{item.description}</p>
                          <div className='hidden md:block'>
                            <div className='flex mt-2 mb-2 '>
                              {item.skills.map((skill) => {
                                return <div className='shadow-xl rounded-full mr-2'>  
                                      <h1 className='text-sm bg-blue-500 rounded-full py-2 p-3 text-white cursor-pointer '>{skill}</h1>
                                  </div>
                              })}
                            </div>
                          </div>
                        </div>
                      </div>

                    })}
                  </div>

                </div>
                  
              </div>
            

            </div>
          </div>
      </div>
    </div>
  )
}

export default Experiences