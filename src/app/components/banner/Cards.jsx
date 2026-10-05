import Image from "next/image";

export default function Cards() {
  return (
    <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 pb-8 mt-auto">
      
      {/* Text Above Cards */}
      <div className="hidden lg:flex justify-between w-full mb-6 pointer-events-none">
        {/* Left Text */}
        <div className="w-[36%] flex flex-col items-start gsap-card-text">
          <div className="flex flex-col text-[13px] font-semibold text-[#333] tracking-[0.1em] leading-relaxed">
            <span>YOUR</span>
            <span>IDEA</span>
            <span>HERE</span>
            <div className="w-6 h-[1px] bg-[#333] mt-3"></div>
          </div>
        </div>
        {/* Right Text */}
        <div className="w-[36%] flex flex-col items-end gsap-card-text">
          <div className="flex flex-col text-[13px] font-semibold text-[#333] tracking-[0.1em] leading-relaxed items-end text-right">
            <span>A REAL</span>
            <span>BRAND</span>
            <span>TOMORROW</span>
            <div className="w-6 h-[1px] bg-[#333] mt-3"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between w-full gap-8 lg:gap-0">
        
        {/* Left Cards Group */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full lg:w-[36%]">
          {/* Card 1 */}
          <div className="gsap-card bg-[#F8F6F2] rounded-2xl flex flex-col shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 border border-white/40">
            <div className="aspect-[5/4] bg-gray-200 relative w-full">
              <Image src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80" alt="Product Development" fill className="object-cover" />
            </div>
            <div className="flex justify-between items-end p-4 lg:p-5 mt-auto bg-[#F8F6F2]">
              <div>
                <span className="text-[11px] font-extrabold text-gray-500 mb-1.5 block">01</span>
                <h3 className="text-[13px] font-black text-gray-900 leading-[1.1] tracking-wide">PRODUCT<br />DEVELOPMENT</h3>
              </div>
              <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-800 bg-transparent hover:bg-white transition-colors cursor-pointer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="gsap-card bg-[#F8F6F2] rounded-2xl flex flex-col shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 border border-white/40">
            <div className="aspect-[5/4] bg-gray-200 relative w-full">
              <Image src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80" alt="Brand Building" fill className="object-cover" />
            </div>
            <div className="flex justify-between items-end p-4 lg:p-5 mt-auto bg-[#F8F6F2]">
              <div>
                <span className="text-[11px] font-extrabold text-gray-500 mb-1.5 block">02</span>
                <h3 className="text-[13px] font-black text-gray-900 leading-[1.1] tracking-wide">BRAND<br />BUILDING</h3>
              </div>
              <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-800 bg-transparent hover:bg-white transition-colors cursor-pointer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right Cards Group */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full lg:w-[36%]">
          {/* Card 3 */}
          <div className="gsap-card bg-[#F8F6F2] rounded-2xl flex flex-col shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 border border-white/40">
            <div className="aspect-[5/4] bg-gray-200 relative w-full">
              <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" alt="Compliance & Manufacturing" fill className="object-cover" />
            </div>
            <div className="flex justify-between items-end p-4 lg:p-5 mt-auto bg-[#F8F6F2]">
              <div>
                <span className="text-[11px] font-extrabold text-gray-500 mb-1.5 block">03</span>
                <h3 className="text-[13px] font-black text-gray-900 leading-[1.1] tracking-wide">COMPLIANCE<br />& MANUFACTURING</h3>
              </div>
              <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-800 bg-transparent hover:bg-white transition-colors cursor-pointer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="gsap-card bg-[#F8F6F2] rounded-2xl flex flex-col shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 border border-white/40">
            <div className="aspect-[5/4] bg-gray-200 relative w-full">
              <Image src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80" alt="Launch & Grow" fill className="object-cover" />
            </div>
            <div className="flex justify-between items-end p-4 lg:p-5 mt-auto bg-[#F8F6F2]">
              <div>
                <span className="text-[11px] font-extrabold text-gray-500 mb-1.5 block">04</span>
                <h3 className="text-[13px] font-black text-gray-900 leading-[1.1] tracking-wide">LAUNCH<br />& GROW</h3>
              </div>
              <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-800 bg-transparent hover:bg-white transition-colors cursor-pointer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
