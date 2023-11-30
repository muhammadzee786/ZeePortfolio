"use client"
import React, { useState } from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link';
// import logo from '../../public/logo.png'



function Navbar() {
     const [isOpen, setIsOpen] = useState(false);

     return (
       <nav className={`flex items-center justify-between flex-wrap p-3 ${styles.header} ${styles.topFixed}`}>
         <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72" style={{backgroundColor: "green"}}>
           <img src="/logo.png" className="w-100 h-10 mr-2" alt="Logo" />
         </div>

         <div className="block lg:hidden">
           <button
             onClick={() => setIsOpen(!isOpen)}
             className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
           >
             <svg
               className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
             </svg>
             <svg
               className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
             </svg>
           </button>
         </div>
         
         <div
           className={`w-full block lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"} ${styles.underLine}`}>
           <div className={`text-sm lg:flex-grow text-base font-medium`}>
             <Link href="/Home" className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${styles.navItem} ${styles.isActive}`} active-color="green">
               Home
             </Link>
             <Link href="/About" className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${styles.navItem}`} active-color="green">
               About
             </Link>
             <Link href="/Services" className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${styles.navItem}`}>
               Services
             </Link>
             <Link href="#" className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${styles.navItem}`}>
               Work
             </Link>
             <span className={`${styles.navIndicator}`}></span>
           </div>
         </div>
       </nav>
     );
}

export default Navbar