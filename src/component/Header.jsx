import React from 'react';
import introText1 from '../assets/images/introText1.png';
import introText2 from '../assets/images/introText2.png';
import introShop from '../assets/images/introShop.png';
import heroRating from '../assets/images/heroRating.png';
import heroImg from '../assets/images/heroImg.png';
import contactIcon from '../assets/images/icons/contact.png';
import watchIcon from '../assets/images/icons/watch24.png';
import locationIcon from '../assets/images/icons/location.png';

const Header = () => {
    return (
        <header className="relative bg-gradient-to-r from-[#2C2C66] to-[#0B0B38] text-white">
            {/* Main Content */}
            <div className="max-w-[1320px] mx-auto px-4 pt-16 pb-[160px] flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Text Left */}
                <div className="flex-1 space-y-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        Superior Dental{' '}
                        <img src={introText1} alt="text1" className="inline h-8 md:h-10 mx-1" />
                        Implants Unmatched Precision{' '}
                        <img src={introText2} alt="text2" className="inline h-8 md:h-10 mx-1" />
                        Longevity
                    </h1>
                    <p className="text-lg text-gray-200 max-w-xl">
                        Elevate your practice with premium implants engineered for strength, aesthetics, and seamless integration.
                    </p>
                    <div className="flex gap-6">
                        <div>
                            <p className="text-3xl font-bold">99%</p>
                            <p className="text-sm text-gray-300">Success Rate</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">98%</p>
                            <p className="text-sm text-gray-300">Patient Satisfaction</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">95%</p>
                            <p className="text-sm text-gray-300">Durability</p>
                        </div>
                    </div>
                    <img src={introShop} alt="shop" className="h-10" />
                </div>

                {/* Hero Image Right */}
                <div className="flex-1 relative flex justify-center">
                    {/* Floating Rating */}
                    <div className="absolute top-6 left-6 sm:top-10 sm:left-10 bg-white text-black w-[260px] px-4 py-4 rounded-xl shadow-md space-y-2 z-10">
                        <img src={heroRating} alt="rating" className="w-10" />
                        <p className="font-semibold text-lg">Best Service & 5 Star</p>
                        <p className="text-sm text-gray-700">Advanced technology for seamless integration.</p>
                    </div>

                    {/* Main Image */}
                    <div className="w-[280px] md:w-[340px] h-[360px] rounded-[30px] overflow-hidden shadow-lg hover:scale-105 hover:-rotate-1 transition-transform duration-500">
                        <img src={heroImg} alt="hero" className="w-full h-full object-cover rounded-[30px]" />
                    </div>
                </div>
            </div>

            {/* Contact Info Floating */}
            <div className="absolute left-1/2 bottom-[-60px] transform -translate-x-1/2 w-[90vw] md:w-[80vw] lg:w-[70vw] bg-white text-black rounded-2xl shadow-xl px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6 z-50">
                {/* Contact */}
                <div className="flex items-center gap-4">
                    <img src={contactIcon} alt="contact" className="w-8 h-8" />
                    <div>
                        <p className="font-semibold">Need Help With Your Order?</p>
                        <p className="text-sm">(+01) 789 987 645</p>
                    </div>
                </div>

                <div className="hidden md:block h-12 w-px bg-gray-300" />

                {/* Shipping */}
                <div className="flex items-center gap-4">
                    <img src={watchIcon} alt="shipping" className="w-8 h-8" />
                    <div>
                        <p className="font-semibold">Shipping Time</p>
                        <p className="text-sm">Standard: 3–5 Days • Express: 1–2 Days</p>
                    </div>
                </div>

                <div className="hidden md:block h-12 w-px bg-gray-300" />

                {/* Track Order */}
                <button className="flex items-center gap-2 px-6 py-3 bg-[#5E5EEE] text-white font-semibold rounded-xl hover:bg-[#4343cc] transition">
                    <img src={locationIcon} alt="track" className="w-6 h-6" />
                    Track Your Order
                </button>
            </div>
        </header>
    );
};

export default Header;
