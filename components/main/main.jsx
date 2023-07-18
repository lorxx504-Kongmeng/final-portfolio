import React from 'react'
import data from '../main/introduction.json'
import Image from 'next/image'


const Main = () => {
  return (
    <div className='w-full h-screen text-center break-normal '>

        <div className='w-full h-full mx-auto p-2 flex justify-center items-center'>
            {/* <div style={{position: 'relative', height: '200px'}}>
                    <Image src="/main/shot.png" fill></Image>
            </div> */}
            <div className='p-2 max-w-[600px]'>
                

                <div className='max-w-[120px] md:max-w-[140px]'>
                    <p className='text-2xl'>{data.introduction}</p>
                </div>
                <div className='flex justify-center text-4xl font-bold mb-2 md:text-6xl md:max-w-[480px] max-w-[300px]'>
                    <h1 className='ml-2'>{data.first_Name}</h1>
                    <h1 className='ml-2'>{data.last_Name}.</h1>
            
                </div>
                {/* <div className='p-4 border max-w-[700px]'>
                    <p className='mb-2 mt-2 text-2xl'>{data.position}</p>
                </div> */}

                <div className='flex justify-start p-6 max-w-[600px] '>
                    <p className='text-base'>{data.description}</p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Main;