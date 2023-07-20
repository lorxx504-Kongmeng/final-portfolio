import React from 'react'
import experiences from '../../public/data/experiences.json'

export const metadata = {
  title: "Experiences"
}

const Experiences = () => {
  return (
    <div id="experiences" className='w-full h-max text-center break-normal flex justify-center font-mono text-gray-800'>
      <div className='flex justify-center w-full h-full'> 
          <div className='py-24'>
            <div>
              <h1 className='text-3xl font-bold md:text-5xl md:uppercase'>Experiences.</h1>
              <div className='mt-2'>
                <div className='md:flex md: justify-center items-center'>
                  <div className='mt-6'>
                    {experiences.map((item,id) => {
                      return <div key={id} className='text-xl p-2 mt-4 md:max-w-[60rem] rounded-b-3xl shadow-2xl md:p-4'>
                        <div className='text-start'>
                          <div className='flex justify-between md:p-2 md:pl-4'>
                            <h1 className='font-bold md:text-2xl font-mono'>{item.title}</h1>
                            <h1 className='text-sm pt-1 md:text-base font-mono'>{item.date}</h1>
                          </div>
                          <div className='md:pl-4'>
                            <h1 className='text-base font-light md:text-xl font-mono'>{item.company}</h1>
                            <h1 className='text-sm md:text-base font-mono'>{item.location}</h1>
                          </div>
                         

                          <div className='flex mt-2 mb-2 md:hidden'>
                            {item.skills.map((skill,id) => {
                              return <div key={id} className='shadow-xl rounded-full mr-2 mt-4'>  
                                    <h1 className='text-sm bg-gray-600 rounded py-1 p-2 text-white cursor-pointer '>{skill}</h1>
                                </div>
                            })}
                          </div>
                          <div className='md:p-2 md:pl-4'>
                            <p className='text-base mt-2 md:mt-4 font-mono'>{item.description}</p>
                          </div>
                          <div className='hidden md:block'>
                            <div className='flex mt-2 mb-2 md:p-2 md:pl-4'>
                              {item.skills.map((skill, id) => {
                                return <div key={id} className='shadow-xl rounded-full mr-2'>  
                                      <h1 className='text-sm bg-gray-600 rounded-full py-2 p-3 text-white cursor-pointer font-mono'>{skill}</h1>
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