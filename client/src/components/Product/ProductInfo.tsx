import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import type { Product } from '../../data/shopData';
import { ShoppingBag, CreditCard, Plus, Minus, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductInfoProps {
    product: Product;
    onBuyNow?: () => void;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product, onBuyNow }) => {
    const { title, price, tagline, badges } = product;
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    // Comprehensive price parsing
    const parsePrice = (p: string) => {
        const parts = p.split('|');
        const mrpPart = parts[0]?.includes('MRP') ? parts[0].trim() : '';
        const offerPart = parts[1]?.includes('Offer') ? parts[1].trim() : parts[0].trim();

        const mrpVal = parseFloat(mrpPart.replace(/[^\d]/g, '')) || 0;
        const offerVal = parseFloat(offerPart.replace(/[^\d]/g, '')) || 0;
        const savings = mrpVal > offerVal ? mrpVal - offerVal : 0;
        const savingsPercentage = mrpVal > 0 ? Math.round((savings / mrpVal) * 100) : 0;

        return {
            mrpLabel: mrpPart,
            offerLabel: offerPart,
            offerVal,
            savings,
            savingsPercentage
        };
    };

    const priceData = parsePrice(price);
    const totalOfferPrice = priceData.offerVal * quantity;
    const formattedPrice = `₹${totalOfferPrice.toLocaleString('en-IN')}`;

    const handleBuyNow = () => {
        if (onBuyNow) {
            onBuyNow();
        }
    };

    return (
        <div className="flex flex-col pt-0 lg:pt-2 md:pl-8 lg:pl-16">
            {/* Badges & Trust Signals */}
            <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-[#00659e]/10 text-[#00659e] text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1.5">
                    <Star size={12} fill="currentColor" />
                    ASVA Official Store
                </span>
                {badges && badges.map((badge, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
                        {badge}
                    </span>
                ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-serif text-black mb-4 leading-tight">
                {title}
            </h1>

            <div className="flex items-center gap-2 mb-6">
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-sm text-gray-400 font-medium">(4.9/5 • 120+ reviews)</span>
            </div>

            <p
                className="text-[17px] text-gray-600 leading-relaxed mb-10 max-w-xl font-light"
                dangerouslySetInnerHTML={{ __html: tagline || '' }}
            />

            {/* Price Section */}
            <div className="mb-8">
                <div className="flex items-baseline gap-4 mb-1">
                    <span className="text-4xl font-bold text-black tracking-tight">{formattedPrice}</span>
                    {priceData.mrpLabel && (
                        <span className="text-xl text-gray-400 line-through font-medium">
                            ₹{(priceData.offerVal * quantity + priceData.savings * quantity).toLocaleString('en-IN')}
                        </span>
                    )}
                </div>
                {priceData.savings > 0 && (
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-lg mt-2">
                        <span>Save ₹{(priceData.savings * quantity).toLocaleString('en-IN')} ({priceData.savingsPercentage}% OFF)</span>
                    </div>
                )}
            </div>

            {/* Purchase Controls */}
            <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-6">
                    {/* Quantity Selector */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Quantity</label>
                        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-2xl p-1.5 gap-4">
                            <button
                                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white hover:shadow-sm transition-all disabled:opacity-30"
                                disabled={quantity <= 1}
                            >
                                <Minus size={18} />
                            </button>
                            <span className="text-lg font-bold w-6 text-center">{quantity}</span>
                            <button
                                onClick={() => setQuantity(q => q + 1)}
                                className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white hover:shadow-sm transition-all"
                            >
                                <Plus size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => addToCart(product, quantity)}
                        className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border-2 border-black font-bold text-lg hover:bg-black hover:text-white transition-all cursor-pointer"
                    >
                        <ShoppingBag size={22} />
                        Add to Cart
                    </motion.button>

                    <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleBuyNow}
                        className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-black text-white font-bold text-lg hover:bg-gray-900 shadow-xl shadow-black/5 transition-all cursor-pointer"
                    >
                        <CreditCard size={22} />
                        Buy Now
                    </motion.button>
                </div>

                {/* Trust Badges Bar */}
                {/* <div className="pt-8 border-t border-gray-100 grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center text-center gap-2">
                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-500">
                            <Truck size={20} />
                        </div>
                        <span className="text-[10px] font-bold text-gray-900 uppercase tracking-tight">Free Delivery</span>
                    </div>
                    <div className="flex flex-col items-center text-center gap-2">
                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-500">
                            <ShieldCheck size={20} />
                        </div>
                        <span className="text-[10px] font-bold text-gray-900 uppercase tracking-tight">Secure Payment</span>
                    </div>
                    <div className="flex flex-col items-center text-center gap-2">
                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-500">
                            <Star size={20} />
                        </div>
                        <span className="text-[10px] font-bold text-gray-900 uppercase tracking-tight">Top Rated</span>
                    </div>
                </div> */}
            </div>
        </div>
    );
};
