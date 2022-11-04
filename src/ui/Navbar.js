import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'


export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='link-container'>

            <NavLink
                className={({ isActive }) => ` navlink  ${isActive ? 'active' : ''}`}
                to="/home"
            >
                HomePage
            </NavLink>
            </div>

            <div className='link-container'>
            <NavLink
                className={({ isActive }) => ` navlink ${isActive ? 'active' : ''}`}
                to="/chess"
            >
                ChessPage
            </NavLink>
            </div>

            <div className='link-container'>

            <NavLink
                className={({ isActive }) => ` navlink ${isActive ? 'active' : ''}`}
                to="/about"
            >
                AboutPage
            </NavLink>
            </div>



        </div>
    )
}
