import React from 'react'
import experiences from '../../public/data/experiences.json'

const Experiences = () => {
  return (
    <div className='h-max w-full text-center break-normal font-mono py-20 flex flex-col justify-around'>
      <div>
        <div className='flex justify-center'>
          <div>
            <div className='mt-6'>
              <heading className='text-4xl font-bold'>Experiences.</heading>
            </div>

            <div className='py-8 text-start m-4 leading-normal'>
              {
                experiences.map((item, key) => {
                  return <div key={key} className='mt-6 p-2 border-r border-b border-l border-t shadow-lg rounded'>
                      <p className='text-xl font-bold'>{item.title}</p>
                      <p className='text-xl mt-2'>{item.company}</p>
                      <p className='mt-2 text-light'>{item.location}</p>
                      <p className='mt-2 text-sm'>{item.date}</p>
                      <p className='mt-4'>{item.description}</p>
                      <div className='mt-4'>
                        {
                          item.skills.map((skill,key) => {
                            return <p key={key} className='mt-2'>{skill}</p>
                          })
                        }
                      </div>
                    </div>
                })
              }
              {/* <p>Associate Software Engineer</p>
              <p>Optum</p>
              <p>Remote</p>
              <p>January 2023 - June 2023</p>
              <p className='borders mt-6'>During my time at Optum, as a full stack software engineer, I had the opportunity to work on developing UI components and backend services for healthcare industry applications. For example, designing and implementing intuitive user interface components using Angular, ensuring a seamless and responsive user experience. These components might have included forms for data entry, interactive charts and graphs for data visualization, and reusable UI elements for consistent design across the application. As well as developing robust backend services using Spring Boot to handle data processing, business logic and integration. This involved designing and implementing RESTful APIs.</p>
              <div className='mt-4 border'>
                <p> Angular / Typescript / Javascipt</p>
                <p>Spring Boot / Java</p>
                <p>Graphql / Jenkins / Github</p>
                <p></p>
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Experiences;