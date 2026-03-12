import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { ProductGallery } from '../../components/Product/ProductGallery';
import { ProductInfo } from '../../components/Product/ProductInfo';
import { ProductDescription } from '../../components/Product/ProductDescription';
import { PRODUCTS } from '../../data/shopData';
import { AuthModal } from '../../components/Auth/AuthModal';

export const ProductPage: React.FC = () => {
    /**
     * STEP 6: Product Page Update
     * Ensure the full product object is passed to ProductInfo to satisfy 
     * the new requirements for the addToCart functionality.
     */
    const { id } = useParams<{ id: string }>();
    // Default to first product if not found or no ID
    const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="min-h-screen bg-white font-sans">
            <Header />
            <main className="container mx-auto px-6 py-24 md:py-32">
                <div className="flex flex-col lg:flex-row">
                    {/* Left Column: Gallery */}
                    <div className="w-full lg:w-1/2 mb-10 lg:mb-0 relative z-30">
                        <div className="lg:sticky lg:top-32">

                            <ProductGallery
                                image={product.image}
                                images={product.images}
                                enableZoom={product.enableZoom}
                            />

                        </div>
                    </div>
                    {/* Right Column: Info & Description */}
                    <div className="w-full lg:w-1/2 relative z-10">
                        <ProductInfo product={product} onBuyNow={() => setIsAuthModalOpen(true)} />
                        <ProductDescription description={product.description} subDescription={product.subDescription} keyFeatures={product.keyFeatures} />
                    </div>

                </div>
            </main>
            <Footer />
            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
            />
        </div>
    );
};