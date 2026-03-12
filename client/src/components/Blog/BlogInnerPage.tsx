import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { BlogHero } from './BlogHero';
import { BlogContent } from './BlogContent';
import { blogPosts, type BlogPost } from '../../data/blogData';

export const BlogInnerPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<BlogPost | null>(null);

    useEffect(() => {
        const foundPost = blogPosts.find((p) => String(p.id) === id);

        if (foundPost) {
            setPost(foundPost);
            // Set dynamic title
            if (foundPost.metaTitle) {
                document.title = foundPost.metaTitle;
            } else {
                document.title = `${foundPost.title} | ASVA Blog`;
            }

            // Set meta description if it exists
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription && foundPost.metaDesc) {
                metaDescription.setAttribute('content', foundPost.metaDesc);
            }
        } else {
            setPost(blogPosts[0]);
        }
    }, [id]);

    if (!post) {
        return <div>Loading...</div>; // Or return null
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-24 md:pt-32 pb-20">
                <BlogHero post={post} />
                <BlogContent post={post} />
            </main>
            <Footer />
        </div>
    );
};
