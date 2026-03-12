import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, ShieldCheck } from 'lucide-react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtp, setShowOtp] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    if (!isOpen) return null;

    const handleContinue = () => {
        if (!showOtp) {
            // In a real app, this would trigger OTP send
            setShowOtp(true);
        } else {
            // Verify OTP
            console.log('Verifying OTP:', otp);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
                        >
                            <X size={20} className="text-gray-500" />
                        </button>

                        <div className="p-8 md:p-10">
                            <div className="mb-8">
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                                    {isLogin ? 'Welcome Back' : 'Create Account'}
                                </h2>
                                <p className="text-gray-500">
                                    {isLogin
                                        ? 'Login to your account to continue'
                                        : 'Join us to get started with your purchase'}
                                </p>
                            </div>

                            <div className="space-y-4">
                                {/* Phone Number Input */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 ml-1">Phone Number</label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-400">
                                            <Phone size={18} />
                                            <span className="text-gray-900 font-medium">+91</span>
                                            <div className="w-px h-4 bg-gray-300 ml-1" />
                                        </div>
                                        <input
                                            type="tel"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                            placeholder="Enter 10 digit mobile number"
                                            className="w-full pl-24 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                                        />
                                    </div>
                                </div>

                                {/* OTP Input (Conditional) */}
                                <AnimatePresence>
                                    {showOtp && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            className="space-y-2 overflow-hidden"
                                        >
                                            <label className="text-sm font-medium text-gray-700 ml-1">OTP</label>
                                            <div className="relative">
                                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                                    <ShieldCheck size={18} />
                                                </div>
                                                <input
                                                    type="text"
                                                    value={otp}
                                                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                                    placeholder="Enter 6-digit OTP"
                                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                                                />
                                            </div>
                                            <div className="flex justify-end">
                                                <button className="text-sm text-gray-500 hover:text-black transition-colors font-medium">
                                                    Resend OTP
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Action Button */}
                                <button
                                    onClick={handleContinue}
                                    className="w-full py-4 bg-black text-white rounded-2xl font-bold text-lg hover:bg-gray-900 transition-all shadow-lg active:scale-[0.98]"
                                >
                                    {showOtp ? 'Verify & Continue' : 'Get OTP'}
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="relative my-8 text-center">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-100"></div>
                                </div>
                                <span className="relative px-4 bg-white text-sm text-gray-400">or continue with</span>
                            </div>

                            {/* Social Logins */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <button className="flex items-center justify-center gap-3 py-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all font-medium text-gray-700">
                                    <FaGoogle className="text-red-500" />
                                    Google
                                </button>
                                <button className="flex items-center justify-center gap-3 py-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all font-medium text-gray-700">
                                    <FaFacebook className="text-blue-600" />
                                    Facebook
                                </button>
                            </div>

                            {/* Toggle Login/Signup */}
                            <div className="text-center text-gray-500 font-medium">
                                {isLogin ? (
                                    <p>
                                        Don't have an account?{' '}
                                        <button
                                            onClick={() => {
                                                setIsLogin(false);
                                                setShowOtp(false);
                                            }}
                                            className="text-black font-bold hover:underline"
                                        >
                                            Sign Up
                                        </button>
                                    </p>
                                ) : (
                                    <p>
                                        Already have an account?{' '}
                                        <button
                                            onClick={() => {
                                                setIsLogin(true);
                                                setShowOtp(false);
                                            }}
                                            className="text-black font-bold hover:underline"
                                        >
                                            Log In
                                        </button>
                                    </p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
