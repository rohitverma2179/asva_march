// import React from 'react';
// const BLOG_POSTS = [
//     { id: 1, title: 'The New Bottled Water Standard 2023', date: 'November 20, 2023', color: 'bg-linear-to-br from-blue-300 to-blue-500' },
//     { id: 2, title: 'Hydration and Health: The Facts', date: 'October 15, 2023', color: 'bg-linear-to-br from-teal-300 to-teal-500' },
//     { id: 3, title: 'Sustainable Packaging Innovations', date: 'September 10, 2023', color: 'bg-linear-to-br from-cyan-300 to-cyan-500' },
//     { id: 4, title: 'The Best Bottled Water Awards', date: 'August 05, 2023', color: 'bg-linear-to-br from-sky-300 to-sky-500' },
//     { id: 5, title: 'Clean Water Projects in Africa', date: 'July 22, 2023', color: 'bg-linear-to-br from-indigo-300 to-indigo-500' },
//     { id: 6, title: 'Understanding pH Levels', date: 'June 18, 2023', color: 'bg-linear-to-br from-emerald-300 to-emerald-500' },
// ];

// export const BlogSection: React.FC = () => {
//     return (
//         <section className="py-20 px-6 container mx-auto">
//             <div className="text-center mb-16">
//                 <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">Water Blog</h2>
//                 <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-4">
//                     EXPLORE THE WORLD OF WATER WITH US FROM YOUR PLACE IN THE ARCTIC
//                 </p>
//                 <a href="#" className="text-xs font-bold text-black border-b border-gray-300 pb-1 hover:border-black uppercase tracking-widest transition-colors">
//                     Learn More
//                 </a>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
//                 {BLOG_POSTS.map((post) => (
//                     <div key={post.id} className="group cursor-pointer">
//                         <div className={`h-48 w-full ${post.color} mb-5 overflow-hidden rounded relative shadow-sm`}>
//                             <div className="absolute inset-0 flex items-center justify-center opacity-30 text-white">
//                                 {/* Abstract geometric shape */}
//                                 <div className="w-20 h-20 border-4 border-white rounded-full"></div>
//                             </div>
//                         </div>

//                         <div className="flex flex-col items-start">
//                             <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2 font-semibold">
//                                 By Admin • {post.date}
//                             </p>
//                             <h3 className="text-xl font-serif font-medium text-black mb-4 leading-snug group-hover:text-blue-800 transition-colors">
//                                 {post.title}
//                             </h3>
//                             <span className="text-[10px] font-bold text-black border-b border-gray-300 pb-1 group-hover:border-black uppercase tracking-widest transition-colors">
//                                 Learn More
//                             </span>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };


import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../../data/blogData';

export const BlogSection: React.FC = () => {
  const navigate = useNavigate();
  // Display only the first 3 posts on the home section
  const displayedPosts = blogPosts.slice(0, 6);

  return (
    <section className="py-12 px-6 lg:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Title */}
        <div className="text-center mb-6">
          <h2 className="font-['Kalnia'] font-medium text-5xl lg:text-6xl mb-2">
            Water Blog
          </h2>
          <p className="text-[16px] text-gray-600 max-w-120 mx-auto">
            Alkaline science, safe drinking practices, subscription guidance and machine care, simple, evidence-based education.
          </p>
        </div>


        <div className="flex justify-center  mb-20 ">
          <button
            onClick={() => navigate('/blog')}
            className="relative inline-flex items-center text-[#1a3b5c] px-6 py-2  group cursor-pointer"
          >

            {/* Left Line */}
            <span className="relative mr-3 h-px w-8 bg-[#1a3b5c] scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100" />

            <span className="relative z-10">Explore More</span>

            {/* Right Line */}
            <span className="relative ml-3 h-px w-8 bg-[#1a3b5c] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

          </button>
        </div>


        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {displayedPosts.map((post) => (
            <article
              key={post.id}
              className="group lg:mb-24 cursor-pointer  bg-white rounded-lg overflow-hidden transition-shadow duration-300"
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              {/* Image */}
              {/* <div className="aspect-[16/9] overflow-hidden"></div> */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title.replace(/<[^>]*>?/gm, '')}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-3 space-y-2">
                <div className="font-['Inter'] text-xs text-gray-500">
                   {post.author}
                </div>
                <h3
                  className="font-['Kaisei_Decol'] font-xs text-xl"
                  dangerouslySetInnerHTML={{ __html: post.title }}
                />
                <button className="font-['Kaisei_Decol'] font-medium text-lg hover:underline cursor-pointer mt-4">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}