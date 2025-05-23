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
                <div className="flex-1 space-y-6 lg:max-w-[700px] lg:min-w-[700px]">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans leading-tight">
                        Superior Dental{' '}
                        <img src={introText1} alt="text1" className="inline h-8 md:h-10 mx-1" />
                        Implants Unmatched Precision{' '}
                        <img src={introText2} alt="text2" className="inline h-8 md:h-10 mx-1" />
                        Longevity
                    </h1>
                    <p className="text-lg text-gray-200 max-w-xl lg:max-w-3xl">
                        Elevate your practice with premium implants engineered for strength, aesthetics, and seamless integration.
                    </p>

                    {/* Divider */}
                    <div className='w-full md:w-[90%] h-[1px] bg-gray-700'></div>
                    {/* Divider-end */}
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
                    {/* Divider */}
                    <div className='w-full md:w-[90%] h-[1px] bg-gray-700'></div>
                    {/* Divider-end */}
                    <img src={introShop} alt="shop" className="h-10" />
                </div>

                {/* Hero Image Right */}
                <div className="flex-1 relative flex justify-center lg:mr-12">
                    {/* Main Image Container */}
                    <div className="relative w-[300px] md:w-[400px] h-[400px] md:h-[460px] lg:left-15 lg:mt-10 rounded-[30px] overflow-hidden shadow-lg group bg-gray-200">
                        {/* Main Image (hover zoom + rotate) */}
                        <img
                            src={heroImg}
                            alt="hero"
                            className="w-full h-full object-cover rounded-[30px] transform transition-transform duration-500 group-hover:scale-120 group-hover:-rotate-12"
                        />
                    </div>
                    {/* Floating Rating */}
                    <div className="absolute bottom-20 left-3 md:-left-10 top-1 md:top-auto max-h-[144px] md:mb-10 bg-white text-black w-[275px] px-4 py-4 rounded-xl shadow-md space-y-1 z-5 hover:bg-[#dcf8f7]">
                        <img src={heroRating} alt="rating" className="w-22 h-7" />
                        <p className="font-semibold text-lg">Best Service & 5 Star</p>
                        <p className="text-sm text-gray-700">Advanced technology for seamless integration.</p>
                    </div>
                </div>

            </div>

            {/* Contact Info Floating */}
            <div className="absolute left-1/2 bottom-[-120px] md:bottom-[-50px] transform -translate-x-1/2 w-[90vw] md:w-[80vw] lg:w-[70vw] bg-white text-black rounded-2xl shadow-xl px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6 z-10">
                {/* Contact */}
                <div className="flex items-center gap-3">
                    <img src={contactIcon} alt="contact" className="w-8 h-8" />
                    <div>
                        <p className="font-semibold">Need Help With Your Order?</p>
                        <p className="text-sm">(+01) 789 987 645</p>
                    </div>
                </div>

                <div className="hidden md:block h-12 w-px bg-gray-300" />

                {/* Shipping */}
                <div className="flex items-center gap-4">
                    <img src={watchIcon} alt="shipping" className="w-9 h-8" />
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
