
export default function Contacto() {
  return (
    <div className='bg-peach-soft dark:bg-dark-bg-soft dark:text-slate-200 pb-6' id="contacto">
        <div className='font-family flex flex-col md:flex-row justify-center md:gap-10  max-w-6xl mx-auto text-center md:text-left items-center md:items-start'>
            <div className="dark:text-slate-200">
                <h2 className='font-bold text-black text-2xl sm:text-3xl md:text-4xl mt-6 dark:text-slate-200'>Contacto</h2>
                <p className='text-base md:text-lg'>webbyrous@gmail.com</p>
            </div>
            <div className='flex flex-col gap-3 w-3/6'>
                <p className='text-lg mt-6'>Email</p>
                <form action="" className='flex flex-col gap-4 w-full'>
                    <input type="email" name="" id="" className='border-2 border-pink/60 dark:border-grey-medium/40 rounded-lg py-1 px-2 focus:shadow-xl focus:border-pink focus:outline-none'placeholder='Email' />
                    <textarea name="" id="" className='border-2 border-pink/60 rounded-lg py-1 px-2 focus:shadow-xl focus:outline-none focus:border-pink dark:border-grey-medium/40' placeholder='Mensaje'></textarea>
                    <button type="submit" className='bg-pink rounded-lg max-w-max px-7 py-1.5 text-white hover:cursor-pointer hover:bg-pink/60 dark:bg-pink/90 dark:hover:bg-pink hover:shadow-md mx-auto md:mx-0 transition-colors'>Enviar</button>
                </form>
            </div>
        </div>
    </div>
  )
}
