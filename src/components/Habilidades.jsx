import React from 'react'
import { FaReact, FaJava, FaDatabase, FaPython  } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { SiVite, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { CgFigma } from "react-icons/cg";


export default function Habilidades() {
    return (
        <div className='bg-peach font-family px-6 py-8'>
            <h2 className='font-bold text-black text-4xl py-4  text-center'>Habilidades</h2>
            <div className='grid grid-cols-3 gap-4'>
                <div className='border-2 border-pink/40 shadow-xl rounded-md bg-transparent flex flex-col items-center py-5 gap-4'>
                    <span className='text-6xl text-pink'><FaReact /></span>
                    <p className='text-xl'>React</p>
                </div>
                <div className='border-2 border-pink/40 shadow-xl rounded-md bg-transparent flex flex-col items-center py-5 gap-4'>
                    <span className='text-6xl text-pink'><SiVite /></span>
                    <p className='text-xl'>Vite</p>
                </div>
                <div className='border-2 border-pink/40 shadow-xl rounded-md bg-transparent flex flex-col items-center py-5 gap-4'>
                    <span className='text-6xl text-pink'><SiTailwindcss /></span>
                    <p className='text-xl'>Tailwind</p>
                </div>
                <div className='border-2 border-pink/40 shadow-xl rounded-md bg-transparent flex flex-col items-center py-5 gap-4'>
                    <span className='text-6xl text-pink'><IoLogoJavascript /></span>
                    <p className='text-xl'>Javascript</p>
                </div>
                <div className='border-2 border-pink/40 shadow-xl rounded-md bg-transparent flex flex-col items-center py-5 gap-4'>
                    <span className='text-6xl text-pink'><FaJava />
                    </span>
                    <p className='text-xl'>Java</p>
                </div>
                <div className='border-2 border-pink/40 shadow-xl rounded-md bg-transparent flex flex-col items-center py-5 gap-4'>
                    <span className='text-6xl text-pink'><FaPython  />
                    </span>
                    <p className='text-xl'>Python</p>
                </div>
                <div className='border-2 border-pink/40 shadow-xl rounded-md bg-transparent flex flex-col items-center py-5 gap-4'>
                    <span className='text-6xl text-pink'><CgFigma />
                    </span>
                    <p className='text-xl'>Figma</p>
                </div>
                <div className='border-2 border-pink/40 shadow-xl rounded-md bg-transparent flex flex-col items-center py-5 gap-4'>
                    <span className='text-6xl text-pink'><FaGitAlt />
                    </span>
                    <p className='text-xl'>Git</p>
                </div>
                <div className='border-2 border-pink/40 shadow-xl rounded-md bg-transparent flex flex-col items-center py-5 gap-4'>
                    <span className='text-6xl text-pink'><FaDatabase />
                    </span>
                    <p className='text-xl'>SQL</p>
                </div>
            </div>
        </div>
    )
}
