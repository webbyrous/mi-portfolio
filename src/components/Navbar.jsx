import React, { useState } from 'react';
import { RxMoon } from 'react-icons/rx';
import { LuSunMedium } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";


export default function Navbar() {
  const [theme, setTheme] = useState('light');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='bg-peach font-family relative md:px-8 md:py-6 gap-8 '>
        <div className='max-w-8xl gap-8 flex items-center justify-between'>
          <ul className={`${isOpen ? 'flex' : 'hidden'} flex-col md:flex md:flex-row md:w-auto gap-4 md:gap-8 md:justify-between items-center text-base md:text-lg lg:text-xl text-slate-800 bg-peach absolute top-full w-full left-0 `}>
              <li className='inline-block transition-all duration-300 hover:text-white rounded-lg px-3 py-1 hover:bg-pink/60 hover:scale-105 hover:-translate-y-1 cursor-pointer'>Inicio</li>
              <li className='inline-block transition-all duration-300 hover:text-white rounded-lg px-3 py-1 hover:bg-pink/60 hover:scale-105 hover:-translate-y-1 cursor-pointer'>Sobre mí</li>
              <li className='inline-block transition-all duration-300 hover:text-white rounded-lg px-3 py-1 hover:bg-pink/60 hover:scale-105 hover:-translate-y-1 cursor-pointer'>Habilidades</li>
              <li className='inline-block transition-all duration-300 hover:text-white rounded-lg px-3 py-1 hover:bg-pink/60 hover:scale-105 hover:-translate-y-1 cursor-pointer'>Estudios</li>
              <li className='inline-block transition-all duration-300 hover:text-white rounded-lg px-3 py-1 hover:bg-pink/60 hover:scale-105 hover:-translate-y-1 cursor-pointer'>Proyectos</li>
              <li className='inline-block transition-all duration-300 hover:text-white rounded-lg px-3 py-1 hover:bg-pink/60 hover:scale-105 hover:-translate-y-1 cursor-pointer'>Contacto</li>
          </ul>
          <div className='flex gap-2 py-2 px-2 rounded-2xl border-grey-medium/70 border'>
            <button onClick={() => setTheme('light')} className={`p-1 rounded-full cursor-pointer ${theme === 'light'  ? 'bg-white': ''}`}>
                <LuSunMedium />
            </button>
            <button onClick={() => setTheme('dark')} className={`p-1 rounded-full cursor-pointer ${theme === 'dark'  ? 'bg-white': ''}`}>
                <RxMoon />
            </button>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className='md:hidden text-2xl p-2 text-slate-800 hover:cursor-pointer hover:text-pink transition-colors focus:outline-none'>
            {isOpen ? <HiX /> : <HiMenu /> }
          </button>
        </div>
    </nav>
  )
}
