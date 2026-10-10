"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function InvestmentRoadmap() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          containerRef.current.classList.add("animate-in");
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} id="investment-guide" className="w-full bg-[#FCFBF8] py-16 md:py-24 font-sans overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .stagger-opacity { opacity: 0; }
        .animate-in .fade-up-1 { animation: fadeUp 0.8s ease forwards; }
        .animate-in .fade-up-2 { animation: fadeUp 0.8s ease 0.2s forwards; }
        .animate-in .slide-in { animation: slideIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards; }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(80px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}} />
      
      <div className="max-w-[1400px] mx-auto relative">

        {/* Timeline Image Section */}
        <div className="stagger-opacity slide-in w-full relative z-10">
          <div className="w-full relative overflow-x-auto no-scrollbar py-2 px-4 sm:px-6 md:px-8">
            {/* The Image (Scales naturally and allows horizontal scroll on small devices) */}
            <div className="relative min-w-[640px] sm:min-w-full">
              <Image 
                src="/assets/group114.png" 
                alt="Brand Building Timeline" 
                width={2800} 
                height={1402} 
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
          <p className="text-center text-[12px] text-gray-400 mt-2 block sm:hidden">
            ← Scroll horizontally to explore roadmap →
          </p>
        </div>

      </div>
    </section>
  );
}
