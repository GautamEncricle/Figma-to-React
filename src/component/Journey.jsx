import React from 'react';
import TitleIcon from '../assets/images/icons/titleIcon.png';
import SearchIcon from '../assets/images/icons/search.png';
import CartIcon from '../assets/images/icons/card.png';
import DeliveryIcon from '../assets/images/icons/delivery.png';
import ArrowGif from '../assets/images/icons/arrow.gif';

const Journey = () => {
    return (
        <section className="relative w-full bg-[#F8F8FF] py-16 flex justify-center items-center flex-col gap-10 overflow-hidden">
            {/* Decorative Shapes */}
            <div className="absolute left-0 top-[60%] w-[120px] h-[120px] bg-[#5E5EEE] rotate-[18.4deg] rounded-[40px] opacity-90 z-0"></div>
            <div className="absolute right-0 top-[30%] w-[100px] h-[100px] border border-[#5E5EEE] rotate-[-161.6deg] opacity-20 bg-blue-500 z-0"></div>

            <div className="z-10 flex flex-col items-center text-center gap-10 max-w-[1057px]">
                {/* Title */}
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-2">
                        <img src={TitleIcon} alt="icon" className="h-5" />
                        <h3 className="text-[#5E5EEE] font-bold text-lg">How It Works</h3>
                    </div>
                    <h2 className="text-3xl font-bold text-black">Simple Steps to a Perfect Smile!</h2>
                </div>

                {/* Steps */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    {/* Step 1: Search */}
                    <div className="flex flex-col items-center gap-2 w-[188px]">
                        <div className="bg-[#5E5EEE] p-3 rounded-full">
                            <img src={SearchIcon} alt="search" className="h-8" />
                        </div>
                        <p className="text-[22px] font-semibold text-black">Search</p>
                        <p className="text-[22px] font-medium text-[#5E5EEE]">Find Your Products</p>
                    </div>

                    {/* Arrow */}
                    <img src={ArrowGif} alt="arrow" className="h-16 mt-5 hidden md:block" />

                    {/* Step 2: Add to Cart */}
                    <div className="flex flex-col items-center gap-2 w-[188px]">
                        <div className="bg-[#5E5EEE] p-3 rounded-full">
                            <img src={CartIcon} alt="cart" className="h-8" />
                        </div>
                        <p className="text-[22px] font-semibold text-black">Add to Cart</p>
                        <p className="text-[22px] font-medium text-[#5E5EEE]">Select Quantity</p>
                    </div>

                    {/* Arrow */}
                    <img src={ArrowGif} alt="arrow" className="h-16 mt-5 hidden md:block" />

                    {/* Step 3: Delivery */}
                    <div className="flex flex-col items-center gap-2 w-[188px]">
                        <div className="bg-[#5E5EEE] p-3 rounded-full">
                            <img src={DeliveryIcon} alt="delivery" className="h-8" />
                        </div>
                        <p className="text-[22px] font-semibold text-black">Delivery</p>
                        <p className="text-[22px] font-medium text-[#5E5EEE]">Fast Shipping</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;