import React, { useState } from 'react';
import { Logo } from '../constant';
import { RiMenuLine } from 'react-icons/ri';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <div className="flex justify-around items-center p-4 md:p-6 pt-6">
      <div className="flex items-center">
        <img
          src={Logo}
          alt="web-logo"
          className="h-6 w-8 border rounded-sm mr-3"
        />
        <p className="text-lg md:text-xl font-bold">WebGuard</p>
      </div>
      <div className="hidden md:block">
        <ul className="flex space-x-4">
          <li className="font-bold opacity-70">Pricing</li>
          <li className="font-bold opacity-70">Resources</li>
          <li className="font-bold opacity-70">Support</li>
          <li className="font-bold opacity-70">Partner</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <button className="hidden md:block border border-none">Login</button>
        <button className="bg-black text-white border rounded-3xl h-8 w-24 md:w-32">
          Sign Up
        </button>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden h-8 w-8 flex items-center justify-center"
        >
          {mobileMenuOpen ? <RiMenuLine/> : <RiMenuLine />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 right-4 p-4 space-y-2 bg-white border rounded-md shadow-lg">
          <ul>
            <li className="font-bold opacity-70">Pricing</li>
            <li className="font-bold opacity-70">Resources</li>
            <li className="font-bold opacity-70">Support</li>
            <li className="font-bold opacity-70">Partner</li>
          </ul>
          <button className="border border-none font-bold">Login</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
