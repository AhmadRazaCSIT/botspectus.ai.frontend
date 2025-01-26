import React, { useState } from 'react';
import { Menu, X, Square } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white border-b border-gray-100 fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Square className="h-8 w-8 text-purple-600" />
                        <span className="ml-2 text-xl font-bold text-purple-600">BOT SPECTUS AI</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                            Home
                        </a>
                        <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                            Services
                        </a>
                        <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                            About
                        </a>
                        <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                            Log In
                        </a>
                        <a
                            href="#"
                            className="bg-purple-100 text-purple-600 px-6 py-2 rounded-full font-medium
                hover:bg-purple-200 transition-colors flex items-center"
                        >
                            Sign Up
                            <span className="ml-2">→</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-purple-600 transition-colors"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-gray-700 hover:text-purple-600
                  hover:bg-purple-50 transition-colors"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-gray-700 hover:text-purple-600
                  hover:bg-purple-50 transition-colors"
                            >
                                Services
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-gray-700 hover:text-purple-600
                  hover:bg-purple-50 transition-colors"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-gray-700 hover:text-purple-600
                  hover:bg-purple-50 transition-colors"
                            >
                                Log In
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md bg-purple-100 text-purple-600
                  hover:bg-purple-200 transition-colors text-center"
                            >
                                Sign Up →
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;