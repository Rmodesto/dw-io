import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center w-full px-6 py-4 bg-purple-100">
      {/* Logo and Nav links container */}
      <div className="flex items-center space-x-12">
        {/* Logo */}
        <p className="font-bold text-2xl tracking-widest font-Alegreya" id="logo">
          <span className="text-purple-900">Dream</span>
          <span className="text-aqua-100">Whisper</span>
        </p>
        
        {/* Navigation Links */}
        <nav>
          <ul className="flex text-black-800 tracking-widest font-light space-x-4">
            <li><a href="#" className="hover:text-aqua-100">Features</a></li>
            <li><a href="#" className="hover:text-aqua-100">Pricing</a></li>
            <li><a href="#" className="hover:text-aqua-100">Blog</a></li>
          </ul>
        </nav>
      </div>

      {/* Login Button */}
      <Link href="/login" passHref>
        <button className="bg-purple-900 text-white font-light py-2 px-4 rounded">
          Login
        </button>
      </Link>
    </header>
  );  
};

export default Header;
