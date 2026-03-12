import React from 'react';
// import Button from '../../assets/bottle_png_.png';
import plain from '../../assets/subscribe_img/subss.png'
// import subScribeImg from '../../assets/shop_img/C/AL_20L/'

export const AboutAboutPlan: React.FC = () => {

    return (
        <section className="bg-linear-to-b from-[#cbf1fa] via-[#e0f7fc] to-white py-20 px-6 md:mx-8 rounded-3xl">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 max-w-5xl">
                {/* Left: Info Card */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-serif text-black mb-12">About Subscription Plan</h2>
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                        <ul className="space-y-4 text-xs md:text-sm text-gray-800 font-medium leading-relaxed">
                            <li className="flex gap-2">
                                <span>•</span>
                                <span>Pick bottles or jars and choose pack size</span>
                            </li>
                            <li className="flex gap-2">
                                <span>•</span>
                                <span>Select subscription duration (1, 3, 6 or 12 months)</span>
                            </li>
                            <li className="flex gap-2">
                                <span>•</span>
                                <span>Choose delivery frequency and start date (Mon to Sat)</span>
                            </li>
                            <li className="flex gap-2">
                                <span>•</span>
                                <span>Confirm address and preferred time slot</span>
                            </li>
                            <li className="flex gap-2">
                                <span>•</span>
                                <span>Receive deliveries as scheduled, with pause/reschedule support</span>
                            </li>
                        </ul>
                        {/* <div className="mt-8 text-center md:text-left">
                            <span className="text-[10px] font-bold text-black uppercase tracking-widest cursor-pointer border-b border-black pb-0.5">Subscription</span>
                        </div> */}
                    </div>
                </div>

                {/* Right: Bottle Image */}
                <div className="w-full md:w-1/2 flex justify-center relative">
                    <div className="relative h-96 md:h-[650px] w-auto ">
                        <img
                            src={plain}
                            alt="Subscription Bottle"
                            className="h-full w-auto object-cover"
                        />
                        {/* Badges */}
                        {/* <div className="absolute top-1/2 -translate-y-1/2 -right-8 flex flex-col gap-4">
                            <div className="w-8 h-24 bg-[#00659e] rounded-lg flex items-center justify-center text-white shadow-lg">
                                <span className="-rotate-90 text-xs font-bold whitespace-nowrap tracking-widest">20 L</span>
                            </div>
                            <div className="w-8 h-24 bg-[#00659e] rounded-lg flex items-center justify-center text-white shadow-lg">
                                <span className="-rotate-90 text-[10px] font-bold leading-tight text-center">
                                    <span className="block">Pure</span>
                                    <span className="block mt-1">Water</span>
                                </span>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </section>
    );
};



// import React from 'react';
// import { motion } from 'framer-motion';
// import { CheckCircle2, Package, Calendar, Clock, RotateCcw, ArrowRight } from 'lucide-react';
// // import BottleImage from '../../assets/bottle_png_.png';

// const planSteps = [
//     {
//         icon: <Package className="w-5 h-5" />,
//         title: "Pack Selection",
//         description: "Choose your preferred bottles, jars, and pack sizes that fit your lifestyle."
//     },
//     {
//         icon: <Calendar className="w-5 h-5" />,
//         title: "Duration",
//         description: "Select 1, 3, 6, or 12-month plans with increasing benefits."
//     },
//     {
//         icon: <Clock className="w-5 h-5" />,
//         title: "Schedule",
//         description: "Set your start date and delivery frequency (Mon-Sat) for perfect timing."
//     },
//     {
//         icon: <CheckCircle2 className="w-5 h-5" />,
//         title: "Confirmation",
//         description: "Finalize your delivery address and preferred time slot for reception."
//     },
//     {
//         icon: <RotateCcw className="w-5 h-5" />,
//         title: "Flexibility",
//         description: "Manage your subscription with easy pause and reschedule options anytime."
//     }
// ];

// export const AboutAboutPlan: React.FC = () => {
//     return (
//         <section className="relative overflow-hidden bg-white py-24 px-6">
//             {/* Background Decorative Elements */}
//             <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
//             <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-cyan-50/50 rounded-full blur-[100px] pointer-events-none" />

//             <div className="container mx-auto max-w-7xl relative">
//                 <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

//                     {/* Left: Image with Premium accents */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -50 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.8, ease: "easeOut" }}
//                         className="w-full lg:w-5/12 relative"
//                     >
//                         <div className="relative z-10 group">
//                             <motion.img
//                                 animate={{ y: [0, -15, 0] }}
//                                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//                                 src={plain}
//                                 alt="Signature ASVA Bottle"
//                                 className="w-full max-w-[420px] mx-auto h-auto object-contain drop-shadow-[0_25px_25px_rgba(0,101,158,0.15)]"
//                             />

//                             {/* Accent Ring */}
//                             <div className="absolute -inset-4 border border-blue-100 rounded-[4rem] -z-10 group-hover:scale-105 transition-transform duration-700 opacity-60" />
//                         </div>

//                         {/* Floating Stats/Badges */}
//                         <motion.div
//                             initial={{ opacity: 0, scale: 0.8 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             transition={{ delay: 0.5 }}
//                             className="absolute -top-4 -right-4 bg-white shadow-2xl shadow-blue-100 p-5 rounded-2xl flex items-center gap-4 border border-blue-50"
//                         >
//                             <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shrink-0">
//                                 <CheckCircle2 className="w-6 h-6" />
//                             </div>
//                             <div>
//                                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Purity Guaranteed</p>
//                                 <p className="text-sm font-bold text-gray-900">100% Alkaline</p>
//                             </div>
//                         </motion.div>
//                     </motion.div>

//                     {/* Right: Steps and Text */}
//                     <div className="w-full lg:w-7/12">
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             className="mb-12"
//                         >
//                             <span className="text-[#00659e] font-bold text-xs uppercase tracking-[0.3em] block mb-4">The Subscription Journey</span>
//                             <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6 leading-tight">
//                                 How your subscription <br /> works for you
//                             </h2>
//                             <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
//                                 We've designed a seamless process to ensure you never run out of premium alkaline water. Experience hydration without the hassle.
//                             </p>
//                         </motion.div>

//                         <div className="space-y-6">
//                             {planSteps.map((step, index) => (
//                                 <motion.div
//                                     key={index}
//                                     initial={{ opacity: 0, x: 20 }}
//                                     whileInView={{ opacity: 1, x: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ delay: index * 0.1, duration: 0.5 }}
//                                     className="group flex gap-6 p-4 rounded-3xl hover:bg-blue-50/50 transition-all duration-300 border border-transparent hover:border-blue-100"
//                                 >
//                                     <div className="w-12 h-12 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center text-[#00659e] group-hover:bg-[#00659e] group-hover:text-white transition-all duration-300 shrink-0">
//                                         {step.icon}
//                                     </div>
//                                     <div className="flex-1">
//                                         <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#00659e] transition-colors">
//                                             {step.title}
//                                         </h3>
//                                         <p className="text-sm text-gray-500 leading-relaxed font-medium">
//                                             {step.description}
//                                         </p>
//                                     </div>
//                                     <div className="hidden sm:flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
//                                         <ArrowRight className="w-5 h-5 text-[#00659e]" />
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };
