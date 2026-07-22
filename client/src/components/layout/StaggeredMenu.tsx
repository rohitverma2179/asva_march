import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';

interface StaggeredMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' }, // Changed from /ProductPage to /shop based on LuShoppingCart link in Header
    { title: 'Alkaline Water', path: '/shop?category=Alkaline%20Water' },
    { title: 'Alkaline Machines', path: '/shop?category=Alkaline%20Machines' },
    { title: 'Asva Sip', path: '/shop?category=ASVA%20Sip' },
    { title: 'Services', path: '/services' },
    // { title: 'ProductPage', path: '/productpage' }, // Changed from /ProductPage to /shop based on LuShoppingCart link in Header
    { title: 'Partner', path: '/partner' }, // Changed from /ProductPage to /shop based on LuShoppingCart link in Header
    { title: 'Subscription', path: '/subscription' },
    { title: 'Blog', path: '/blog' },
];

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 overflow-hidden"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed top-0 left-0 h-full w-[290px] sm:w-[400px] bg-white z-50 shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Background elements for premium look */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-50 rounded-full opacity-50 blur-3xl pointer-events-none" />
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-50 rounded-full opacity-50 blur-3xl pointer-events-none" />

                        <div className=" p-5 md:p-8 flex justify-end relative z-10">
                            <button
                                onClick={onClose}
                                className="p-3 bg-gray-50 hover:bg-gray-100 rounded-full transition-all duration-300 transform hover:rotate-90"
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6 text-gray-800" />
                            </button>
                        </div>

                        <nav className="flex-1 min-h-0 px-10 sm:px-16 py-2 flex flex-col relative z-10">
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    className="flex-1 flex items-center"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: 0.1 * index + 0.2,
                                        duration: 0.5,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                >
                                    <Link
                                        to={item.path}
                                        onClick={onClose}
                                        className="group flex items-center gap-4"
                                    >
                                        <span className="text-sm font-bold text-[#00659e] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                                            0{index + 1}
                                        </span>
                                        <span className="relative inline-block pb-2 mb-2 text-base lg:text-2xl font-xs text-gray-900 group-hover:text-[#00659e] transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-[#00659e] after:transition-all after:duration-300 group-hover:after:w-full">
                                            {item.title}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * menuItems.length + 0.3 }}
                                className="mt-0 ml-7 flex gap-4 lg:gap-6"
                            >
                                <a
                                    href="https://www.instagram.com/asva_by_kevvali"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 lg:p-3 bg-gray-50 rounded-full hover:bg-[#00659e] hover:text-white transition-all duration-300 group shadow-sm hover:shadow-md"
                                >
                                    <AiFillInstagram className="h-5 w-5 lg:h-6 lg:w-6" />
                                </a>
                                <a
                                    href="https://www.facebook.com/profile.php?id=61584590330735"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 lg:p-3 bg-gray-50 rounded-full hover:bg-[#00659e] hover:text-white transition-all duration-300 group shadow-sm hover:shadow-md"
                                >
                                    <FaFacebook className="h-5 w-5 lg:h-6 lg:w-6" />
                                </a>
                                <a
                                    href="https://wa.me/9193099919"        
                                    target="_blank"   
                                    rel="noopener noreferrer"          
                                    aria-label="Chat with ASVA on WhatsApp"
                                    className="p-2 lg:p-3 bg-gray-50 rounded-full hover:bg-[#25D366] hover:text-white transition-all duration-300 group shadow-sm hover:shadow-md"
                                >
                                    <FaWhatsapp className="h-5 w-5 lg:h-6 lg:w-6" />
                                </a>
                            </motion.div>
                        </nav>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="p-12 sm:px-16 relative z-10"
                        >
                            <p className="text-gray-400 text-[10px] lg:text-xs font-medium tracking-widest uppercase mb-2">Contact Us</p>
                            <p className="text-sm lg:text-base text-gray-900 font-bold mb-3">hello@asva.com</p>
                            <p className="text-gray-400 text-[9px] lg:text-[10px] uppercase tracking-tighter italic">© 2024 ASVA WATER SYSTEM ADVISORS. ALL RIGHTS RESERVED.</p>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
