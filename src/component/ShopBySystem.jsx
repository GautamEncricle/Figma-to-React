import React, { useRef } from 'react';
import ViewDetailsIcon from '../assets/images/icons/viewDetails.png';
import HeartIcon from '../assets/images/icons/heart.png';
import ShopIcon from '../assets/images/icons/shopIcon.png';
import TitleIcon from '../assets/images/icons/titleIcon.png';
import ArrowIcon from '../assets/images/icons/arrow.png';

import img1 from '../assets/images/cover/image1.png';
import img2 from '../assets/images/cover/image2.png';
import img3 from '../assets/images/cover/image3.png';
import Stars from '../assets/images/cover/starts.png';

const products = [
  {
    id: 1,
    title: 'NeoDent GM',
    subtitle: 'Premium Implant System',
    badge: 'New',
    image: img1
  },
  {
    id: 2,
    title: 'MegaGen AnyOne',
    subtitle: 'Versatile Solution',
    badge: 'Top Seller',
    image: img2
  },
  {
    id: 3,
    title: 'MegaGen AnyRidge',
    subtitle: 'Advance System',
    badge: '',
    image: img3
  }
];

const ShopBySystem = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => scrollRef.current.scrollBy({ left: -260, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current.scrollBy({ left: 260, behavior: 'smooth' });

  return (
    <section className="bg-gradient-to-b from-[#F8F8FF] to-white py-12 mt-[140px] overflow-x-hidden">
      <div className="max-w-[1320px] mx-auto px-4 relative">
        {/* Header Row */}
        <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-6 mb-10">
          <div className="space-y-2 md:ml-25">
            <div className="flex items-center gap-2">
              <img src={TitleIcon} alt="Icon" className="w-5 h-5" />
              <p className="text-[#5E5EEE] font-bold text-[18px]">Shop By System</p>
            </div>
            <h2 className="text-2xl md:text-[35px] font-bold leading-[44px] max-w-[600px]">
              Find the Perfect Implant Solution Tailored for Every Case!
            </h2>
          </div>

          <div className="seeMore flex items-center gap-2 bg-[#5E5EEE]  text-white text-[16px] px-4 py-2 rounded-full shadow-md hover:bg-[#4343cc] transition-colors w-full md:w-auto md:mr-30 justify-center">
            <img src={ShopIcon} alt="shop" className="h-5" />
            <a href="#" className="font-semibold">See More</a>
          </div>
        </div>

        {/* Slider Navigation */}
        <div className="relative">
          {/* Left Arrow */}
          <div className="relative max-w-[1100px] mx-auto px-4">
            <button
              onClick={scrollLeft}
              aria-label="Previous"
              className="absolute top-1/2 left-0 md:left-[25px] -translate-y-1/2 w-10 h-10 bg-[#E9E9FF] rounded-full flex items-center justify-center hover:bg-[#5E5EEE] transition-colors shadow-lg z-10"
            >
              <img src={ArrowIcon} alt="Previous" className="w-6 h-6 rotate-180" />
            </button>

            {/* Product Cards */}
            <div className="w-full overflow-hidden">
              <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide max-w-[80vw] mx-auto md:max-w-full md:px-4 md:justify-center"
              >
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex-shrink-0 w-[calc(80vw-24px)] md:w-[320px] bg-white rounded-[24px] shadow-lg p-5 flex flex-col justify-between relative snap-start"
                  >
                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-4 left-4 bg-[#5E5EEE] text-white px-3 py-1 text-xs font-semibold rounded-tl-[12px] rounded-br-[12px]">
                        {product.badge}
                      </span>
                    )}

                    {/* Stars */}
                    <img src={Stars} alt="Stars" className="absolute top-4 right-4 w-[100px]" />

                    {/* Image */}
                    <div className="h-[180px] flex items-center justify-center mt-10 mb-6">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-[160px] object-contain"
                      />
                    </div>

                    {/* Text Info */}
                    <div className="text-left space-y-1 mb-4">
                      <h3 className="text-[18px] font-semibold">{product.title}</h3>
                      <p className="text-[14px] text-gray-500">{product.subtitle}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center">
                      <button className="flex items-center gap-2 bg-[#5E5EEE] text-white px-4 py-2 rounded-full text-sm hover:bg-[#4343cc] transition">
                        <img src={ViewDetailsIcon} alt="View" className="w-4 h-4" />
                        View Details
                      </button>
                      <div className="w-[36px] h-[36px] rounded-2xl bg-[#E9E9FF] flex items-center justify-center ml-3">
                        <img src={HeartIcon} alt="Heart" className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollRight}
              aria-label="Next"
              className="absolute top-1/2 right-0 md:right-[25px] -translate-y-1/2 w-10 h-10 bg-[#5E5EEE] rounded-full flex items-center justify-center hover:bg-[#4242FF] transition-colors shadow-lg z-10"
            >
              <img src={ArrowIcon} alt="Next" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopBySystem;
