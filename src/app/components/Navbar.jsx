"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Auto-close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Work", href: "/work" },
    { name: "Case Study", href: "/case-study" },
    { name: "Industries", href: "/industries" },
    { name: "About Us", href: "/about" },
    { name: "Manufacturer Network", href: "/manufacturer" },
    { name: "Investment Guide", href: "/investment-guide" },
    { name: "Marketplace Launch", href: "/launch" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
        <nav className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-0">
          <div className="flex items-center justify-between w-full h-[60px] md:h-[70px] lg:h-[80px]">
            {/* Logo Area */}
            <Link href="/" className="flex items-center -ml-2" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/logo-removebg-preview.png"
                alt="Banega Brand Logo"
                width={300}
                height={100}
                className="object-contain h-14 sm:h-16 md:h-20 lg:h-28 w-auto transform origin-left scale-110 md:scale-100 -my-4 lg:-my-8"
                priority
              />
            </Link>

            {/* Navigation Links - Desktop */}
            <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href.replace('/#', '')));
                return (
                  <li key={link.name} className="relative flex flex-col items-center group">
                    <Link
                      href={link.href}
                      className={`text-[12px] xl:text-[13px] whitespace-nowrap transition-colors duration-200 outline-none ${isActive ? "text-gray-900 font-bold" : "text-gray-700 hover:text-gray-900 font-normal"
                        }`}
                    >
                      {link.name}
                    </Link>
                    {/* Active Dot */}
                    {isActive ? (
                      <span className="absolute -bottom-2.5 w-1.5 h-1.5 rounded-full bg-[#FF4D00]"></span>
                    ) : (
                      <span className="absolute -bottom-2.5 w-1.5 h-1.5 rounded-full bg-[#FF4D00] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* CTA Button & Mobile Toggle */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="hidden sm:flex group items-center gap-2 bg-[#FF4D00] hover:bg-[#E64500] transition-colors duration-300 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium"
              >
                Book a Call
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-gray-800 hover:bg-gray-100 active:scale-95 transition-all cursor-pointer"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                {isMobileMenuOpen ? <X size={26} className="text-[#FF4D00]" /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Backdrop Overlay when Mobile Menu is Open */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 top-[60px] md:top-[70px] bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Dropdown / Drawer */}
      <div
        className={`lg:hidden fixed top-[60px] md:top-[70px] left-0 right-0 w-full bg-white shadow-2xl border-b border-gray-100 z-50 max-h-[calc(100dvh-60px)] md:max-h-[calc(100dvh-70px)] overflow-y-auto transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 visible pointer-events-auto"
            : "opacity-0 -translate-y-3 invisible pointer-events-none"
        }`}
      >
        <div className="px-5 py-5 flex flex-col gap-2">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href.replace('/#', '')));
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[15px] font-semibold transition-colors ${
                      isActive
                        ? "bg-orange-50 text-[#FF4D00] font-bold"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#FF4D00]"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="pt-3 border-t border-gray-100 mt-2">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#FF4D00] hover:bg-[#E64500] text-white px-6 py-3.5 rounded-full text-sm font-bold w-full shadow-md shadow-orange-500/20 active:scale-[0.98] transition-all"
            >
              Book a Call
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
