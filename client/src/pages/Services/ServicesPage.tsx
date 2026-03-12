import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Wrench, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import imgHero from '../../assets/services/hero.png';
import imgInstall from '../../assets/services/install_ionizer.png';
import imgAmcHome from '../../assets/services/amc_home.png';
import imgAmcPro from '../../assets/services/amc_pro.png';
import imgAmcPrime from '../../assets/services/amc_prime.png';


const services = [
    {
        id: 'ASVA-SV-INST-ION-01-IN',
        title: 'ASVA Ionizer Installation & Demo Service',
        description: 'Expert installation of your ASVA Ionizer by certified technicians. Includes full connection, testing, and a comprehensive usage demonstration.',
        mrp: 799,
        price: 799,
        image: imgInstall,
        features: ['Certified Technician', 'Comprehensive Demo', 'Leak-proof Guarantee']
    },
    {
        id: 'ASVA-SV-AMC-HOME-12M-IN',
        title: 'ASVA AMC Plan – HOME Series (12 Months)',
        description: 'Complete peace of mind for your home water system. Includes regular visits and priority support.',
        mrp: 3499,
        price: 2999,
        image: imgAmcHome,
        features: ['2 Preventive Maintenance Visits', 'Unlimited Service Calls', 'Filter Replacement Discount']
    },
    {
        id: 'ASVA-SV-AMC-PRO-12M-IN',
        title: 'ASVA AMC Plan – PRO Series (12 Months)',
        description: 'Enhanced protection for high-usage environments. Ensures your water quality never drops.',
        mrp: 4999,
        price: 4499,
        image: imgAmcPro,
        features: ['3 Preventive Maintenance Visits', 'Priority 24h Response', 'Includes Consumables (Pre-filter)']
    },
    {
        id: 'ASVA-SV-AMC-PRIME-12M-IN',
        title: 'ASVA AMC Plan – PRIME Series (12 Months)',
        description: 'Our most comprehensive care plan. Zero worries, total coverage, and VIP service.',
        mrp: 6999,
        price: 5999,
        image: imgAmcPrime,
        features: ['4 Preventive Maintenance Visits', 'Same Day Response', 'All Consumables Included', 'Dedicated Manager']
    }
];

const steps = [
    {
        icon: <Clock className="w-8 h-8 text-[#00659e]" />,
        title: 'Book a Service',
        description: 'Select your required service or plan and book online in seconds.'
    },
    {
        icon: <Wrench className="w-8 h-8 text-[#00659e]" />,
        title: 'Expert Visit',
        description: 'Our certified technician arrives at your doorstep equipped with genuine parts.'
    },
    {
        icon: <Shield className="w-8 h-8 text-[#00659e]" />,
        title: 'Long-term Care',
        description: 'Enjoy pure water with our ongoing maintenance and support guarantee.'
    }
];

export const ServicesPage: React.FC = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            <Header />

            {/* Hero Section */}
            <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
                <img
                    src={imgHero}
                    alt="ASVA Service Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
                    >
                        Expert Care & Maintenance
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-gray-200 max-w-2xl font-light"
                    >
                        Keep your water pure and your system running flawlessly with our premium installation and AMC plans.
                    </motion.p>
                </div>
            </div>
            

            {/* Steps Section */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border border-gray-100"
                            >
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services List Section */}
            <div className="py-20 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Plans & Installation</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">Choose the protection plan that suits your needs. From one-time installation to comprehensive annual care.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col"
                        >
                            <div className="h-48 overflow-hidden relative bg-gray-100 p-6 flex justify-center items-center">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <span className="text-[10px] font-bold tracking-widest text-[#00659e] uppercase bg-blue-50 px-2 py-1 rounded-full">
                                        {service.id.includes('AMC') ? 'AMC Plan' : 'Service'}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#00659e] transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-gray-500 text-sm mb-4 line-clamp-3 grow">
                                    {service.description}
                                </p>

                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                                            <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <div className="flex items-end justify-between mb-4">
                                        <div>
                                            <p className="text-xs text-gray-400 line-through">MRP ₹{service.mrp.toLocaleString()}</p>
                                            <p className="text-2xl font-bold text-gray-900">₹{service.price.toLocaleString()}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                                                SAVE ₹{(service.mrp - service.price).toLocaleString()}
                                            </span>
                                        </div>
                                    </div>

                                    <button className="w-full py-3 bg-gray-900 hover:bg-[#00659e] text-white rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg">
                                        Book Now <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};
