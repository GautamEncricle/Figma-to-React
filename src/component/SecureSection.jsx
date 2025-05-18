import checkIcon from '../assets/images/icons/check.png';

const SecureSection = () => {
    return (
        <section className="relative w-full bg-[#F8F8FF] py-20 px-4 flex justify-center">
            <div className="max-w-[781px] flex flex-col items-center gap-12">
                {/* Title */}
                <div className="text-center flex flex-col items-center gap-3">
                    <h2 className="text-4xl font-bold text-black">Simple, Secure, Swift</h2>
                    <p className="text-lg text-[#8B8B8B] font-bold">
                        Online purchasing is fast, simple, and secure. Orders ship with DHL or UPS.
                    </p>
                    <p className="text-base text-[#8B8B8B]">
                        Orders prepared in 1–3 business days. We ship with UPS or DHL based on fastest route.
                    </p>
                </div>

                {/* Cards */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Card 1 */}
                    <div className="relative w-full md:w-[363px] bg-white border-4 border-[#5E5EEE] shadow-lg rounded-3xl overflow-hidden">
                        <div className="bg-[#5E5EEE] h-[100px] flex justify-center items-center">
                            <h3 className="text-white text-xl font-semibold">Fast Delivery</h3>
                        </div>
                        <div className="p-6 flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <img src={checkIcon} className="h-5" alt="check" />
                                <p className="text-black text-base">2–7 business days to US/EU</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={checkIcon} className="h-5" alt="check" />
                                <p className="text-black text-base">5–12 days to South America/Eastern Europe</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative w-full md:w-[387px] bg-white border-4 border-[#5E5EEE] shadow-lg rounded-3xl overflow-hidden">
                        <div className="bg-[#5E5EEE] h-[100px] flex justify-center items-center">
                            <h3 className="text-white text-xl font-semibold">Safe & Guaranteed</h3>
                        </div>
                        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                            {[
                                'SSL Secure',
                                'Refund Policy',
                                'Quality Guarantee',
                                '24/7 Support',
                                'DHL',
                                'UPS',
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <img src={checkIcon} className="h-5" alt="check" />
                                    <p className="text-black text-base">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecureSection;