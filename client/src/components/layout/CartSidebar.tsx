import React, { useEffect, useRef, useMemo } from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * STEP 3: Create Cart UI
 * Build the CartSidebar component to display items, update quantities, 
 * and provide a seamless checkout entry point.
 * Highly optimized for performance:
 * - Memoized calculations to prevent unnecessary re-renders.
 * - GPU-accelerated transforms with will-change.
 * - Spring transitions tuned for responsiveness.
 */

export const CartSidebar: React.FC = () => {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        totalPrice,
        isCartOpen,
        setIsCartOpen
    } = useCart();

    const sidebarRef = useRef<HTMLDivElement>(null);

    // Block scroll when cart is open
    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = 'var(--scrollbar-width, 0px)'; // Prevent layout shift
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [isCartOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setIsCartOpen(false);
            }
        };

        if (isCartOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isCartOpen, setIsCartOpen]);

    const formattedTotalPrice = useMemo(() =>
        `₹${totalPrice.toLocaleString('en-IN')}`,
        [totalPrice]);

    const totalCount = useMemo(() =>
        cartItems.reduce((acc, item) => acc + item.quantity, 0),
        [cartItems]);

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop - Simplified for performance */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "linear" }}
                        className="fixed inset-0 bg-black/50 z-50 pointer-events-auto"
                    />

                    {/* Sidebar */}
                    <motion.div
                        ref={sidebarRef}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
                        style={{ translateZ: 0, willChange: 'transform' }}
                        className="fixed top-0 right-0 h-full w-full max-w-[450px] bg-white shadow-2xl z-50 flex flex-col pointer-events-auto"
                    >
                        {/* Header */}
                        <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between shrink-0">
                            <div>
                                <h2 className="text-2xl font-serif text-black">Shopping Cart</h2>
                                <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-bold">
                                    {totalCount} {totalCount === 1 ? 'Item' : 'Items'}
                                </p>
                            </div>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-3 hover:bg-gray-100 rounded-full transition-colors group"
                            >
                                <X className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto px-8 py-4 custom-scrollbar overscroll-contain">
                            <AnimatePresence mode="popLayout" initial={false}>
                                {cartItems.length > 0 ? (
                                    <div className="space-y-8 py-4">
                                        {cartItems.map((item) => (
                                            <motion.div
                                                layout
                                                key={item.id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.98 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                className="flex gap-6 group"
                                            >
                                                <div className="w-24 h-32 bg-gray-50 rounded-xl overflow-hidden shrink-0 p-2 flex items-center justify-center">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        loading="lazy"
                                                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                                <div className="flex-1 flex flex-col pt-1">
                                                    <div className="flex justify-between gap-4">
                                                        <h3 className="text-sm font-bold text-gray-900 leading-tight line-clamp-2">
                                                            {item.title}
                                                        </h3>
                                                        <button
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="text-gray-300 hover:text-red-500 transition-colors shrink-0"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                    <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">{item.type}</p>

                                                    <div className="mt-auto flex items-center justify-between">
                                                        <div className="flex items-center border border-gray-200 rounded-full px-3 py-1 gap-4">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="hover:text-black text-gray-400 p-1"
                                                            >
                                                                <Minus className="w-3 h-3" />
                                                            </button>
                                                            <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="hover:text-black text-gray-400 p-1"
                                                            >
                                                                <Plus className="w-3 h-3" />
                                                            </button>
                                                        </div>
                                                        <span className="text-sm font-bold text-[#00659e]">
                                                            ₹{(parseFloat((item.price.includes('|') ? item.price.split('|')[1] : item.price).replace(/[^\d]/g, '')) * item.quantity).toLocaleString('en-IN')}
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="h-full flex flex-col items-center justify-center text-center px-4"
                                    >
                                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                                            <ShoppingBag className="w-8 h-8 text-gray-200" />
                                        </div>
                                        <h3 className="text-xl font-serif text-black mb-2">Your cart is empty</h3>
                                        <p className="text-sm text-gray-500 mb-8 max-w-[250px]">
                                            Looks like you haven't added anything to your cart yet.
                                        </p>
                                        <button
                                            onClick={() => setIsCartOpen(false)}
                                            className="px-8 py-3 bg-black text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors active:scale-95"
                                        >
                                            Start Shopping
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div className="px-8 py-8 border-t border-gray-100 bg-gray-50/50 shrink-0">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-sm text-gray-500 uppercase tracking-widest font-bold">Total Amount</span>
                                    <span className="text-2xl font-serif text-black">{formattedTotalPrice}</span>
                                </div>
                                <div className="space-y-3">
                                    <button className="w-full bg-black text-white py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-gray-900 transition-all active:scale-[0.98]">
                                        Proceed to Checkout
                                    </button>
                                    <Link
                                        to="/shop"
                                        onClick={() => setIsCartOpen(false)}
                                        className="block w-full text-center py-2 text-xs font-bold text-gray-400 hover:text-black uppercase tracking-widest transition-colors"
                                    >
                                        Continue Shopping
                                    </Link>
                                </div>
                                <p className="text-[10px] text-gray-400 text-center mt-6">
                                    Shipping and taxes calculated at checkout
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
