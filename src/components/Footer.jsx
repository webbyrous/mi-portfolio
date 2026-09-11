import { FaLinkedin, FaGithub  } from "react-icons/fa";
export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-peach font-family flex flex-col items-center gap-4 py-3 md:pb-6 dark:bg-dark-bg-strong dark:text-white transition-colors duration-300'>
        <p className='font-bold text-black text-2xl sm:text-3xl md:text-4xl mt-6 dark:text-white'>Social</p>
        <div className='flex gap-4 justify-between items-center w-xs'>
            {/* Enlace LinkedIn */}
            <a  href="https://www.linkedin.com/in/rosario-bernal/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Perfil de LinkedIn"
                aria-hidden="true" 
                className='flex gap-2 items-center text-base md:text-lg transition-all duration-200 group hover:text-pink hover:font-semibold'>
                <span className='text-pink dark:text-dark-pink text-2xl md:text-3xl transition-transform duration-200 group-hover:scale-110'><FaLinkedin />
                </span>
                LinkedIn
            </a>
            {/* Enlace Github */}
            <a href="https://github.com/webbyrous" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-hidden="true" 
                aria-label="Perfil de Github" className='flex gap-2 items-center text-base md:text-lg transition-all duration-200 group hover:text-pink hover:font-semibold'>
                <span className='text-pink dark:text-dark-pink text-2xl md:text-3xl transition-transform duration-200 group-hover:scale-110'><FaGithub /></span>
                Github
            </a>
        </div>
        {/* Copyright */}
        <div className='text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-center mt-2 flex flex-col sm:flex-row gap-1 items-center'>
            <span>© {currentYear} Rosario Bernal</span>
            <span className='hidden sm:inline text-slate-400 dark:text-slate-600'>•</span>
            <span>Diseñado & Desarrollado con ❤️</span>
        </div>
    </footer>
  )
}
