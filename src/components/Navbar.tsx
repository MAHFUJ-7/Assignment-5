import logo from '../assets/Background+Shadow.png'

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-white">
        <div className='flex justify-between items-center px-10 py-5 contain-contenter mx-auto border-b border-[#E2E8F0]'>
          <div className='flex gap-2 items-center font-bold '>
          <img src={logo} alt="Logo" className='' />
          <a href="#" className='text-xl'>Dev <span className="gradient-text">Stack</span></a>
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
            <button className='gradient-btn  px-4 py-2 rounded-full'>Sign Up</button>
          </div>
        </div>
      
    </div>
  )
}
