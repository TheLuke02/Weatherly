import { NavbarProps } from '../types'
import React from 'react'

export const Navbar = ({label}: NavbarProps) => {
    return (
      <nav className='flex items-center'>
        <div className='flex'>
          <img className='w-20 h-20 px-1 mx-1' src='/sun.png' alt='Sun' />
          <span className='flex items-center justify-center text-2xl text-orange-500 font-bold'>Weatherly</span>
        </div>
        <div className='grow'>

          <form className='flex justify-center'>
            <input className='w-44 rounded-full border-4 border-orange-500 bg-slate-800 py-1 px-5 text-sm font-semibold text-white !outline-none transition-all duration-700 focus:-translate-x-6 ease-out placeholder:tracking-widest focus:w-52 sm:bg-transparent sm:pr-4' placeholder='Search your city'/>
            <button className='mx-1' type="button"><img className='h-10 w-10' src='/arrow.png' alt='Search' /></button>
          </form>


        </div>  
        <div className='flex-none text-center px-1 mx-1 text-orange-500 font-bold'>
          <ul>
            <li>Futuro profilo utente</li>
          </ul>
        </div>            
      </nav>
    )
  }

