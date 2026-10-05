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
  <div className="flex gap-5 pr-5 items-center">
    {row.map((file, index) => (
      <div
        key={`${idPrefix}-${index}`}
        className="
          flex-shrink-0
          w-[160px] h-[88px] 
          rounded-full 
          flex items-center justify-center 
          transition-transform duration-300 hover:scale-105
          bg-white p-4
        "
      >
        <Image
          src={`/logos/${file}`}
          alt={file.split('.')[0]}
          width={130}
          height={70}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    ))}
  </div>
);

export default function ClientLogos() {
  return (
    <section className="bg-[#FEFCF7] pt-12 pb-16 overflow-hidden relative">
      <div className="flex flex-col gap-5 relative mt-4">
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
