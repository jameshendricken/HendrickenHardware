'use client';
import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { RiNextjsFill, RiWaterFlashFill } from 'react-icons/ri';
import { BiMenu, BiX } from 'react-icons/bi';

const CustomNavbar = () => {

  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    }
    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    
    <nav className={`fixed top-0 left-0 mb-10 w-full bg-white dark:bg-black shadow-md transition-transform duration-300 z-50 transform ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px8">

        <div className="flex justify-between h-16">

                  <div className="flex items-center">
                    <Link href="/" >
                      <RiWaterFlashFill className="text-5xl text-primary dark:text-gray-200" />
                    </Link>
                    <strong>HHLtd.</strong>
                  </div>

                  

                  <div className="hidden md:flex items-center space-x-8 dark:text-gray-200">
                  
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`text-gray-600 hover:text-gray-900 dark:text-gray-200 px-3 py-2 rounded-md text-md font-semibold transition-colors duration-200 ${pathname === link.href ? 'text-blue-600' : ''}`}
                      >
                        {link.label}
                      </Link>
                    ))}

                    

                  </div>

                  <div className="md:hidden flex items-center dark:text-gray-200">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                      
                    >
                      {!isMobileMenuOpen ? <BiMenu className="text-3xl" /> : <BiX className="text-3xl" />}
                    </button>
                    
                  </div>

                 

        </div>

                    {/* Menu */}
                  <div 
                    className={`md:hidden transition-all duration-500 ease-in-out 
                    ${isMobileMenuOpen 
                      ? "max-h-64 opacity-100" 
                      : "max-h-0 opacity-0 overflow-hidden"
                      } `}
                  >
                      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 dark:bg-accent">
                            {navLinks.map((link) => (
                              <Link 
                                key={link.href} 
                                href={link.href} 
                                onClick={() => setIsMobileMenuOpen(false)}
                                  className={`block px-3 py-2 rounded-md text-base font-medium dark:text-gray-200 dark:bg-accent
                                    ${pathname === link.href 
                                      ? "text-blue-600 bg-blue-50 dark:text-gray-200 dark:bg-gray-600" 
                                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                  } `}
                              >
                                {link.label}
                              </Link>
                            ))}
                      </div>

                  </div>
      </div>

    </nav>
    
  )
}

export default CustomNavbar
