import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Corrected import

import { FaBlog } from "react-icons/fa";
import { AuthContext } from '../contects/AuthProvider';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const {user} = useContext(AuthContext);
  console.log(user);
  

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect scroll to apply sticky effect
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { link: 'Home', path: '/' },
    { link: 'About', path: '/about' },
    { link: 'Shop', path: '/shop' },
    { link: 'Sell your books', path: '/admin/dashboard' },
    { link: 'Blog', path: '/blog' }
  ];

  return (
    <header className='w-full'>
      <nav className={`sticky top-0 z-50 py-4 lg:px-24 transition-all duration-300 ease-in ${isSticky ? "bg-blue-300 shadow-md" : "bg-transparent"}`}>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'>
            <FaBlog className='inline-block' /> Books
          </Link>

          {/* Nav items for medium and large screens */}
          <ul className=' hidden md:flex space-x-12'>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className='text-black focus:outline-none' aria-label="Toggle menu">
              {isMenuOpen ? (
                <FaBars  className='h-5 w-5 text-black' /> // Updated icon
              ) : (
                <FaBars className='h-5 w-5 text-black' /> // Updated icon
              )}
            </button>

            
          </div>
        </div>

        {/* Mobile nav menu */}
        <ul className={`md:hidden space-y-4 px-4 mt-6 py-7 top-10 bg-blue-700 ${isMenuOpen ? 'block fixed top-0 left-0 right-0' : 'hidden'}`}>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className='block text-base text-white uppercase cursor-pointer'
                onClick={() => setIsMenuOpen(false)}
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};