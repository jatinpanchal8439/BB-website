"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Banner from "./Banner";
import Cards from "./Cards";
import Image from "next/image";


gsap.registerPlugin(useGSAP);

export default function HomeClient() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Cinematic Background Zoom
    gsap.from(".gsap-bg", {
      scale: 1.15,
      duration: 3,
      ease: "power2.out",
    });

    // 2. Tagline elegant drop
    tl.from(".gsap-tagline", {
      y: -30,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    }, 0.2)
    
    // 3. Premium Text Reveal for Title (slides up from hidden overflow wrapper)
    .from(".gsap-title-word", {
      y: "120%",
      duration: 1.2,
      stagger: 0.15,
      ease: "expo.out",
    }, "-=0.8")

    // 4. Draw SVG Orbit Path smoothly
    .fromTo(".gsap-orbit-path", 
      { strokeDasharray: 2400, strokeDashoffset: 2400 },
      { strokeDashoffset: 0, duration: 1.8, ease: "power2.inOut" },
      "-=1.2"
    )
    .from(".gsap-orbit-circle", {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(2)"
    }, "-=0.6")

    // 5. Build Stats dynamically piece by piece
    .from(".gsap-stat-num", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power4.out"
    }, "-=1.2")
    .from(".gsap-dot", {
      scale: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "back.out(2)"
    }, "-=0.8")
    .from(".gsap-hline", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.8")
    .from(".gsap-vline", {
      scaleY: 0,
      transformOrigin: "top center",
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.8")
    .from(".gsap-stat-text", {
      opacity: 0,
      x: -15,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.8")

    // 6. Subtitle and Buttons smooth fade up
    .from(".gsap-subtitle", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.6")
    .from(".gsap-buttons", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.6")

    // 7. Text overlays above cards
    .from(".gsap-card-text", {
      opacity: 0,
      y: 10,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    }, "-=0.6")

    // 8. Cards Staggered Entry from bottom
    .from(".gsap-card", {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out"
    }, "-=0.8");

    // 9. Marketing words slot machine ticker
    const tickerTl = gsap.timeline({ repeat: -1, delay: 3 });
    const totalWords = 6;
    const step = 100 / totalWords;
    
    for (let i = 1; i < totalWords; i++) {
      tickerTl.to(".gsap-rotating-words", {
        yPercent: -step * i,
        duration: 0.6,
        ease: "expo.inOut",
        delay: 1.8
      });
    }
    // Instantly loop back to the first word
    tickerTl.set(".gsap-rotating-words", { yPercent: 0 });

  }, { scope: container });

  return (
    <main ref={container} className="relative min-h-[100vh] flex flex-col bg-[#FCFBF8] font-sans overflow-x-clip selection:bg-[#FF4D00] selection:text-white pb-12 md:pb-16">
      {/* Full Section Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] md:top-[-25%] left-0 right-0 bottom-0">
          <Image
            src="/Hero-bg.png"
            alt="Hero Background"
            fill
            className="object-cover object-bottom opacity-95 gsap-bg origin-bottom"
            priority
            quality={100}
          />
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col w-full">
        <Banner />
        <Cards />
      </div>
    </main>
  );
}
