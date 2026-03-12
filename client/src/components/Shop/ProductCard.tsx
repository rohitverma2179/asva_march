import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../data/shopData';
import { useCart } from '../../context/CartContext';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    /**
     * STEP 7: Quick Add to Cart
     * Implement a "Quick Add" button on the shop gallery cards to allow 
     * shoppers to add items to their cart without leaving the list view.
     */
    const { addToCart } = useCart();

    return (
        <div className="flex flex-col group">
            {/* Image Container */}
            <div className="relative aspect-square bg-white rounded-lg mb-2 md:mb-6 flex items-center justify-center p-2 md:p-8">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badges */}
                <div className="absolute top-3 right-3 md:top-5 md:right-5 flex flex-col gap-2 z-10">
                    {product.badges.map((badge, index) => (
                        <div key={index} className="w-9 h-14 md:w-14 md:h-24 bg-sky-200/60 backdrop-blur-md rounded flex items-center justify-center text-[11px] md:text-[18px] font-bold text-black border border-sky-100 shadow-sm">
                            <div className="flex flex-col items-center justify-center h-full">
                                {badge.toLowerCase().includes('ml') ? (
                                    <div className="flex flex-col items-center">
                                        <span className="leading-none tracking-tighter">{badge.toLowerCase().replace('ml', '').trim()}</span>
                                        <span className="text-[8px] md:text-[10px] uppercase font-extrabold mt-1 tracking-widest opacity-80">ml</span>
                                    </div>
                                ) : (
                                    <span className="whitespace-nowrap leading-none px-1 text-center">{badge}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick Add Button */}
                <button
                    onClick={() => addToCart(product, 1)}
                    className="absolute bottom-4 right-4 bg-black text-white p-2 md:p-3 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 shadow-xl"
                    aria-label="Add to cart"
                >
                    <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                </button>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-1 md:gap-2 ml-1 md:ml-7 items-start">
                <span className="text-[8px] md:text-[10px] text-gray-400 font-medium tracking-wide">
                    {product.author}
                </span>
                <h3 className="text-sm md:text-lg font-serif text-black leading-tight group-hover:text-blue-900 transition-colors line-clamp-2">
                    {product.title}
                </h3>

                {product.price.includes(' | ') ? (
                    <div className="flex items-center gap-1 md:gap-2 text-sm md:text-[16px] text-gray-500 font-medium">
                        <s className="opacity-60 text-[10px] md:text-[13px]">{product.price.split(' | ')[0]}</s>
                        {product.price.split(' | ')[1]}
                    </div>
                ) : (
                    <span className="text-[10px] md:text-[12px] text-gray-500 font-medium">{product.price}</span>
                )}
                <Link
                    to={`/product/${product.id}`}
                    className="mt-1 md:mt-2 text-xs md:text-[16px] font-bold text-black border-b border-white pb-0.5 hover:border-black uppercase tracking-widest transition-colors"
                >
                    Shop
                </Link>
            </div>
        </div>
    );
};
