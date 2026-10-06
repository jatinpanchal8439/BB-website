import Image from "next/image";
import { ArrowDownRight, Calendar, ShoppingCart, Star } from "lucide-react";

export default function CaseStudy() {
  return (
    <section className="relative w-full font-sans py-12 md:py-16 bg-[#FCFBF8]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Card */}
        <div className="relative w-full rounded-[32px] md:rounded-[48px]">
          {/* Split background */}
          <div className="absolute inset-0 flex flex-col md:flex-row pointer-events-none overflow-hidden rounded-[32px] md:rounded-[48px]">
            <div className="w-full md:w-[48%] bg-[#fff8f2] h-full"></div>
            <div className="w-full md:w-[52%] bg-gradient-to-br from-[#fbd6b9] via-[#fbcfa9] to-[#fbbe91] h-full"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16 p-8 md:p-12 lg:p-20 pb-28 md:pb-32 lg:pb-36">
            
            {/* Left Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <span className="w-12 md:w-16 h-[2px] bg-[#f55926]"></span>
                <span className="text-[#f55926] font-extrabold tracking-widest text-sm md:text-base uppercase">Case Study</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-[76px] font-extrabold text-[#111928] leading-[1.1] mb-6 md:mb-8 tracking-tight">
                From Idea <br /> to Market in <br />
                <span className="text-[#f55926]">60 Days.</span>
              </h2>
              
              <p className="text-[#4b5563] text-lg md:text-xl lg:text-[22px] mb-10 md:mb-12 max-w-xl leading-relaxed font-medium">
                How Banega Brand helped launch Blush En Bloom — a premium fragrance brand loved by customers.
              </p>
              
              <button className="bg-[#f55926] hover:bg-[#df4a1a] transition-all duration-300 text-white rounded-full py-4 px-6 md:px-8 font-semibold text-lg md:text-xl flex items-center justify-between w-fit gap-6 shadow-[0_10px_30px_rgba(245,89,38,0.3)] hover:-translate-y-1">
                Read the Full Case Study 
                <span className="bg-white text-[#f55926] rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                  <ArrowDownRight size={22} strokeWidth={2.5} />
                </span>
              </button>
            </div>

            {/* Right Content / Image */}
            <div className="w-full md:w-1/2 relative flex justify-center md:justify-end z-30">
              <Image 
                src="/launch-duration.png" 
                alt="Launch Duration 60 Days" 
                width={800} 
                height={800} 
                className="object-contain w-full max-w-[600px] lg:max-w-[700px] -mr-4 md:-mr-8 translate-y-10 md:translate-y-20 lg:translate-y-28 scale-110"
                priority
              />
            </div>

          </div>
        </div>

        {/* Floating Stats Bar */}
        <div className="relative -mt-20 md:-mt-24 mx-auto w-[92%] max-w-[1200px] bg-[#fffaf5] rounded-[32px] p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] z-20 flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-orange-100/50 border border-orange-50">
          
          <div className="flex items-center gap-5 w-full md:w-1/3 p-4 justify-center md:justify-start">
            <div className="w-14 h-14 bg-[#ffebd9] rounded-2xl flex items-center justify-center shrink-0">
              <Calendar className="text-[#f55926] w-7 h-7" />
            </div>
            <div>
              <p className="font-extrabold text-[#111928] text-lg lg:text-xl">60 Days</p>
              <p className="text-[#6b7280] text-sm lg:text-base font-medium mt-0.5">From idea to launch</p>
            </div>
          </div>

          <div className="flex items-center gap-5 w-full md:w-1/3 p-4 justify-center md:justify-start">
            <div className="w-14 h-14 bg-[#ffebd9] rounded-2xl flex items-center justify-center shrink-0">
              <ShoppingCart className="text-[#f55926] w-7 h-7" />
            </div>
            <div>
              <p className="font-extrabold text-[#111928] text-lg lg:text-xl">Live on Amazon</p>
              <p className="text-[#6b7280] text-sm lg:text-base font-medium mt-0.5">With great initial response</p>
            </div>
          </div>

          <div className="flex items-center gap-5 w-full md:w-1/3 p-4 justify-center md:justify-start">
            <div className="w-14 h-14 bg-[#ffebd9] rounded-2xl flex items-center justify-center shrink-0">
              <Star className="text-[#f55926] w-7 h-7" />
            </div>
            <div>
              <p className="font-extrabold text-[#111928] text-lg lg:text-xl">A Premium Brand</p>
              <p className="text-[#6b7280] text-sm lg:text-base font-medium mt-0.5">Loved by customers</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
