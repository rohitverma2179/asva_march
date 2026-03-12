import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';

interface StaggeredMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Shop', path: '/shop' }, // Changed from /ProductPage to /shop based on LuShoppingCart link in Header
    { title: 'Blog', path: '/blog' },
    { title: 'Services', path: '/services' },
    { title: 'Subscription', path: '/subscription' },
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
                        className="fixed top-0 left-0 h-full w-[320px] sm:w-[450px] bg-white z-50 shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Background elements for premium look */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-50 rounded-full opacity-50 blur-3xl pointer-events-none" />
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-50 rounded-full opacity-50 blur-3xl pointer-events-none" />

                        <div className="p-8 flex justify-end relative z-10">
                            <button
                                onClick={onClose}
                                className="p-3 bg-gray-50 hover:bg-gray-100 rounded-full transition-all duration-300 transform hover:rotate-90"
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6 text-gray-800" />
                            </button>
                        </div>

                        <nav className="flex-1 px-12 sm:px-16 pt-12 flex flex-col gap-8 relative z-10">
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={item.title}
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
                                        <span className="text-4xl sm:text-5xl font-xs text-gray-900 group-hover:text-[#00659e] transition-colors duration-300">
                                            {item.title}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * menuItems.length + 0.3 }}
                                className="mt-12 ml-7 flex gap-6"
                            >
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-50 rounded-full hover:bg-[#00659e] hover:text-white transition-all duration-300 group shadow-sm hover:shadow-md"
                                >
                                    <AiFillInstagram size={24} />
                                </a>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-50 rounded-full hover:bg-[#00659e] hover:text-white transition-all duration-300 group shadow-sm hover:shadow-md"
                                >
                                    <FaFacebook size={24} />
                                </a>
                            </motion.div>
                        </nav>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="p-12 sm:px-16 relative z-10"
                        >
                            <div className="h-px w-full bg-gray-100 mb-8" />
                            <p className="text-gray-400 text-xs font-medium tracking-widest uppercase mb-2">Contact Us</p>
                            <p className="text-gray-900 font-bold mb-6">hello@asva.com</p>
                            <p className="text-gray-400 text-[10px] uppercase tracking-tighter italic">© 2024 ASVA WATER SYSTEM ADVISORS. ALL RIGHTS RESERVED.</p>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
