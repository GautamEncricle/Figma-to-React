import React from 'react';

import TitleIcon from '../assets/images/icons/titleIcon.png';
import CheckIcon from '../assets/images/icons/check.png';
import Medal1 from '../assets/images/icons/rating1.png';
import Medal2 from '../assets/images/icons/rating2.png';
import Medal3 from '../assets/images/icons/rating3.png';
import ViewIcon from '../assets/images/icons/viewDetails.png';

const LoyaltyProgram = () => {
    return (
        <section className="w-full bg-white py-20 px-6 flex flex-col items-center gap-16">
            {/* Title */}
            <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2">
                    <img src={TitleIcon} alt="icon" className="h-5" />
                    <h3 className="text-[#5E5EEE] font-bold text-lg">Loyalty Program</h3>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                    How It Works Simple Steps to a Perfect Smile!
                </h2>
            </div>

            {/* Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
                {/* Silver Tier */}
                <div className="flex flex-col justify-between w-full min-h-[440px] bg-white border-[3px] border-[#5E5EEE] rounded-[40px] p-8 shadow">
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 bg-[#4242FF] text-white px-4 py-1 rounded-full">
                                <span className="text-sm font-semibold">Current Tier</span>
                            </div>
                            <img src={Medal1} alt="medal" className="h-8" />
                        </div>
                        <hr className="border-gray-300" />
                        <span className="text-lg font-bold">Silver</span>
                        <div className="flex gap-2 items-center">
                            <span className="text-green-600 font-semibold text-2xl">2%</span>
                            <p className="text-lg text-gray-500">Cashback</p>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <img src={CheckIcon} className="h-5" />
                                <span className="font-semibold text-black text-base">Free Shipping over $500</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={CheckIcon} className="h-5" />
                                <span className="font-semibold text-black text-base">Standard Support</span>
                            </li>
                        </ul>
                    </div>
                    <p className="text-gray-500 font-medium mt-4">Your active tier benefits</p>
                </div>

                {/* Gold Tier */}
                <div className="flex flex-col justify-between w-full min-h-[440px] bg-white rounded-[40px] p-8 shadow border-[3px] border-transparent hover:border-[#5E5EEE] hover:shadow-lg transition-all duration-300 ease-in-out">
                    <div>
                        <div className="flex justify-between items-center relative">
                            <span className="text-lg font-bold">Gold</span>
                            <img src={Medal2} alt="medal" className="h-8" />
                            <div className="absolute top-[-45px] right-0 bg-[#4242FF] text-white text-sm font-semibold px-4 py-1 rounded-full z-10">
                                Most Popular
                            </div>
                        </div>
                        <hr className="my-4 border-gray-300" />
                        <div className="flex gap-2 items-center">
                            <span className="text-green-600 font-semibold text-2xl">5%</span>
                            <p className="text-lg text-gray-500">Cashback</p>
                        </div>
                        <ul className="space-y-3 mt-4">
                            <li className="flex items-center gap-2">
                                <img src={CheckIcon} className="h-5" />
                                <span className="font-semibold text-black text-base">Free Express Shipping</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={CheckIcon} className="h-5" />
                                <span className="font-semibold text-black text-base">Priority Support</span>
                            </li>
                        </ul>
                    </div>
                    <button className="mt-6 w-full bg-[#5E5EEE] text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2 hover:bg-[#4343cc] transition-colors duration-300 ease-in-out">
                        <img src={ViewIcon} className="h-5" />
                        How to reach Gold?
                    </button>
                </div>

                {/* Platinum Tier */}
                <div className="flex flex-col justify-between w-full min-h-[380px] bg-white rounded-[40px] p-6 shadow border-[3px] border-transparent hover:border-[#5E5EEE] hover:shadow-lg transition-all duration-300 ease-in-out">
                    <div>
                        <div className="flex justify-between items-center relative">
                            <span className="text-lg font-bold">Platinum</span>
                            <img src={Medal3} alt="medal" className="h-8" />
                            <div className="absolute top-[-45px] right-0 bg-[#4242FF] text-white text-sm font-semibold px-4 py-1 rounded-full z-10">
                                Top Tier
                            </div>
                        </div>
                        <hr className="my-4 border-gray-300" />
                        <div className="flex gap-2 items-center">
                            <span className="text-green-600 font-semibold text-2xl">10%</span>
                            <p className="text-lg text-gray-500">Cashback</p>
                        </div>
                        <ul className="space-y-3 mt-4">
                            <li className="flex items-center gap-2">
                                <img src={CheckIcon} className="h-5" />
                                <span className="font-semibold text-black text-base">VIP Support 24/7</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={CheckIcon} className="h-5" />
                                <span className="font-semibold text-black text-base">Exclusive Events</span>
                            </li>
                        </ul>
                    </div>
                    <button className="mt-6 w-full bg-[#5E5EEE] text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2 hover:bg-[#4343cc] transition-colors duration-300 ease-in-out">
                        <img src={ViewIcon} className="h-5" />
                        How to reach Gold?
                    </button>
                </div>
            </div>

        </section>
    );
};

export default LoyaltyProgram;