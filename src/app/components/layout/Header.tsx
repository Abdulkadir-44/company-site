"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

  
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navLinkClasses = `
        text-gray-200 hover:text-white transition-colors duration-300
        relative block py-2
        after:content-['']
        after:absolute
        after:bottom-0
        after:left-0
        after:h-[2px]
        after:w-0
        after:bg-white
        after:transition-all
        after:duration-300
        hover:after:w-full
    `;

    const mobileNavLinkClasses = `
        text-white hover:text-purple-300 transition-colors duration-300
        text-xl font-medium py-4 px-6
        border-b border-white/10 last:border-b-0
        hover:bg-white/5
        transition-all duration-300
    `;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Hamburger Icon Component
    const HamburgerIcon = () => (
        <div className="w-6 h-6 flex flex-col justify-center items-center cursor-pointer">
            <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-white mb-1.5 origin-center"
            />
            <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-white mb-1.5"
            />
            <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-white origin-center"
            />
        </div>
    );

    return (
        <>
            <header
                className={`
                    fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out h-18
                    ${isScrolled ? 'bg-gray-900/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}
                `}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-20">

                        {/* Logo */}
                        <div className="flex-shrink-0 select-none">
                            <Link href="/" className="text-gray-100 text-lg sm:text-xl md:text-2xl font-bold tracking-wider flex justify-center items-center">
                                NEBA<span className='text-xl sm:text-2xl md:text-3xl text-purple-800'>SOFTWARE</span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex lg:items-center lg:space-x-6 xl:space-x-8">
                            <Link href="/services" className={navLinkClasses}>
                                Hizmetler
                            </Link>
                            <Link href="/projects" className={navLinkClasses}>
                                Projeler
                            </Link>
                            <Link href="/about" className={navLinkClasses}>
                                Hakkımızda
                            </Link>
                            <Link href="/contact" className={navLinkClasses}>
                                İletişim
                            </Link>
                        </nav>

                        {/* Desktop CTA Button */}
                        <div className="hidden lg:block">
                            <a
                                href="#contact"
                                className="border border-white/30 bg-white/10 backdrop-blur-lg px-4 xl:px-6 py-2 xl:py-2.5 rounded-2xl xl:rounded-3xl text-white font-semibold shadow-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-sm xl:text-base"
                            >
                                Teklif Al
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={toggleMobileMenu}
                                className="p-2 rounded-md text-white hover:bg-white/10 transition-colors duration-200"
                                aria-label="Toggle mobile menu"
                            >
                                <HamburgerIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                            onClick={toggleMobileMenu}
                        />
                        
                        {/* Mobile Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900/95 backdrop-blur-lg shadow-2xl z-50 overflow-hidden"
                        >
                            {/* Mobile Menu Header */}
                            <div className="flex items-center justify-between p-6 border-b border-white/10">
                                <Link 
                                    href="/" 
                                    className="text-white text-lg font-bold tracking-wider"
                                    onClick={toggleMobileMenu}
                                >
                                    NEBA<span className='text-xl text-purple-800'>SOFTWARE</span>
                                </Link>
                                <button
                                    onClick={toggleMobileMenu}
                                    className="p-2 rounded-md text-white hover:bg-white/10 transition-colors duration-200"
                                    aria-label="Close mobile menu"
                                >
                                    <HamburgerIcon />
                                </button>
                            </div>

                            {/* Mobile Navigation Links */}
                            <nav className="py-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1, duration: 0.3 }}
                                >
                                    <Link 
                                        href="/services" 
                                        className={mobileNavLinkClasses}
                                        onClick={toggleMobileMenu}
                                    >
                                        Hizmetler
                                    </Link>
                                </motion.div>
                                
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15, duration: 0.3 }}
                                >
                                    <Link 
                                        href="/projects" 
                                        className={mobileNavLinkClasses}
                                        onClick={toggleMobileMenu}
                                    >
                                        Projeler
                                    </Link>
                                </motion.div>
                                
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.3 }}
                                >
                                    <Link 
                                        href="/services" 
                                        className={mobileNavLinkClasses}
                                        onClick={toggleMobileMenu}
                                    >
                                        Servisler
                                    </Link>
                                </motion.div>
                                
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.25, duration: 0.3 }}
                                >
                                    <Link 
                                        href="/about" 
                                        className={mobileNavLinkClasses}
                                        onClick={toggleMobileMenu}
                                    >
                                        Hakkımızda
                                    </Link>
                                </motion.div>
                                
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.3 }}
                                >
                                    <Link 
                                        href="/contact" 
                                        className={mobileNavLinkClasses}
                                        onClick={toggleMobileMenu}
                                    >
                                        İletişim
                                    </Link>
                                </motion.div>
                            </nav>

                            {/* Mobile CTA Button */}
                            <motion.div 
                                className="px-6 py-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35, duration: 0.3 }}
                            >
                                <a
                                    href="#contact"
                                    className="w-full border border-purple-500/50 bg-purple-600/20 backdrop-blur-lg px-6 py-3 rounded-2xl text-white font-semibold shadow-lg hover:bg-purple-600/30 hover:border-purple-400/60 transition-all duration-300 block text-center"
                                    onClick={toggleMobileMenu}
                                >
                                    Teklif Al
                                </a>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}