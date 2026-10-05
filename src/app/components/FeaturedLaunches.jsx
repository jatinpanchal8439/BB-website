import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function FeaturedLaunches() {
  const launches = [
    {
      title: "Blush En Bloom",
      badge: "Perfume",
      badgeColor: "bg-[#FFF2E8] text-[#FF4D00]",
      description: "A floral perfume collection with 3 scents and 5,000+ bottles sold in the first 60 days.",
      image: "/M1.png"
    },
    {
      title: "Biographey",
      badge: "Perfume",
      badgeColor: "bg-[#EEF2FF] text-[#4A72FF]",
      description: "Crafted a signature scent with lasting depth.",
      image: "/M2.png"
    },
    {
      title: "Grevety",
      badge: "Skincare",
      badgeColor: "bg-[#ECFDF5] text-[#059669]",
      description: "Launched a clean skincare line with strong marketplace performance.",
      image: "/M3.png"
    }
  ];

  return (
    <section className="relative bg-[#FCFBF8] py-24 overflow-hidden border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          
          <div className="flex flex-col max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#FF4D00] text-sm font-bold tracking-widest uppercase">Featured Launches</span>
              <div className="h-[1px] w-12 bg-gray-300"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1E1E1E] leading-[1.1] tracking-tight mb-6">
              A Few Brands We're<br className="hidden md:block" /> 
              <span className="text-[#FF4D00] relative">
                Proud
                <div className="absolute -bottom-2 left-0 w-full h-[4px] bg-[#FF4D00] opacity-80"></div>
              </span> Of
            </h2>
            
            <p className="text-gray-600 text-lg font-medium leading-relaxed max-w-xl">
              Real brands. Real results. From unique ideas to successful launches across perfume, cosmetics, skincare and more.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-6">
            <Link 
              href="#all-launches" 
              className="inline-flex items-center gap-2 bg-transparent border-2 border-[#4A72FF] text-[#4A72FF] hover:bg-[#4A72FF] hover:text-white px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 shadow-sm"
            >
              View All Launches
              <ArrowRight size={16} />
            </Link>
            
            {/* Carousel Arrows */}
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-800 hover:border-gray-300 transition-all shadow-sm hover:shadow">
                <ArrowLeft size={20} />
              </button>
              <button className="w-12 h-12 rounded-full bg-[#FFD7BA] border border-[#FFD7BA] flex items-center justify-center text-[#FF4D00] hover:bg-[#FFC099] transition-all shadow-sm hover:shadow">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {launches.map((launch, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] bg-gray-50 border-b border-gray-100">
                <Image 
                  src={launch.image} 
                  alt={launch.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black text-[#1E1E1E] tracking-tight">{launch.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${launch.badgeColor}`}>
                    {launch.badge}
                  </span>
                </div>
                
                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8 flex-grow">
                  {launch.description}
                </p>
                
                <Link 
                  href="#" 
                  className="inline-flex items-center gap-2 text-[#4A72FF] font-bold text-sm hover:text-[#1d4ed8] transition-colors group"
                >
                  Read the story
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
