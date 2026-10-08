import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function MarketplaceChannels() {
  const channels = [
    {
      num: "01",
      logo: "/amazon-icon (1) 1.png",
      logoAlt: "Amazon",
      logoWidth: 32,
      logoHeight: 32,
      circleBg: true,
      title: "Amazon",
      desc: "From product listing and content to marketplace launch."
    },
    {
      num: "02",
      logo: "/flipkart-icon 1.png",
      logoAlt: "Flipkart",
      logoWidth: 32,
      logoHeight: 32,
      circleBg: true,
      title: "Flipkart",
      desc: "From catalogue setup to getting your products ready for launch."
    },
    {
      num: "03",
      logo: "/Nykaa mark.png",
      logoAlt: "Nykaa",
      logoWidth: 80,
      logoHeight: 26,
      circleBg: false,
      title: "Nykaa",
      desc: "For eligible beauty and personal-care brands, we help prepare the product and brand for onboarding."
    },
    {
      num: "04",
      logo: "/world-globe-line-icon 1.png",
      logoAlt: "Your Own Website",
      logoWidth: 32,
      logoHeight: 32,
      circleBg: true,
      title: "Your Own Website",
      desc: "For founders who want to build their own D2C channel."
    }
  ];

  return (
    <section className="w-full bg-[#FAF8F5] py-20 lg:py-28 font-sans flex flex-col items-center">
      
      {/* Top Section: Channels Grid */}
      <div className="max-w-[1050px] mx-auto px-6 md:px-12 flex flex-col items-center w-full">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 sm:w-16 bg-orange-200"></div>
          <span className="sm: font-bold tracking-[0.2em] uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">
            Where can your brand sell?
          </span>
          <div className="h-[1px] w-12 sm:w-16 bg-orange-200"></div>
        </div>

        {/* Heading */}
        <h2 className="text-[40px] sm:text-[48px] lg:text-[56px] font-[800] leading-[1.08] tracking-tight text-[#0B1B36] mb-5 text-center">
          Where Can Your<br />
          <span className="text-[#FF5000]">Brand Sell?</span>
        </h2>

        {/* Subheading */}
        <p className="text-[15px] sm:text-[17px] text-[#5F6D7E] font-medium leading-relaxed max-w-[500px] mb-14 text-center">
          Your product doesn&apos;t need to be everywhere on day one.<br className="hidden sm:block" />
          We help you figure out where it makes sense to start.
        </p>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-24">
          {channels.map((channel, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-[#F0EBE1] rounded-3xl p-8 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-orange-200 transition-all duration-300"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="w-[34px] h-[34px] rounded-full bg-[#FFF2E6] flex items-center justify-center text-[#FF5000] text-[12px] font-bold shrink-0">
                  {channel.num}
                </div>
                {channel.logo ? (
                  <div className={`flex items-center justify-center shrink-0 ${channel.circleBg ? 'w-16 h-16 rounded-full bg-[#FFF2E6]' : 'h-10'}`}>
                    <Image 
                      src={channel.logo} 
                      alt={channel.logoAlt} 
                      width={channel.logoWidth} 
                      height={channel.logoHeight} 
                      className={channel.circleBg ? "w-8 h-8 object-contain" : "h-8 w-auto object-contain"}
                    />
                  </div>
                ) : null}
              </div>
              
              <h3 className="text-[20px] font-extrabold text-[#0B1B36] mb-2.5">{channel.title}</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed font-medium">
                {channel.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section: CTA */}
      <div className="w-full flex flex-col items-center border-t border-gray-200/60 pt-20 px-6 relative">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 sm:w-16 bg-orange-200"></div>
          <span className="sm: font-bold tracking-[0.2em] uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">
            Let&apos;s plan your launch
          </span>
          <div className="h-[1px] w-12 sm:w-16 bg-orange-200"></div>
        </div>

        {/* Heading */}
        <h2 className="text-[38px] sm:text-[48px] lg:text-[56px] font-[800] leading-[1.08] tracking-tight text-[#0B1B36] mb-4 relative text-center">
          Not every brand needs<br />
          <span className="text-[#FF5000] relative inline-block">
            every channel.
            {/* Sparkle lines SVG */}
            <svg className="absolute -right-8 -top-1 w-8 h-8 text-[#FF5000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v6" />
              <path d="M21 7l-4.5 4.5" />
              <path d="M23 15h-6" />
            </svg>
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-[15px] sm:text-[17px] text-[#5F6D7E] font-medium leading-relaxed mb-10 text-center">
          We help you decide where to start.
        </p>

        {/* Button */}
        <Link
          href="/contact"
          className="group relative inline-flex items-center justify-center gap-3 bg-[#0B1B36] hover:bg-[#122A54] text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl shadow-blue-900/20"
        >
          <span>Talk Through Your Launch Channels</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

    </section>
  );
}
