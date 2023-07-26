import React from 'react'

import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className='flex bg-gray-900 space-x-8  items-center pl-5 py-1'>
            <Link to="/" className='text-yellow-400 text-xl md:text-3xl font-bold cursor-pointer hover:scale-110 ease-out duration-300'>All Trains</Link>
            <Link to="fav" className='text-rose-500 text-xl md:text-3xl font-bold cursor-pointer hover:scale-110 ease-out duration-300'>Single Train</Link>
        </nav>
    </>

  )
}

export default Navbar