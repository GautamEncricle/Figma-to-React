import { useEffect, useRef, useState } from 'react';
import decorLeft from '../assets/images/machine1.png';
import decorRight from '../assets/images/machine2.png';

const stats = [
    { number: '1000+', label: 'Satisfied Clinics' },
    { number: '50,000', label: 'Order Delivered' },
    { number: '99%', label: 'Satisfaction Rate' },
    { number: '1000+', label: 'Satisfied Clinics' },
    { number: '24/7', label: 'Support' },
    { number: '99%', label: 'Satisfaction Rate' },
    { number: '1,000+', label: 'Satisfaction Clinics' },
];

const DentalTrust = () => {
    const scrollRef = useRef(null);
    const [scrollDir, setScrollDir] = useState(1); // 1 = right, -1 = left

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const scrollStep = 10;
        const interval = setInterval(() => {
            container.scrollLeft += scrollStep * scrollDir;

            // Reverse at boundaries
            if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
                setScrollDir(-1);
            } else if (container.scrollLeft <= 0) {
                setScrollDir(1);
            }
        }, 16);

        return () => clearInterval(interval);
    }, [scrollDir]);

    return (
        <section className="relative w-full bg-white/90 py-20 px-4 overflow-hidden">
            {/* Decorative Images */}
            <img src={decorLeft} alt="Decor" className="absolute left-0 top-0 w-[180px] h-[180px]" />
            <img src={decorRight} alt="Decor" className="absolute right-0 bottom-0 w-[85px] h-[100px]" />

            {/* Heading */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <h2 className="text-4xl font-bold text-black">Trusted by Dental Professionals</h2>
            </div>

            {/* Auto-scrolling stat cards */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide px-1 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                style={{ scrollBehavior: 'smooth' }}
            >
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className="min-w-[220px] bg-white border border-[#C6C6C6] rounded-2xl px-5 py-4 flex-shrink-0 flex flex-col items-center gap-3"
                    >
                        <h3 className="text-4xl font-semibold text-black leading-tight">{stat.number}</h3>
                        <p className="text-xl font-medium text-[#102693]">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DentalTrust;