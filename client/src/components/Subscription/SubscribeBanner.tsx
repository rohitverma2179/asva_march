import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../../assets/subscribe_img/subscribe_model.jpg';

export const SubscribeBanner: React.FC = () => {
    return (
        <section className="bg-linear-to-br from-white via-[#f0f9ff] to-[#cbf1fa] pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Image Column */}
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <div className="relative group">
                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 bg-[#00659e]/5 rounded-[2.5rem] rotate-2 transition-transform group-hover:rotate-1"></div>

                            <div className="relative aspect-4/5 md:aspect-square lg:aspect-4/3 w-full overflow-hidden rounded-4xl shadow-2xl">
                                <img
                                    src={BannerImage}
                                    alt="ASVA Subscription Experience"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Soft Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>
                            </div>

                            {/* Floating Badge */}
                            {/* <div className="absolute -bottom-6 -right-6 md:right-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                                    <span className="text-blue-600 font-bold text-lg">₹</span>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-none">Best Price</p>
                                    <p className="text-sm font-bold text-gray-900">Subscription Savings</p>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full md:w-1/2 text-center md:text-left order-1 md:order-2">
                        <div className="inline-block px-4 py-1.5 bg-blue-50 rounded-full mb-6">
                            <span className="text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-widest">
                                Premium Hydration Experience
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-black mb-6 leading-[1.1]">
                            {/* Subscribe <br className="hidden lg:block" /> & Save */}
                            Subscription  Now
                        </h1>
                        

                        <p className="text-base md:text-lg text-gray-600 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
                            Get ASVA alkaline water delivered on schedule. Choose 1, 3, 6 or 12 months.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
                            {/* <Link
                                to="/subscription"
                                className="bg-[#00659e] text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#005280] transition-all shadow-lg shadow-blue-200"
                            >
                                Choose a Plan
                            </Link> */}
                            <Link
                                to="/shop"
                                className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] border-b border-gray-200 pb-1 hover:text-black hover:border-black transition-all"
                            >
                                View Products
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
