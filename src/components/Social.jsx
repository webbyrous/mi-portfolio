import React from 'react'
import { FaLinkedin, FaGithub  } from "react-icons/fa";


export default function Social() {
  return (
    <div className='bg-peach font-family flex flex-col items-center gap-4 py-3 md:pb-6 dark:bg-dark-bg-strong dark:text-white pb-6'>
        <h2 className='font-bold text-black text-2xl sm:text-3xl md:text-4xl mt-6 dark:text-white'>Social</h2>
        <div className='flex gap-4 justify-between items-center w-xs'>
            {/* Enlace LinkedIn */}
            <a  href="https://www.linkedin.com/in/rosario-bernal/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Perfil de LinkedIn" className='flex gap-2 items-center text-base md:text-lg transition-colors duration-200 group hover:text-pink'>
                <span className='text-pink text-2xl md:text-3xl transition-transform duration-200 group-hover:scale-110'><FaLinkedin />
                </span>
                LinkedIn
            </a>
            {/* Enlace Github */}
            <a href="https://github.com/webbyrous" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Perfil de Github" className='flex gap-2 items-center text-base md:text-lg transition-colors duration-200 group hover:text-pink'>
                <span className='text-pink text-2xl md:text-3xl transition-transform duration-200 group-hover:scale-110'><FaGithub /></span>
                Github
            </a>
        </div>
    </div>
  )
}
