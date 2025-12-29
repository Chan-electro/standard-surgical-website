import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, ArrowUpRight, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.theme === 'dark';
        }
        return false;
    });
    const location = useLocation();

    // Handle Scroll State
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle Dark Mode
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'PRODUCTS', path: '/products' },
        { name: 'KNOWLEDGE', path: '/knowledge' },
        { name: 'ABOUT US', path: '/about' },
        { name: 'CONTACT', path: '/contact' },
    ];

    return (
        <header 
            className={`w-full sticky top-0 z-50 transition-all duration-300 border-b ${
                isScrolled 
                    ? 'bg-white/80 dark:bg-secondary-dark/80 backdrop-blur-lg shadow-md py-3 border-transparent' 
                    : 'bg-white dark:bg-secondary-dark py-5 border-gray-100 dark:border-gray-700 shadow-none'
            }`}
        >
            <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
                <div className="mb-4 lg:mb-0 w-full lg:w-auto flex justify-between items-center">
                    <Link to="/" className="flex flex-col items-start leading-tight group">
                        <div className="flex items-center gap-2">
                            <Activity className="w-10 h-10 text-secondary dark:text-white" />
                            <div className="flex flex-col">
                                <span className="font-display font-bold text-2xl tracking-tight text-secondary dark:text-white uppercase">Standard</span>
                                <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gray-500 dark:text-gray-300 font-semibold">Surgical Company</span>
                            </div>
                        </div>
                    </Link>
                    <button
                        className="lg:hidden p-2 text-gray-600 dark:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex space-x-8 font-display font-medium text-sm tracking-wide text-gray-700 dark:text-gray-200">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`hover:text-primary transition-colors relative group py-2 ${location.pathname === link.path ? 'text-primary' : ''}`}
                        >
                            {link.name}
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center space-x-4 mt-4 lg:mt-0">
                    <button
                        className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10 transition"
                        onClick={toggleTheme}
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <Link
                        to="/contact"
                        className="bg-primary hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 text-sm"
                    >
                        Get a Quote
                        <ArrowUpRight size={18} />
                    </Link>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="w-full lg:hidden overflow-hidden"
                        >
                            <nav className="flex flex-col space-y-4 py-4 border-t border-gray-100 dark:border-gray-700 mt-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className="text-gray-700 dark:text-gray-200 hover:text-primary font-medium dark:hover:text-primary"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Theme</span>
                                    <button
                                        className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10 transition"
                                        onClick={toggleTheme}
                                    >
                                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                                    </button>
                                </div>
                                <Link
                                    to="/contact"
                                    className="bg-primary text-center text-white font-semibold py-3 rounded-full shadow-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Get a Quote
                                </Link>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;
