"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Gem,
  Hexagon,
  Package,
  Users,
  TrendingUp,
  Atom,
  BarChart3,
  CheckCircle2
} from "lucide-react";
import TalkBeforeInvest from "./TalkBeforeInvest";

export default function Footer({ hidePreFooterCTA = false }) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: 'Subscriber',
            phone: 'N/A', // Using N/A as it's required by the API
            email: newsletterEmail,
            industry: 'Newsletter',
            description: 'Newsletter Subscription request'
          }),
        });
      } catch (err) {
        console.error(err);
      }
      setTimeout(() => {
        setNewsletterEmail("");
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <>
      {/* Pre-Footer CTA Section */}
      {!hidePreFooterCTA && (
        <TalkBeforeInvest />
      )}

      {/* Main Footer Section with Exact Wavy Background */}
      <footer className="relative bg-[#FFFBF5] pt-14 sm:pt-16 pb-8 border-t border-[#F0EBE1] overflow-hidden">

        {/* Exact Wavy Graphic Background from User Upload */}
        <div className="absolute bottom-0 left-0 right-0 w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[400px] pointer-events-none select-none z-0">
          <Image
            src="/footer-exact-bg-hd.png"
            alt="Footer Background Waves"
            fill
            priority
            className="object-cover object-bottom"
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">

          {/* Top 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-12">

            {/* Column 1: Brand Info */}
            <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-10 lg:border-r lg:border-[#F0EBE1]">
              <Link href="/" className="mb-4 sm:mb-5 block">
                <Image
                  src="/logo-removebg-preview.png"
                  alt="BanegaBrand.com"
                  width={220}
                  height={65}
                  className="object-contain h-12 md:h-14 w-auto transform origin-left -ml-1"
                />
              </Link>

              <div className="flex flex-col mb-6">
                <h3 className="text-[#0B1B3D] text-[15px] font-bold leading-snug">
                  From Idea to Market —<br />Your Brand, Our Expertise.
                </h3>
                <div className="w-8 h-[2px] bg-[#FF4D00] mt-2 mb-4"></div>
                <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed font-medium max-w-sm">
                  We help entrepreneurs and businesses launch successful Perfume, Cosmetic, Skincare, Ayurveda, Beauty, Wellness and D2C brands in India — from product idea to market launch.
                </p>
              </div>

              {/* Social Icons matching screenshot */}
              <div className="flex items-center gap-2.5">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-white border border-[#E8DFD3] flex items-center justify-center text-gray-700 hover:bg-[#FF4D00] hover:text-white hover:border-[#FF4D00] transition-all shadow-2xs"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-white border border-[#E8DFD3] flex items-center justify-center text-gray-700 hover:bg-[#FF4D00] hover:text-white hover:border-[#FF4D00] transition-all shadow-2xs"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>

                {/* Link/Website */}
                <a
                  href="/"
                  aria-label="Website"
                  className="w-8 h-8 rounded-full bg-white border border-[#E8DFD3] flex items-center justify-center text-gray-700 hover:bg-[#FF4D00] hover:text-white hover:border-[#FF4D00] transition-all shadow-2xs"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </a>

                {/* Twitter / Community */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-8 h-8 rounded-full bg-white border border-[#E8DFD3] flex items-center justify-center text-gray-700 hover:bg-[#FF4D00] hover:text-white hover:border-[#FF4D00] transition-all shadow-2xs"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="lg:col-span-2 lg:px-6 lg:border-r lg:border-[#F0EBE1]">
              <h4 className="text-[#0B1B3D] font-bold text-sm sm:text-[15px] mb-1">Navigation</h4>
              <div className="w-8 h-[2px] bg-[#FF4D00] mb-5"></div>
              <ul className="flex flex-col gap-3">
                {[
                  { name: "Our Work", href: "/work" },
                  { name: "About Us", href: "/about" },
                  { name: "Industries", href: "/industries" },
                  { name: "Manufacturer Network", href: "/manufacturer" },
                  { name: "Investment Guide", href: "/investment-guide" },
                  { name: "Marketplace Launch", href: "/launch" },
                  { name: "Blogs", href: "/blog" },
                  { name: "FAQ", href: "/faq" },
                  { name: "Contact Us", href: "/contact" }
                ].map((item, i) => (
                  <li key={i}>
                    <Link href={item.href} className="flex items-center justify-between text-gray-600 hover:text-[#FF4D00] text-xs sm:text-[13px] font-medium transition-colors group py-0.5">
                      <span className="truncate pr-1">{item.name}</span>
                      <ChevronRight size={13} className="text-[#FF4D00] shrink-0 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Industries */}
            <div className="lg:col-span-2 lg:px-6 lg:border-r lg:border-[#F0EBE1]">
              <h4 className="text-[#0B1B3D] font-bold text-sm sm:text-[15px] mb-1">Industries</h4>
              <div className="w-8 h-[2px] bg-[#FF4D00] mb-5"></div>
              <ul className="flex flex-col gap-3">
                {[
                  { name: "Perfume", href: "/industries" },
                  { name: "Skincare", href: "/industries" },
                  { name: "Ayurveda", href: "/industries" },
                  { name: "Nutraceuticals", href: "/industries" }
                ].map((item, i) => (
                  <li key={i}>
                    <Link href={item.href} className="flex items-center justify-between text-gray-600 hover:text-[#FF4D00] text-xs sm:text-[13px] font-medium transition-colors group py-0.5">
                      <span>{item.name}</span>
                      <ChevronRight size={13} className="text-[#FF4D00] shrink-0 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Stay Updated */}
            <div className="lg:col-span-4 flex flex-col lg:pl-10">
              <h4 className="text-[#0B1B3D] font-bold text-sm sm:text-[15px] mb-2">Stay Updated</h4>
              <p className="text-gray-500 text-xs sm:text-[13px] font-medium mb-4 leading-relaxed">
                Get insights, trends and expert tips on building successful brands.
              </p>

              {/* Newsletter Form */}
              <form onSubmit={handleSubscribe} className="relative mb-5">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-white border border-[#E8DFD3] rounded-full pl-4 pr-12 py-2.5 text-xs sm:text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#FF4D00] transition-colors shadow-2xs"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#FF4D00] hover:bg-[#E64500] flex items-center justify-center text-white transition-colors shadow-sm cursor-pointer"
                >
                  <ArrowRight size={15} />
                </button>
              </form>

              {subscribed && (
                <div className="flex items-center gap-2 text-emerald-700 text-xs font-semibold mb-4 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  <span>Subscribed! Welcome to Banega Brand insider.</span>
                </div>
              )}

              {/* 3 Benefit Items matching screenshot */}
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFF0E6] flex items-center justify-center shrink-0 text-[#FF4D00]">
                    <TrendingUp size={15} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#0B1B3D] text-xs font-bold leading-tight">Brand Building Insights</span>
                    <span className="text-gray-500 text-[11px]">Trends, tips and strategies</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFF0E6] flex items-center justify-center shrink-0 text-[#FF4D00]">
                    <Atom size={15} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#0B1B3D] text-xs font-bold leading-tight">Product Innovation</span>
                    <span className="text-gray-500 text-[11px]">Formulations and market trends</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFF0E6] flex items-center justify-center shrink-0 text-[#FF4D00]">
                    <BarChart3 size={15} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#0B1B3D] text-xs font-bold leading-tight">D2C Growth Tips</span>
                    <span className="text-gray-500 text-[11px]">Scale your brand successfully</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Thin Horizontal Divider */}
          <div className="w-full h-[1px] bg-[#F0EBE1] my-4"></div>

          {/* 4 Feature Badges Row matching screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[#F0EBE1] py-4">
            {[
              {
                icon: <Gem size={17} strokeWidth={2} />,
                title: "End-to-End Brand Support",
                sub: "From idea to scale"
              },
              {
                icon: <Hexagon size={17} strokeWidth={2} />,
                title: "Expert Formulation Guidance",
                sub: "Unique & market-ready products"
              },
              {
                icon: <Package size={17} strokeWidth={2} />,
                title: "Premium Packaging Solutions",
                sub: "Stand out on every shelf"
              },
              {
                icon: <Users size={17} strokeWidth={2} />,
                title: "D2C Growth Expertise",
                sub: "Build, Launch & Scale"
              }
            ].map((feat, i) => (
              <div
                key={i}
                className={`flex items-center gap-3.5 py-2.5 ${i !== 0 ? 'lg:pl-6' : ''} ${i !== 3 ? 'lg:pr-6' : ''}`}
              >
                <div className="w-9 h-9 rounded-full border border-[#FF4D00]/30 bg-white/70 flex items-center justify-center shrink-0 text-[#FF4D00] shadow-2xs">
                  {feat.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[#0B1B3D] text-xs font-bold leading-tight">{feat.title}</span>
                  <span className="text-gray-500 text-[11px] mt-0.5">{feat.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Divider */}
          <div className="w-full h-[1px] bg-[#F0EBE1] my-4"></div>

          {/* Bottom Copyright & Policy Links */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-2 text-xs text-gray-500 font-medium">
            <p>© 2025 BanegaBrand. All rights reserved.</p>
            <div className="flex items-center gap-3 sm:gap-4">
              <Link href="/privacy" className="hover:text-[#FF4D00] transition-colors">Privacy Policy</Link>
              <span className="text-[#E0D6C8]">|</span>
              <Link href="/terms" className="hover:text-[#FF4D00] transition-colors">Terms of Service</Link>
              <span className="text-[#E0D6C8]">|</span>
              <Link href="/disclaimer" className="hover:text-[#FF4D00] transition-colors">Disclaimer</Link>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
