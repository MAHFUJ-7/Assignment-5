import React from 'react'
import logo from '../assets/Background+Shadow.png'

export default function Navbar() {
  return (
    <div >
        <div className='flex justify-between items-center px-10 py-5 contain-contenter mx-auto'>
          <div className='flex gap-2 items-center font-bold '>
          <img src={logo} alt="Logo" className='' />
          <h2>Dev <span className='text-pink-500'>Stack</span></h2>
          </div>
          <div >
            <ul className='flex gap-8  '>
              <li className='text-pink-500'> <a href="#">Home</a></li>
              <li><a href="#">Technologies</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className='flex gap-5 hover:cursor-pointer'>
            <button>Sign In</button>
            <button className='bg-pink-500 text-white px-4 py-2 rounded-full'>Sign Up</button>
          </div>
        </div>
      
    </div>
  )
}
