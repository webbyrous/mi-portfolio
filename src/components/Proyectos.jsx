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
        <section className='bg-peach dark:bg-dark-bg-strong font-family flex flex-col justify-center items-center gap-4 px-6 dark:text-grey-medium scroll-mt-20 transition-colors duration-300' id='proyectos'>
            <h2 className='font-bold text-black text-2xl sm:text-3xl md:text-4xl text-center mt-6 dark:text-white'>Proyectos</h2>
            <div className='relative w-full max-w-7xl px-4 sm:px-8 md:px-12 pb-6'>
                {/*Flecha izquierda */}
                <button aria-label="Desplazar proyectos hacia la izquierda" onClick={scrollLeft} className='hidden md:flex p-3 bg-white dark:bg-grey-medium/20 dark:text-white border border-slate-200 dark:border-dark-bg-soft text-slate-700 dark:hover:bg-grey-medium/60  rounded-full shadow-md hover:shadow-none hover:bg-pink/65 hover:text-white transition-all duration-300 active:scale-95 cursor-pointer h-max place-self-center z-30 absolute left-0 sm:-left-3 md:-left-7 top-1/2 -translate-y-1/2 mx-3'><FaChevronLeft aria-hidden="true" className="text-lg"/></button>
                {/*Tarjetas proyectos */}
                <div ref={carruselRef} className='flex overflow-x-auto snap-x snap-mandatory scrollbar-none min-w-0 gap-6 px-4 py-4 lg:justify-center'>
                    {proyectosData.map((proyecto) => (
                        <div key={proyecto.id} className='flex flex-col shrink-0 w-[85%] sm:w-[320px] md:w-[340px] snap-center border-2 border-grey-medium dark:border dark:shadow-pink dark:shadow-xs dark:border-dark-pink/50 rounded-xl bg-peach-soft/40 dark:bg-dark-bg-soft transition-transform hover:scale-105 duration-300 hover:cursor-pointer' onClick={() => setSelectedProject(proyecto)}>
                            {/* Imagen del proyecto */}
                        <div className='w-full h-48 sm:h-52 overflow-hidden'>
                            <img src={proyecto.image} alt={`Captura del proyecto ${proyecto.title}`} className='w-full h-full object-cover object-top rounded-t-md '/>
                        </div>
                        {/* Información del proyecto */}
                        <div className='px-3 py-3 flex flex-col flex-1'>
                            <h3 className='text-lg md:text-xl font-bold pt-3'>{proyecto.title}</h3>
                            <p className='text-base md:text-lg line-clamp-4'>{proyecto.description}</p>
                            {/* Tecnologías usadas */}
                            <div className='text-sm font-medium flex flex-wrap gap-4 pt-4'>
                            {proyecto.tags.map((tag, index) => (
                                <span key={index} className='bg-tag-soft/80 dark:bg-dark-pink/20 px-2 py-0.5 text-xs rounded-md'>{tag}</span>
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
                                    onClick={(e) => e.stopPropagation()}
                                    className='flex items-center justify-center gap-1.5 text-sm font-semibold rounded-3xl py-1.5 px-2 hover:bg-pink/30 hover:shadow-2xs bg-pink/20 text-pink transition-all duration-200 hover:scale-105  dark:bg-grey-medium/20 dark:text-white dark:border-dark-bg-soft  dark:hover:bg-grey-medium/60'
                                    >
                                    <FaRegEye aria-hidden="true" className="text-lg" />Ver web 
                                    </a>
                                ) : (
                                    <span /> //Nodo vacío sino hay url
                                )}
                                {/* Enlace GitHub*/}
                                <div className='flex justify-center items-center gap-3'>
                                    {proyecto.githubUrl && (
                                        <a 
                                        href={proyecto.githubUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        aria-label={`Código de ${proyecto.title}`}
                                        className='text-xl text-slate-600 hover:text-black transition-all duration-300 hover:scale-125 dark:text-dark-pink dark:hover:text-pink'
                                        title="Repositorio en GitHub"
                                        >
                                        <FaGithub aria-hidden="true" className='text-2xl'/>
                                        </a>
                                    )}
                                    {/* Enlace Maximizar*/}
                                    <button aria-label={`Ver detalles de ${proyecto.title}`} onClick={() => setSelectedProject(proyecto)}  className='text-xl text-slate-600  bg-white/35 rounded-full p-1.5 transition-all duration-200 cursor-pointer hover:scale-110 dark:bg-transparent dark:border-none  border border-slate-200/60 hover:text-pink hover:border-pink/40 hover:bg-pink/10 dark:border-grey-strong/20 dark:text-dark-pink  dark:hover:bg-pink/20 dark:hover:border-pink/50'><FiMaximize2 aria-hidden="true" className='text-lg'/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                {/*Flecha derecha */}
                 <button aria-label="Desplazar proyectos hacia la derecha" onClick={scrollRight}className='hidden md:flex p-3 bg-white dark:bg-grey-medium/20 dark:text-white border border-slate-200 dark:border-dark-bg-soft text-slate-700 dark:hover:bg-grey-medium/60  rounded-full shadow-md hover:shadow-none hover:bg-pink/65 hover:text-white transition-all duration-300 active:scale-95 cursor-pointer h-max place-self-center z-30 absolute right-0 sm:-right-3 md:-right-7 top-1/2 -translate-y-1/2 mx-3'><FaChevronRight className="text-lg" aria-hidden="true"/></button>
            </div>
            <PopupProyecto proyecto={selectedProject} onClose={() => setSelectedProject(null)} />
        </section>
    )
}
