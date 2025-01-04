import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#f9f9f9] py-8">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4">
                {/* Footer Text */}
                <h1 className="text-[#6c6c6c] text-sm text-center md:text-left">
                    © Recall is Proudly Owned by{' '}
                    <Link
                        target="_blank"
                        href="https://codermat.com/"
                        className="text-[#FF4150] duration-300 text-sm"
                    >
                        CoderMat
                    </Link>
                </h1>
                {/* Social Links */}
                <div className="flex justify-center space-x-6 mt-4 md:mt-0">
                    <Link
                        href="https://facebook.com"
                        className="text-[#5f5f5f] text-2xl hover:text-blue-500 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebookF />
                    </Link>
                    <Link
                        href="https://twitter.com"
                        className="text-[#5f5f5f] text-2xl hover:text-blue-400 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter />
                    </Link>
                    <Link
                        href="https://linkedin.com"
                        className="text-[#5f5f5f] text-2xl hover:text-blue-700 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn />
                    </Link>
                    <Link
                        href="https://instagram.com"
                        className="text-[#5f5f5f] text-2xl hover:text-pink-500 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
