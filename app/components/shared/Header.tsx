'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setIsClient(true);

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleScrollToSection = (e: any, sectionId: any) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        setMenuOpen(false);
    };

    if (!isClient) return null;

    return (
        <header className={`w-full sticky top-0 z-50 transition-shadow duration-300 bg-white ${scrolled ? 'shadow-lg' : ''}`}>
            <div className="container mx-auto py-5 px-6 flex items-center justify-between max-w-7xl">
                {/* Name */}
                <div className="text-2xl sm:text-3xl font-bold text-gray-800">
                    <Link href="/">Alika Maya</Link>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="sm:hidden">
                    <button
                        type="button"
                        id="menu-button"
                        className="text-gray-800 focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden sm:block">
                    <ul className="flex space-x-6 text-gray-600">
                        <li>
                            <button
                                className="text-black font-bold hover:text-[#FF027C] duration-300 text-base"
                                onClick={(e) => handleScrollToSection(e, 'home')}
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button
                                className="text-black font-bold hover:text-[#FF027C] duration-300 text-base"
                                onClick={(e) => handleScrollToSection(e, 'about')}
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                className="text-black font-bold hover:text-[#FF027C] duration-300 text-base"
                                onClick={(e) => handleScrollToSection(e, 'social-statistics')}
                            >
                                Social Statistics
                            </button>
                        </li>
                        <li>
                            <button
                                className="text-black font-bold hover:text-[#FF027C] duration-300 text-base"
                                onClick={(e) => handleScrollToSection(e, 'instagram-audience')}
                            >
                                Instagram Audience
                            </button>
                        </li>
                        <li>
                            <button
                                className="text-black font-bold hover:text-[#FF027C] duration-300 text-base"
                                onClick={(e) => handleScrollToSection(e, 'contact')}
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`sm:hidden bg-white shadow-md transform transition-all duration-500 ease-in-out overflow-hidden ${menuOpen ? 'max-h-[400px] opacity-100 translate-x-0' : 'max-h-0 opacity-0 translate-x-full'
                    }`}
            >
                <ul className="space-y-4 py-4 px-6 text-gray-600">
                    <li>
                        <button
                            className="text-black font-bold hover:text-[#FF027C] duration-300 text-base"
                            onClick={(e) => handleScrollToSection(e, 'home')}
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            className="text-black font-bold hover:text-[#FF027C] duration-300 text-base"
                            onClick={(e) => handleScrollToSection(e, 'about')}
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            className="text-black font-bold hover:text-[#FF027C] duration-300 text-base"
                            onClick={(e) => handleScrollToSection(e, 'social-statistics')}
                        >
                            Social Statistics
                        </button>
                    </li>
                    <li>
                        <button
                            className="text-black font-bold hover:text-[#FF027C] duration-300 text-base"
                            onClick={(e) => handleScrollToSection(e, 'instagram-audience')}
                        >
                            Instagram Audience
                        </button>
                    </li>
                    <li>
                        <button
                            className="text-black font-bold hover:text-[#FF027C] duration-300 text-base"
                            onClick={(e) => handleScrollToSection(e, 'contact')}
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
}
