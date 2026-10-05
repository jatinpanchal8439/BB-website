import React from "react";

export default function IdeaBanner() {
  return (
    <section className="relative w-full h-[140px] md:h-[180px] bg-[#eedac5] overflow-hidden flex items-center justify-between px-6 md:px-16 lg:px-32">

      {/* Background Texture/Shadow Overlay (Optional subtle diagonal shadow) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        background: 'linear-gradient(105deg, transparent 40%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 60%, transparent 60%)'
      }}></div>

      {/* Left Text */}
      <div className="relative z-10 flex flex-col gap-3">
        <p className="text-[#3a3532] font-semibold text-sm md:text-base lg:text-lg tracking-[0.2em] uppercase leading-tight">
          Your<br />
          Idea<br />
          Here
        </p>
        <div className="w-10 h-[1px] bg-[#3a3532]"></div>
      </div>

      {/* Glowing Light Beam */}
      <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[80px] md:w-[120px] flex">
        {/* Left deep orange */}
        <div className="w-1/3 h-full bg-[#cc3e00]"></div>
        {/* Middle glowing white */}
        <div className="w-1/3 h-full bg-white shadow-[0_0_40px_15px_rgba(255,255,255,1)] z-10"></div>
        {/* Right bright orange */}
        <div className="w-1/3 h-full bg-[#ff7300]"></div>

        {/* Glow effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff7300] to-transparent opacity-50 blur-xl"></div>
      </div>

      {/* Right Text */}
      <div className="relative z-10 flex flex-col gap-3 items-end text-right">
        <p className="text-[#3a3532] font-semibold text-sm md:text-base lg:text-lg tracking-[0.2em] uppercase leading-tight">
          A Real<br />
          Brand<br />
          Tomorrow
        </p>
        <div className="w-10 h-[1px] bg-[#3a3532]"></div>
      </div>

    </section>
  );
}
