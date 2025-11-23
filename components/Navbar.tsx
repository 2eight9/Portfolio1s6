// components/Navbar.tsx
'use client'; 
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation focused on Business Solutions (Entrepreneurship Context)
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about-me' }, 
    { title: 'Services & Solutions', path: '/services' },
    { title: 'Case Studies', path: '/case-studies' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md backdrop-filter backdrop-blur-lg bg-opacity-80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand Name */}
          <Link 
            href="/" 
            className="shrink-0 text-xl font-bold text-indigo-700 hover:text-indigo-900 transition duration-300" // Using shrink-0
          >
            {'2eight9'} 
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.path}
                className="text-gray-700 hover:text-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                {link.title}
              </Link>
            ))}
            {/* Main CTA Button */}
            <Link 
              href="/contact" 
              className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition duration-300 flex items-center shadow-md"
            >
              <Rocket className="h-4 w-4 mr-1"/>
              Start Collaboration
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none transition duration-300"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden py-2 border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 block w-full text-center px-3 py-2 rounded-md text-base font-medium transition duration-300"
              >
                {link.title}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="bg-indigo-600 text-white w-2/3 text-center mt-2 px-3 py-2 rounded-full text-base font-medium hover:bg-indigo-700 transition duration-300 flex items-center justify-center shadow-md"
              onClick={() => setIsOpen(false)}
            >
              <Rocket className="h-4 w-4 mr-1"/>
              Start Collaboration
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;