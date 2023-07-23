import React from 'react'
import Link from 'next/link';

const Contact = () => {
  return (
    <div className='h-max w-full text-center break-normal font-mono py-20'>
        <div className='p-8 flex'>
            <heading className='text-4xl font-extrabold'>Get </heading>
            <heading className='text-4xl'>In Touch.</heading>
        </div>
        <div className='flex justify-center py-24 w-full h-full mx-auto'>
            <div className='flex justify-center w-[26rem] mt-6 text-start'>
                <div>
                    <p className='text-light font-extralight'>Whether you have questions about code, exciting opportunities to discuss, or simply want to say hello, don't hesitate to reach out anytime. My inbox is open for you, and I'll do my best to respond promptly and assist you in any way I can!</p>
                    {/* <div className='flex justify-center py-36'>
                        <p className='text-xl mr-2'>Linkedin</p>
                        <p className='text-xl ml-2'>Github</p>
                        <p className='text-xl ml-2'>Email</p>
                    </div> */}
                    <div>
                    <div className='py-24 text-center'>
                        <p className='font-bold text-xl'>kongmenglor122@gmail.com</p>
                        <Link href="https://lorxx504-kongmeng.github.io/resume/Kongmeng-Lor-2023-Resume.pdf" className='text-xl' target='_blank'><p className='mt-4 hover:text-slate-500 text-lg'>Resume</p></Link>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div>
                            <h1 className='text-xl font-extrabold'>Professional</h1>
                            <Link href="thttps://www.linkedin.com/in/kongmengl/"  target='_blank'><p className='mt-4 hover:text-slate-500 text-lg text-center'>Linkedin</p></Link>
                            <Link href="https://github.com/lorxx504-Kongmeng"  target='_blank'><p className='mt-4 hover:text-slate-500 text-lg text-center'>Github</p></Link>
                        </div>
                    </div>
                </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Contact;