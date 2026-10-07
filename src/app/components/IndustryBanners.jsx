"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, FlaskConical, Package, FileCheck, Leaf, Pill, Droplet } from 'lucide-react';

export default function IndustryBanners() {
  const banners = [
    {
      category: "Perfume",
      orangeText: "Perfume Brand",
      brandText: "Perfume Brand",
      src: "/banner-perfume.png",
      // Text on LEFT, products on RIGHT — so push bg to right
      bgPos: "right center",
      // Gradient from solid-white LEFT → transparent RIGHT
      gradient: "linear-gradient(to right, #ffffff 0%, #ffffff 55%, rgba(255,255,255,0.55) 75%, rgba(255,255,255,0) 100%)",
      textSide: "left",
      desc: "From the scent itself to the bottle it sits in, perfume is a category where the details decide whether a brand feels premium or ordinary. Here's how we help.",
      features: [
        { icon: <Droplet size={20} strokeWidth={1.5} />, title: "Fragrance Sourcing", desc: "Curate unique, high-quality fragrances for your brand." },
        { icon: <Package size={20} strokeWidth={1.5} />, title: "Bottle & Packaging", desc: "Get custom, premium bottle and packaging designs." },
        { icon: <FileCheck size={20} strokeWidth={1.5} />, title: "Compliance & Launch", desc: "We handle IFRA compliance and support your launch end-to-end." }
      ]
    },
    {
      category: "Skincare",
      orangeText: "Skincare Brand",
      brandText: "Skin Care Brand",
      src: "/banner3.png",
      // Text on RIGHT, products on LEFT — push bg to left
      bgPos: "left center",
      // Gradient from transparent LEFT → solid-white RIGHT
      gradient: "linear-gradient(to left, #ffffff 0%, #ffffff 55%, rgba(255,255,255,0.55) 75%, rgba(255,255,255,0) 100%)",
      textSide: "right",
      desc: "From clean formulations to the final packaging, skincare is a category where quality and trust make all the difference. Here's how we help.",
      features: [
        { icon: <FlaskConical size={20} strokeWidth={1.5} />, title: "Product Formulation", desc: "Develop safe, effective and trend-driven skincare formulations." },
        { icon: <Package size={20} strokeWidth={1.5} />, title: "Packaging Design", desc: "Get custom, premium packaging that matches your brand identity." },
        { icon: <FileCheck size={20} strokeWidth={1.5} />, title: "Compliance & Launch", desc: "We handle regulatory compliance and support your market launch." }
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
        { icon: <Leaf size={20} strokeWidth={1.5} />, title: "Product Formulation", desc: "Develop authentic, effective and market-ready Ayurveda & wellness products." },
        { icon: <Package size={20} strokeWidth={1.5} />, title: "Packaging Design", desc: "Get custom, premium packaging that reflects your brand's natural identity." },
        { icon: <FileCheck size={20} strokeWidth={1.5} />, title: "Compliance & Launch", desc: "We handle regulatory compliance and support your market launch." }
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
        { icon: <Pill size={20} strokeWidth={1.5} />, title: "Product Formulation", desc: "Develop science-backed, safe and effective nutraceutical products." },
        { icon: <Package size={20} strokeWidth={1.5} />, title: "Packaging Design", desc: "Get custom, premium packaging that reflects your brand's identity." },
        { icon: <FileCheck size={20} strokeWidth={1.5} />, title: "Compliance & Launch", desc: "We handle regulatory compliance and support your market launch." }
      ]
    }
  ];

  return (
    <section className="bg-white font-sans border-t border-gray-100">
      <div className="flex flex-col gap-6 md:gap-10 w-full py-10 md:py-14">
        {banners.map((banner, index) => (
          <div
            id={banner.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
            key={index}
            className="relative w-full scroll-mt-20"
            style={{
              backgroundImage: `url(${banner.src})`,
              backgroundSize: 'cover',
              backgroundPosition: banner.bgPos,
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Full overlay gradient — drives card height, hides baked-in text */}
            <div
              className="w-full flex"
              style={{ justifyContent: banner.textSide === 'right' ? 'flex-end' : 'flex-start' }}
            >
              <div
                className="w-full md:w-[65%] lg:w-[52%] flex flex-col items-start py-12 md:py-16 px-8 md:px-12 lg:px-16"
                style={{ background: banner.gradient }}
              >
                {/* Orange dash */}
                <div className="w-10 h-[3px] bg-[#FF5A19] mb-5 rounded-full" />

                <h2 className="text-[1.9rem] sm:text-[2.4rem] md:text-[2.8rem] lg:text-[3rem] font-black text-[#0B1E3E] leading-[1.1] tracking-tight mb-4">
                  Launch Your Own<br />
                  <span className="text-[#FF5A19]">{banner.orangeText}</span>
                </h2>

                <p className="text-[#374151] text-[13px] md:text-[14px] lg:text-[15px] font-medium leading-[1.7] mb-8 max-w-[420px]">
                  {banner.desc}
                </p>

                {/* Feature Icons Row */}
                <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8 w-full max-w-[460px]">
                  {banner.features.map((feat, i) => (
                    <div key={i} className="flex flex-col items-start">
                      <div className="w-10 h-10 rounded-full border border-[#E8C9A0] text-[#C8813E] flex items-center justify-center mb-3 bg-white shadow-sm">
                        {feat.icon}
                      </div>
                      <h4 className="text-[#0B1E3E] text-[12px] font-bold mb-1 leading-tight">{feat.title}</h4>
                      <p className="text-[#6B7280] text-[11px] font-medium leading-[1.5]">{feat.desc}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#1B3D8F] hover:bg-[#0E2C6A] text-white pl-6 pr-1.5 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
                >
                  <span>Start Your {banner.brandText}</span>
                  <div className="w-8 h-8 rounded-full bg-white text-[#1B3D8F] flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight size={15} strokeWidth={2.5} />
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
