import React from 'react';
import About1 from '../assets/images/about1.png';
import About2 from '../assets/images/about2.png';
import TitleIcon from '../assets/images/icons/titleIcon.png';
import ReadIcon from '../assets/images/icons/read.png';

const AboutUs = () => {
    return (
        <section className="relative w-full bg-[#F8F8FF] py-20 px-4 sm:px-8 md:px-10">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 max-w-[1527px] mx-auto">
                {/* Left Image */}
                <div className="relative w-full max-w-[600px] sm:max-w-[682px] aspect-[682/609]">
                    {/* Main Image */}
                    <img
                        src={About1}
                        alt="Main About"
                        className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full object-cover rounded-[30px] sm:rounded-[50px]"
                    />

                    {/* Floating Overlay Image */}
                    <div className="absolute bottom-0 right-[-10px]  sm:right-[-10px] w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] z-20 border-t-8 border-r-8 border-[#F8F8FF] bg-white rounded-[30px] rounded-bl-[2px] rounded-tr-[2px] group p-2 sm:p-3 overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105">
                        <img
                            src={About2}
                            alt="Overlay"
                            className="w-full h-full object-cover rounded-[30px]"
                        />
                        <div className="absolute inset-0 bg-cyan-300 opacity-0 group-hover:opacity-90 transition duration-300 rounded-[30px] flex flex-col items-center justify-center p-3 sm:p-4 text-white text-center overflow-hidden">
                            <span className="text-3xl sm:text-5xl font-bold text-black truncate">98%</span>
                            <p className="text-lg sm:text-2xl text-black font-semibold truncate">Success</p>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="w-full max-w-xl flex flex-col gap-8">
                    {/* Title and Description */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <img src={TitleIcon} alt="icon" className="h-4 w-4" />
                            <p className="text-[#5E5EEE] text-lg font-bold">About Us</p>
                        </div>
                        <h2 className="text-3xl sm:text-[40px] font-bold leading-tight text-black">
                            Committed to Restoring Smiles with Premium Dental Implants
                        </h2>
                        <p className="text-[#787878] text-base sm:text-[18px] leading-[28px]">
                            We specialize in providing high-quality dental implants designed for precision,
                            durability, and seamless integration. Trusted by dental professionals worldwide, our
                            products ensure long-term patient satisfaction and success.
                        </p>
                    </div>

                    {/* Feature Highlights */}
                    <div className="border-t border-b border-[#999]/15 py-6 flex flex-col gap-6">
                        <div className="flex flex-col flex-wrap sm:flex-row md:flex-nowrap gap-6">
                            <div className="flex items-center gap-3 w-full sm:w-[300px]">
                                <span className="text-[#5E5EEE] font-semibold text-lg sm:text-[22px]">25+ Years</span>
                                <p className="text-[#696969] text-sm sm:text-[16px]">Delivering innovation in dental implants.</p>
                            </div>
                            <div className="flex items-center gap-3 w-full sm:w-[340px]">
                                <span className="text-[#5E5EEE] font-semibold text-lg sm:text-[22px]">100% Satisfaction</span>
                                <p className="text-[#696969] text-sm sm:text-[16px]">Trusted by professionals globally.</p>
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <button className="mt-4 sm:mt-6 px-6 py-3 bg-[#5E5EEE] text-white font-bold text-[16px] rounded-[20px] flex items-center gap-2 w-fit hover:bg-blue-800 transition">
                        <img src={ReadIcon} alt="read" className="h-5 w-5" />
                        Browse Implants
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;