// components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link'; // Import HashLink
import SeachainLogo from '../assets/seachain.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (navbarRef.current) {
                const navbarHeight = navbarRef.current.offsetHeight;
                if (offset > navbarHeight) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navbarClasses = `
        fixed top-0 z-40 left-0 w-full flex justify-between items-center p-4 md:p-8 lg:p-12 transition-colors duration-300
        ${scrolled ? 'bg-[#071952] shadow-lg' : 'bg-transparent'}
    `;

    return (
        <header ref={navbarRef} className={navbarClasses}>
            <div className="flex items-center space-x-2">
                <img src={SeachainLogo} alt="Seachain Logo" className="h-8 md:h-10" />
            </div>

            {/* Hamburger menu for mobile */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-[#EBF4F6] focus:outline-none">
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        )}
                    </svg>
                </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 lg:space-x-8 font-['Poppins'] font-extrabold text-sm md:text-lg">
                <HashLink smooth to="/#home" className="text-[#EBF4F6] hover:text-[#37B7C3]">HOME</HashLink>
                <HashLink smooth to="/#about" className="text-[#EBF4F6] hover:text-[#37B7C3]">ABOUT</HashLink>
                <HashLink smooth to="/#solution" className="text-[#EBF4F6] hover:text-[#37B7C3]">SOLUTION</HashLink>
                <HashLink smooth to="/#impact" className="text-[#EBF4F6] hover:text-[#37B7C3]">IMPACT</HashLink>
                <HashLink smooth to="/#contact" className="text-[#EBF4F6] hover:text-[#37B7C3]">CONTACT</HashLink>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 bg-[#071952] bg-opacity-95 z-30 flex flex-col items-center justify-center space-y-8 font-['Poppins'] text-2xl">
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-[#EBF4F6] focus:outline-none">
                        <svg
                            className="w-10 h-10"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                    <HashLink smooth to="/#home" onClick={toggleMenu} className="text-[#EBF4F6] hover:text-[#37B7C3]">HOME</HashLink>
                    <HashLink smooth to="/#about" onClick={toggleMenu} className="text-[#EBF4F6] hover:text-[#37B7C3]">ABOUT</HashLink>
                    <HashLink smooth to="/#solution" onClick={toggleMenu} className="text-[#EBF4F6] hover:text-[#37B7C3]">SOLUTION</HashLink>
                    <HashLink smooth to="/#impact" onClick={toggleMenu} className="text-[#EBF4F6] hover:text-[#37B7C3]">IMPACT</HashLink>
                    <HashLink smooth to="/#contact" onClick={toggleMenu} className="text-[#EBF4F6] hover:text-[#37B7C3]">CONTACT</HashLink>
                </div>
            )}
        </header>
    );
};

export default Navbar;
