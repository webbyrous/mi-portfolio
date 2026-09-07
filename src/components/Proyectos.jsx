import { FaGithub, FaChevronLeft, FaChevronRight , FaRegEye} from "react-icons/fa";
import { proyectosData } from '../data/proyectosData';

export default function Proyectos() {
    return (
        <div className='bg-peach font-family flex flex-col justify-center items-center gap-4 px-6'>
        
            <h2 className='font-bold text-black text-2xl sm:text-3xl md:text-4xl text-center mt-6'>Proyectos</h2>
            <div className='relative w-full max-w-6xl gap-x-6 px-6 py-8'>
                {/*Flecha izquierda */}
                <button className='p-3 bg-white border border-slate-200  text-slate-700 rounded-full shadow-md hover:shadow-none hover:bg-pink/65 hover:text-white transition-all duration-300 active:scale-95 cursor-pointer h-max place-self-center z-30 absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2'><FaChevronLeft className="text-lg" /></button>
                {/*Tarjetas proyectos */}
                <div className='flex overflow-x-auto snap-x snap-mandatory scrollbar-none min-w-0 gap-6 px-10'>
                    {proyectosData.map((proyecto) => (
                        <div className='flex flex-col shrink-0 w-[280px] sm:w-[320px] md:w-[340px] snap-center border-grey-medium border-2 rounded-xl shadow-lg'>
                            {/* Imagen del proyecto */}
                        <div className='h-48 overflow-hidden'>
                            <img src={proyecto.image} alt="" className=''/>
                        </div>
                        {/* Información del proyecto */}
                        <div className='px-3'>
                            <h2 className='text-lg md:text-xl font-bold pt-3'>{proyecto.title}</h2>
                            <p className='text-base md:text-lg'>{proyecto.description}</p>
                            {/* Tecnologías usadas */}
                            <div className='text-sm font-medium flex gap-4 pt-4'>
                            {proyecto.tags.map((tag, index) => (
                                <span key={index} className='bg-tag-soft px-2 py-0.5 text-xs rounded-md'>{tag}</span>
                            ))}
                            </div>
                            <div className='flex justify-between py-3'>
                                {proyecto.webUrl ? (
                                    <a 
                                    href={proyecto.webUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='flex items-center gap-1.5 text-sm font-semibold text-pink hover:underline'
                                    >
                                    Ver web <FaRegEye className="text-xl" />
                                    </a>
                                ) : (
                                    <span className='text-xs font-medium text-slate-400'>
                                    Próximamente
                                    </span>
                                )}
                                <div className='flex justify-center items-center gap-3'>
                                   {/* Solo GitHub a la derecha */}
                                    {proyecto.githubUrl && (
                                        <a 
                                        href={proyecto.githubUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        aria-label={`Código de ${proyecto.title}`}
                                        className='text-xl text-slate-600 hover:text-black transition-colors'
                                        title="Repositorio en GitHub"
                                        >
                                        <FaGithub />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                    {/* <div className='flex flex-col shrink-0 w-[280px] sm:w-[320px] md:w-[340px] snap-center border-grey-medium border-2 rounded-xl shadow-lg'>
                        <div className='h-48 overflow-hidden'>
                            <img src={FotoPerfil} alt="" className=''/>
                        </div>
                        <div className='px-3'>
                            <h2 className='text-lg md:text-xl font-bold pt-3'>Titulo proyecto</h2>
                            <p className='text-base md:text-lg'>Descripción acortada...</p>
                            <div className='text-sm font-medium flex gap-4 pt-4'>
                                <span className='bg-tag-soft px-2 py-0.5 text-xs rounded-md'>React</span>
                                <span className='bg-tag-soft px-2 rounded-md text-xs py-0.5 '>Javascript</span>
                            </div>
                            <div className='flex justify-between py-3'>
                                <p className='text-base font-medium'>Live Demo</p>
                                <div className='flex justify-center items-center gap-3'>
                                    <FaGithub />
                                    <FaLaptopCode />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col shrink-0 w-[280px] sm:w-[320px] md:w-[340px] snap-center border-grey-medium border-2 rounded-xl shadow-lg'>
                        <div className='h-48 overflow-hidden'>
                            <img src={FotoPerfil} alt="" className=''/>
                        </div>
                        <div className='px-3'>
                            <h2 className='text-lg md:text-xl font-bold pt-3'>Titulo proyecto</h2>
                            <p className='text-base md:text-lg'>Descripción acortada...</p>
                            <div className='text-sm font-medium flex gap-4 pt-4'>
                                <span className='bg-tag-soft px-2 py-0.5 text-xs rounded-md'>React</span>
                                <span className='bg-tag-soft px-2 rounded-md text-xs py-0.5 '>Javascript</span>
                            </div>
                            <div className='flex justify-between py-3'>
                                <p className='text-base font-medium'>Live Demo</p>
                                <div className='flex justify-center items-center gap-3'>
                                    <FaGithub />
                                    <FaLaptopCode />
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/*Flecha derecha */}
                 <button className='p-3 bg-white border border-slate-200  text-slate-700 rounded-full shadow-md hover:shadow-none hover:bg-pink/65 hover:text-white transition-all duration-300 active:scale-95 cursor-pointer h-max place-self-center z-30 absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2'><FaChevronRight className="text-lg" /></button>
                </div>
            </div>
        </div>
    )
}
