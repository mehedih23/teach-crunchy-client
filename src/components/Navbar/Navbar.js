import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='my-1'><Link className='font-bold' to='/'>Home</Link></li>
                        <li className='my-1'><Link className='font-bold' to='/programs'>Programs</Link></li>
                        <li className='my-1'><Link className='font-bold' to='/career'>Career</Link></li>
                        <li className='my-1'><Link className='font-bold' to='/organization'>Organization</Link></li>
                        <li className='my-1'><Link className='font-bold' to='/sign-in'>Sign In</Link></li>
                    </ul>
                </div>
                <Link to='/'><img src={logo} alt="teach crunchy" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='mx-2'><Link className='font-bold' to='/'>Home</Link></li>
                    <li className='mx-2'><Link className='font-bold' to='/programs'>Programs</Link></li>
                    <li className='mx-2'><Link className='font-bold' to='/career'>Career</Link></li>
                    <li className='mx-2'><Link className='font-bold' to='/organization'>Organization</Link></li>
                    <li className='mx-2'><Link className='font-bold' to='/sign-in'>Sign In</Link></li>

                </ul>
            </div>
            <div className="navbar-end">
                <button className='btn rounded-full bg-gradient-to-r from-[#13DE82] to-[#0AB68B] border-0 text-neutral'>
                    <Link to='sign-up'>Get Started</Link>
                </button>
            </div>
        </div>
    )
}

export default Navbar