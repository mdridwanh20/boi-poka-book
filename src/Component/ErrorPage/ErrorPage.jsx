import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='flex items-center flex-col justify-center w-full h-screen'>
       <h2 className='font-bold text-2xl'> Page Not Found</h2>

       <NavLink to="/home">
          <button className='my-4 font-semibold bg-gray-300 px-4 py-2 rounded-md'  >Back</button>
       </NavLink>

    </div>
  )
}
