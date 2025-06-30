// components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import SeachainLogo from '../assets/seachain.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
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

    const navbarClasses = `
        fixed top-0 z-40 left-0 w-full flex justify-between items-center p-8 md:p-12 lg:p-16 z-20 transition-colors duration-300
        ${scrolled ? 'bg-[#071952] shadow-lg' : 'bg-transparent'}
    `;

    return (
        <header ref={navbarRef} className={navbarClasses}>
            <div className="flex items-center space-x-2">
                <img src={SeachainLogo} alt="Seachain Logo" className="h-10" />
            </div>
            <nav className="hidden md:flex space-x-8 font-['Poppins'] font-extrabold text-lg">
                <a href="#" className="mr-20 text-[#EBF4F6] hover:text-[#37B7C3]">HOME</a>
                <a href="#" className="mr-20 text-[#EBF4F6] hover:text-[#37B7C3]">ABOUT</a>
                <a href="#" className="mr-20 text-[#EBF4F6] hover:text-[#37B7C3]">SOLUTION</a>
                <a href="#" className="mr-20 text-[#EBF4F6] hover:text-[#37B7C3]">IMPACT</a>
                <a href="#" className="mr-20 text-[#EBF4F6] hover:text-[#37B7C3]">CONTACT</a>
            </nav>
        </header>
    );
};

export default Navbar;