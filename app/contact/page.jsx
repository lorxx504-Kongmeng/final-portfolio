import React from 'react'
import Link from 'next/link';
import Footer from '@/components/footer/footer';

export const metadata = {
    title: "Contact"
  }

const Contact = () => {
  return (
    <div className='h-screen w-full text-center break-normal font-mono py-20 flex flex-col justify-between'>

        <div>
        <div className='md:flex md:justify-center'>
            <div className='p-8 flex'>
                <heading className='text-4xl font-extrabold'>Get </heading>
                <heading className='text-4xl'>In Touch.</heading>
            </div>
        </div>

        <div className='flex justify-center py-24 md:py-0 w-full h-full mx-auto'>
            <div className='flex justify-center w-[26rem] mt-6'>
                <div>
                    <div className='flex justify-center md:w-[400px] text-start  p-8 md:font-mono ' >
                        <p className='text-light font-extralight'>Whether you have questions about code, exciting opportunities to discuss, or simply want to say hello, don't hesitate to reach out anytime. My inbox is open for you, and I'll do my best to respond promptly and assist you in any way I can!</p>

                    </div>
                    <div>
                    <div className='py-24 text-center md:py-4'>
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
    </div>
  )
}

export default Contact;