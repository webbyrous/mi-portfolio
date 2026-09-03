import React from 'react'
import { FaLinkedin, FaGithub  } from "react-icons/fa";


export default function Social() {
  return (
    <div className='bg-peach font-family flex flex-col items-center gap-4 py-3'>
        <h2 className='font-bold text-black text-2xl sm:text-3xl md:text-4xl mt-6'>Social</h2>
        <div className='flex gap-4 justify-between items-center w-xs'>
            <p className='flex gap-2 items-center text-base md:text-lg'>
                <span className='text-pink text-2xl md:text-3xl'><FaLinkedin />
                </span>
                LinkedIn
            </p>
            <p className='flex gap-2 items-center text-base md:text-lg'>
                <span className='text-pink text-2xl md:text-3xl'><FaGithub /></span>
                Github
            </p>
        </div>
    </div>
  )
}
