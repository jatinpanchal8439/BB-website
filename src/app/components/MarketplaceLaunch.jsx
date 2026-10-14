import React from 'react';
import Image from 'next/image';

export default function MarketplaceLaunch() {
  return (
    <section className="w-full font-sans bg-[#FAF8F5] relative overflow-hidden">

      {/* Desktop Layout — full background image with left text overlay */}
      <div className="hidden lg:block w-full relative lg:aspect-[1671/841] min-h-[480px] xl:min-h-[540px] 2xl:min-h-[620px]">
        {/* Background Image — full section banner */}
        <Image
          src="/assets/marketplace-full-bg-clean.png"
          alt="Sell on Amazon, Flipkart and Nykaa"
          fill
          priority
          className="object-cover object-right"
        />

        {/* Content container aligned left */}
        <div className="relative z-10 w-full h-full max-w-[1360px] mx-auto px-8 sm:px-12 lg:px-16 2xl:px-20 flex items-center">
          <div className="max-w-[480px] xl:max-w-[520px] py-12">
            {/* Eyebrow — orange */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#FF5000]"></div>
              <span className="font-bold tracking-[0.2em] uppercase text-[#FF5000] text-[11px] xl:text-[12px] font-[family-name:var(--font-poppins)]">
                Marketplace Launch
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[38px] xl:text-[46px] 2xl:text-[54px] font-[800] text-[#0B1B36] leading-[1.08] tracking-tight mb-4">
              Sell on Amazon,<br />
              <span className="text-[#FF5000]">Flipkart &amp; Nykaa</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-[14px] xl:text-[15px] font-medium leading-relaxed max-w-[400px]">
              Not every brand needs every channel. See how Banega Brand helps you decide where to launch first &ndash; Amazon, Flipkart, Nykaa or your own website.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Layout — stacked text and full-width edge-to-edge image */}
      <div className="lg:hidden flex flex-col pt-8 pb-0">
        {/* Text Content */}
        <div className="px-6 flex flex-col items-start mb-6">
          {/* Eyebrow — orange */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#FF5000]"></div>
            <span className="font-bold tracking-[0.2em] uppercase text-[#FF5000] text-[11px] sm:text-[13px] font-[family-name:var(--font-poppins)]">
              Marketplace Launch
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[32px] xs:text-[38px] sm:text-[46px] font-[800] text-[#0B1B36] leading-[1.08] tracking-tight mb-4">
            Sell on Amazon,<br />
            <span className="text-[#FF5000]">Flipkart &amp; Nykaa</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-[14px] sm:text-[16px] font-medium leading-relaxed max-w-[460px]">
            Not every brand needs every channel. See how Banega Brand helps you decide where to launch first &ndash; Amazon, Flipkart, Nykaa or your own website.
          </p>
        </div>

        {/* Full-width image — edge-to-edge with exact aspect ratio to prevent ANY cropping */}
        <div className="relative w-full aspect-[971/941]">
          <Image
            src="/assets/marketplace-visual.png"
            alt="Sell on Amazon, Flipkart and Nykaa"
            fill
            priority
            className="object-contain object-center"
          />
        </div>
      </div>

    </section>
  );
}
