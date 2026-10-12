"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FlaskConical, Package, FileCheck, Leaf, Droplet } from 'lucide-react';

export default function IndustryBanners() {
  const banners = [
    {
      category: "Perfume",
      orangeText: "Perfume Brand",
      brandText: "Perfume Brand",
      src: "/banner-perfume.png",
      // Text on LEFT, products on RIGHT — so push bg to right
      bgPos: "right center",
      gradient: "linear-gradient(to right, #ffffff 0%, #ffffff 55%, rgba(255,255,255,0.55) 75%, rgba(255,255,255,0) 100%)",
      textSide: "left",
      desc: "From the scent itself to the bottle it sits in, perfume is a category where the details decide whether a brand feels premium or ordinary. Here's how we help.",
      features: [
        { icon: <Droplet size={18} strokeWidth={1.8} />, title: "Fragrance Sourcing", desc: "Curate unique, high-quality fragrances for your brand." },
        { icon: <Package size={18} strokeWidth={1.8} />, title: "Bottle & Packaging", desc: "Get custom, premium bottle and packaging designs." },
        { icon: <FileCheck size={18} strokeWidth={1.8} />, title: "Compliance & Launch", desc: "We handle IFRA compliance and support your launch end-to-end." }
      ]
    },
    {
      category: "Skincare",
      orangeText: "Skincare Brand",
      brandText: "Skin Care Brand",
      src: "/banner3.png",
      // Text on RIGHT, products on LEFT — push bg to left
      bgPos: "left center",
      gradient: "linear-gradient(to left, #ffffff 0%, #ffffff 55%, rgba(255,255,255,0.55) 75%, rgba(255,255,255,0) 100%)",
      textSide: "right",
      desc: "From clean formulations to the final packaging, skincare is a category where quality and trust make all the difference. Here's how we help.",
      features: [
        { icon: <FlaskConical size={18} strokeWidth={1.8} />, title: "Product Formulation", desc: "Develop safe, effective and trend-driven skincare formulations." },
        { icon: <Package size={18} strokeWidth={1.8} />, title: "Packaging Design", desc: "Get custom, premium packaging that matches your brand identity." },
        { icon: <FileCheck size={18} strokeWidth={1.8} />, title: "Compliance & Launch", desc: "We handle regulatory compliance and support your market launch." }
      ]
    },
    {
      category: "Ayurveda & Wellness",
      orangeText: "Ayurveda & Wellness Brand",
      brandText: "Ayurveda Brand",
      src: "/banner2.png",
      bgPos: "right center",
      gradient: "linear-gradient(to right, #ffffff 0%, #ffffff 55%, rgba(255,255,255,0.55) 75%, rgba(255,255,255,0) 100%)",
      textSide: "left",
      desc: "From traditional ingredients to modern formulations, Ayurveda and Wellness is a growing category where purity, quality and authenticity create real impact. Here's how we help.",
      features: [
        { icon: <Leaf size={18} strokeWidth={1.8} />, title: "Product Formulation", desc: "Develop authentic, effective and market-ready Ayurveda & wellness products." },
        { icon: <Package size={18} strokeWidth={1.8} />, title: "Packaging Design", desc: "Get custom, premium packaging that reflects your brand's natural identity." },
        { icon: <FileCheck size={18} strokeWidth={1.8} />, title: "Compliance & Launch", desc: "We handle regulatory compliance and support your market launch." }
      ]
    },
    {
      category: "Nutraceutical",
      orangeText: "Nutraceutical Brand",
      brandText: "Nutraceutical Brand",
      src: "/banner1.png",
      bgPos: "left center",
      gradient: "linear-gradient(to left, #ffffff 0%, #ffffff 55%, rgba(255,255,255,0.55) 75%, rgba(255,255,255,0) 100%)",
      textSide: "right",
      desc: "From science-backed formulations to market-ready products, Nutraceuticals are a fast-growing category that supports healthier lifestyles and stronger brands. Here's how we help.",
      features: [
        { icon: <Leaf size={18} strokeWidth={1.8} />, title: "Product Formulation", desc: "Develop science-backed, safe and effective nutraceutical products." },
        { icon: <Package size={18} strokeWidth={1.8} />, title: "Packaging Design", desc: "Get custom, premium packaging that reflects your brand's identity." },
        { icon: <FileCheck size={18} strokeWidth={1.8} />, title: "Compliance & Launch", desc: "We handle regulatory compliance and support your market launch." }
      ]
    }
  ];

  return (
    <section className="bg-white font-sans border-t border-gray-100">
      <div className="flex flex-col gap-8 md:gap-10 w-full py-6 md:py-14">
        {banners.map((banner, index) => (
          <div
            id={banner.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
            key={index}
            className="w-full scroll-mt-20 overflow-hidden"
          >
            {/* Desktop View (md and above) */}
            <div
              className="hidden md:block relative w-full"
              style={{
                backgroundImage: `url(${banner.src})`,
                backgroundSize: 'cover',
                backgroundPosition: banner.bgPos,
                backgroundRepeat: 'no-repeat',
                minHeight: '520px',
              }}
            >
              <div
                className="w-full h-full flex"
                style={{ justifyContent: banner.textSide === 'right' ? 'flex-end' : 'flex-start' }}
              >
                <div
                  className="w-[64%] lg:w-[54%] flex flex-col items-start py-12 md:py-16 px-8 md:px-12 lg:px-16"
                  style={{ background: banner.gradient }}
                >
                  {/* Orange dash */}
                  <div className="w-12 h-[3px] bg-[#FF5A19] mb-5 rounded-full" />

                  <h2 className="text-[2.2rem] md:text-[2.6rem] lg:text-[2.9rem] font-black text-[#0B1E3E] leading-[1.1] tracking-tight mb-4">
                    Launch Your Own<br />
                    <span className="text-[#FF5A19]">{banner.orangeText}</span>
                  </h2>

                  <p className="text-[#374151] text-[13px] md:text-[14px] lg:text-[15px] font-medium leading-[1.7] mb-7 max-w-[450px]">
                    {banner.desc}
                  </p>

                  {/* Feature Cards Row */}
                  <div className="grid grid-cols-3 gap-3 md:gap-3.5 mb-8 w-full max-w-[500px]">
                    {banner.features.map((feat, i) => (
                      <div 
                        key={i} 
                        className="bg-white rounded-2xl border border-[#ECEFF3] shadow-[0_2px_10px_rgba(0,0,0,0.03)] p-3.5 flex flex-col items-center text-center transition-all hover:shadow-md"
                      >
                        <div className="w-10 h-10 rounded-full bg-[#FFF0E6] text-[#FF5A19] flex items-center justify-center mb-2.5 shrink-0">
                          {feat.icon}
                        </div>
                        <h4 className="text-[#0B1E3E] text-[12px] font-bold mb-1 leading-tight">{feat.title}</h4>
                        <p className="text-[#6B7280] text-[10px] font-medium leading-[1.4]">{feat.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-[#0B1E3E] hover:bg-[#071329] text-white pl-6 pr-1.5 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
                  >
                    <span>Start Your {banner.brandText}</span>
                    <div className="w-8 h-8 rounded-full bg-white text-[#0B1E3E] flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
                      <ArrowRight size={15} strokeWidth={2.5} />
                    </div>
                  </Link>

                </div>
              </div>
            </div>

            {/* Mobile View (< md) */}
            <div className="md:hidden w-full bg-white border-y border-gray-100/80 overflow-hidden shadow-sm">
              {/* Product Showcase Image */}
              <div className="relative w-full h-[230px] sm:h-[300px] bg-[#FAF8F5] overflow-hidden">
                <Image
                  src={banner.src}
                  alt={banner.brandText}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  style={{
                    objectPosition: banner.textSide === 'right' ? 'left center' : 'right center'
                  }}
                  priority={index === 0}
                />
                {/* Subtle soft gradient fade into white card below */}
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              </div>

              {/* Content below image */}
              <div className="px-4 sm:px-6 pb-8 pt-3 flex flex-col items-start bg-white">
                {/* Orange dash */}
                <div className="w-10 h-[3px] bg-[#FF5A19] mb-3.5 rounded-full" />

                <h2 className="text-[1.85rem] sm:text-[2.2rem] font-black text-[#0B1E3E] leading-[1.1] tracking-tight mb-2.5">
                  Launch Your Own<br />
                  <span className="text-[#FF5A19]">{banner.orangeText}</span>
                </h2>

                <p className="text-[#4B5563] text-[13px] font-medium leading-[1.65] mb-5">
                  {banner.desc}
                </p>

                {/* Feature Cards in 3-column row */}
                <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mb-6 w-full">
                  {banner.features.map((feat, i) => (
                    <div 
                      key={i} 
                      className="bg-white rounded-xl border border-[#ECEFF3] shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-2 sm:p-2.5 flex flex-col items-center text-center"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#FFF0E6] text-[#FF5A19] flex items-center justify-center mb-1.5 shrink-0">
                        {feat.icon}
                      </div>
                      <h4 className="text-[#0B1E3E] text-[10px] sm:text-[11px] font-bold mb-1 leading-tight">
                        {feat.title}
                      </h4>
                      <p className="text-[#6B7280] text-[8.5px] sm:text-[9.5px] font-medium leading-[1.3]">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-[#0B1E3E] hover:bg-[#071329] text-white pl-5 pr-1.5 py-1.5 rounded-full text-[12px] font-semibold transition-all duration-300 shadow-md group"
                >
                  <span>Start Your {banner.brandText}</span>
                  <div className="w-7 h-7 rounded-full bg-white text-[#0B1E3E] flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight size={13} strokeWidth={2.5} />
                  </div>
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
