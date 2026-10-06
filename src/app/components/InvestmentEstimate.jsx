import React from 'react';
import Image from 'next/image';

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
    <section className="w-full py-16 lg:py-28 font-sans bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/assets/investment-full-bg.png')" }}>
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-10 relative z-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-[55%] flex flex-col">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1.5px] bg-[#FF5425]"></div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#5A6B80] uppercase">
              Investment Guide
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[40px] sm:text-[48px] lg:text-[54px] font-[800] text-[#061B35] leading-[1.08] tracking-tight mb-6">
            Let's Plan Your<br className="hidden sm:block" />
            <span className="text-[#FF5425]">Investment Clearly</span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-[15px] sm:text-[16px] font-medium leading-relaxed max-w-[480px] mb-10">
            Your category, MOQ, packaging and launch plan all affect the final investment. We help you understand where your money will go before you start.
          </p>

          {/* 4 Grid Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {cards.map((card, idx) => (
              <div key={idx} className="bg-white/90 backdrop-blur-sm border border-orange-100 rounded-[14px] p-4 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-orange-200 transition-all cursor-default group">
                <div className="w-[42px] h-[42px] rounded-full bg-[#FFF2E6] flex items-center justify-center text-[#FF5425] mb-3 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h4 className="text-[13px] font-bold text-[#061B35] mb-1 leading-tight">{card.title}</h4>
                <p className="text-[11px] text-gray-500 leading-snug">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Investment Range Pill */}
          <div className="bg-[#FFF8F3]/95 backdrop-blur-sm border border-orange-100 rounded-full px-6 py-4 flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-6 shadow-sm">
            <div className="flex items-center gap-4 min-w-max">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-[#FF5425]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Estimated Investment Range</span>
                <span className="text-[20px] font-extrabold text-[#061B35] leading-tight">₹2.5 lakh - ₹15 lakh</span>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-10 bg-orange-200/60"></div>
            
            <p className="text-[12px] text-gray-500 font-medium text-center sm:text-left leading-snug">
              (Confirm the range with the team before publishing.)
            </p>
          </div>

          {/* CTA Button */}
          <button className="mt-10 group flex items-center justify-between gap-6 bg-[#FF5425] text-white pl-8 pr-2 py-2 rounded-full font-bold text-[15px] hover:bg-[#E84515] hover:-translate-y-1 transition-all shadow-xl shadow-orange-500/20 w-max max-w-full">
            <span>Get a Rough Estimate for Your Idea</span>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#FF5425] shrink-0 group-hover:scale-105 transition-transform">
              <svg className="w-4 h-4 translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </div>
          </button>

        </div>

        {/* Right side is intentionally empty so the background image shows through */}
        <div className="hidden lg:block w-[40%]"></div>

      </div>
    </section>
  );
}
