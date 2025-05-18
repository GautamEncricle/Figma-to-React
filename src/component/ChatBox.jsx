import React from 'react';
import WhatsappIcon from '../assets/images/icons/whatsapp.png';
import ChatIcon from '../assets/images/icons/chat.png';

const ChatBox = () => {
    return (
        <section className="relative w-full flex justify-center -mb-[135px] z-20 px-4">
            <div className="w-full md:w-[70vw] md:h-[270px] max-w-[1280px] bg-[#5E5EEE] border-8 border-white rounded-[20px] px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8 shadow-lg">
                {/* Left Side: Subscribe */}
                <div className="flex flex-col gap-4 w-full md:max-w-[50%]">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-white font-bold text-2xl sm:text-3xl leading-tight">Stay Informed</h2>
                        <p className="text-white text-base sm:text-lg leading-relaxed">
                            Get updates on new products and special offers
                        </p>
                    </div>

                    {/* Input and Button */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                        <div className="flex items-center bg-white rounded-2xl h-12 px-4 w-full sm:flex-grow">
                            <input
                                type="email"
                                placeholder="Enter Your Mail."
                                className="w-full text-base text-gray-500 outline-none bg-transparent"
                            />
                        </div>
                        <button className="bg-white rounded-2xl px-6 py-3 flex items-center justify-center gap-2 text-[#5E5EEE] font-bold text-base h-12 whitespace-nowrap w-full sm:w-auto">
                            Subscribe now
                        </button>
                    </div>
                </div>

                {/* Right Side: WhatsApp Box */}
                <div className="relative w-full md:max-w-[380px] h-[240px] flex justify-center items-center mt-4 md:mt-0">
                    {/* Semi-transparent overlay */}
                    <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div>

                    {/* WhatsApp Content */}
                    <div className="relative w-[90%] max-w-[270px] flex flex-col items-center gap-4 text-center z-10">
                        <img src={WhatsappIcon} alt="whatsapp" className="w-10 h-10" />
                        <h3 className="text-white font-bold text-xl sm:text-2xl">Need Help?</h3>
                        <p className="text-white text-sm sm:text-base">Get instant support via WhatsApp</p>

                        <button className="bg-white rounded-2xl px-6 py-3 flex items-center justify-center gap-2 text-[#5E5EEE] font-bold text-sm sm:text-base h-12 whitespace-nowrap">
                            <img src={ChatIcon} alt="chatIcon" className="h-5 w-5" />
                            Chat Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChatBox;