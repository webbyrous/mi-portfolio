import React from 'react'
import { FaGithub, FaLaptopCode, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FotoPerfil from '../assets/foto_perfil.png'


export default function Proyectos() {
    return (
        <div className='bg-peach font-family flex flex-col justify-center items-center gap-4'>
            <h2 className='font-bold text-black text-4xl mt-6'>Proyectos</h2>
            <div className='grid grid-cols-[auto_1fr_auto] w-full max-w-6xl gap-x-6 px-6 py-4'>
                <button className='p-3 bg-white border border-slate-200 text-slate-700 rounded-full shadow-md hover:bg-pink/10 hover:text-pink transition-all duration-300 active:scale-95 cursor-pointer h-max place-self-center'><FaChevronLeft className="text-lg" /></button>
                <div className='flex overflow-x-auto snap-x snap-mandatory min-w-0 gap-6'>
                    <div className='flex flex-col min-w-[300px] snap-center border-grey-medium border-2 rounded-xl shadow-lg'>
                        <div className='h-48 overflow-hidden'>
                            <img src={FotoPerfil} alt="" className=''/>
                        </div>
                        <div className='px-2'>
                            <h2 className='text-xl font-bold pt-3'>Titulo proyecto</h2>
                            <p className='text-md'>Descripción acortada...</p>
                            <div className='text-sm font-medium flex gap-4 pt-4'>
                                <span className='bg-tag-soft px-2 py-0.5 rounded-md'>React</span>
                                <span className='bg-tag-soft px-2 rounded-md py-0.5 '>Javascript</span>
                            </div>
                            <div className='flex justify-between py-3'>
                                <p className='text-md font-medium'>Live Demo</p>
                                <div className='flex justify-center items-center gap-3'>
                                    <FaGithub />
                                    <FaLaptopCode />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col min-w-[300px] snap-center border-grey-medium border-2 rounded-xl shadow-lg'>
                        <div className='h-48 overflow-hidden'>
                            <img src={FotoPerfil} alt="" className=''/>
                        </div>
                        <div className='px-2'>
                            <h2 className='text-xl font-bold pt-3'>Titulo proyecto</h2>
                            <p className='text-md'>Descripción acortada...</p>
                            <div className='text-sm font-medium flex gap-4 pt-4'>
                                <span className='bg-tag-soft px-2 py-0.5 rounded-md'>React</span>
                                <span className='bg-tag-soft px-2 rounded-md py-0.5 '>Javascript</span>
                            </div>
                            <div className='flex justify-between py-3'>
                                <p className='text-md font-medium'>Live Demo</p>
                                <div className='flex justify-center items-center gap-3'>
                                    <FaGithub />
                                    <FaLaptopCode />
                                </div>
                            </div>
                    </div>
                </div>
                 <button className='p-3 bg-white border border-slate-200 text-slate-700 rounded-full shadow-md hover:bg-pink/10 hover:text-pink transition-all duration-300 active:scale-95 cursor-pointer h-max place-self-center'><FaChevronRight className="text-lg" /></button>
            </div>
            </div>
        </div>
    )
}
