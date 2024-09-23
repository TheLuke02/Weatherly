import { NavbarProps } from '../types'
import React from 'react'

const Navbar = ({title}: NavbarProps) => {
    return (
      <div>
        <h1>
          {title}
        </h1>
      </div>
    )
  }

export default Navbar