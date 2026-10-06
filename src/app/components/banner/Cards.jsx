import Image from "next/image";

export default function Cards() {
  return (
    <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 pb-8 pt-8 sm:pt-12">
      
      {/* Text Above Cards */}
      <div className="hidden lg:flex justify-between w-full mb-3 md:mb-4 pointer-events-none">
        {/* Left Text */}
        <div className="w-[32%] xl:w-[29%] flex flex-col items-start gsap-card-text">
          <div className="flex flex-col text-[11px] font-bold text-[#333] tracking-[0.12em] leading-relaxed">
            <span>YOUR</span>
            <span>IDEA</span>
            <span>HERE</span>
            <div className="w-5 h-[1.5px] bg-[#333] mt-2"></div>
          </div>
        </div>
        {/* Right Text */}
        <div className="w-[32%] xl:w-[29%] flex flex-col items-end gsap-card-text">
          <div className="flex flex-col text-[11px] font-bold text-[#333] tracking-[0.12em] leading-relaxed items-end text-right">
            <span>A REAL</span>
            <span>BRAND</span>
            <span>TOMORROW</span>
            <div className="w-5 h-[1.5px] bg-[#333] mt-2"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between w-full gap-6 lg:gap-0 items-end">
        
        {/* Left Cards Group */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-4 w-full lg:w-[32%] xl:w-[29%]">
          {/* Card 1 */}
          <div className="gsap-card bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl flex flex-col shadow-lg shadow-black/5 overflow-hidden transition-shadow duration-300 hover:shadow-xl border border-white/80">
            <div className="aspect-[4/3] bg-gray-200 relative w-full overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80" 
                alt="Product Development" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="flex justify-between items-end p-2.5 sm:p-3 md:p-3.5 mt-auto bg-[#F8F6F2]/90">
              <div>
                <span className="text-[10px] font-extrabold text-gray-500 mb-0.5 block">01</span>
                <h3 className="text-[11px] sm:text-xs font-black text-gray-900 leading-[1.15] tracking-tight">PRODUCT<br />DEVELOPMENT</h3>
              </div>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-gray-400/80 flex items-center justify-center text-gray-800 bg-transparent hover:bg-white transition-colors cursor-pointer shrink-0">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="gsap-card bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl flex flex-col shadow-lg shadow-black/5 overflow-hidden transition-shadow duration-300 hover:shadow-xl border border-white/80">
            <div className="aspect-[4/3] bg-gray-200 relative w-full overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80" 
                alt="Brand Building" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="flex justify-between items-end p-2.5 sm:p-3 md:p-3.5 mt-auto bg-[#F8F6F2]/90">
              <div>
                <span className="text-[10px] font-extrabold text-gray-500 mb-0.5 block">02</span>
                <h3 className="text-[11px] sm:text-xs font-black text-gray-900 leading-[1.15] tracking-tight">BRAND<br />BUILDING</h3>
              </div>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-gray-400/80 flex items-center justify-center text-gray-800 bg-transparent hover:bg-white transition-colors cursor-pointer shrink-0">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right Cards Group */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-4 w-full lg:w-[32%] xl:w-[29%]">
          {/* Card 3 */}
          <div className="gsap-card bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl flex flex-col shadow-lg shadow-black/5 overflow-hidden transition-shadow duration-300 hover:shadow-xl border border-white/80">
            <div className="aspect-[4/3] bg-gray-200 relative w-full overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
                alt="Compliance & Manufacturing" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="flex justify-between items-end p-2.5 sm:p-3 md:p-3.5 mt-auto bg-[#F8F6F2]/90">
              <div>
                <span className="text-[10px] font-extrabold text-gray-500 mb-0.5 block">03</span>
                <h3 className="text-[11px] sm:text-xs font-black text-gray-900 leading-[1.15] tracking-tight">COMPLIANCE<br />& MANUFACTURING</h3>
              </div>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-gray-400/80 flex items-center justify-center text-gray-800 bg-transparent hover:bg-white transition-colors cursor-pointer shrink-0">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="gsap-card bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl flex flex-col shadow-lg shadow-black/5 overflow-hidden transition-shadow duration-300 hover:shadow-xl border border-white/80">
            <div className="aspect-[4/3] bg-gray-200 relative w-full overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80" 
                alt="Launch & Grow" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="flex justify-between items-end p-2.5 sm:p-3 md:p-3.5 mt-auto bg-[#F8F6F2]/90">
              <div>
                <span className="text-[10px] font-extrabold text-gray-500 mb-0.5 block">04</span>
                <h3 className="text-[11px] sm:text-xs font-black text-gray-900 leading-[1.15] tracking-tight">LAUNCH<br />& GROW</h3>
              </div>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-gray-400/80 flex items-center justify-center text-gray-800 bg-transparent hover:bg-white transition-colors cursor-pointer shrink-0">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
