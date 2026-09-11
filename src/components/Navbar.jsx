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
    <nav className='bg-peach backdrop-blur-2xl dark:bg-dark-bg-strong dark:text-grey-medium font-family sticky top-0 md:relative md:backdrop-blur-none z-50 transition-colors duration-300 border-b border-grey-medium/50 md:border-0 dark:border-grey-medium/10'>
      <div className='flex items-center justify-between lg:justify-center py-4 px-6 lg:px-0 lg:gap-8 md:text-lg '>
        {/*Menú de navegación */}
        <ul className={`${isOpen ? 'flex' : 'hidden'} 
          flex-col lg:flex lg:flex-row lg:w-auto lg:static 
          absolute top-full left-0 w-full lg:h-auto 
          bg-peach-nav lg:bg-transparent dark:bg-dark-bg-strong gap-2 lg:gap-15 items-center justify-start lg:justify-center 
          z-50 shadow-2xl lg:shadow-none transitions-colors duration-300 lg:dark:bg-transparent`}>
          {navLinks.map((link) => {
            // En pantallas grandes no nos interesa mostrar la opción Inicio
            const isInicio = link.name ==='Inicio';
              return (
              <li key={link.name} onClick={() => setIsOpen(false)} className={`${isInicio ? 'lg:hidden' : ''} w-full lg:w-auto text-center lg:py-1 inline-block transition-all duration-300 rounded-lg px-3 py-1 hover:bg-pink/20 hover:text-pink hover:scale-105 hover:-translate-y-1 cursor-pointer`}>
                <a href={link.href} className='block md:inline-block w-full py-1.5 lg:py-0'>{link.name}</a></li>
              );
          })}
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
        <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden text-2xl p-2 text-slate-800 dark:text-grey-medium hover:cursor-pointer hover:text-pink transition-colors focus:outline-none'>
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
    </nav>
  )
}
