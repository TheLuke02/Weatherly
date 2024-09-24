import { NavbarProps } from '../types'
import React from 'react'
import { useState } from 'react';



export const Navbar = ({fetchData, label}: NavbarProps) => {

  const [handlerSubmit, setHandlerSubmit] = useState("");
  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetchData(handlerSubmit);
  }

  return (
    <nav className='flex items-center justify-between gap-x-2.5 px-5'>
      <div className='flex'>
        <img className='w-14 h-14' src='/sun.png' alt='Sun' />
        <span className='hidden md:ml-3 items-center justify-center text-2xl text-orange-500 font-bold md:flex'>{label}</span>
      </div>
      <div className='flex'>

        <form onSubmit={handleSubmit} className='flex w-52 items-center justify-center md:w-80'>
          <input value={handlerSubmit} onChange={(e) => {setHandlerSubmit(e.target.value)}} className='w-36 py-1 px-2 rounded-full border-2 border-orange-500 !outline-none transition-all ease-out focus:w-52 md:w-44 md:focus:w-72 text-slate-800 placeholder-slate-800 font-bold' placeholder='Search your city...'/>
          <button className='hidden rounded-full px-2 md:block' type="submit"><img className='h-10 w-10' src='/arrow.png' alt='Search' /></button>
        </form>

      </div>  
      <div className='flex-none text-center text-orange-500 font-bold'>
        <span>Profilo</span>
      </div>            
    </nav>
  )
}