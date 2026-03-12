import React from 'react';
import type { BlogPost, BlogContentBlock } from '../../data/blogData';

interface BlogContentProps {
    post: BlogPost;
}

export const BlogContent: React.FC<BlogContentProps> = ({ post }) => {
    if (!post.content || post.content.length === 0) return null;

    return (
        <div className="w-full max-w-4xl mx-auto px-4 md:px-0">
            {/* Blog Meta Info */}
            <div className="mb-6 flex items-center gap-2">
            </div>

            {/* Blog Content Rendered from Blocks */}
            <article className="prose prose-lg max-w-none text-gray-800">

                {post.content.map((block: BlogContentBlock, index: number) => {
                    switch (block.type) {
                        case 'paragraph':
                            return (
                                <p
                                    key={index}
                                    className="mb-6 leading-relaxed text-lg text-gray-700"
                                    dangerouslySetInnerHTML={{ __html: block.text || '' }}
                                />
                            );
                        case 'h2':
                            return (
                                <h2
                                    key={index}
                                    className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mt-10 mb-6"
                                    dangerouslySetInnerHTML={{ __html: block.text || '' }}
                                />
                            );
                        case 'h3':
                            return (
                                <h3
                                    key={index}
                                    className="text-xl md:text-2xl font-serif font-bold text-gray-900 mt-8 mb-4"
                                    dangerouslySetInnerHTML={{ __html: block.text || '' }}
                                />
                            );
                        case 'list':
                            if (block.structuredItems) {
                                return (
                                    <ul key={index} className="space-y-6 list-none pl-0 mb-8">
                                        {block.structuredItems.map((item, idx) => (
                                            <li key={idx} className="flex flex-col sm:flex-row sm:items-start gap-2">
                                                <div className="flex-1">
                                                    {item.title && <span className="font-bold text-gray-900 block sm:inline mr-2">{item.title}:</span>}
                                                    <span
                                                        className="text-gray-700 leading-relaxed"
                                                        dangerouslySetInnerHTML={{ __html: item.desc }}
                                                    />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                );
                            } else if (block.items) {
                                return (
                                    <ul key={index} className="list-disc list-outside ml-6 space-y-2 mb-8 text-gray-700">
                                        {block.items.map((item, idx) => (
                                            <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                                        ))}
                                    </ul>
                                );
                            }
                            return null;
                        case 'image':
                            return block.src ? (
                                <div key={index} className="my-8">
                                    <img src={block.src} alt={block.alt || ''} className="w-full rounded-lg shadow-md" />
                                    {block.alt && <p className="text-sm text-gray-500 mt-2 text-center italic">{block.alt}</p>}
                                </div>
                            ) : null;
                        default:
                            return null;
                    }
                })}

            </article>
        </div>
    );
};
