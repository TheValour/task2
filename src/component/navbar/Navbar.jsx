import React from 'react';
import './Navbar.css';

function Navbar() {

  return (
    <div  className="navbar-container p-4 bg-slate-200">
      <span className='Romi'>ATG WORLD</span>

      <input type="text" name="" id="" className='bg-gray-100 w-3/12 rounded-xl placeholder:text-xs ' placeholder='   Search'/>

      <div>Create account. <span className='text-blue-700' id='its-free'>It's  free</span></div>
    </div>
  )
}

export default Navbar;