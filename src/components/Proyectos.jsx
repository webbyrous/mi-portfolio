import { useRef, useState } from 'react';
import { FaGithub, FaChevronLeft, FaChevronRight , FaRegEye} from "react-icons/fa";
import { FiMaximize2 } from "react-icons/fi";
import { proyectosData } from '../data/proyectosData';
import PopupProyecto from './PopupProyecto';

export default function Proyectos() {
    // Variable para referenciar al div del carrusel
    const carruselRef = useRef(null);
    // Tarjeta mide aprox 320px + 24px (gap-6) --> unos 360 px para avanzar una tarjeta completa
    const scrollLeft = () => {
        // Retrocede 360 píxeles a la izquierda
    if (carruselRef.current) {
      carruselRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    // Avanza 360 píxeles hacia la derecha
    if (carruselRef.current) {
      carruselRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className='bg-peach dark:bg-dark-bg-strong font-family flex flex-col justify-center items-center gap-4 px-6 dark:text-grey-medium'>
            <h2 className='font-bold text-black text-2xl sm:text-3xl md:text-4xl text-center mt-6 dark:text-grey-medium'>Proyectos</h2>
            <div className='relative w-full max-w-7xl px-4 sm:px-8 py-8'>
                {/*Flecha izquierda */}
                <button onClick={scrollLeft} className='p-3 bg-white dark:bg-grey-medium/20 dark:text-white border border-slate-200 dark:border-dark-bg-soft text-slate-700 dark:hover:bg-grey-medium/60  rounded-full shadow-md hover:shadow-none hover:bg-pink/65 hover:text-white transition-all duration-300 active:scale-95 cursor-pointer h-max place-self-center z-30 absolute -left-2 sm:-left-5 md:-left-7 top-1/2 -translate-y-1/2'><FaChevronLeft className="text-lg" /></button>
                {/*Tarjetas proyectos */}
                <div ref={carruselRef} className='flex overflow-x-auto snap-x snap-mandatory scrollbar-none min-w-0 gap-6 px-10 lg:justify-center'>
                    {proyectosData.map((proyecto) => (
                        <div className='flex flex-col shrink-0 w-[280px] sm:w-[320px] md:w-[340px] snap-center border-grey-medium dark:border-pink/30 border-2 rounded-xl shadow-lg'>
                            {/* Imagen del proyecto */}
                        <div className='w-full h-48 sm:h-52 overflow-hidden'>
                            <img src={proyecto.image} alt={`Captura del proyecto ${proyecto.title}`} className='w-full h-full object-cover object-top rounded-t-md transition-transform duration-300 hover:scale-105 '/>
                        </div>
                        {/* Información del proyecto */}
                        <div className='px-3 py-3 flex flex-col flex-1'>
                            <h2 className='text-lg md:text-xl font-bold pt-3'>{proyecto.title}</h2>
                            <p className='text-base md:text-lg line-clamp-4'>{proyecto.description}</p>
                            {/* Tecnologías usadas */}
                            <div className='text-sm font-medium flex flex-wrap gap-4 pt-4'>
                            {proyecto.tags.map((tag, index) => (
                                <span key={index} className='bg-tag-soft/80 dark:bg-pink/30 px-2 py-0.5 text-xs rounded-md'>{tag}</span>
                            ))}
                            </div>
                            {/* Enlaces inferiores */}
                            <div className='flex justify-between py-3 items-center mt-auto pt-8'>
                                {/* Enlace Ver Web */}
                                {proyecto.webUrl ? (
                                    <a 
                                    href={proyecto.webUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='flex items-center justify-center gap-1.5 text-sm font-semibold rounded-3xl py-1.5 px-2 hover:bg-pink/30 hover:shadow-2xs bg-pink/20 text-pink transition-all duration-200 hover:scale-105  dark:bg-grey-medium/20 dark:text-white dark:border-dark-bg-soft  dark:hover:bg-grey-medium/60'
                                    >
                                    <FaRegEye className="text-lg" />Ver web 
                                    </a>
                                ) : (
                                    <span className='text-xs font-medium text-slate-400'>
                                   
                                    </span>
                                )}
                                {/* Enlace GitHub*/}
                                <div className='flex justify-center items-center gap-3'>
                                    {proyecto.githubUrl && (
                                        <a 
                                        href={proyecto.githubUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        aria-label={`Código de ${proyecto.title}`}
                                        className='text-xl text-slate-600 hover:text-black transition-all duration-300 hover:scale-125 dark:text-pink/80 dark:hover:text-pink'
                                        title="Repositorio en GitHub"
                                        >
                                        <FaGithub className='text-2xl'/>
                                        </a>
                                    )}
                                    {/* Enlace Mostrar más*/}
                                    <button aria-label={`Ver detalles de ${proyecto.title}`} onClick={() => setSelectedProject(proyecto)}  className='text-xl text-slate-600  border border-slate-200/60 bg-white/35 rounded-full p-1 transition-all duration-200 cursor-pointer hover:scale-110 hover:text-slate-800 hover:border-slate-400 hover:bg-grey-medium dark:bg-transparent dark:border-none dark:text-pink dark:hover:bg-pink '><FiMaximize2 className='text-lg'/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                 <button onClick={scrollRight}className='p-3 bg-white dark:bg-grey-medium/20 dark:text-white border border-slate-200 dark:border-dark-bg-soft text-slate-700 dark:hover:bg-grey-medium/60  rounded-full shadow-md hover:shadow-none hover:bg-pink/65 hover:text-white transition-all duration-300 active:scale-95 cursor-pointer h-max place-self-center z-30 absolute -right-2 sm:-right-5 md:-right-7 top-1/2 -translate-y-1/2'><FaChevronRight className="text-lg" /></button>
                </div>
            </div>
            <PopupProyecto proyecto={selectedProject} onClose={() => setSelectedProject(null)} />
        </div>
    )
}
