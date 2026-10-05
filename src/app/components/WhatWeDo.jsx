import React from "react";
import { Package, Factory, Paintbrush, ShieldCheck, Rocket, BarChart3, ArrowRight } from "lucide-react";

export default function WhatWeDo() {
  const steps = [
    {
      number: "01",
      title: "Product",
      description: "Finding the right category, product direction and formulation.",
      icon: <Package size={24} className="text-[#FF4D00]" />,
      iconBg: "bg-[#FFEFDF]",
      color: "#FF4D00",
      lineColor: "border-[#FF4D00]"
    },
    {
      number: "02",
      title: "Manufacturing",
      description: "Connecting you with the right manufacturing partner and managing production.",
      icon: <Factory size={24} className="text-[#4A72FF]" />,
      iconBg: "bg-[#EAEFFF]",
      color: "#4A72FF",
      lineColor: "border-[#4A72FF]"
    },
    {
      number: "03",
      title: "Branding",
      description: "Naming, packaging and a brand identity that fits your audience.",
      icon: <Paintbrush size={24} className="text-[#FF4D00]" />,
      iconBg: "bg-[#FFEFDF]",
      color: "#FF4D00",
      lineColor: "border-[#FF4D00]"
    },
    {
      number: "04",
      title: "Compliance",
      description: "Registrations, licences and documentation your product needs.",
      icon: <ShieldCheck size={24} className="text-[#4A72FF]" />,
      iconBg: "bg-[#EAEFFF]",
      color: "#4A72FF",
      lineColor: "border-[#4A72FF]"
    },
    {
      number: "05",
      title: "Launch",
      description: "Getting your brand ready for marketplaces, D2C and other sales channels.",
      icon: <Rocket size={24} className="text-[#FF4D00]" />,
      iconBg: "bg-[#FFEFDF]",
      color: "#FF4D00",
      lineColor: "border-[#FF4D00]"
    },
    {
      number: "06",
      title: "Growth",
      description: "Understanding what comes next once your product is in the market.",
      icon: <BarChart3 size={24} className="text-[#4A72FF]" />,
      iconBg: "bg-[#EAEFFF]",
      color: "#4A72FF",
      lineColor: "border-[#4A72FF]"
    },
  ];

  return (
    <section id="what-we-do" className="relative bg-[#FCFBF8] pt-12 pb-20 overflow-hidden">
      
      {/* Background Decorative Lines (Approximated with SVG) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M-100 600 C 300 800, 600 700, 1500 750" stroke="#FF4D00" strokeWidth="1" strokeDasharray="5 5" />
          <path d="M300 200 C 600 200, 800 200, 1100 200" stroke="#FF4D00" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M300 500 C 600 500, 800 500, 1100 500" stroke="#FF4D00" strokeWidth="1" strokeDasharray="4 4" />
          {/* Loop connection */}
          <path d="M1100 200 C 1300 200, 1300 500, 1100 500" stroke="#FF4D00" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-16">
        
        {/* Left Content Area */}
        <div className="w-full lg:w-1/3 flex flex-col pt-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#FF4D00] text-sm font-bold tracking-widest uppercase">What We Do</span>
            <div className="h-[1px] w-12 bg-gray-300"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1E1E1E] leading-[1.1] tracking-tight mb-8">
            From <span className="text-[#FF4D00]">Idea</span><br />
            to Launch,<br />
            We Handle<br />
            the Pieces<span className="text-[#FF4D00]">.</span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed max-w-md">
            You don't need to figure everything out before you start. We help with the important parts of building a product brand:
          </p>

          <div className="mt-16 relative">
             <div className="w-6 h-6 rounded-full bg-[#FF4D00] absolute -left-12 -top-4"></div>
          </div>
        </div>

        {/* Right Cards Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group h-[260px] relative z-20 hover:-translate-y-1"
            >
              {/* Top Row: Icon and Number */}
              <div className="flex justify-between items-start mb-6">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${step.iconBg}`}>
                  {step.icon}
                </div>
                <span className="text-[#FF4D00] font-bold text-lg">{step.number}</span>
              </div>

              {/* Title & Arrow */}
              <div className="mb-4 relative">
                <div className="flex justify-between items-center group-hover:pr-2 transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#1E1E1E]">{step.title}</h3>
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center transition-colors duration-300" style={{ color: step.color }}>
                    <ArrowRight size={16} />
                  </div>
                </div>
                {/* Underline matching the image */}
                <div className="w-12 h-[3px] mt-3 rounded-full transition-all duration-300 group-hover:w-full" style={{ backgroundColor: step.color }}></div>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
