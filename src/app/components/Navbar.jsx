"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Work", href: "/work" },
    { name: "Case Study", href: "/case-study" },
    { name: "Industries", href: "/industries" },
    { name: "About Us", href: "/about" },
    { name: "Manufacturer Network", href: "/manufacturer" },
    { name: "Investment Guide", href: "/investment-guide" },
    { name: "Launch", href: "/launch" },
    { name: "FAQ", href: "/faq" },
    { name: "Blogs", href: "/blog" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-0 pb-2 transition-all duration-300">
      <div className="flex items-center justify-between w-full">
        {/* Logo Area */}
        <Link href="/" className="flex items-center -ml-2">
          <Image 
            src="/logo-removebg-preview.png" 
            alt="Banega Brand Logo" 
            width={300} 
            height={100} 
            className="object-contain h-14 md:h-20 lg:h-28 w-auto transform origin-left scale-110 md:scale-100" 
            priority
          />
        </Link>

        {/* Navigation Links - Desktop */}
        <ul className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href.replace('/#', '')));
            return (
              <li key={link.name} className="relative flex flex-col items-center group">
                <Link 
                  href={link.href}
                  className={`text-[12px] xl:text-[13px] whitespace-nowrap transition-colors duration-200 outline-none ${
                    isActive ? "text-gray-900 font-bold" : "text-gray-600 hover:text-gray-900 font-medium"
                  }`}
                >
                  {link.name}
                </Link>
                {/* Active Dot */}
                {isActive ? (
                  <span className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-[#FF4D00]"></span>
                ) : (
                  <span className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-[#FF4D00] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                )}
              </li>
            );
          })}
        </ul>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            className="hidden sm:flex group items-center gap-2 bg-[#FF4D00] hover:bg-[#E64500] transition-colors duration-300 text-white px-6 py-2.5 rounded-full text-sm font-medium"
          >
            Book a Call
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden p-2 text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      
      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col gap-4 z-50 transition-all duration-300 origin-top ${isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
      >

          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-lg font-medium outline-none ${
                    pathname === link.href ? "text-[#FF4D00]" : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link 
            href="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="sm:hidden mt-2 flex items-center justify-center gap-2 bg-[#FF4D00] text-white px-6 py-3 rounded-full text-sm font-bold w-full"
          >
            Book a Call
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
    </nav>
  );
}
