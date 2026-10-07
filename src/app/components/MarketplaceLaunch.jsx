import React from 'react';

export default function MarketplaceLaunch() {
  return (
    <section 
      className="w-full pt-10 pb-16 lg:pt-16 lg:pb-24 font-sans bg-cover bg-right lg:bg-top bg-no-repeat relative overflow-hidden" 
      style={{ backgroundImage: "url('/assets/marketplace-full-bg-clean.png')" }}
    >
      {/* Background mask to ensure text on left is always sharp and readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDFB] via-[#FFFDFB]/90 to-transparent w-full lg:w-[62%] pointer-events-none"></div>

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between relative z-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-[48%] flex flex-col">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#FF5000]"></div>
            <span className="font-bold tracking-[0.2em] uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">
              Marketplace Launch
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[44px] sm:text-[54px] lg:text-[62px] font-[800] text-[#0B1B36] leading-[1.08] tracking-tight mb-6">
            Sell on Amazon,<br />
            <span className="text-[#FF5000]">Flipkart &amp; Nykaa</span>
          </h1>

          {/* Description */}
          <p className="text-[#5F6D7E] text-[15px] sm:text-[17px] font-medium leading-relaxed max-w-[460px]">
            Not every brand needs every channel. See how Banega Brand helps you decide where to launch first &ndash; Amazon, Flipkart, Nykaa or your own website.
          </p>

        </div>

        {/* Right side spacer for background image artwork (phone mockup, icons, etc.) */}
        <div className="hidden lg:block w-[50%] h-[360px] lg:h-[520px]"></div>

      </div>
    </section>
  );
}
