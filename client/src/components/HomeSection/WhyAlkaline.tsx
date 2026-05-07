import React from 'react';
import { IoWaterOutline } from "react-icons/io5";
import { LuDroplets } from "react-icons/lu";
import { GiStomach } from "react-icons/gi";
import { RiLeafLine } from "react-icons/ri";
import { MdDirectionsRun } from "react-icons/md";
import { motion } from "framer-motion";

const features = [
  {
    icon: IoWaterOutline,
    title: "SUPPORTS pH BALANCE",
    description: "Helps maintain the body's natural balance."
  },
  {
    icon: LuDroplets,
    title: "BETTER HYDRATION",
    description: "Smaller water clusters for faster absorption."
  },
  {
    icon: GiStomach,
    title: "HELPS REDUCE ACIDITY",
    description: "Helps neutralize excess acidity in the body."
  },
  {
    icon: RiLeafLine,
    title: "SMOOTH TASTE",
    description: "Clean, fresh and smooth taste."
  },
  {
    icon: MdDirectionsRun,
    title: "IDEAL FOR ACTIVE LIFESTYLE",
    description: "Perfect for gym, sports, travel & daily use."
  }
];

const WhyAlkaline: React.FC = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-white to-blue-50/30 overflow-hidden">
      {/* Decorative Water Elements */}
      <div className="absolute -left-20 top-0 w-80 h-full opacity-[0.08] pointer-events-none select-none">
         <img 
            src="https://img.freepik.com/free-photo/water-splash-white-background_1187-2144.jpg" 
            alt="" 
            className="w-full h-full object-contain"
         />
      </div>
      <div className="absolute -right-20 top-0 w-80 h-full opacity-[0.08] pointer-events-none select-none">
         <img 
            src="https://img.freepik.com/free-photo/water-splash-white-background_1187-2144.jpg" 
            alt="" 
            className="w-full h-full object-contain scale-x-[-1]"
         />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-blue-950 tracking-widest uppercase inline-block relative">
            Why Choose Alkaline Water?
            {/* <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"></span> */}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl shadow-blue-900/5 overflow-hidden border border-blue-100">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center p-8 text-center group relative transition-all duration-500 hover:bg-white
                ${index !== features.length - 1 ? 'lg:border-r border-blue-50' : ''} 
                ${index >= 2 ? 'sm:border-t lg:border-t-0 border-blue-50' : ''}
                ${index === 1 ? 'max-sm:border-t border-blue-50' : ''}`}
            >
              <div className="mb-6 relative">
                <div className="w-20 h-20 flex items-center justify-center rounded-full border border-blue-100 bg-blue-50/50 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 shadow-inner">
                  <div className="group-hover:text-white transition-colors duration-500">
                    <feature.icon className="text-4xl text-blue-700 group-hover:text-white transition-all duration-500" />
                  </div>
                </div>
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <h3 className="text-sm font-black text-blue-950 leading-tight mb-4 tracking-wider uppercase min-h-[40px] flex items-center justify-center group-hover:text-blue-700 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-[13px] text-gray-500 leading-relaxed font-medium group-hover:text-gray-700 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAlkaline;
