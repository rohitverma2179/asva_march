import React from 'react';
import { Header } from '../components/layout/Header';
import { Hero } from '../components/HomeSection/Hero';
import { BrandIntro } from '../components/HomeSection/BrandIntro';
import { BrandStory } from '../components/HomeSection/BrandStory';
import { LeadingChange } from '../components/HomeSection/LeadingChange';
import { BlogSection } from '../components/HomeSection/BlogSection';
import { FeaturedBanner } from '../components/HomeSection/FeaturedBanner';
import { Footer } from '../components/layout/Footer';

export const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
            <Header />
            <main>
                <Hero />
                <div data-aos="fade-up" data-aos-duration="1000">
                    <BrandIntro />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <BrandStory />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <LeadingChange />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <BlogSection />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <FeaturedBanner />
                </div>
            </main>
            <Footer />
        </div>
    );
};