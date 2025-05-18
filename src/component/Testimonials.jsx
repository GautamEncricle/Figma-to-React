import React, { useRef } from 'react';
import TitleIcon from '../assets/images/icons/titleIcon.png';
import PrevIcon from '../assets/images/icons/next.png'; 
import NextIcon from '../assets/images/icons/arrow.png'; 
import BadgeIcon from '../assets/images/icons/h1.png';
import StarImg from '../assets/images/cover/starts.png';
import ProfileImg from '../assets/images/icons/profile.png';

const Testimonials = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const offset = 380;
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -offset : offset,
            behavior: 'smooth',
        });
    };

    return (
        <section className="relative w-full bg-white py-20 px-4 overflow-hidden">
            {/* Header */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mb-16 px-4">
                <div className="flex flex-col items-start gap-6 w-full md:w-1/2">
                    <div className="flex items-center gap-2">
                        <img src={TitleIcon} alt="icon" className="h-5" />
                        <span className="text-[#5E5EEE] font-bold text-lg">Testimonials</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-black">
                        Superior Quality. Seamless Restorations
                    </h2>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => scroll('left')}
                        className="w-10 h-10 bg-[#E9E9FF] rounded-full flex items-center justify-center hover:bg-[#5E5EEE] transition-colors"
                    >
                        <img src={PrevIcon} alt="Previous" className="w-6 h-6 rotate-180" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-10 h-10 bg-[#5E5EEE] rounded-full flex items-center justify-center hover:bg-[#4242FF] transition-colors"
                    >
                        <img src={NextIcon} alt="Next" className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Divider */}
            <div className="max-w-7xl mx-auto border-b border-[#C6C6C6] mb-12"></div>

            {/* Carousel */}
            <div className="max-w-[1400px] mx-auto relative">
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-6 px-4 py-6 scrollbar-hide scroll-smooth"
                >
                    {[1, 2, 3, 4, 5].map((_, index) => (
                        <div
                            key={index}
                            className="relative w-[350px] bg-white rounded-[40px] p-8 shadow border-[#5E5EEE] border-[3px] flex-shrink-0"
                        >
                            {/* Badge */}
                            <div className="absolute top-[-19px] left-[250px] bg-[#4242FF] text-white text-sm font-semibold px-4 py-1 rounded-full whitespace-nowrap z-10">
                                <img src={BadgeIcon} alt="icon" className="w-8 h-8" />
                            </div>

                            {/* Star Image */}
                            <img src={StarImg} alt="rating" className="h-7 mb-4" />

                            {/* Review */}
                            <p className="text-black text-sm my-5">
                                I've been using Dentallmplants implants for over five years. The precision and quality are unmatched,
                                leading to exceptional results for my patients!
                            </p>

                            {/* Profile */}
                            <div className="flex items-center gap-3">
                                <img src={ProfileImg} alt="profile" className="h-10 w-10 rounded-full object-cover" />
                                <p className="font-semibold text-black">Dr. John Smith, DDS</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;