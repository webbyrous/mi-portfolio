import FotoPerfil from '../assets/foto_perfil.png'
import { FaFileDownload } from "react-icons/fa";


export default function Hero() {
    return (
        <section className='bg-peach dark:bg-dark-bg-strong transition-colors duration-300 scroll-mt-20' id="inicio">
            <div className='grid grid-cols-1 lg:grid-cols-2 px-6 py-12 font-family max-w-6xl mx-auto items-center gap-10'>
                <div className='flex flex-col gap-4 order-2 lg:order-1 text-center lg:text-left'>
                    <h1 className=' dark:text-grey-medium lg:pt-7 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-slate-800 leading-tight lg:max-w-md'>Hola, soy <span className='text-pink dark:text-dark-pink font-semibold'>Rosario</span>, Desarrolladora Web Junior</h1>
                    <p className='dark:text-grey-medium text-slate-900 text-base md:text-lg leading-relaxed'>Apasionada del diseño web y la lógica frontend. Me encantan los desafíos que me impulsan a aprender, superarme y transformar ideas en experiencias web atractivas y funcionales.</p>
                    <a
                        href="/tu-cv.pdf"
                        download="CV_TuNombre.pdf"
                        className="px-6 py-3 bg-pink/80 dark:bg-pink/85 text-white font-bold rounded-xl shadow-md hover:bg-pink/90  flex items-center justify-center gap-2 max-w-max mx-auto lg:mx-0 dark:hover:bg-pink transition-all duration-300 hover:scale-105"
                    >
                        <FaFileDownload aria-hidden="true"/> Descargar CV
                    </a>
                </div>
                <div className='relative w-full max-w-[240px] h-[320px]
                sm:max-w-[340px] sm:h-[420px] lg:max-w-[400px] lg:h-[480px] mx-auto flex items-center justify-center p-4 order-1 lg:order-2'>
                    <div className="absolute inset-2 sm:inset-0 bg-pink/60 dark:bg-pink/90 rounded-3xl rotate-6 sm:rotate-10 translate-y-2 max-h-[450px]" />
                    <div className="relative z-1 w-full h-full bg-white dark:bg-dark-bg-strong/75 dark:backdrop-blur-md dark:border dark:border-dark-pink/30 p-3 rounded-xl shadow-xl">
                        <img
                            src={FotoPerfil}
                            alt="Foto de Rosario, Desarrolladora Web Junior"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
