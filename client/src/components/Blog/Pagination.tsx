import React from 'react';

interface PaginationProps {
    postsPerPage: number;
    totalPosts: number;
    paginate: (pageNumber: number) => void;
    currentPage: number;
}

export const Pagination: React.FC<PaginationProps> = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex justify-center gap-2 py-12 md:pb-8 md:pt-20 flex-wrap">
            {pageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => {
                        paginate(number);
                        window.scrollTo({ top: 0, behavior: 'auto' });
                    }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${currentPage === number
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                >
                    {number}
                </button>
            ))}
        </div>
    );
};
