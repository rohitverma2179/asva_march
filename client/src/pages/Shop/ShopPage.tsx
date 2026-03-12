import React, { useState } from 'react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { ShopBanner } from '../../components/Shop/ShopBanner';
import { ProductFilters } from '../../components/Shop/ProductFilters';
import { ProductCard } from '../../components/Shop/ProductCard';
import { InfoSection } from '../../components/Shop/InfoSection';
import { FAQSection } from '../../components/Shop/FAQSection';
import { FeaturedBanner } from '../../components/HomeSection/FeaturedBanner';
import { PRODUCTS } from '../../data/shopData';
import { faqData } from '../../data/faqData';

export const ShopPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All Products');

    const filteredProducts = PRODUCTS.filter((product) => {
        if (activeFilter === 'All Products') return true;
        if (activeFilter === 'Bottles') return product.type === 'Bottle';
        if (activeFilter === 'Jars & Cans') return product.type === 'Jar';
        if (activeFilter === 'Machines') return product.type === 'Machine';
        if (activeFilter === 'Filters') return product.type === 'Filter';
        if (activeFilter === 'Accessories') return product.type === 'Accessory';
        if (activeFilter === 'Corporate') return product.type === 'Corporate';
        return product.type === activeFilter;
    });

    return (
        <div className="min-h-screen bg-white font-sans">
            <Header />
            <main>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <ShopBanner />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <ProductFilters
                        activeFilter={activeFilter}
                        onFilterChange={setActiveFilter}
                    />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">

                    <div className="container mx-auto px-2 md:px-12 pb-20">
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-8 md:gap-x-8 md:gap-y-16">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">

                    <InfoSection />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                <FAQSection faqData={faqData} />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                <FeaturedBanner />
                </div>
            </main>
            <Footer />
        </div>
    );
};