import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Replace these with local paths if preferred, using the generated IDs as placeholders for now
// const womanImg = "C:/Users/ROHIT/.gemini/antigravity/brain/bedbf2a5-dcae-4c76-841a-2f674772e225/woman_water_bottle_1776324528283.png";
// const  = "C:/Users/ROHIT/.gemini/antigravity/brain/bedbf2a5-dcae-4c76-841a-2f674772e225/bottle_on_grass_1776324561053.png";

import womanImg from "../../assets/partner/img_8.png";
import bottleImg from "../../assets/partner/img_9.png";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ayaan",
    role: "Client",
    text: "Keep your water pure and your system running flawlessly with our premium installation and AMC plans. Keep your water pure and your system running flawlessly with our premium installation and AMC plans.",
    rating: 5,
  },
  {
    id: 2,
    name: "Vihaan",
    role: "Client",
    text: "Keep your water pure and your system running flawlessly with our premium installation and AMC plans. Keep your water pure and your system running flawlessly with our premium installation and AMC plans.",
    rating: 5,
  },
  {
    id: 3,
    name: "Meher",
    role: "Client",
    text: "Keep your water pure and your system running flawlessly with our premium installation and AMC plans. Keep your water pure and your system running flawlessly with our premium installation and AMC plans.",
    rating: 5,
  },
  {
    id: 4,
    name: "Kiara",
    role: "Client",
    text: "Keep your water pure and your system running flawlessly with our premium installation and AMC plans. Keep your water pure and your system running flawlessly with our premium installation and AMC plans.",
    rating: 5,
  },
  {
    id: 5,
    name: "Kabir",
    role: "Client",
    text: "Keep your water pure and your system running flawlessly with our premium installation and AMC plans. Keep your water pure and your system running flawlessly with our premium installation and AMC plans.",
    rating: 5,
  },
  {
    id: 6,
    name: "Anaya",
    role: "Client",
    text: "Keep your water pure and your system running flawlessly with our premium installation and AMC plans. Keep your water pure and your system running flawlessly with our premium installation and AMC plans.",
    rating: 5,
  },
];

const ClientTestimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 px-8 lg:px-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left Column (Content & Images) */}
          <div className="flex-[1.5] space-y-5">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-8">
              <div className="space-y-6 flex-1">
                <span className="font-['Kantumruy'] text-[16px] text-gray-400 block uppercase tracking-widest opacity-80 leading-[1] max-w-[246px]">
                  What Our Client Say About ASVA
                </span>
                <h2 className="font-['Kalnia'] font-medium text-[32px] sm:text-[32px] lg:text-[40px] leading-[1] text-black max-w-[474px]">
                  Bottles for Change <br />
                  aims to create <br />
                  awareness that
                </h2>
              </div>
              {/* Top Small Image */}
              <div className="w-[194px] h-[245px] flex-shrink-0 overflow-hidden rounded-sm shadow-md">
                <img src={womanImg} alt="Health" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Bottom Large Image */}
            <div className="w-full aspect-[668/370] overflow-hidden rounded-sm shadow-lg">
              <img src={bottleImg} alt="Product Lifestyle" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column (Carousel) */}
          <div className="flex-1 space-y-0">
            {/* Carousel Buttons */}
            <div className="flex justify-end gap-3 mb-4">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Testimonial Cards List */}
            <div className="space-y-7 relative h-[600px] overflow-hidden">
              {/* Displaying 3 cards with staggered appearance */}
              {[0, 1, 2].map((offset) => {
                const index = (activeIndex + offset) % testimonials.length;
                const testimonial = testimonials[index];
                const isActive = offset === 0;

                return (
                  <motion.div
                    key={`${ testimonial.id }-${ offset }`}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`w-full max-w-[400px] h-[170px] p-2 rounded-[5px] border border-gray-100 shadow-sm transition-colors duration-500 overflow-hidden flex flex-col justify-between ${isActive ? "bg-[#E0F2F7] border-transparent" : "bg-white"
                      }`}
                  >
                    <div>
                      {/* Stars */}
                      <div className="flex gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <svg key={s} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <p className="font-['Kantumruy'] text-[13px] text-gray-700 leading-snug line-clamp-4 font-normal">
                        {testimonial.text}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gray-100 overflow-hidden flex-shrink-0">
                        <img src={`https://i.pravatar.cc/150?u=${testimonial.id}`} alt={testimonial.name} />
                      </div>
                      <div>
                        <p className="font-['Kalnia'] font-medium text-[15px] text-black">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
