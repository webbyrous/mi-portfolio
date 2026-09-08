import React from 'react'
import { FaReact, FaJava, FaDatabase, FaPython  } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { SiVite, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { CgFigma } from "react-icons/cg";


export default function Habilidades() {
    // ARREGLAR EL ANCHO DE LA CARD DE CADA HABILIDAD EN MOVIL
    return (
        <div className='bg-peach dark:bg-dark-bg-strong dark:text-grey-medium transition-colors duration-300'>
            <div className= 'font-family px-6 py-8 max-w-6xl mx-auto'>
                <h2 className='font-bold text-black text-2xl sm:text-3xl md:text-4xl py-4 text-center dark:text-grey-medium'>Habilidades</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-4xl'>
                    <div className='max-w-80 border-2 border-pink/40 shadow-xl dark:shadow-pink dark:shadow-xs rounded-md bg-transparent dark:bg-dark-bg-soft flex flex-col items-center py-2 md:py-5 gap-4'>
                        <span className='text-5xl md:text-6xl text-pink'><FaReact /></span>
                        <p className='text-base sm:text-lg md:text-xl'>React</p>
                    </div>
                    <div className='border-2 border-pink/40 shadow-xl rounded-md bg-transparent flex flex-col items-center py-5 gap-4 dark:bg-dark-bg-soft dark:shadow-pink dark:shadow-xs '>
                        <span className='text-5xl md:text-6xl text-pink'><SiVite /></span>
                        <p className='text-base sm:text-lg md:text-xl'>Vite</p>
                    </div>
                    <div className='border-2 border-pink/40 shadow-xl rounded-md bg-transparent flex flex-col items-center py-5 gap-4 dark:bg-dark-bg-soft dark:shadow-pink dark:shadow-xs '>
                        <span className='text-5xl md:text-6xl  text-pink'><SiTailwindcss /></span>
                        <p className='text-base sm:text-lg md:text-xl'>Tailwind</p>
                    </div>
                    <div className='border-2 border-pink/40 shadow-xl rounded-md bg-transparent flex flex-col items-center py-5 gap-4 dark:bg-dark-bg-soft dark:shadow-pink dark:shadow-xs '>
                        <span className='text-5xl md:text-6xl text-pink'><IoLogoJavascript /></span>
                        <p className='text-base sm:text-lg md:text-xl'>Javascript</p>
                    </div>
                    <div className='border-2 border-pink/40 shadow-xl rounded-md bg-transparent flex flex-col items-center py-5 gap-4 dark:bg-dark-bg-soft dark:shadow-pink dark:shadow-xs '>
                        <span className='text-5xl md:text-6xl text-pink'><FaJava />
                        </span>
                        <p className='text-base sm:text-lg md:text-xl'>Java</p>
                    </div>
                    <div className='border-2 border-pink/40 shadow-xl rounded-md bg-transparent flex flex-col items-center py-5 gap-4 dark:bg-dark-bg-soft dark:shadow-pink dark:shadow-xs '>
                        <span className='text-5xl md:text-6xl  text-pink'><FaPython  />
                        </span>
                        <p className='text-base sm:text-lg md:text-xl'>Python</p>
                    </div>
                    <div className='border-2 border-pink/40 shadow-xl rounded-md bg-transparent flex flex-col items-center py-5 gap-4 dark:bg-dark-bg-soft dark:shadow-pink dark:shadow-xs '>
                        <span className='text-5xl md:text-6xl text-pink'><CgFigma />
                        </span>
                        <p className='text-base sm:text-lg md:text-xl'>Figma</p>
                    </div>
                    <div className='border-2 border-pink/40 shadow-xl rounded-md bg-transparent flex flex-col items-center py-5 gap-4 dark:bg-dark-bg-soft dark:shadow-pink dark:shadow-xs '>
                        <span className='text-5xl md:text-6xl text-pink'><FaGitAlt />
                        </span>
                        <p className='text-base sm:text-lg md:text-xl'>Git</p>
                    </div>
                    <div className='border-2 border-pink/40 shadow-xl rounded-md bg-transparent flex flex-col items-center py-5 gap-4 dark:bg-dark-bg-soft dark:shadow-pink dark:shadow-xs '>
                        <span className='text-4xl md:text-5xl text-pink'><FaDatabase />
                        </span>
                        <p className='text-base sm:text-lg md:text-xl'>SQL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
