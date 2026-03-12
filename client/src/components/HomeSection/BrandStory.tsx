import React, { useState, useEffect } from 'react';
import brandWoman from "../../assets/home/bottle_png_.png"
import brandmash from "../../assets/home/mashine_1.png"
import { Link } from 'react-router-dom';

const BRAND_DATA = [
    {
        tag: "Packaged Alkaline Water",
        title: "Bottles & jars that fit Indian lifestyles.",
        description: "From 200ml event bottles to 20L refill jars, ASVA offers safe alkaline hydration formats for every use, home dining, clinics, gym refills, office pantries and hotel guests.",
        image: brandWoman,
        cardLabel: "Alkaline Water Supply",
        cta: "Shop",
        link: "#",
        listOne: "200ml / 500ml / 1L bottles",
        listTwo: "5L cans + 20L refill jars with deposit/return system"
    },
    {
        tag: "Portable Alkaline Ionizers",
        title: "Smart alkaline machines for home & business.",
        description: "Customers can choose ready-to-drink alkaline supply or convert water on demand using ASVA ionizer devices, making alkaline hydration convenient and scalable.",
        image: brandmash,
        cardLabel: "Ionizer Technology",
        cta: "Shop",
        link: "#",
        listOne: "Home countertop ionizer",
        listTwo: "Office/Clinic ionizer system",
        listThree: "Gym/Studio ionizer station"
    }
];







export const BrandStory: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const activeData = BRAND_DATA[activeIndex];

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % BRAND_DATA.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <section
            className="container mx-auto px-6 pb-20"

        >
            <div className="flex flex-col lg:flex-row gap-8 items-start relative"

            >
                {/* Left Column (Selectable Cards) */}
                <div className="w-full lg:w-[20%] flex  sm:flex-col  2xl:gap-28 gap-10 items-center lg:items-center pt-8 sm:pt-20">
                    {BRAND_DATA.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`flex flex-col items-center text-center transition-all duration-300 outline-none ${activeIndex === index ? 'opacity-100 scale-105' : 'opacity-40 hover:opacity-70'
                                }`}
                        >
                            <div className={`w-24 h-24 rounded-full mb-4 overflow-hidden border-2 transition-colors ${activeIndex === index ? 'border-blue-400' : 'border-transparent bg-gray-100'
                                }`}>
                                <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                            </div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{item.cardLabel}</p>
                        </button>
                    ))}
                </div>


                {/* Center Column (Dynamic Image) */}
                <div className="w-full lg:w-[50%] relative h-[400px] sm:h-[600px] flex items-center justify-center"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="absolute inset-0 bg-blue-50/50 rounded-full blur-3xl opacity-50 transform scale-75"></div>
                    <div className="relative z-10">
                        <img
                            key={activeData.image}
                            src={activeData.image}
                            className="h-[400px] sm:h-[600px]  w-auto object-contain rounded-2xl  animate-in fade-in duration-700"
                            alt={activeData.title}
                        />
                    </div>
                </div>


                {/* Right Column (Dynamic Text Content) */}
                <div className="w-full lg:w-[30%] flex flex-col gap-16 pt-10 pl-0"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div key={activeIndex} className="animate-in fade-in slide-in-from-right-4 duration-500">
                        <h2 className="text-[12px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">{activeData.tag}</h2>
                        <h3 className="text-[32px] font-serif text-black mb-4 leading-tight">{activeData.title}</h3>
                        <p className="text-[16px] text-gray-500 leading-6 mb-6 font-medium whitespace-pre-line">
                            {activeData.description}
                        </p>
                        <ul className='list-disc ml-3'>
                            {activeData.listOne && <li className='mb-2'> {activeData.listOne} </li>}
                            {activeData.listTwo && <li className='mb-2'>{activeData.listTwo}  </li>}
                            {activeData.listThree && <li className='mb-2'>{activeData.listThree}  </li>}
                        </ul>
                        <Link
                            to={"/shop"}
                            className="inline-block text-[16px] mt-10  font-bold  decoration-1 hover:underline hover:underline-offset-4 text-gray-900 uppercase tracking-widest transition-colors"
                        >
                            {activeData.cta}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
