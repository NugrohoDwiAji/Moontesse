import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-300 flex justify-evenly gap-5 rounded-full w-fit h-fit px-5 py-2 text-white shadow-inner'>
        <NavLink to={""} className={"hover:scale-110"}>Home</NavLink>
        <NavLink to={""} className={"hover:scale-110"}>Menu</NavLink>
        <NavLink to={""} className={"hover:scale-110"}>Services</NavLink>
        <NavLink to={""} className={"hover:scale-110"}>Reservasion</NavLink>
    </div>
  )
}

export default Navbar