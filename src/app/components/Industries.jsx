import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, SprayCan, Beaker, Leaf, Pill } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      title: "Perfume &\nFragrance",
      icon: <SprayCan size={20} className="text-[#FF4D00]" />,
      iconBg: "bg-[#FFF2E8]",
      arrowColor: "text-[#FF4D00]",
      image: "/industry1.png"
    },
    {
      title: "Beauty &\nSkincare",
      icon: <Beaker size={20} className="text-[#4A72FF]" />,
      iconBg: "bg-[#EEF2FF]",
      arrowColor: "text-[#4A72FF]",
      image: "/industry2.png"
    },
    {
      title: "Ayurveda &\nWellness",
      icon: <Leaf size={20} className="text-[#059669]" />,
      iconBg: "bg-[#ECFDF5]",
      arrowColor: "text-[#059669]",
      image: "/industry3.png"
    },
    {
      title: "Nutraceuticals",
      icon: <Pill size={20} className="text-[#FF4D00]" />,
      iconBg: "bg-[#FFF2E8]",
      arrowColor: "text-[#FF4D00]",
      image: "/industry4.png"
    }
  ];

  return (
    <section className="relative bg-[#FCFBF8] py-24 overflow-hidden border-t border-gray-100">
      
      {/* Background Decorative Circles */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#FFF2E8] rounded-full opacity-50 pointer-events-none blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FFF2E8] rounded-full opacity-50 pointer-events-none blur-3xl"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col xl:flex-row items-center xl:items-start gap-10">
        
        {/* Left Content Area */}
        <div className="w-full xl:w-[28%] flex flex-col items-start pt-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#FF4D00] text-xs font-bold tracking-widest uppercase">Industries</span>
            <div className="h-[1px] w-10 bg-[#FF4D00]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-[#1E1E1E] leading-[1.1] tracking-tight mb-6">
            Build a Brand<br />
            in <span className="text-[#FF4D00]">Your Industry</span>
          </h2>
          
          <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed mb-10 max-w-sm">
            We help entrepreneurs and businesses launch successful brands across high-growth categories.
          </p>

          <Link 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-[#FF4D00] hover:bg-[#e64500] text-white px-7 py-3.5 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Talk to Our Experts
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Right Cards Area */}
        <div className="w-full xl:w-[72%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 pb-8">
            {industries.map((industry, index) => (
              <Link 
                href="/industries"
                key={index}
                className="w-full h-[400px] bg-white rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group flex flex-col border border-gray-100"
              >
                {/* Top Text Section */}
                <div className="p-5 relative z-10 flex-shrink-0 bg-gradient-to-b from-white via-white to-transparent h-[150px]">
                  <div className={`w-10 h-10 rounded-full ${industry.iconBg} flex items-center justify-center mb-4 border border-white shadow-sm`}>
                    {industry.icon}
                  </div>
                  
                  <h3 className="text-base font-bold text-[#1E1E1E] leading-tight whitespace-pre-line mb-2">
                    {industry.title}
                  </h3>
                  
                  <ArrowRight size={16} className={`${industry.arrowColor} transition-transform group-hover:translate-x-1`} />
                </div>
                
                {/* Bottom Image Section */}
                <div className="absolute inset-0 top-[120px] z-0 overflow-hidden rounded-b-3xl">
                   <Image 
                    src={industry.image} 
                    alt={industry.title.replace('\n', ' ')}
                    fill
                    className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                   />
                </div>
              </Link>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
