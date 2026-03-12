import React, { useEffect, useState } from 'react';
// import imgBottle from "../../assets/HomeImg/hero_1.png";
// import imgBottle from "../../assets/bottle_png_.png";
import imgBottle from "../../assets/home/hero_img_bottle.png"
import shape from "../../assets/HomeImg/shap.png";
import mashine from "../../assets/home/mashine_1.png";
import { motion, AnimatePresence } from "framer-motion";
// import { image } from 'framer-motion/client';

type HeroSlide = {
    title: string;
    description: string;
    // subDescription: string[];
    image: string;
};

const heroSlides: HeroSlide[] = [
    {
        title: "Premium Alkaline Water, Delivered",
        description: "Safe, great-tasting alkaline hydration for homes, gyms, clinics and offices—powered by hyperlocal delivery and quality control.",
        // subDescription: ["FSSAI • IS Standards", "ISO 22000-based practices", "Regular lab testing", "Pan-India delivery"],
        // CTA 1: Shop Bottles & JarsCTA 2: Start Subscription

        image: imgBottle,
    },
    {
        title: "Pure Hydration Premium Living",
        description: "Smart alkaline purification machines that deliver clean, safe and great-tasting water, built for modern Indian kitchens and workplaces.",
        image: mashine,
    },
];
// subDescription: ["", "", "", ""],

export const Hero: React.FC = () => {
    const [activeSlide, setActiveSlide] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % heroSlides.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);


    return (
        <section className="relative min-h-[90vh] lg:min-h-screen pt-24 pb-12 overflow-hidden">
            <div
                className="absolute inset-0 overflow-hidden lg:mt-14 "
                style={{
                    background: `url(${shape})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="relative space-y-6 lg:space-y-6">
                        <div className="absolute left-4  lg:-left-16 top-[50%] hidden lg:block">
                            <div className="text-3xl lg:text-4xl tracking-[0.08em] -rotate-90 origin-left font-['Kalnia'] font-medium whitespace-nowrap">
                                ÃSVA
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSlide}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-2 lg:ml-12 lg:space-y-4"
                            >
                                <h1 className="font-['Kalnia'] font-medium text-5xl lg:text-7xl leading-tight whitespace-pre-line">
                                    {heroSlides[activeSlide].title}
                                </h1>

                                <p className="text-xs lg:text-[16px] max-w-md text-gray-700">
                                    {heroSlides[activeSlide].description}
                                </p>

                                {/* <ul className="space-y-2 list-none">
                                    {heroSlides[activeSlide].subDescription.map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 text-gray-700 text-lg lg:text-xl">
                                            {item}
                                        </li>
                                    ))}
                                </ul> */}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="relative flex justify-center items-center lg:justify-end min-h-[260px] lg:min-h-[600px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSlide}
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -60 }}
                                transition={{ duration: 0.7 }}
                                className="relative"
                            >
                                <img
                                    src={heroSlides[activeSlide].image}
                                    alt="ASVA Water Bottle"
                                    className="w-64 sm:w-[600px] lg:w-[520px] h-auto object-cover "
                                />
                                {/* <img
                                    src={heroSlides[activeSlide].image}
                                    alt="ASVA Water Bottle Small"
                                    className="absolute bottom-0 -left-4 lg:-left-8 w-32 lg:w-44 h-auto object-contain drop-shadow-xl"
                                /> */}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* <div className="flex justify-center lg:justify-end pt-4 lg:pt-0 z-10">
                        <button
                            onClick={nextSlide}
                            aria-label="Next slide"
                            className="w-5 h-5 rounded-full bg-black/25 hover:bg-black flex items-center justify-center hover:scale-110 transition" >
                            <div className="w-3 h-0.5 bg-white" />
                        </button>
                    </div> */}
                </div>
            </div>
        </section>
    );
};
