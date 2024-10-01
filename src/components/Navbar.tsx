import { NavbarProps } from '../types'
import React from 'react'
import { useState } from 'react';



export const Navbar = ({fetchData, label}: NavbarProps) => {

  const [handlerSubmit, setHandlerSubmit] = useState("");
  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetchData(handlerSubmit);
  }

  return (
    <nav className='flex items-center justify-between px-5 h-16'>
      <div className='flex space-x-3'>
        <img className='w-14 h-14' src='/sun.png' alt='Sun' />
        <span className='hidden items-center justify-center text-2xl text-white font-bold md:flex'>{label}</span>
      </div>
      <div className='flex'>

        <form onSubmit={handleSubmit} className='flex w-52 items-center justify-center md:w-80'>
          <input value={handlerSubmit} onChange={(e) => {setHandlerSubmit(e.target.value)}} className='w-36 py-1 px-2 rounded-full border-2 border-white !outline-none transition-all ease-out focus:w-52 md:w-44 md:focus:w-72 text-black placeholder-slate-400 font-bold' placeholder='Search your city...'/>
          <button className='hidden rounded-full px-2 md:block' type="submit"><img className='h-9 w-9' src='/arrow.png' alt='Search' /></button>
        </form>

      </div>  
      <div className='flex text-center text-white font-bold'>
        <span>Profilo</span>
      </div>            
    </nav>
  )
}