import React from "react";
import Image from "next/image";
import ScrollVelocity from "./ScrollVelocity";

const row1 = [
  "ROUGX LOGO 1.png",
  "Contempory logo.png",
  "ZYNX PERFUME clean.png",
  "Biography logo.png",
  "Blush en Bloom Logo.png",
  "APETOME FINAL LOGO.png",
  "BELLMONTAE LOGO clean.png",
];

const row2 = [
  "108.png",
  "GenZ Obsession logo.png",
  "Tuesday london logo clean.png",
  "DREFOR LOGO.png",
  "ESSAENCE logo 2.png",
  "MAIN GREVETY LOGO.png",
  "COSMICO logo 1.png",
];

const renderRow = (row, idPrefix) => (
  <div className="flex gap-6 pr-6 items-center py-4">
    {row.map((file, index) => (
      <div
        key={`${idPrefix}-${index}`}
        className="
          flex-shrink-0
          w-[200px] h-[84px] 
          rounded-full 
          flex items-center justify-center 
          transition-transform duration-300 hover:scale-105
          bg-white p-4
        "
      >
        <Image
          src={`/logos/${file}`}
          alt={file.split('.')[0]}
          width={140}
          height={55}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    ))}
  </div>
);

export default function ClientLogos() {
  return (
    <section
      id="brands"
      className="bg-[#FEFCF7] py-16 md:py-24 overflow-hidden relative border-t border-b border-gray-100 scroll-mt-24"
    >
      
      {/* Title Section */}
      <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 sm:w-10 h-[1.5px] bg-[#FF4D00]"></span>
          <span className="font-bold sm: tracking-[0.2em] uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">
            Trusted Partners
          </span>
          <span className="w-8 sm:w-10 h-[1.5px] bg-[#FF4D00]"></span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black text-[#0B1B36] leading-tight tracking-tight">
          Trusted Brands Showcase
        </h2>
      </div>

      <div className="flex flex-col gap-5 relative">
        {/* Left Fading Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FEFCF7] to-transparent z-10 pointer-events-none"></div>

        {/* Right Fading Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FEFCF7] to-transparent z-10 pointer-events-none"></div>

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
