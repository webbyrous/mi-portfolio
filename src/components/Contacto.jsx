import React from 'react'

export default function Contacto() {
  return (
    <div className='font-family flex justify-center gap-10 bg-peach-soft py-3'>
        <div>
            <h2 className='font-bold text-black text-4xl mt-6'>Contacto</h2>
            <p>webbyrous@gmail.com</p>
        </div>
        <div className='flex flex-col gap-3 w-2xs'>
            <p className='text-lg mt-6'>Email</p>
            <form action="" className='flex flex-col gap-4 w-full'>
                <input type="email" name="" id="" className='border-2 border-pink/60 rounded-lg py-1 px-2'placeholder='Email' />
                <textarea name="" id="" className='border-2 border-pink/60 rounded-lg py-1 px-2' placeholder='Mensaje'></textarea>
                <button type="submit" className='bg-pink rounded-lg max-w-max px-7 py-1.5 hover:cursor-pointer'>Enviar</button>
            </form>
        </div>
    </div>
  )
}
