import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-100 p-4">
        <div className="container mx-auto flex justify-between items-center">

          {/* Logo */}
          <div className="text-black hover:text-violet-600 text-xl font-bold flex-grow">Budget Bliss</div>

          {/* Navbar Links */}
          <div className="hidden md:flex items-center space-x-6 flex-grow">
            <Link to="/" className="text-black hover:text-violet-600 ">Home</Link>
            <Link to="/about" className="text-black hover:text-violet-600">About</Link>
            <Link to="/addtransaction" className="text-black hover:text-violet-600">Add Transaction</Link>
            <Link to="/showtransaction" className="text-black hover:text-violet-600">Show Transaction</Link>
            <Link to="/signup" className="text-black hover:text-violet-600">Signup</Link>
            <Link to="/login" className="text-black hover:text-violet-600">Login</Link>


          </div>
          <div className=' hidden md:flex align-start'>
          <Link to="/login" className=" px-5 py-1 font-bold hover:text-violet-600">User</Link>
            
          </div>
           

          {/* Mobile Navbar Toggle */}
          <div className="md:hidden">
            <button onClick={handleMobileMenuToggle} className="text-black hover:text-violet-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Navbar (hidden by default) */}
      <div className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'} bg-gray-100 p-4 text-black`}>
        <ul className="list-none p-0 m-0">
          <li><Link to="/" className="block py-2 hover:text-violet-600">Home</Link></li>
          <li><Link to="/about" className="block py-2 hover:text-violet-600">About</Link></li>
          <li><Link to="/singup" className="block py-2 hover:text-violet-600">Signup</Link></li>
          <li><Link to="/login" className="block py-2 hover:text-violet-600">Login</Link></li>
          <Link to="/login" className="text-black hover:text-violet-600">User</Link>
          
        </ul>
      
      </div>
    </>
  );
};

export default Navbar;