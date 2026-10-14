import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function InvestmentEstimate() {
  const cards = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Category",
      desc: "Product type and formulation"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "MOQ",
      desc: "Minimum order quantity"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Packaging",
      desc: "Bottle, label, box and more"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5L21 3m-9.5 7.5L3 21m10.5-10.5l-3.5 3.5m4.5-4.5l3.5-3.5M3 13.5l1.5-1.5m6-6l-1.5 1.5" />
        </svg>
      ),
      title: "Launch Plan",
      desc: "Marketplace, website and marketing"
    }
  ];

  return (
    <section className="w-full font-sans bg-[#FAF7F2] relative overflow-hidden">

      {/* DESKTOP VIEW: full background image with left text content */}
      <div className="hidden lg:block w-full relative lg:aspect-[1920/1080] min-h-[580px] xl:min-h-[640px] 2xl:min-h-[720px]">
        {/* Background Image: Desktop full scene */}
        <Image 
          src="/assets/investment-full-bg.png"
          alt="Investment Estimate Plan"
          fill
          priority
          className="object-cover object-right"
        />

        {/* Content container aligned on left marble desk area */}
        <div className="relative z-10 w-full h-full max-w-[1380px] mx-auto px-8 lg:px-14 2xl:px-20 flex items-center">
          <div className="max-w-[560px] xl:max-w-[620px] py-10 xl:py-14">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#FF4D00]"></div>
              <span className="font-bold tracking-[0.2em] uppercase text-[#64748B] text-[11px] xl:text-[12px] font-[family-name:var(--font-poppins)]">
                Investment Guide
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[36px] xl:text-[46px] 2xl:text-[54px] font-[800] text-[#061B35] leading-[1.08] tracking-tight mb-3 xl:mb-4 font-[family-name:var(--font-plus-jakarta)]">
              Let's Plan Your<br />
              <span className="text-[#FF5425]">Investment Clearly</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-[13px] xl:text-[15px] font-medium leading-relaxed max-w-[460px] mb-6">
              Your category, MOQ, packaging and launch plan all affect the final investment. We help you understand where your money will go before you start.
            </p>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-4 gap-3 mb-5">
              {cards.map((card, idx) => (
                <div key={idx} className="bg-white/95 backdrop-blur-sm border border-orange-100/90 rounded-2xl p-3 flex flex-col items-center justify-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-orange-200 transition-all cursor-default group">
                  <div className="w-9 h-9 rounded-full bg-[#FFF2E6] flex items-center justify-center text-[#FF5425] mb-2 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h4 className="text-[12px] font-bold text-[#061B35] mb-0.5 leading-tight">{card.title}</h4>
                  <p className="text-[10px] text-gray-500 leading-snug">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Estimated Investment Range Pill */}
            <div className="bg-[#FFF9F5]/95 backdrop-blur-sm border border-[#FFE8D6] rounded-full px-5 py-3 flex items-center justify-between gap-4 shadow-sm w-full mb-6">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-full bg-[#FFEADA] flex items-center justify-center text-[#FF5425] shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500 font-[family-name:var(--font-poppins)]">
                    Estimated Investment Range
                  </span>
                  <span className="text-[17px] xl:text-[19px] font-extrabold text-[#061B35] leading-tight">
                    ₹2.5 lakh – ₹15 lakh
                  </span>
                </div>
              </div>
              
              <div className="w-px h-8 bg-orange-200/60"></div>
              
              <p className="text-[11px] text-gray-500 font-medium leading-snug pr-2">
                (Confirm the range with the team before publishing.)
              </p>
            </div>

            {/* CTA Button */}
            <Link 
              href="/contact" 
              className="group inline-flex items-center justify-between gap-5 bg-[#FF5425] text-white pl-6 pr-2 py-2 rounded-full font-bold text-[14px] hover:bg-[#E84515] hover:-translate-y-0.5 transition-all shadow-lg shadow-orange-500/25 w-max"
            >
              <span>Get a Rough Estimate for Your Idea</span>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#FF5425] shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-4 h-4 translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

          </div>
        </div>
      </div>

      {/* MOBILE VIEW: stacked text content and full-width artwork below */}
      <div className="lg:hidden flex flex-col pt-8 pb-0">
        <div className="px-5 sm:px-8 flex flex-col items-start mb-6">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#FF4D00]"></div>
            <span className="font-bold tracking-[0.2em] uppercase text-[#64748B] text-[11px] sm:text-[12px] font-[family-name:var(--font-poppins)]">
              Investment Guide
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[32px] xs:text-[38px] sm:text-[44px] font-[800] text-[#061B35] leading-[1.08] tracking-tight mb-3 font-[family-name:var(--font-plus-jakarta)]">
            Let's Plan Your<br />
            <span className="text-[#FF5425]">Investment Clearly</span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-[14px] sm:text-[15px] font-medium leading-relaxed max-w-[460px] mb-5">
            Your category, MOQ, packaging and launch plan all affect the final investment. We help you understand where your money will go before you start.
          </p>

          {/* 4 Cards (2x2 grid on mobile) */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 w-full mb-4">
            {cards.map((card, idx) => (
              <div key={idx} className="bg-white border border-orange-100/90 rounded-2xl p-3 flex flex-col items-center justify-center text-center shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#FFF2E6] flex items-center justify-center text-[#FF5425] mb-1.5">
                  {card.icon}
                </div>
                <h4 className="text-[12px] font-bold text-[#061B35] mb-0.5 leading-tight">{card.title}</h4>
                <p className="text-[10px] text-gray-500 leading-snug">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Investment Range Card */}
          <div className="bg-[#FFF9F5] border border-[#FFE8D6] rounded-2xl p-3.5 flex flex-col gap-2 shadow-sm w-full mb-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FFEADA] flex items-center justify-center text-[#FF5425] shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[9.5px] font-semibold uppercase tracking-wide text-gray-500 font-[family-name:var(--font-poppins)]">
                  Estimated Investment Range
                </span>
                <span className="text-[17px] font-extrabold text-[#061B35] leading-tight">
                  ₹2.5 lakh – ₹15 lakh
                </span>
              </div>
            </div>
            <p className="text-[10.5px] text-gray-500 font-medium leading-snug pt-1 border-t border-orange-200/50">
              (Confirm the range with the team before publishing.)
            </p>
          </div>

          {/* CTA Button */}
          <Link 
            href="/contact" 
            className="group flex items-center justify-between gap-4 bg-[#FF5425] text-white pl-5 pr-2 py-2 rounded-full font-bold text-[13px] hover:bg-[#E84515] transition-all shadow-md w-full sm:w-max mb-6"
          >
            <span>Get a Rough Estimate for Your Idea</span>
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#FF5425] shrink-0">
              <svg className="w-3.5 h-3.5 translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Full-width Artwork below on mobile */}
        <div className="relative w-full aspect-square sm:aspect-[4/3] drop-shadow-md">
          <Image 
            src="/assets/investment-estimate-right.png"
            alt="Investment Estimate Calculator and Plan"
            fill
            priority
            className="object-contain object-center"
          />
        </div>
      </div>

    </section>
  );
}
