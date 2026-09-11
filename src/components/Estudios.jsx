import { useState } from 'react'
import { LuGraduationCap } from "react-icons/lu";
import { FaChevronDown, FaRegEye } from "react-icons/fa"; 
import { studiesData } from '../data/estudiosData';

export default function Estudios() {
    // Estado para controlar los estudios a mostrar según el año
    const [selectedYear, setSelectedYear] = useState('Todos');

    // Buscamos los items según el año seleccionado
    const filteredStudies = selectedYear === 'Todos' ? studiesData : studiesData.filter(item => item.year === selectedYear);

    // Creamos un botón para cada año extraído del archivo js
    const uniqueYears = [...new Set(studiesData.map(i => i.year))].sort((a,b) => b - a);
    const yearsList = [
        {value: 'Todos', label: 'Todos'},
        ...uniqueYears.map(year => ({
            value:year,
            label:year,
        }))
    ];

    // Según el año que se encuentre activo definimos las clases de los botones
    const getButtonClass = (year) => {
        const isActive = selectedYear === year;
        return `flex items-center justify-center font-bold text-base sm:text-md md:text-lg gap-1 rounded-xl py-2 px-4 shadow-lg border-2  cursor-pointer transition-all duration-300 ease-in-out
        ${isActive ? 'text-white bg-pink border-pink shadow-pink/30 dark:bg-pink dark:shadow-pink/30 active:scale-95' : 'text-slate-800 dark:text-grey-medium bg-transparent dark:bg-dark-bg-strong border-grey-medium/40 dark:border-grey-medium/20 dark:hover:border-dark-pink/40 dark:hover:text-white hover:bg-pink/60 hover:border-pink/30 hover:text-white dark:hover:bg-dark-pink/70 hover:-translate-y-0.5' }`;
    };

    return (
        <div className='font-family bg-peach-soft dark:bg-dark-bg-soft dark:text-slate-200 flex flex-col justify-center items-center gap-4 pb-8 scroll-mt-20' id='estudios'>
            <h2 className='font-bold  text-2xl sm:text-3xl md:text-4xl text-center mt-5'>Estudios</h2>
            <p className='text-base sm:text-md md:text-lg lg:text-xl'>Mi recorrido personal</p>
            <div className='flex flex-col gap-6 max-w-4xl'>
                {/*Botones de años */}
                {/* Version móvil y tablet (md): Desplegable */}
                <div className='mx-auto md:hidden'>
                    <div className='relative w-full'>
                        <select value={selectedYear} onChange = {(e) => setSelectedYear(e.target.value)}
                        aria-label='Filtrar estudios por año'
                        className='w-full appearance-none bg-white border-2 border-grey-strong/20 font-semibold py-2 pl-3 pr-10 rounded-xl text-black shadow-sm focus:outline-none text-sm focus:ring-2 focus:ring-pink/50 focus:border-transparent dark:bg-grey-strong dark:text-slate-200 dark:border-grey-medium/20 transition-colors duration-300'>
                            {yearsList.map((op) => (
                                <option value={op.value} key={op.value} className="text-slate-800 dark:text-slate-200 font-medium py-2">{op.label}</option>
                            ))}
                        </select>
                        {/* Icono de flecha para estilizar el select nativo */}
                        <FaChevronDown className='absolute right-3.5 top-1/2 -translate-y-1/2 text-black pointer-events-none text-xs dark:text-slate-200' />
                    </div>
                </div>
                {/* Cuando se haga click en el botón cambiamos el año según el botón seleccionado */}
                <div className=' hidden md:flex justify-center items-center gap-4'>
                     {yearsList.map((op) => (
                                <button value={op.value} key={op.value} onClick={() => setSelectedYear(op.value)} className={getButtonClass(op.value)}>{op.label !== 'Todos' && <LuGraduationCap className='text-xl' />}{op.label}</button>
                            ))}
                </div>
                <div className='px-5 sm:px-8 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/*Tarjetas de estudios */}
                    {/*Creamos una tarjeta por cada item del año seleccionado  */}
                    {filteredStudies.map((study) => {
                        const stateStudy = study.status === 'En curso';
                        const isBootcamp = study.tag === 'Bootcamp';
                        const hoverStyles = stateStudy ? 'hover:text-pink hover:border-pink/60 hover:bg-pink/10'
                            : isBootcamp ? 'hover:text-blue-green hover:bg-blue-green/20 ' 
                            : 'hover:text-slate-600 dark:hover:text-slate-800 hover:bg-dark-bg-soft/20 dark:hover:bg-grey-medium/30'
                        return (
                            <div key={study.id} className={`relative min-w-75 flex flex-col bg-peach border-2 rounded-xl py-4 px-5 sm:px-8 shadow-xl gap-3 dark:bg-dark-bg-strong transition-transform duration-300 hover:scale-105 ${stateStudy ? 'border-pink/60 dark:border-pink' : isBootcamp ?  'border-blue-green' : 'border-grey-medium/90 dark:border-grey-medium/50'}`}>
                               { study.certificateUrl && ( <a href={study.certificateUrl} target="_blank"
                                rel="noopener noreferrer" 
                                className={`absolute right-4 top-4 p-2 text-slate-400 border border-slate-200/60 dark:border-grey-strong/20 bg-white/35 dark:bg-grey-strong dark:text-grey-medium rounded-full transition-all duration-200 cursor-pointer ${hoverStyles}`}><FaRegEye className="text-xl" />
                                </a>
                            )}
                                <span className={`text-white rounded-2xl w-max py-1 px-2 text-xs md:text-base ${stateStudy ? 'bg-pink/60 dark:bg-dark-pink' : isBootcamp ? 'bg-blue-green' : 'bg-grey-strong'}`}>{study.status}</span>
                                <h2 className='pr-8 text-base sm:text-md md:text-lg lg:text-xl font-bold'>{study.title}</h2>
                                <h3 className='text-md md:text-lg'>{study.institution}</h3>
                                <p className='bg-grey-medium/50 px-2 py-0.5 rounded-lg text-xs w-max border border-grey-medium/30 dark:bg-grey-strong dark:border-grey-strong'>{study.tag}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
