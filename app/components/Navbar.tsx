import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar h-24 lg:h-16 shadow-sm flex">

        <div className="navbar-start lg:flex lg:items-center lg:justify-start lg:gap-x-10">

            <div className="dropdown dropdown-start lg:hidden">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </label>
                
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-accent rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                        <button className="btn btn-wide">
                        <Link href="/">Home</Link>
                        </button>
                        
                    </li>
                    <li>
                        <button className="btn btn-wide">
                        <Link href="/services">Services</Link>
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-wide">
                        <Link href="/products">Products</Link>
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-wide">
                        <Link href="/contact">Contact us</Link>
                        </button>
                    </li>
                </ul>
                
            </div>
            
            <Image 
                src={"/Logo.png"} 
                alt="Logo" 
                width={50} 
                height={50} 
                className="rounded-lg mr-0 ml-2"
                priority={true}  // Load the logo image immediately
            />
            <Link href="/" className="btn btn-ghost text-xl">Hendricken Hardware</Link>

        </div>
        
        <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 lg:flex lg:flex-wrap lg:justify-center lg:gap-10">
                <li>
                    <button className="btn btn-ghost hover:bg-gray-100 hover:shadow-2xl hover:rounded-2xl transition-shadow duration-300">
                    <Link href="/">Home</Link>
                    </button>
                    
                </li>
                <li>
                     <button className="btn btn-ghost hover:bg-gray-100 hover:shadow-2xl hover:rounded-2xl transition-shadow duration-300">
                    <Link href="/services">Services</Link>
                        
                    </button>
                </li>
                <li>
                    <button className="btn btn-ghost hover:bg-gray-100 hover:shadow-2xl hover:rounded-2xl transition-shadow duration-300">
                    <Link href="/products">Products</Link>
                    </button>
                </li>
                <li>
                    <button className="btn btn-accent invisible border-accent border-2 rounded-2xl hover:bg-accent lg:visible">
                    <Link href="/contact">Contact us</Link>
                    </button>
                </li>
            </ul>
        </div>

        {/* <div className="navbar-end bg-pink-500 mr-64">
            <a className="btn btn-accent invisible border-accent border-2 rounded-2xl hover:bg-accent lg:visible">Contact Us</a>
        </div> */}
    </div>
  )
}

export default Navbar
