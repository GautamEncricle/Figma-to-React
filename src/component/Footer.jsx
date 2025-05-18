import React from 'react';
import FacebookIcon from '../assets/images/icons/facebook.png';
import InstagramIcon from '../assets/images/icons/instagram.png';
import LinkedInIcon from '../assets/images/icons/linkedin.png';
import VectorIcon from '../assets/images/icons/vector.png';

const Footer = () => {
    return (
        <footer className="bg-black text-white px-6 md:px-24 py-20 relative z-10">
            <div className="max-w-screen-xl mx-auto flex flex-col gap-12 mt-[150px]">
                {/* Top Content */}
                <div className="flex flex-col lg:flex-row justify-between gap-12">
                    {/* Brand & Social */}
                    <div className="flex flex-col gap-8 max-w-md">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl md:text-3xl font-bold">Dentallmplants.com</h2>
                            <p className="text-white text-base md:text-lg leading-[1.5]">
                                It is a long established fact that a reader will be distracted by the readable content of a page
                                when looking at its layout.
                            </p>
                        </div>
                        {/* Social Icons */}
                        <div>
                            <h3 className="text-lg font-bold mb-3">Follow Us:-</h3>
                            <div className="flex gap-4">
                                {[FacebookIcon, InstagramIcon, LinkedInIcon].map((icon, i) => (
                                    <div
                                        key={i}
                                        className="bg-white p-2 rounded-full w-10 h-10 flex items-center justify-center"
                                    >
                                        <img src={icon} alt="Social" className="w-6 h-6" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                        {/* Column 1: Products */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6">Products</h4>
                            <ul className="space-y-4 text-sm">
                                {['Implants', 'Abutments', 'Surgical Kits'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <img src={VectorIcon} alt="icon" className="w-3 h-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2: Support */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6">Support</h4>
                            <ul className="space-y-4 text-sm">
                                {['Contacts', 'FAQ', 'Shipping'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <img src={VectorIcon} alt="icon" className="w-3 h-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Legal */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6">Legal</h4>
                            <ul className="space-y-4 text-sm">
                                {['Contacts', 'FAQ', 'Shipping'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <img src={VectorIcon} alt="icon" className="w-3 h-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-400 pt-6 text-center text-sm">
                    © 2025 Dentallmplants.com | All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
