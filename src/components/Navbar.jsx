import  { useEffect, useState } from 'react';
import { RxMoon } from 'react-icons/rx';
import { LuSunMedium } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";


export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    // Si no hay theme definido aún, usamos light como predefinido
    return localStorage.getItem('theme') || 'light';
  });
  const [isOpen, setIsOpen] = useState(false);

// Añadimos o quitamos la clase dark cada vez que se cambie el modo
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark'){
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Creamos los enlaces con sus referencias para navegar
  const navLinks = [
    {name: 'Inicio', href:'#inicio'},
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Estudios', href: '#estudios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className='bg-peach dark:bg-dark-bg-strong dark:text-grey-medium font-family relative z-50 transition-colors duration-300'>
      <div className='flex items-center justify-between md:justify-center py-4 px-6 md:px-0 md:gap-8 md:text-lg '>
        {/*Menú de navegación */}
        <ul className={`${isOpen ? 'flex' : 'hidden'} 
          flex-col md:flex md:flex-row md:w-auto md:static 
          absolute top-full left-0 w-full md:h-auto 
          bg-peach-nav md:bg-transparent dark:bg-dark-bg-strong md:gap-8 items-center justify-start md:justify-center 
          z-50 shadow-2xl md:shadow-none transitions-colors duration-300 md:dark:bg-transparent`}>
          {navLinks.map((link) => (
            <li onClick={() => setIsOpen(false)} className='w-full md:w-auto text-center py-3 md:py-1 inline-block transition-all duration-300 rounded-lg px-3  hover:bg-pink/20 hover:text-pink hover:scale-105 hover:-translate-y-1 cursor-pointer'>
              <a href={link.href} className='block md:inline-block w-full py-1.5 md:py-0'>{link.name}</a></li>
          ))}
        </ul>
        {/*Botón de cambiar el tema */}
        <div className='flex gap-2 py-2 px-2 rounded-2xl border-grey-medium/70 dark:border-grey-medium/30 border'>
          <button onClick={() => setTheme('light')} className={`p-1 rounded-full cursor-pointer ${theme === 'light' ? 'bg-white text-pink shadow-xs scale-105' 
                : 'text-slate-600 dark:text-slate-400 dark:hover:text-grey-medium dark:hover:bg-slate-600'}`}>
            <LuSunMedium />
          </button>
          <button onClick={() => setTheme('dark')} className={`p-1 rounded-full cursor-pointer ${theme === 'dark' ? 'bg-slate-700 text-pink shadow-xs scale-105' 
                : 'text-slate-600 dark:text-slate-400 hover:text-pink'}`}>
            <RxMoon />
          </button>
        </div>
        {/*Botón hamburguesa versión móvil */}
        <button onClick={() => setIsOpen(!isOpen)} className='md:hidden text-2xl p-2 text-slate-800 dark:text-grey-medium hover:cursor-pointer hover:text-pink transition-colors focus:outline-none'>
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
    </nav>
  )
}
