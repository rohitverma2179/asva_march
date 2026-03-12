import React from 'react';
import type { BlogPost } from '../../data/blogData';

interface BlogHeroProps {
    post: BlogPost;
}

export const BlogHero: React.FC<BlogHeroProps> = ({ post }) => {
    return (
        <section className="w-full max-w-4xl mx-auto px-4 md:px-0 mb-8 md:mb-12">
            {/* 1. Blog Title Section */}
            <h1
                className="text-2xl tablet:text-3xl desktop:text-4xl lg:text-5xl font-serif text-center text-gray-900 mb-8 md:mb-12 leading-tight"
                dangerouslySetInnerHTML={{ __html: post.title }}
            />

            {/* 2. Blog Hero Image */}
            <div className="w-full aspect-video md:aspect-video lg:aspect-21/9 overflow-hidden md:rounded-2xl">
                <img
                    src={post.image}
                    alt={post.title.replace(/<[^>]*>?/gm, '')}
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
};
