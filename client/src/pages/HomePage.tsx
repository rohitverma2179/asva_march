import React from 'react';
import { Header } from '../components/layout/Header';
import { Hero } from '../components/HomeSection/Hero';
import HomeSecondSection from '../components/HomeSection/homesecondsection';
import { BrandIntro } from '../components/HomeSection/BrandIntro';
import { BrandStory } from '../components/HomeSection/BrandStory';
import Alkalinewater from '../components/HomeSection/Alkalinewater';
import { LeadingChange } from '../components/HomeSection/LeadingChange';
import USPHeader from '../components/HomeSection/USPHeader';
import { FeaturedBanner } from '../components/HomeSection/FeaturedBanner';
import WhyAlkaline from '../components/HomeSection/WhyAlkaline';
import { Footer } from '../components/layout/Footer';

export const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
            <Header />
            <main>
                <Hero />
                <USPHeader />
                <HomeSecondSection />
                <div data-aos="fade-up" data-aos-duration="1000">
                    <BrandIntro />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <BrandStory />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <WhyAlkaline />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <Alkalinewater />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <LeadingChange />
                </div>
                {/* <div data-aos="fade-up" data-aos-duration="1000">
                    <BlogSection />
                </div> */}
                <div data-aos="fade-up" data-aos-duration="1000">
                    <FeaturedBanner />
                </div>
            </main>
            <Footer />
        </div>
    );
};