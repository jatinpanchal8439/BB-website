import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ChevronRight, 
  MessageCircle,
  Gem,
  Settings,
  Package,
  Users,
  Leaf,
  Box,
  BarChart3
} from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Pre-Footer CTA Section */}
      <section className="relative bg-[#FCFBF8] py-24 border-t border-gray-100 flex flex-col items-center justify-center text-center px-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-[#FF4D00] opacity-50"></div>
          <span className="text-[#FF4D00] text-xs font-bold tracking-[0.2em] uppercase">Let's Talk</span>
          <div className="w-8 h-[1px] bg-[#FF4D00] opacity-50"></div>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-black text-[#0B1B3D] leading-tight mb-5 flex flex-wrap items-center justify-center gap-x-3">
          Ready to Build
          <span className="text-[#FF4D00] flex items-center gap-2">
            Your Brand?
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
              <path d="M4 12L9 9L12 4L15 9L20 12L15 15L12 20L9 15L4 12Z" fill="#FF4D00"/>
            </svg>
          </span>
        </h2>
        
        <p className="text-gray-500 text-lg font-medium max-w-2xl mb-8 leading-relaxed">
          Book a short call with our team and tell us what you're thinking of building. Let's turn your idea into a real brand.
        </p>

        <Link 
          href="#book-call"
          className="inline-flex items-center gap-2 bg-[#17439E] hover:bg-[#102F70] text-white px-8 py-4 rounded-full text-sm font-bold transition-all duration-300 shadow-[0_8px_20px_-4px_rgba(23,67,158,0.4)] hover:shadow-lg hover:-translate-y-0.5"
        >
          Book a 1-on-1 Call
          <ArrowRight size={18} />
        </Link>
      </section>

      {/* Main Footer Section */}
      <footer className="relative bg-[#FCFBF8] pt-20 border-t border-gray-200 overflow-hidden">
        
        {/* Wavy Background Image Placeholder (using CSS radial gradients to mimic the wave) */}
        <div className="absolute bottom-0 left-0 w-full h-[400px] overflow-hidden pointer-events-none opacity-40">
           <svg viewBox="0 0 1440 400" className="absolute bottom-0 w-full h-full preserve-3d" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M0 200 C300 300 600 0 1000 150 C1200 220 1440 50 1440 50 L1440 400 L0 400 Z" fill="url(#grad)" />
             <defs>
               <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                 <stop offset="0%" stopColor="#FFF2E8" />
                 <stop offset="100%" stopColor="#FFD7BA" />
               </linearGradient>
             </defs>
           </svg>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          
          {/* Top Grid Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 mb-16">
            
            {/* Column 1: Brand Info */}
            <div className="lg:col-span-3 flex flex-col items-start pr-4">
              <div className="mb-6 relative w-[340px] h-[100px] -ml-2">
                <Image src="/logo-removebg-preview.png" alt="BanegaBrand Logo" fill className="object-contain object-left transform scale-110 origin-left" />
              </div>
              
              <h3 className="text-gray-500 text-[15px] font-medium leading-relaxed mb-4">
                From Idea to Market —<br />Your Brand, Our Expertise.
              </h3>
              
              <div className="w-8 h-[2px] bg-[#FF4D00] mb-5"></div>
              
              <p className="text-gray-400 text-sm font-medium leading-relaxed mb-8">
                We help entrepreneurs and businesses launch successful Perfume, Cosmetic, Skincare, Ayurveda, Beauty, Wellness and D2C brands in India — from product idea to market launch.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
                {[
                  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
                  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
                  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg> },
                  { icon: <MessageCircle size={18} /> }
                ].map((social, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-[#FFF2E8] flex items-center justify-center text-[#1E1E1E] hover:bg-[#FF4D00] hover:text-white transition-colors">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Our Services */}
            <div className="lg:col-span-2">
              <h4 className="text-[#0B1B3D] font-bold mb-6">Our Services</h4>
              <ul className="flex flex-col gap-3.5">
                {[
                  "Perfume Brand Development",
                  "Cosmetic Manufacturing",
                  "Skincare Product Development",
                  "Ayurveda & Wellness Brands",
                  "Custom Formulation",
                  "Packaging & Branding",
                  "Regulatory & Compliance",
                  "Go-to-Market Support"
                ].map((link, i) => (
                  <li key={i}>
                    <Link href="#" className="flex items-center justify-between text-gray-500 hover:text-[#FF4D00] text-sm font-medium transition-colors group">
                      {link}
                      <ChevronRight size={14} className="text-[#FF4D00] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-[#0B1B3D] font-bold mb-6">Quick Links</h4>
              <ul className="flex flex-col gap-3.5">
                {[
                  "About Us",
                  "Our Process",
                  "Success Stories",
                  "Blogs & Resources",
                  "FAQs",
                  "Contact Us"
                ].map((link, i) => (
                  <li key={i}>
                    <Link href="#" className="flex items-center justify-between text-gray-500 hover:text-[#FF4D00] text-sm font-medium transition-colors group">
                      {link}
                      <ChevronRight size={14} className="text-[#FF4D00] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Popular Categories */}
            <div className="lg:col-span-2">
              <h4 className="text-[#0B1B3D] font-bold mb-6">Popular Categories</h4>
              <ul className="flex flex-col gap-3.5">
                {[
                  "Perfume Brands",
                  "Cosmetic Brands",
                  "Skincare Brands",
                  "Ayurveda Brands",
                  "Beauty & Personal Care",
                  "Wellness Brands",
                  "D2C Brand Launch"
                ].map((link, i) => (
                  <li key={i}>
                    <Link href="#" className="flex items-center justify-between text-gray-500 hover:text-[#FF4D00] text-sm font-medium transition-colors group">
                      {link}
                      <ChevronRight size={14} className="text-[#FF4D00] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Newsletter & Updates */}
            <div className="lg:col-span-3 flex flex-col">
              <h4 className="text-[#0B1B3D] font-bold mb-4">Stay Updated</h4>
              <p className="text-gray-500 text-sm font-medium mb-6">
                Get insights, trends and expert tips on building successful brands.
              </p>
              
              <div className="relative mb-8">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-white border border-gray-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[#FF4D00] transition-colors shadow-sm"
                />
                <button className="absolute right-1 top-1 w-[38px] h-[38px] rounded-full bg-[#FF4D00] flex items-center justify-center text-white hover:bg-[#e64500] transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF2E8] flex items-center justify-center flex-shrink-0 text-[#FF4D00]">
                    <Leaf size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#0B1B3D] text-xs font-bold">Brand Building Insights</span>
                    <span className="text-gray-400 text-[11px] font-medium">Trends, tips and strategies</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF2E8] flex items-center justify-center flex-shrink-0 text-[#FF4D00]">
                    <Box size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#0B1B3D] text-xs font-bold">Product Innovation</span>
                    <span className="text-gray-400 text-[11px] font-medium">Formulations and market trends</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF2E8] flex items-center justify-center flex-shrink-0 text-[#FF4D00]">
                    <BarChart3 size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#0B1B3D] text-xs font-bold">D2C Growth Tips</span>
                    <span className="text-gray-400 text-[11px] font-medium">Scale your brand successfully</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="w-full h-[1px] bg-gray-200 mb-8"></div>

          {/* Features Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-white">
            {[
              { icon: <Gem size={20} />, title: "End-to-End Brand Support", sub: "From idea to launch" },
              { icon: <Settings size={20} />, title: "Expert Formulation Guidance", sub: "Unique & market-ready products" },
              { icon: <Package size={20} />, title: "Premium Packaging Solutions", sub: "Stand out on every shelf" },
              { icon: <Users size={20} />, title: "D2C Growth Expertise", sub: "Build, Launch & Scale" }
            ].map((feat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#FF4D00] shadow-sm border border-gray-100">
                  {feat.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[#0B1B3D] text-[13px] font-bold">{feat.title}</span>
                  <span className="text-gray-500 text-[11px] font-medium">{feat.sub}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-[1px] bg-gray-200/60 mb-6"></div>

          {/* Bottom Copyright & Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-8">
            <p className="text-gray-500 text-xs font-medium">
              © 2026 BanegaBrand. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
              <Link href="#" className="hover:text-[#FF4D00] transition-colors">Privacy Policy</Link>
              <span className="text-gray-300">|</span>
              <Link href="#" className="hover:text-[#FF4D00] transition-colors">Terms of Service</Link>
              <span className="text-gray-300">|</span>
              <Link href="#" className="hover:text-[#FF4D00] transition-colors">Disclaimer</Link>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
