import React from 'react';
import Image from 'next/image';
import { Search, FileText, FlaskConical, Package, Settings, ShieldCheck, ArrowRight } from 'lucide-react';

export default function RightManufacturer() {
  const features = [
    {
      icon: <Search className="w-5 h-5 text-[#FF4D00]" />,
      title: "Identify suitable manufacturers"
    },
    {
      icon: <FileText className="w-5 h-5 text-[#FF4D00]" />,
      title: "Compare MOQ requirements"
    },
    {
      icon: <FlaskConical className="w-5 h-5 text-[#FF4D00]" />,
      title: "Understand formulation options"
    },
    {
      icon: <Package className="w-5 h-5 text-[#FF4D00]" />,
      title: "Coordinate sampling"
    },
    {
      icon: <Settings className="w-5 h-5 text-[#FF4D00]" />,
      title: "Understand production requirements"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#FF4D00]" />,
      title: "Navigate quality and compliance requirements"
    }
  ];

  return (
    <section className="w-full bg-[#FAF8F5] py-20 lg:py-32 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side - Image Composition */}
          <div className="relative w-full lg:w-[45%] flex justify-center lg:justify-start">
            
            {/* SVG Connecting Line with Labels */}
            <div className="absolute top-[-20px] bottom-[-20px] left-[-40px] right-[-40px] pointer-events-none z-10 hidden sm:block">
              <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Curved Path */}
                <path d="M 50 100 C 0 300, 150 550, 450 500" stroke="#FF4D00" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
                
                {/* Right Factory */}
                <circle cx="50" cy="100" r="5" fill="#FF4D00" />
                <text x="35" y="105" fontSize="11" fontWeight="bold" fill="#333" textAnchor="end">Right</text>
                <text x="35" y="117" fontSize="11" fontWeight="bold" fill="#333" textAnchor="end">Factory</text>
                
                {/* Right Product */}
                <circle cx="20" cy="270" r="5" fill="#FF4D00" />
                <text x="5" y="275" fontSize="11" fontWeight="bold" fill="#333" textAnchor="end">Right</text>
                <text x="5" y="287" fontSize="11" fontWeight="bold" fill="#333" textAnchor="end">Product</text>
                
                {/* Right Quality */}
                <circle cx="330" cy="360" r="5" fill="#FF4D00" />
                <text x="345" y="355" fontSize="11" fontWeight="bold" fill="#333" textAnchor="start">Right</text>
                <text x="345" y="367" fontSize="11" fontWeight="bold" fill="#333" textAnchor="start">Quality</text>
                
                {/* Right Growth */}
                <circle cx="325" cy="550" r="5" fill="#FF4D00" />
                <text x="340" y="555" fontSize="11" fontWeight="bold" fill="#333" textAnchor="start">Right</text>
                <text x="340" y="567" fontSize="11" fontWeight="bold" fill="#333" textAnchor="start">Growth</text>
              </svg>
            </div>

            {/* Main Factory Circle */}
            <div className="relative z-0 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full overflow-hidden shadow-2xl ml-auto">
              <Image 
                src="/factory.jpg" 
                alt="Factory production line" 
                fill 
                className="object-cover"
              />
            </div>

            {/* Overlapping Perfume Circle */}
            <div className="absolute z-20 bottom-[-30px] left-[-10px] sm:bottom-[-40px] sm:left-[-20px] w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] rounded-full overflow-hidden border-[8px] sm:border-[12px] border-[#FAF8F5] shadow-[0_20px_40px_rgba(0,0,0,0.15)] bg-white">
              <Image 
                src="/perfume.jpg" 
                alt="Perfume Product" 
                fill 
                className="object-cover"
              />
            </div>
            
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-[55%] flex flex-col pt-12 lg:pt-0">
            <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-extrabold text-[#0B1B36] leading-[1.1] tracking-tight mb-6">
              Finding the Right <br className="hidden md:block" />
              Manufacturer <br className="hidden md:block" />
              <span className="text-[#FF4D00]">Shouldn't Be Your Problem</span>
            </h2>
            
            <p className="text-gray-600 text-base sm:text-lg mb-10 leading-relaxed max-w-2xl font-medium">
              Finding a manufacturer is easy. Finding the right one for your product, quantity, category and budget is where things get complicated. <br className="hidden sm:block" />
              We help you:
            </p>

            {/* Grid of Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-5 shadow-sm shadow-gray-200/50 flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#FFF5F0] flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <p className="text-[#0B1B36] font-semibold text-sm leading-snug">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <button className="bg-[#0B1B36] hover:bg-[#162A50] transition-colors duration-300 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 text-[15px] shadow-lg shadow-[#0B1B36]/20">
                Tell Us What You Want to Build
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
