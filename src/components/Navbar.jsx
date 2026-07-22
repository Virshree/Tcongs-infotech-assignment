import React from 'react'
import logo from '../assets/logo.svg';

function Navbar() {
  return (
    <div className='bg-black text-white w-full  flex p-2 sticky top-0 z-50 '>
        <img src={logo} alt="logo" className='w-35 h-20  ml-30 cursor-pointer '/>
        <div className='flex  m-auto cursor-pointer  '>
            <span className='p-4 m-2 hover:text-red-400'>Home</span>
            <span className='p-4 m-2 hover:text-red-400'>Company</span>
            <span className='p-4 m-2 hover:text-red-400'>Solution</span>
            <span className='p-4 m-2 hover:text-red-400'>Connect</span>
        </div>
        <div className='flex  p-4'>
            <button className='bg-red-400 text-black font-bold  rounded-xl p-2 cursor-pointer '>Launch Your Idea</button>
        </div>
    </div>
  )
}

export default Navbar