import React, { useState, useRef } from 'react';
import ToothIcon from '../assets/images/vector/tooth.png';
import SearchIcon from '../assets/images/vector/search.png';
import CardIcon from '../assets/images/vector/card.png';
import HelpIcon from '../assets/images/vector/help.png';
import ProfileIcon from '../assets/images/vector/profile.png';
import HeartIcon from '../assets/images/vector/heart.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProdDropdownOpen, setIsProdDropdownOpen] = useState(false);
    const hideTimeout = useRef(null);

    const handleMouseEnter = () => {
        if (hideTimeout.current) {
            clearTimeout(hideTimeout.current);
            hideTimeout.current = null;
        }
        setIsProdDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        hideTimeout.current = setTimeout(() => {
            setIsProdDropdownOpen(false);
        }, 300);
    };

    return (
        <>
            {/* Top Navbar */}
            <nav className="w-full h-20 bg-white flex justify-between items-center px-4 md:px-8 sticky top-0 z-50">
                {/* Logo */}
                <div className="text-xl font-Lato font-[600] font-sans text-[#124767] whitespace-nowrap">
                    Dentallmplants.com
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center font-semibold font-Roboto gap-6">
                    <a href="#home" className="hover:text-blue-600">Home</a>
                    <div className="relative group"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button
                            className="hover:text-blue-"
                            onClick={() => setIsProdDropdownOpen(prev => !prev)}
                            type="button"
                        >
                            Production
                        </button>
                        {isProdDropdownOpen && (
                            <div className="absolute left-0 mt-2 flex flex-col bg-white text-black shadow-lg rounded-lg z-50 min-w-[150px]">
                                <a href="#Process" className="px-4 py-2 hover:bg-gray-100">Process</a>
                                <a href="#Quality" className="px-4 py-2 hover:bg-gray-100">Quality</a>
                            </div>
                        )}
                    </div>
                    <a href="#why" className="hover:text-blue-600">Why Choose Us</a>
                    <a href="#brands" className="hover:text-blue-600">Brands</a>
                    <a href="#support" className="hover:text-blue-600">Support</a>
                    <a href="#contact" className="hover:text-blue-600">Contact Us</a>
                </div>

                {/* Desktop Icons */}
                <div className="hidden md:flex items-center gap-4">
                    {[SearchIcon, CardIcon, HelpIcon, ProfileIcon, HeartIcon].map((icon, index) => (
                        <div key={index} className="bg-[#5E5EEE] w-9 h-9 rounded-full flex items-center justify-center relative">
                            <img src={icon} alt={`Icon-${index}`} className="w-5 h-5" />
                            {icon === CardIcon && (
                                <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                                    5
                                </div>
                            )}
                        </div>
                    ))}
                    <button className="bg-[#5E5EEE] text-white font-bold text-sm px-4 py-2 rounded-2xl flex items-center gap-2 hover:bg-blue-800 transition">
                        <img src={ToothIcon} alt="Tooth" className="w-5 h-5" />
                        Browse Implants
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(prev => !prev)}
                        className="text-3xl"
                    >
                        &#8801;
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg w-3/4 fixed top-14 right-0 h-[calc(100vh-3.5rem)] p-5 z-50 overflow-scroll">
                    <nav className="flex flex-col gap-4">
                        <a href="#home" className="text-gray-800 font-semibold">Home</a>
                        <div className="relative">
                            <button
                                onClick={() => setIsProdDropdownOpen(prev => !prev)}
                                className="text-gray-800 font-semibold text-left w-full"
                            >
                                Production
                            </button>
                            {isProdDropdownOpen && (
                                <div className="flex flex-col mt-1 ml-2 bg-gray-50 rounded-md overflow-hidden">
                                    <a href="#painting" className="px-4 py-2 hover:bg-gray-200">Painting</a>
                                    <a href="#plumbing" className="px-4 py-2 hover:bg-gray-200">Plumbing</a>
                                </div>
                            )}
                        </div>
                        <a href="#why" className="text-gray-800 font-semibold">Why Choose Us</a>
                        <a href="#brands" className="text-gray-800 font-semibold">Brands</a>
                        <a href="#support" className="text-gray-800 font-semibold">Support</a>
                        <a href="#contact" className="text-gray-800 font-semibold">Contact Us</a>

                        {/* Mobile Icons */}
                        <div className="flex flex-col gap-4 mt-6">
                            {[{ icon: SearchIcon, label: "Search" },
                            { icon: CardIcon, label: "Cart", badge: "5" },
                            { icon: HelpIcon, label: "Help" },
                            { icon: ProfileIcon, label: "User" },
                            { icon: HeartIcon, label: "Wishlist" }].map(({ icon, label, badge }) => (
                                <div key={label} className="flex items-center gap-3 relative">
                                    <div className="bg-[#5E5EEE] w-9 h-9 rounded-full flex items-center justify-center">
                                        <img src={icon} alt={label} className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-semibold text-gray-800">{label}</span>
                                    {badge && (
                                        <div className="absolute left-6 -top-1.5 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                                            {badge}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <button
                            className="mt-6 w-full bg-[#5E5EEE] text-white font-bold text-sm px-4 py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-800 transition"
                        >
                            <img src={ToothIcon} alt="Tooth" className="w-5 h-5" />
                            Browse Implants
                        </button>
                    </nav>
                </div>
            )}
        </>
    );
};

export default Navbar;