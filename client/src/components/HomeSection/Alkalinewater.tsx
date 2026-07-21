import React from 'react';
// import bottleImg from "../../assets/bottle_png_.png";
import first from "../../assets/Home/200 .png"
import second from "../../assets/Home/500 .png"
import third from "../../assets/Home/1 .png"
import { motion } from 'framer-motion';

const Alkalinewater: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center gap-12 md:gap-16 lg:gap-24 py-16 lg:py-24 overflow-hidden">
      
      {/* Title */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-h1">
          Mineral Rich Alkaline Water
        </h2>
      </div>

      {/* Bottles Area */}
      <div className="w-full max-w-[1440px] relative flex items-center justify-center">
          
        {/* Horizontal Dashed Guideline - Only visible on desktop to maintain clean mobile layout */}
        <div className="absolute top-[60%] left-0 w-full h-0 border-t-[1.5px] border-dashed border-blue-400 opacity-40 z-0 hidden md:block"></div>

        {/* Bottles Grid */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-16 md:gap-12 lg:gap-24 items-center md:items-end z-10 px-6 sm:px-12 w-full py-4 md:py-0">
          
          {/* 200ml Bottle */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center text-center group w-full"
          >
            <img 
              src={first} 
              className="h-[220px] sm:h-[300px] lg:h-[400px] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.05]" 
              alt="200mlBottle" 
            />
            <div className="mt-6 md:mt-8 space-y-1">
              <h4 className="text-h2">200ml</h4>
              <p className="text-h3 uppercase tracking-[0.2em] px-4">
                ON THE GO
              </p>
              <p className="px-4">Perfect for travel, meetings & short refreshment.</p>
            </div>
          </motion.div>

          {/* 500ml Bottle */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center text-center group w-full"
          >
            <img 
              src={second} 
              className="h-[260px] sm:h-[360px] lg:h-[480px] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.05]" 
              alt="500mlBottle" 
            />
            <div className="mt-6 md:mt-8 space-y-1">
               <h4 className="text-h2">500ml</h4>
              <p className="text-h3 uppercase tracking-[0.2em] px-4">
               DAILY HYDRATION
              </p>
              <p className="px-4">Ideal for daily use at work, gym or outdoor activities.</p>
            </div>
          </motion.div>

          {/* 1L Bottle */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center text-center group w-full"
          >
            <img 
              src={third} 
              className="h-[320px] sm:h-[450px] lg:h-[600px] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.05]" 
              alt="1LBottle" 
            />
            <div className="mt-6 md:mt-8 space-y-1">
              <h4 className="text-h2">1L</h4>
              <p className="text-h3 uppercase tracking-[0.2em] px-4">
                FOR HOME & OFFICE
              </p>
              <p className="px-4">Perfect for home, office and longer hydration needs.</p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Feature Icons Bottom Bar */}
      <div className="w-full bg-[#f0f9ff]/80 py-8 lg:py-12 border-t border-blue-50">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-start text-center">
          
          <div className="flex flex-col items-center space-y-3 lg:space-y-4">
            <div className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] group transition-transform hover:-translate-y-1 duration-300">
               <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
            </div>
            <p className="text-label leading-tight">
              From the islands <br className="hidden md:block"/> of Fiji
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 lg:space-y-4">
            <div className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] group transition-transform hover:-translate-y-1 duration-300 transition-duration-300">
               <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
               </svg>
            </div>
            <p className="text-label leading-tight">
              100% natural <br className="hidden md:block"/> electrolytes
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 lg:space-y-4">
            <div className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] group transition-transform hover:-translate-y-1 duration-300">
               <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 21s-2-3-4-5m-2.34-2.34A8.99 8.99 0 1112 3a8.99 8.99 0 0110 8c0 1.66-.73 3.13-1.91 4.14" />
               </svg>
            </div>
            <p className="text-label leading-tight">
              Soft, smooth <br className="hidden md:block"/> taste
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 lg:space-y-4">
            <div className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] group transition-transform hover:-translate-y-1 duration-300">
               <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
               </svg>
            </div>
            <p className="text-label leading-tight">
              perfectly <br className="hidden md:block"/> balanced 7.7 pH
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Alkalinewater;