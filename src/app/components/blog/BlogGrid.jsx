import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogGrid({ blogs }) {
  return (
    <section id="all-guides" className="w-full bg-[#FAF5EE] py-16 lg:py-20 font-sans scroll-mt-24">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        
        {/* Top Eyebrow row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1.5px] bg-[#FF5425]"></div>
            <span className="text-[10px] font-bold tracking-[0.15em] text-[#061B35] uppercase">
              BANEGA BRAND | RESOURCES
            </span>
          </div>
          <span className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase">
            THE FOUNDER'S READING LIST
          </span>
        </div>

        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-8">
          <h2 className="text-[48px] sm:text-[56px] lg:text-[72px] font-[800] leading-[1.05] tracking-tight text-[#061B35]">
            Founder <span className="text-[#FF5425]">Guides</span>
          </h2>
          <p className="text-gray-500 text-[15px] sm:text-[16px] font-medium leading-relaxed max-w-[400px] lg:mb-3">
            From your first product idea to your first launch. Start with the questions that matter.
          </p>
        </div>

        {/* Divider & Filter Row */}
        <div className="w-full h-[1px] bg-gray-200 mb-6"></div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-16">
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-bold text-[#061B35]">All guides</span>
            <span className="text-[#FF5425] text-[12px] font-bold px-2 py-0.5 rounded-full bg-[#FFF2E6]">
              {blogs.length < 10 ? `0${blogs.length}` : blogs.length}
            </span>
          </div>
          <span className="text-[13px] text-gray-400 font-medium">
            Start with an idea. Explore at your own pace.
          </span>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-2xl overflow-hidden flex flex-col group border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
              
              {/* Image Container */}
              <div className="relative w-full h-[220px] sm:h-[250px] overflow-hidden bg-gray-100">
                <div className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[11px] font-bold text-[#061B35] shadow-sm">
                  {blog.number}
                </div>
                <Image 
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <span className="text-[10px] font-bold tracking-[0.1em] text-gray-400 uppercase mb-3 block">
                  {blog.category}
                </span>
                
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[#061B35] leading-snug mb-4 group-hover:text-[#FF5425] transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-[14px] text-gray-500 font-medium leading-relaxed mb-8 flex-1">
                  {blog.description}
                </p>

                <div className="w-full h-[1px] bg-gray-100 mb-4"></div>
                
                <Link href={`/blog/${blog.slug}`} className="flex items-center justify-between group/link">
                  <span className="text-[13px] font-bold text-[#FF5425]">Read guide</span>
                  <svg className="w-4 h-4 text-[#FF5425] transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
