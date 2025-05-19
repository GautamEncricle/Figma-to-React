import React, { useRef } from 'react';
import TitleIcon from '../assets/images/icons/titleIcon.png';
import ShopIcon from '../assets/images/icons/shopIcon.png';
import ToothIcon from '../assets/images/icons/tooth.png';
import ArrowIcon from '../assets/images/icons/arrow.png';

import img4 from '../assets/images/cover/image4.png';
import img5 from '../assets/images/cover/image5.png';
import img6 from '../assets/images/cover/image6.png';
import img7 from '../assets/images/cover/image7.png';

const cardData = [
    {
        id: 1,
        title: 'Single',
        image: img4,
        overlay: 'Single tooth replacement solution',
    },
    {
        id: 2,
        title: 'All-on-4',
        image: img5,
        overlay: 'Full arch restoration with 4 implants',
    },
    {
        id: 3,
        title: 'All-on-6',
        image: img6,
        overlay: 'Full arch restoration with 6 implants',
    },
    {
        id: 4,
        title: 'Digital Workflow',
        image: img7,
        overlay: 'Digital Planning & guided surgery',
    },
];

const ShopByCase = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    };

    return (
        <section className="shopByCase mt-15 md:mt-12 px-4">
            <div className="max-w-[1100px] mx-auto">
                {/* Title Section */}
                <div className="shopSystemTitle flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div className="flex flex-col gap-4 w-full md:w-1/2">
                        <div className="title flex items-center gap-2">
                            <img src={TitleIcon} alt="title" className="h-5" />
                            <p className="text-xs font-bold text-blue-700">Shop By Case</p>
                        </div>
                        <h2 className="text-2xl md:text-2xl font-bold">
                            Case-Specific Solutions for Perfect Restorations
                        </h2>
                    </div>

                    <div className="seeMore flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-800 transition-colors w-full md:w-auto justify-center">
                        <img src={ShopIcon} alt="shop" className="h-5" />
                        <a href="#" className="font-semibold">See More</a>
                    </div>
                </div>

                {/* Slider */}
                <div className="relative flex justify-center items-center max-w-full overflow-hidden">
                    {/* Scrollable Cards */}
                    <div
                        ref={scrollRef}
                        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory max-w-[80vw] sm:rounded-[20px] md:max-w-full px-4 py-8 md:flex-nowrap"
                    >
                        {cardData.map((card, index) => (
                            <div
                                key={card.id}
                                className={`group flex flex-col items-center w-[240px] h-[220px] relative flex-shrink-0 snap-start transition-all duration-300 ${index === 0 ? 'hover:mt-5' : ''
                                    }`}
                            >
                                {/* Card Image + Overlay */}
                                <div className="w-[240px] h-[230px] bg-white border-4 border-[#5E5EEE] rounded-[40px] shadow-md overflow-hidden relative">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-contain"
                                    />
                                    <div className="absolute inset-0 bg-blue-500 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-white text-xl font-bold text-center px-4">
                                            {card.overlay}
                                        </span>
                                    </div>
                                </div>

                                {/* Button below card */}
                                <div className="w-[190px] h-[60px] bg-[#5E5EEE] rounded-[10px] mt-[-37px] z-10 flex justify-evenly items-center px-4">
                                    <img src={ToothIcon} alt="Favorite" className="h-10" />
                                    <span className="text-white font-semibold text-lg">{card.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Left button attached to first card */}
                    <div className="absolute top-1/2 left-0 md:left-[25px] -translate-y-1/2 z-10 flex items-center">
                        <button
                            onClick={scrollLeft}
                            aria-label="Previous"
                            className="w-10 h-10 bg-[#E9E9FF] rounded-full flex items-center justify-center hover:bg-[#5E5EEE] transition-colors shadow-lg"
                        >
                            <img src={ArrowIcon} alt="Previous" className="w-6 h-6 rotate-180" />
                        </button>
                    </div>

                    {/* Right button attached to last card */}
                    <div className="absolute top-1/2 right-0 md:right-[25px] -translate-y-1/2 z-10 flex items-center">
                        <button
                            onClick={scrollRight}
                            aria-label="Next"
                            className="w-10 h-10 bg-[#5E5EEE] rounded-full flex items-center justify-center hover:bg-[#4242FF] transition-colors shadow-lg"
                        >
                            <img src={ArrowIcon} alt="Next" className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopByCase;
