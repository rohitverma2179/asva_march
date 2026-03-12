import React, { useEffect } from 'react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { BlogGrid } from '../../components/Blog/BlogGrid';

import { FeaturedBanner } from '../../components/HomeSection/FeaturedBanner';

export const BlogPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 9);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            <Header />

            <main className="pt-24 md:pt-32">
                {/* Page Title */}
                <div className="container mx-auto px-6 md:px-12 mb-12">
                    <h1 className="text-4xl md:text-6xl font-serif text-black font-medium leading-tight">
                        Blog
                    </h1>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000">
                <BlogGrid />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                <FeaturedBanner />
                </div>
            </main>

            <Footer />
        </div>
    );
};
