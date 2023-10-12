

export default function Home() {
  return (
    <main className="text-center flex flex-col justify-around gap-2 h-[75vh]">
      <h1 className='text-3xl'>Log-in</h1>
      <div>
        <form className='flex flex-col px-2 gap-8 text-left w-[95%] m-auto' action="">
          <div className='flex flex-col gap-4'>
            <label htmlFor="">Correo</label>
            <input className='p-3 rounded-3xl' type="email" />
          </div>
          <div className='flex flex-col gap-4'>
            <label htmlFor="">Contraseña</label>
            <input className='p-3 rounded-3xl' type="password" />
          </div>
          <button className='w-fit px-6 bg-[#FDFCDC] py-2 rounded-3xl'>Vamos!</button>
        </form>
      </div>
    </main>
  )
}
