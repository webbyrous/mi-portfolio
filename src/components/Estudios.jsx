import React from 'react'
import { LuGraduationCap } from "react-icons/lu";


export default function Estudios() {
    return (
        <div className='font-family bg-peach-soft flex flex-col justify-center items-center gap-4 pb-8'>
            <h2 className='font-bold  text-2xl sm:text-3xl md:text-4xl text-center mt-5'>Estudios</h2>
            <p className='text-base sm:text-md md:text-lg lg:text-xl'>Mi recorrido personal</p>
            <div className='flex flex-col gap-6 max-w-4xl'>
                {/*Botones de años */}
                <div className=' flex justify-center items-center gap-4'>
                    <button className='flex items-center justify-center text-white font-bold text-base sm:text-md md:text-lg gap-1 bg-pink/60 rounded-xl py-2 px-4 shadow-lg shadow-pink/70 cursor-pointer '>
                        <LuGraduationCap className='text-xl md:text-2xl' />
                        2023
                    </button>
                    <button className='flex items-center justify-center text-black font-bold text-base sm:text-md md:text-lg gap-1 bg-transparent rounded-xl py-2 px-4 shadow-lg border-2 border-grey-medium/50 cursor-pointer'>
                        <LuGraduationCap className='text-2xl' />
                        2022
                    </button>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/*Tarjetas de estudios */}
                    <div className='flex flex-col border-pink/60 bg-peach border-2 rounded-xl py-4 px-8 shadow-xl gap-3'>
                        <span className='bg-pink/60 text-white rounded-2xl w-max py-1 px-2 text-xs md:text-base'>En curso</span>
                        <h2 className='text-base sm:text-md md:text-lg lg:text-xl font-bold'>Grado Superior de Desarrollo de Aplicaciones Web</h2>
                        <h3 className='text-md md:text-lg'>Ilerna</h3>
                        <p className='bg-peach-soft/50 px-2 py-0.5 rounded text-xs w-max border-1 border-grey-medium rounded-xl'>Especialización</p>
                    </div>
                    <div className='flex flex-col bg-peach border-grey-medium/30 border-2 rounded-xl py-4 px-8 shadow-xl gap-3'>
                        <span className='bg-grey-strong text-white rounded-2xl w-max py-1 px-2 text-xs md:text-base'>Finalizado</span>
                        <h2 className='text-base sm:text-md md:text-lg lg:text-xl font-bold'>Especialización Diseño y Programación Web</h2>
                        <h3 className='text-md md:text-lg'>UOC</h3>
                        <p className='bg-peach-soft/50 px-2 py-0.5 rounded text-xs w-max border-1 border-grey-medium rounded-xl'>Especialización</p>                </div>
                    <div className='flex flex-col bg-peach border-blue-green border-2 rounded-xl py-4 px-8 shadow-xl gap-3'>
                        <span className='bg-blue-green text-white rounded-2xl w-max py-1 px-2 text-xs md:text-base'>Finalizado</span>
                        <h2 className='text-base sm:text-md md:text-lg lg:text-xl font-bold'>Especialización Diseño y Programación Web</h2>
                        <h3 className='text-md md:text-lg'>UOC</h3>
                        <p className='bg-peach-soft/50 px-2 py-0.5 rounded text-xs w-max border-1 border-grey-medium rounded-xl'>Especialización</p>                    </div>
                    <div className='flex flex-col border-pink/60 bg-peach border-2 rounded-xl py-4 px-8 shadow-xl gap-3'>
                        <span className='bg-pink/60 text-white rounded-2xl w-max py-1 px-2 text-xs md:text-base'>En curso</span>
                        <h2 className='text-base sm:text-md md:text-lg lg:text-xl font-bold'>Grado Superior de Desarrollo de Aplicaciones Web</h2>
                        <h3 className='text-md md:text-lg'>Ilerna</h3>
                        <p className='bg-peach-soft/50 px-2 py-0.5 rounded text-xs w-max border-1 border-grey-medium rounded-xl'>Especialización</p>                    
                    </div>
                </div>
            </div>
        </div>

    )
}
