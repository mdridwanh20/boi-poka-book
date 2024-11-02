import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {

    const links = <>
        
    </>

    return (
        <div className='bg-slate-100 '>
            <div className=" container m-auto navbar p-0">
                <div className="navbar-start">
                    <div className="dropdown">

                        <div tabIndex={0} role="button" className="lg:hidden px-2 mr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8  w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-b-md  z-[1] mt-4 w-52 h-[100vh] p-2 shadow">
                                <NavLink className="mb-2 mt-5 border-b-2 border-gray-200 py-2  px-4" to="/">Home</NavLink>
                                <NavLink className="mb-2 border-b-2 border-gray-200 py-2  px-4" to="/ListedBooks"> Listed Books </NavLink>
                                <NavLink className="mb-2 border-b-2 border-gray-200 py-2  px-4" to="/PagesToRead"> Pages To Read </NavLink>
                        </ul>

                    </div>

                    <Link to="/home">
                        <a className=" font-bold text-lg lg:text-xl">Book Pok</a>
                    </Link>

                </div>
                <div className="navbar-center   hidden  lg:flex">

                    <ul className="menu menu-horizontal px-1">
                        <NavLink className=" border  mr-2 py-2 rounded-md px-4" to="/">Home</NavLink>
                        <NavLink className=" border  mr-2 py-2 rounded-md px-4" to="/ListedBooks"> Listed Books </NavLink>
                        <NavLink className=" border  mr-2 py-2 rounded-md px-4" to="/PagesToRead"> Pages To Read </NavLink>
                    </ul>

                </div>

                <div className="navbar-end pe-2">
 
   
                    <Link to='/signIn'
                        className=" bg-green-500 hover:bg-green-600 mr-3 lg:mr-2 cursor-pointer text-white text-[15px] px-2 lg:text-lg lg:px-4 py-2 rounded-md border">Sign In
                    </Link>

                    <Link to='signUp'
                        className=" bg-blue-500 hover:bg-blue-600 cursor-pointer text-white text-[15px] px-2 lg:text-lg lg:px-4 py-2 rounded-md border">Sign Up
                    </Link>

                        
                </div>

            </div>
        </div>
    )
}
