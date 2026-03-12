import React, { useState, useEffect } from 'react';
import shopBanner1 from "../../assets/productimg/crausal_img/shopcrausal_1.png"
import shopBanner2 from "../../assets/productimg/crausal_img/shopcrausal_2.png"
import shopBanner3 from "../../assets/productimg/crausal_img/shopcrausal_3.png"

const BANNER_IMAGES = [
    shopBanner3,
    shopBanner1,
    shopBanner2,
];

export const ShopBanner: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % BANNER_IMAGES.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-[1090px] mx-auto px-4 md:px-8 pt-24 pb-8">
            <div className="relative w-full bg-white rounded-lg rounded-b-none sm:border  sm:border-zinc-800 sm:p-8  shadow-xs">
                {/* Camera/Home Button Dot */}
                {/* <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-zinc-900 rounded-full z-10"></div> */}

                <div className="relative w-full h-[160px]  sm:h-[300px]  md:h-[400px] lg:h-[320px] rounded-lg overflow-hidden bg-gray-100">
                    {BANNER_IMAGES.map((src, index) => (
                        <img
                            key={src}
                            src={src}
                            alt={`Shop Banner ${index + 1}`}
                            className={`absolute object-[center_70%]   inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center mt-6 gap-2">
                {BANNER_IMAGES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-1.5 h-1.5 cursor-pointer rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-black w-4' : 'bg-gray-300'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};