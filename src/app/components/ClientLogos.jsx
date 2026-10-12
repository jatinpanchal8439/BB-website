import React from "react";
import Image from "next/image";
import ScrollVelocity from "./ScrollVelocity";

const row1 = [
  "ROUGX LOGO 1.png",
  "Contempory logo clean.png",
  "ZYNX PERFUME clean.png",
  "Biography logo.png",
  "Blush en Bloom Logo.png",
  "APETOME FINAL LOGO.png",
  "BELLMONTAE LOGO clean.png",
];

const row2 = [
  "GenZ Obsession logo.png",
  "Tuesday london logo clean.png",
  "DREFOR LOGO.png",
  "ESSAENCE logo 2.png",
  "MAIN GREVETY LOGO.png",
];

const renderRow = (row, idPrefix) => (
  <div className="flex gap-3 sm:gap-5 md:gap-6 pr-3 sm:pr-5 md:pr-6 items-center py-2 sm:py-3 md:py-4">
    {row.map((file, index) => (
      <div
        key={`${idPrefix}-${index}`}
        className="
          flex-shrink-0
          w-[125px] h-[52px] sm:w-[160px] sm:h-[66px] md:w-[200px] md:h-[84px] 
          rounded-full 
          flex items-center justify-center 
          transition-transform duration-300 hover:scale-105
          bg-white p-2.5 sm:p-3.5 md:p-4 shadow-sm border border-gray-100/80
        "
      >
        <Image
          src={`/logos/${file}`}
          alt={file.split('.')[0]}
          width={130}
          height={50}
          className={`max-h-[32px] sm:max-h-[42px] md:max-h-[52px] max-w-full object-contain ${['108_nobg.png', 'COSMICO_nobg.png'].includes(file) ? 'grayscale' : ''}`}
        />
      </div>
    ))}
  </div>
);

export default function ClientLogos() {
  return (
    <section
      id="brands"
      className="bg-[#FEFCF7] py-10 sm:py-16 md:py-24 overflow-hidden relative border-t border-b border-gray-100 scroll-mt-24"
    >
      
      {/* Title Section */}
      <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12 md:mb-16">
        <div className="flex items-center gap-3 mb-3 sm:mb-4">
          <span className="w-8 sm:w-10 h-[1.5px] bg-[#FF4D00]"></span>
          <span className="font-bold text-xs sm:text-sm tracking-[0.2em] uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">
            Trusted Partners
          </span>
          <span className="w-8 sm:w-10 h-[1.5px] bg-[#FF4D00]"></span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-[44px] font-black text-[#0B1B36] leading-tight tracking-tight">
          Trusted Brands Showcase
        </h2>
      </div>

      <div className="flex flex-col gap-3 sm:gap-5 relative">
        {/* Left Fading Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FEFCF7] to-transparent z-10 pointer-events-none"></div>

        {/* Right Fading Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FEFCF7] to-transparent z-10 pointer-events-none"></div>

        <ScrollVelocity
          texts={[renderRow(row1, 'r1'), renderRow(row2, 'r2')]}
          velocity={55}
          className="flex"
          numCopies={4}
        />
      </div>
    </section>
  );
}
