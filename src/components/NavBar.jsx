import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Importing from Feather Icons
import logo from '../assets/logo.png';

const NavBar = () => {
  const [activePath, setActivePath] = useState('/');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="">
      {/* Desktop Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and mobile menu button */}
          <div className="flex items-center">
            <Link 
              to="/" 
              onClick={() => {
                setActivePath('/');
                setMobileMenuOpen(false);
              }}
              className="flex-shrink-0"
            >
              <img src={logo} alt="Logo" className="h-8" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activePath === item.path;
              return (
                <div key={item.path} className="relative">
                  <Link
                    to={item.path}
                    onClick={() => setActivePath(item.path)}
                    className={`px-3 py-2 text-sm font-medium hover:text-bright-orange transition-colors ${
                      isActive ? 'text-bright-orange' : 'text-gray-300'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-bright-orange" />
                    )}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Sign In Button (Desktop) */}
          <div className="hidden md:block">
            <Link 
              to="/signin" 
              onClick={() => setActivePath('/signin')}
            >
              <button className="bg-bright-orange text-white px-4 py-1 rounded-md hover:bg-orange-500 transition-colors">
                Sign In
              </button>
            </Link>
          </div>

          {/* Mobile menu button - Now using React Icons */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FiX className="h-6 w-6" /> // Close icon
              ) : (
                <FiMenu className="h-6 w-6" /> // Hamburger icon
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 right-0 w-56 backdrop-blur-lg border-l border-b border-gray-800 rounded-bl-lg shadow-xl z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = activePath === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    setActivePath(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`block px-3 py-2 text-base font-medium ${
                    isActive ? 'text-bright-orange bg-gray-800/50' : 'text-gray-300 hover:text-white hover:bg-gray-800/30'
                  } rounded-md transition-colors`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-4 pb-2">
              <Link
                to="/signin"
                onClick={() => {
                  setActivePath('/signin');
                  setMobileMenuOpen(false);
                }}
                className="block w-full px-3 py-2 bg-bright-orange text-white text-center rounded-md hover:bg-orange-600 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;