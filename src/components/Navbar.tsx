import { NavbarProps } from '../types'
import React from 'react'

export const Navbar = ({label}: NavbarProps) => {
    return (
      <nav className='flex items-center'>
        <div className='flex'>
          <img className='w-20 h-20 px-1 mx-1' src='/sun.png' alt='Sun' />
          <span className='flex items-center justify-center text-2xl text-orange-600 font-bold'>Weatherly</span>
        </div>
        <div className='grow text-center px-1 mx-1 text-orange-600 font-bold'>
          <ul>
            <li>Questo è un link</li>
          </ul>
        </div>  
        <div className='flex-none text-center px-1 mx-1 text-orange-600 font-bold'>
          <ul>
            <li>Questo è un link</li>
          </ul>
        </div>            
      </nav>
    )
  }

