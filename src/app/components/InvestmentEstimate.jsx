import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function InvestmentEstimate() {
  const cards = [
    {
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
      title: "Category",
      desc: "Product type and formulation"
    },
    {
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
      title: "MOQ",
      desc: "Minimum order quantity"
    },
    {
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
      title: "Packaging",
      desc: "Bottle, label, box and more"
    },
    {
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5L21 3m-9.5 7.5L3 21m10.5-10.5l-3.5 3.5m4.5-4.5l3.5-3.5M3 13.5l1.5-1.5m6-6l-1.5 1.5" /></svg>,
      title: "Launch Plan",
      desc: "Marketplace, website and marketing"
    }
  ];

  return (
    <section className="w-full pt-8 pb-12 sm:pt-14 sm:pb-20 lg:py-24 font-sans bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 relative z-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-[54%] flex flex-col z-10">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-[1.5px] bg-[#FF5425]"></div>
            <span className="font-bold tracking-[0.2em] uppercase text-[#FF4D00] text-[11px] sm:text-[13px] font-[family-name:var(--font-poppins)]">
              Investment Guide
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[30px] xs:text-[36px] sm:text-[44px] lg:text-[54px] font-[800] text-[#061B35] leading-[1.08] tracking-tight mb-3 sm:mb-5">
            Let's Plan Your<br />
            <span className="text-[#FF5425]">Investment Clearly</span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-[13px] sm:text-[16px] font-medium leading-relaxed max-w-[480px] mb-6 sm:mb-8">
            Your category, MOQ, packaging and launch plan all affect the final investment. We help you understand where your money will go before you start.
          </p>

          {/* 4 Grid Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-4 sm:mb-6">
            {cards.map((card, idx) => (
              <div key={idx} className="bg-white/95 backdrop-blur-sm border border-orange-100/80 rounded-xl sm:rounded-[14px] p-3 sm:p-4 flex flex-col items-center justify-center text-center shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-orange-200 transition-all cursor-default group">
                <div className="w-[34px] h-[34px] sm:w-[42px] sm:h-[42px] rounded-full bg-[#FFF2E6] flex items-center justify-center text-[#FF5425] mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h4 className="text-[11px] sm:text-[13px] font-bold text-[#061B35] mb-0.5 leading-tight">{card.title}</h4>
                <p className="text-[9px] sm:text-[11px] text-gray-500 leading-snug">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Investment Range Pill */}
          <div className="bg-[#FFF8F3]/95 backdrop-blur-sm border border-orange-200/80 rounded-2xl sm:rounded-full px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-6 shadow-sm w-full">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-orange-100 flex items-center justify-center text-[#FF5425] shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-[12px] font-semibold uppercase tracking-wide text-[#FF4D00] font-[family-name:var(--font-poppins)]">
                  Estimated Investment Range
                </span>
                <span className="text-[16px] sm:text-[20px] font-extrabold text-[#061B35] leading-tight">
                  ₹2.5 lakh – ₹10 lakh
                </span>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-8 bg-orange-200/60"></div>
            
            <p className="text-[10px] sm:text-[12px] text-gray-500 font-medium text-left leading-snug">
              (Cost can vary depending on your choice of category)
            </p>
          </div>

          {/* CTA Button */}
          <Link 
            href="/contact" 
            className="mt-6 sm:mt-8 group flex items-center justify-between gap-4 sm:gap-6 bg-[#FF5425] text-white pl-5 sm:pl-7 pr-2 py-2 rounded-full font-bold text-xs sm:text-[14px] hover:bg-[#E84515] hover:-translate-y-0.5 transition-all shadow-lg shadow-orange-500/20 w-full sm:w-max"
          >
            <span>Get a Rough Estimate for Your Idea</span>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center text-[#FF5425] shrink-0 group-hover:scale-105 transition-transform">
              <svg className="w-4 h-4 translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

        </div>

        {/* Right Artwork (Laptop with Charts & Notepad) */}
        <div className="w-full lg:w-[44%] relative h-[260px] xs:h-[300px] sm:h-[380px] lg:h-[480px] flex items-center justify-center mt-4 sm:mt-6 lg:mt-0">
          <div className="relative w-full h-full drop-shadow-lg">
            <Image 
              src="/assets/investment-estimate-right.png"
              alt="Investment Estimate Calculator and Plan"
              fill
              priority
              className="object-contain object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
