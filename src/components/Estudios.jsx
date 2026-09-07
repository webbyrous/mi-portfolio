import React, { useState } from 'react'
import { LuGraduationCap } from "react-icons/lu";
import { FaChevronDown, FaRegEye } from "react-icons/fa"; 
import { studiesData } from '../data/estudiosData';

export default function Estudios() {

    // Estado para controlar los estudios a mostrar según el año
    const [selectedYear, setSelectedYear] = useState('all');

    // Buscamos los items según el año seleccionado
    const filteredStudies = selectedYear === 'all' ? studiesData : studiesData.filter(item => item.year === selectedYear);

    // Según el año que se encuentre activo definimos las clases de los botones
    const getButtonClass = (year) => {
        const isActive = selectedYear === year;
        return `flex items-center justify-center font-bold text-base sm:text-md md:text-lg gap-1 rounded-xl py-2 px-4 shadow-lg border-2  cursor-pointer 
        ${isActive ? 'text-white bg-pink/60 shadow-pink/70 border-none' : 'text-black bg-transparent border-grey-medium/50 hover:border-pink/50}'}`;
    };

    return (
        <div className='font-family bg-peach-soft flex flex-col justify-center items-center gap-4 pb-8'>
            <h2 className='font-bold  text-2xl sm:text-3xl md:text-4xl text-center mt-5'>Estudios</h2>
            <p className='text-base sm:text-md md:text-lg lg:text-xl'>Mi recorrido personal</p>
            <div className='flex flex-col gap-6 max-w-4xl'>
                {/*Botones de años */}
                {/* Version móvil y tablet (md): Desplegable */}
                <div className='mx-auto md:hidden'>
                    <div className='relative w-full'>
                        <select value={selectedYear} onChange = {(e) => setSelectedYear(e.target.value)}
                        aria-label='Filtrar estudios por año'
                        className='w-full appearance-none bg-white border-2 border-pink/60 font-semibold py-2 pl-3 pr-10 rounded-xl text-black shadow-sm focus:outline-none text-sm focus:ring-2 focus:ring-pink/50'>
                            <option value="all" className="text-slate-800 font-medium py-2">Todos</option>
                            <option value="2026">2026</option>
                            <option value="2025">2025</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                        </select>
                        {/* Icono de flecha para estilizar el select nativo */}
                        <FaChevronDown className='absolute right-3.5 top-1/2 -translate-y-1/2 text-black pointer-events-none text-xs' />
                    </div>
                </div>
                {/* Cuando se haga click en el botón cambiamos el año según el botón seleccionado */}
                <div className=' hidden md:flex justify-center items-center gap-4'>
                    <button onClick={() => setSelectedYear('all')} className={getButtonClass('all')}>
                        Todos
                    </button>
                    <button onClick={() => setSelectedYear('2026')} className={getButtonClass('2026')}>
                        <LuGraduationCap className='text-xl' />2026
                    </button>
                    <button onClick={() => setSelectedYear('2025')}  className={getButtonClass('2025')}>
                        <LuGraduationCap className='text-xl' />2025
                    </button>
                    <button  onClick={() => setSelectedYear('2024')} className={getButtonClass('2024')}>
                        <LuGraduationCap className='text-xl' />2024
                    </button>
                    <button onClick={() => setSelectedYear('2023')} className={getButtonClass('2023')}>
                       <LuGraduationCap className='text-xl' /> 2023
                    </button>
                    <button onClick={() => setSelectedYear('2022')}  className={getButtonClass('2022')}>
                        <LuGraduationCap className='text-xl' />2022
                    </button>
                </div>
                <div className='px-5 sm:px-8 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/*Tarjetas de estudios */}
                    {/*Creamos una tarjeta por cada item del año seleccionado  */}
                    {filteredStudies.map((study) => {
                        const stateStudy = study.status === 'En curso';
                        const isBootcamp = study.tag === 'Bootcamp';
                        const hoverStyles = stateStudy ? 'hover:text-pink hover:border-pink/60 hover:bg-pink/10'
                            : isBootcamp ? 'hover:text-blue-green hover:border-blue-green hover:bg-blue-green/20' 
                            : 'hover:text-slate-800 hover:border-slate-400 hover:bg-grey-medium'
                        return (
                            <div key={study.id} className={`relative min-w-75 flex flex-col bg-peach border-2 rounded-xl py-4 px-5 sm:px-8 shadow-xl gap-3 ${stateStudy ? 'border-pink/60' : isBootcamp ?  'border-blue-green' : 'border-grey-medium/90'}`}>
                               { study.certificateUrl && ( <a href={study.certificateUrl} target="_blank"
                                rel="noopener noreferrer" 
                                className={`absolute right-4 top-4 p-2 text-slate-400 border border-slate-200/60 bg-white/35 rounded-full transition-all duration-200 cursor-pointer ${hoverStyles}`}><FaRegEye className="text-xl" />
                                </a>
                            )}
                                <span className={`text-white rounded-2xl w-max py-1 px-2 text-xs md:text-base ${stateStudy ? 'bg-pink/60' : isBootcamp ? 'bg-blue-green' : 'bg-grey-strong'}`}>{study.status}</span>
                                <h2 className='pr-8 text-base sm:text-md md:text-lg lg:text-xl font-bold'>{study.title}</h2>
                                <h3 className='text-md md:text-lg'>{study.institution}</h3>
                                <p className='bg-peach-soft/50 px-2 py-0.5 rounded-xl text-xs w-max border border-grey-medium'>{study.tag}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
