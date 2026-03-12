import React from 'react';
import adsImgBg from "../../assets/home/adds_asva.png";
import { Link } from 'react-router-dom';

export const FeaturedBanner: React.FC = () => {
    return (
        <section className="relative w-full h-[600px] bg-gray-900 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#1a2e25]">
                {/* Abstract Pattern to simulate image texture */}
                <div className="absolute inset-0 opacity-30 no-repeat bg-cover"
                    style={{
                        backgroundImage: `url(${adsImgBg})`
                    }}>
                </div>

                <div className="absolute inset-0"></div>
            </div>

            <div className="container mx-auto px-6 h-full flex items-start pt-20 relative z-10">
                <div className="max-w-4xl text-white pl-0 md:pl-10">
                    <h2 className="text-4xl  md:text-7xl font-serif text-white mb-4 leading-tight">
                        Bottles for Change. Built for India.
                    </h2>
                    <p className="text-[16px] md:text-lg text-white mb-10 max-w-md font-medium tracking-wide leading-relaxed">
                        When you choose ASVA, you choose more than premium hydration, you support a future where safe water, healthy living and sustainability go together.

                    </p>
                    <button className="inline-block text-[16px] cursor-pointer font-bold text-white border-b border-white/50 pb-1 hover:border-white uppercase tracking-[0.2em] transition-colors">
                       <Link to="/shop"> Shop </Link>
                    </button>
                </div>
            </div>
        </section>
    )
};
