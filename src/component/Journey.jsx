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
            <svg
                className="absolute left-0 bottom-0 md:top-[60%] z-0"
                width="121"
                height="110"
                viewBox="0 0 121 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M-15.7713 13.2506C-44.3425 27.7158 -55.3325 72.648 -57.2561 93.306L101.992 146.291C139.557 96.3934 112.924 62.8998 92.6104 55.0395C75.1127 49.2178 61.6964 44.746 46.9266 11.8585C36.1421 -9.92303 -1.28137 4.48501 -15.7713 13.2506Z"
                    stroke="#3B82F6"
                    strokeWidth="6"
                />
                <path
                    d="M-15.7713 13.2506C-44.3425 27.7158 -55.3325 72.648 -57.2561 93.306L101.992 146.291C139.557 96.3934 112.924 62.8998 92.6104 55.0395C75.1127 49.2178 61.6964 44.746 46.9266 11.8585C36.1421 -9.92303 -1.28137 4.48501 -15.7713 13.2506Z"
                    stroke="white"
                    strokeWidth="3"
                />
                <path
                    d="M-15.7713 13.2506C-44.3425 27.7158 -55.3325 72.648 -57.2561 93.306L101.992 146.291C139.557 96.3934 112.924 62.8998 92.6104 55.0395C75.1127 49.2178 61.6964 44.746 46.9266 11.8585C36.1421 -9.92303 -1.28137 4.48501 -15.7713 13.2506Z"
                    fill="#5E5EEE"
                />
            </svg>
            <svg
                className="absolute right-0 top-5 md:top-[30%] z-0"
                width="116"
                height="114"
                viewBox="0 0 116 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M137.342 100.765C165.913 86.2996 176.903 41.3674 178.826 20.7094L19.5781 -32.2754C-17.9869 17.622 8.64665 51.1156 28.9599 58.9758C46.4576 64.7976 59.8739 69.2694 74.6438 102.157C85.4282 123.938 122.852 109.53 137.342 100.765Z"
                    stroke="#3B82F6"
                    strokeWidth="6"
                />
                <path
                    d="M137.342 100.765C165.913 86.2996 176.903 41.3674 178.826 20.7094L19.5781 -32.2754C-17.9869 17.622 8.64665 51.1156 28.9599 58.9758C46.4576 64.7976 59.8739 69.2694 74.6438 102.157C85.4282 123.938 122.852 109.53 137.342 100.765Z"
                    stroke="white"
                    strokeWidth="3"
                />
                <path
                    d="M137.342 100.765C165.913 86.2996 176.903 41.3674 178.826 20.7094L19.5781 -32.2754C-17.9869 17.622 8.64665 51.1156 28.9599 58.9758C46.4576 64.7976 59.8739 69.2694 74.6438 102.157C85.4282 123.938 122.852 109.53 137.342 100.765Z"
                    fill="#5E5EEE"
                />
            </svg>

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
                    <img src={ArrowGif} alt="arrow" className="h-16 mt-3 hidden md:block" />

                    {/* Step 2: Add to Cart */}
                    <div className="flex flex-col items-center gap-2 w-[188px]">
                        <div className="bg-[#5E5EEE] p-3 rounded-full">
                            <img src={CartIcon} alt="cart" className="h-8" />
                        </div>
                        <p className="text-[22px] font-semibold text-black">Add to Cart</p>
                        <p className="text-[22px] font-medium text-[#5E5EEE]">Select Quantity</p>
                    </div>

                    {/* Arrow */}
                    <img src={ArrowGif} alt="arrow" className="h-16 mt-3 hidden md:block" />

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