import React from 'react';
import brandWoman from "../../assets/home/bottle_png_.png"
import { Link } from 'react-router-dom';

const BRAND_DATA = {
    tag: "Packaged Alkaline Water",
    title: "Bottles that fit Indian lifestyles.",
    description: "From 200ml event bottles ASVA offers safe alkaline hydration formats for every use, home dining, clinics, gym , office pantries and hotel guests.",
    image: brandWoman,
    cardLabel: "Alkaline Water Supply",
    cta: "Shop",
    link: "/shop",
    listOne: "200ml / 500ml / 1L bottles",
    // listTwo: "5L cans + 20L refill jars with deposit/return system"
};

export const BrandStory: React.FC = () => {
    return (
        <section className="container mx-auto px-6 pb-24 font-['Kantumruy']">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center max-w-[1280px] mx-auto">
                
                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative flex items-center justify-center py-10">
                    <div className="absolute inset-0 bg-blue-50/50 rounded-full blur-[100px] opacity-40 transform scale-75"></div>
                    <div className="relative z-10 transition-transform duration-700 hover:scale-[1.03]">
                        <img
                            src={BRAND_DATA.image}
                            className="h-[400px] sm:h-[550px] w-auto object-contain filter drop-shadow-2xl"
                            alt={BRAND_DATA.title}
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-left lg:pl-10">
                    <div className="animate-in fade-in slide-in-from-right-8 duration-1000">
                        <span className="text-[14px] uppercase tracking-[0.2em] text-[#393939]/60 mb-4 block font-semibold leading-none">
                            {BRAND_DATA.tag}
                        </span>
                        
                        <h2 className="text-[36px] md:text-[48px] font-['Kalnia'] text-black mb-6 leading-[1.15]">
                            {BRAND_DATA.title}
                        </h2>
                        
                        <p className="text-[16px] md:text-[18px] text-[#393939]/80 leading-relaxed mb-8 font-normal max-w-[540px]">
                            {BRAND_DATA.description}
                        </p>
                        
                        <div className="space-y-4 mb-12">
                            {/* <ul className="space-y-3">
                                {[BRAND_DATA.listOne, BRAND_DATA.listTwo].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[#393939]/90 text-[15px] md:text-[16px]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul> */}
                        </div>

                        <Link
                            to={BRAND_DATA.link}
                            className="group relative inline-flex items-center gap-4 text-[16px] font-bold text-black uppercase tracking-widest transition-all"
                        >
                            <span className="relative z-10">{BRAND_DATA.cta}</span>
                            <span className="w-12 h-[1px] bg-black transition-all group-hover:w-16"></span>
                            {/* Decorative dot */}
                            {/* <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></div> */}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

