import React from 'react'
import FotoPerfil from '../assets/foto_perfil.png'
import { FaFileDownload } from "react-icons/fa";


export default function Hero() {
    return (
        <div className='bg-peach'>
            <div className='grid grid-cols-1 md:grid-cols-2 px-6 py-12 font-family max-w-6xl mx-auto'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-6xl font-medium text-slate-800 max-w-min'>Hola, soy <span className='text-pink font-semibold'>Rosario</span>, Desarrolladora Web Junior</h1>
                    <p className='text-slate-900 text-base md:text-lg leading-relaxed'>Apasionada del diseño web y la lógica frontend. Me encantan los desafíos que me impulsan a aprender, superarme y transformar ideas en experiencias web atractivas y funcionales.</p>
                    <a
                        href="/tu-cv.pdf"
                        download="CV_TuNombre.pdf"
                        className="px-6 py-3 bg-pink text-white font-bold rounded-xl shadow-md hover:bg-pink/60 transition-colors flex items-center justify-center gap-2 max-w-max"
                    >
                        <FaFileDownload /> Descargar CV
                    </a>
                </div>
                <div className='relative w-full max-w-[400px] h-[480px] mx-auto flex items-center justify-center p-4'>
                    <div className="absolute inset-0 bg-pink/60 rounded-3xl rotate-10 translate-y-2 max-h-[450px]" />
                    <div className="relative z-1 w-full h-full bg-white p-3 rounded-xl shadow-xl">
                        <img
                            src={FotoPerfil}
                            alt="Foto de Rosario"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
