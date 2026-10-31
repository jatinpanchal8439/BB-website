"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Play, Pause, X, ChevronLeft, ChevronRight, ExternalLink, Maximize2, Volume2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const videoRefs = useRef({});
  const [isInView, setIsInView] = useState(false);
  const [activeAudioIndex, setActiveAudioIndex] = useState(null);
  const [isPlayingState, setIsPlayingState] = useState({});
  const [activeModalVideo, setActiveModalVideo] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    gsap.from(".gsap-testimonial-header", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 95%",
        once: true,
      },
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      immediateRender: false,
      clearProps: "all",
    });

    gsap.from(".gsap-testimonial-card", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 95%",
        once: true,
      },
      y: 25,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: "power2.out",
      immediateRender: false,
      clearProps: "all",
    });
  }, { scope: sectionRef });

  const testimonials = [
    {
      id: "contemprory",
      title: "Mohan Paroha",
      brandName: "CONTEMPRORY",
      subtitle: "Founder, CONTEMPRORY",
      founder: "Founder, CONTEMPRORY",
      websiteUrl: "https://contemprory.com",
      videoUrl: "/videos/paroha-testimonial.mp4",
      poster: "/videos/paroha-thumb.jpg",
      thumb: "/videos/paroha-thumb.jpg",
      logo: "/logos/Contempory logo clean.png",
      caseStudyUrl: "/case-study/contemprory"
    },
    {
      id: "rougx",
      title: "Swapnil Srivastava",
      brandName: "ROUGX",
      subtitle: "Founder, ROUGX",
      founder: "Founder, ROUGX",
      websiteUrl: "https://rougx.com",
      videoUrl: "/videos/speach-for-bb.mp4",
      poster: "/videos/rougx-thumb.jpg",
      thumb: "/videos/rougx-thumb.jpg",
      logo: "/logos/ROUGX LOGO 1.png",
      caseStudyUrl: "/case-study/rougx"
    },
    {
      id: "blush-en-bloom",
      title: "Blush En Bloom",
      brandName: "Blush En Bloom",
      subtitle: "Founder Testimonial",
      founder: "Founders, BLUSH EN BLOOM",
      websiteUrl: "https://blushenbloom.com",
      videoUrl: "/videos/blush-en-bloom-testimonial.mp4",
      poster: "/videos/blush-en-bloom-thumb.jpg",
      thumb: "/videos/blush-en-bloom-thumb.jpg",
      logo: "/logos/Blush en Bloom Logo.png",
      caseStudyUrl: "/case-study/blush-en-bloom"
    },
    {
      id: "klust",
      title: "Kangna Sharma",
      brandName: "KLUST",
      subtitle: "Founder, KLUST",
      founder: "Founder, KLUST",
      websiteUrl: "https://klust.in",
      videoUrl: "/videos/klust-testimonial.mp4",
      poster: "/videos/klust-thumb.jpg",
      thumb: "/videos/klust-thumb.jpg",
      logo: null,
      caseStudyUrl: "/case-study/klust"
    },
    {
      id: "blush-en-bloom-experience",
      title: "Blush En Bloom",
      brandName: "Blush En Bloom",
      subtitle: "Founder Experience",
      founder: "Founder Review",
      websiteUrl: "https://blushenbloom.com",
      videoUrl: "/videos/blush-en-bloom-review.mp4",
      poster: "/videos/blush-en-bloom-review-thumb.jpg",
      thumb: "/videos/blush-en-bloom-review-thumb.jpg",
      logo: "/logos/Blush en Bloom Logo.png",
      caseStudyUrl: "/case-study/blush-en-bloom"
    }
  ];

  // Observer to detect when testimonials section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) observer.unobserve(currentSection);
      observer.disconnect();
    };
  }, []);

  // When scrolled into view: preview silently until user clicks
  useEffect(() => {
    if (!isInView) {
      // Pause all when out of view
      testimonials.forEach((_, idx) => {
        const vid = videoRefs.current[idx];
        if (vid) vid.pause();
      });
      const timer = setTimeout(() => {
        setActiveAudioIndex(null);
        setIsPlayingState({});
      }, 0);
      return () => clearTimeout(timer);
    } else {
      // If in view and no video has been chosen for sound playback, preview silently
      if (activeAudioIndex === null && !activeModalVideo) {
        testimonials.forEach((_, idx) => {
          const vid = videoRefs.current[idx];
          if (vid) {
            vid.muted = true;
            vid.loop = true;
            const playPromise = vid.play();
            if (playPromise !== undefined) {
              playPromise.then(() => {
                setIsPlayingState((prev) => ({ ...prev, [idx]: true }));
              }).catch(() => {
                // Autoplay policy fallback
              });
            }
          }
        });
      }
    }
  }, [isInView, activeAudioIndex, activeModalVideo]);

  // Handle ESC key for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveModalVideo(null);
    };
    if (activeModalVideo) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeModalVideo]);

  // Click handler: ONLY ONE video plays at a time, and audio ONLY turns on when clicked
  const handleVideoCardClick = (index) => {
    const clickedVid = videoRefs.current[index];
    if (!clickedVid) return;

    if (activeAudioIndex === index) {
      // Toggle play/pause for the currently active unmuted video
      if (clickedVid.paused) {
        clickedVid.play().then(() => {
          setIsPlayingState((prev) => ({ ...prev, [index]: true }));
        }).catch(() => {});
      } else {
        clickedVid.pause();
        setIsPlayingState((prev) => ({ ...prev, [index]: false }));
      }
    } else {
      // Stop all other videos completely: "ek time pe ek video play hogi"
      testimonials.forEach((_, idx) => {
        const otherVid = videoRefs.current[idx];
        if (otherVid && idx !== index) {
          otherVid.pause();
          otherVid.muted = true;
          otherVid.currentTime = otherVid.currentTime; // keep position
        }
      });

      // Play the clicked video WITH AUDIO: "awaj tabhi aye jab ek pr click kru"
      clickedVid.muted = false;
      clickedVid.volume = 1;
      const playPromise = clickedVid.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setActiveAudioIndex(index);
          setIsPlayingState({ [index]: true });
        }).catch(() => {
          // If browser restricts audio play, retry with muted
          clickedVid.muted = true;
          clickedVid.play().then(() => {
            setActiveAudioIndex(index);
            setIsPlayingState({ [index]: true });
          }).catch(() => {});
        });
      }
    }
  };


  const scrollDirection = (dir) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild?.offsetWidth || 280;
      const gap = 16;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      if (dir === 'right') {
        if (container.scrollLeft >= maxScroll - 20) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
        }
      } else {
        if (container.scrollLeft <= 20) {
          container.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
        }
      }
    }
  };

  const scrollToIndex = (idx) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild?.offsetWidth || 280;
      const gap = 16;
      container.scrollTo({ left: idx * (cardWidth + gap), behavior: 'smooth' });
      setActiveIndex(idx);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild?.offsetWidth || 280;
      const gap = 16;
      const newIndex = Math.round(container.scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(testimonials.length - 1, Math.max(0, newIndex)));
    }
  };

  return (
    <section ref={sectionRef} className="relative bg-[#FCFBF8] pt-14 sm:pt-20 pb-16 sm:pb-20 overflow-hidden border-t border-gray-100 font-sans">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#FFEFE5] opacity-50 blur-[130px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 sm:gap-4 mb-3 gsap-testimonial-header">
            <div className="w-8 sm:w-12 h-[1.5px] bg-[#FFBCA0]"></div>
            <span className="font-bold tracking-[0.2em] uppercase text-[#FF4D00] text-xs sm:text-[13px] font-[family-name:var(--font-poppins)]">
              CLIENT VOICES
            </span>
            <div className="w-8 sm:w-12 h-[1.5px] bg-[#FFBCA0]"></div>
          </div>
          
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1B36] leading-[1.1] tracking-tight mb-2.5 gsap-testimonial-header font-[family-name:var(--font-plus-jakarta)]">
            What <span className="text-[#FF4D00] relative inline-block">
              Founders
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FF4D00]" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                <path d="M2 9C25 3 75 3 98 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span> Say
          </h2>
          
          {/* Subtitle */}
          <p className="text-[#64748B] text-xs sm:text-sm md:text-base font-medium max-w-xl gsap-testimonial-header">
            Tap any reel to play with sound. Real stories captured live.
          </p>
        </div>

        {/* 8-Card Video Reels Carousel */}
        <div className="w-full relative">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-3.5 sm:gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-1 hide-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((test, index) => {
              const isThisActiveAudio = activeAudioIndex === index;
              const isThisPlaying = !!isPlayingState[index];

              return (
                <div 
                  key={test.id || index}
                  onClick={() => handleVideoCardClick(index)}
                  className={`gsap-testimonial-card relative w-[72vw] min-[420px]:w-[240px] sm:w-[260px] md:w-[270px] lg:w-[280px] aspect-[9/16] shrink-0 snap-center rounded-[22px] overflow-hidden bg-black select-none border transition-all duration-300 cursor-pointer group shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.22)] hover:-translate-y-1 ${
                    isThisActiveAudio 
                      ? "ring-2 ring-[#FF4D00] border-transparent shadow-[0_12px_32px_rgba(255,77,0,0.25)]" 
                      : "border-neutral-800/80 hover:border-neutral-700"
                  }`}
                >
                  {/* Video Player Element */}
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[index] = el;
                      else delete videoRefs.current[index];
                    }}
                    src={test.videoUrl}
                    poster={test.poster}
                    muted={!isThisActiveAudio}
                    playsInline
                    loop
                    preload="metadata"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Vignette Overlays for Maximum Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25 pointer-events-none" />

                  {/* Top-Right Sound Active Indicator */}
                  {isThisActiveAudio && isThisPlaying && (
                    <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold tracking-wide shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse" />
                      <Volume2 size={12} className="text-[#FF4D00]" />
                      <span>SOUND ON</span>
                    </div>
                  )}

                  {/* Top-Left Fullscreen Expand Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalVideo(test);
                    }}
                    title="Fullscreen preview"
                    aria-label="Fullscreen preview"
                    className="absolute top-3 left-3 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white/80 hover:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-105 cursor-pointer"
                  >
                    <Maximize2 size={13} />
                  </button>

                  {/* Center Play / Pause Icon Button (matches user screenshot) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div 
                      className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-black/45 backdrop-blur-md border border-white/35 flex items-center justify-center text-white shadow-2xl transition-all duration-300 ${
                        isThisActiveAudio && isThisPlaying
                          ? "opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100" 
                          : "opacity-90 group-hover:opacity-100 group-hover:scale-110"
                      }`}
                    >
                      {isThisActiveAudio && isThisPlaying ? (
                        <Pause size={18} className="fill-white text-white" />
                      ) : (
                        <Play size={18} className="ml-0.5 fill-white text-white" />
                      )}
                    </div>
                  </div>

                  {/* Bottom Floating Pill Bar: Click name/pill to redirect to brand website (contemprory.com, rougx.com, blushenbloom.com) */}
                  <div className="absolute bottom-3 inset-x-2.5 sm:inset-x-3 z-20">
                    <a
                      href={test.websiteUrl || test.caseStudyUrl || "/case-study"}
                      target={test.websiteUrl ? "_blank" : undefined}
                      rel={test.websiteUrl ? "noopener noreferrer" : undefined}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      title={`Visit ${test.brandName || test.title} (${test.websiteUrl ? test.websiteUrl.replace('https://', '') : ''})`}
                      className="group/pill flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-2xl bg-[#121214]/90 hover:bg-[#1C2028] backdrop-blur-md border border-white/15 hover:border-[#FF4D00]/60 shadow-2xl transition-all duration-300 cursor-pointer"
                    >
                      {/* Left: Small Square Thumbnail Image */}
                      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shrink-0 bg-neutral-900 border border-white/15 group-hover/pill:scale-105 transition-transform">
                        <Image 
                          src={test.thumb} 
                          alt={test.title} 
                          fill 
                          sizes="40px" 
                          className="object-cover" 
                        />
                      </div>

                      {/* Middle: Full Title & Subtitle with external link redirect indicator */}
                      <div className="flex-1 min-w-0 text-left">
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-white group-hover/pill:text-[#FF4D00] font-bold text-xs sm:text-[13px] leading-tight truncate transition-colors">
                            {test.title}
                          </h4>
                          <ExternalLink size={12} className="text-[#FF4D00] shrink-0 opacity-80 group-hover/pill:opacity-100 group-hover/pill:translate-x-0.5 group-hover/pill:-translate-y-0.5 transition-transform" />
                        </div>
                        <p className="text-[#94A3B8] group-hover/pill:text-gray-300 text-[10px] sm:text-[11px] font-semibold leading-tight mt-0.5 truncate transition-colors">
                          {test.subtitle}
                        </p>
                      </div>
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Controls: Clickable Dots & Navigation Arrows (visible on all screens) */}
          <div className="flex items-center justify-between mt-8 px-2 max-w-[1440px] mx-auto">
            {/* Center Dots */}
            <div className="flex items-center justify-center gap-1.5 mx-auto">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToIndex(idx)}
                  aria-label={`Go to reel ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer border-0 p-0 ${
                    activeIndex === idx 
                      ? 'w-7 h-2 bg-[#FF4D00]' 
                      : 'w-2 h-2 bg-[#FFD6C0] hover:bg-[#FFB088]'
                  }`}
                />
              ))}
            </div>

            {/* Left / Right arrow buttons */}
            <div className="flex items-center gap-2">
              <button 
                type="button"
                onClick={() => scrollDirection('left')}
                aria-label="Previous testimonial"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 hover:border-gray-400 hover:text-black transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                type="button"
                onClick={() => scrollDirection('right')}
                aria-label="Next testimonial"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FF4D00] flex items-center justify-center text-white hover:bg-[#E64500] transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Fullscreen Reel Modal (opens when clicking + button) */}
      {activeModalVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 transition-all"
          onClick={() => setActiveModalVideo(null)}
        >
          <div 
            className="relative w-full max-w-sm sm:max-w-md aspect-[9/16] max-h-[90vh] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/15 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between p-4 bg-gradient-to-b from-black/85 via-black/45 to-transparent">
              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-white/20">
                  <Image 
                    src={activeModalVideo.thumb} 
                    alt={activeModalVideo.title} 
                    fill 
                    sizes="32px" 
                    className="object-cover" 
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-white font-bold text-sm sm:text-base leading-tight truncate">
                    {activeModalVideo.title}
                  </span>
                  <span className="text-[#FF4D00] text-[11px] font-semibold truncate">
                    {activeModalVideo.subtitle}
                  </span>
                </div>
              </div>

              <button 
                onClick={() => setActiveModalVideo(null)}
                aria-label="Close video"
                className="w-9 h-9 shrink-0 rounded-full bg-white/20 hover:bg-white/35 text-white flex items-center justify-center backdrop-blur-md transition-all active:scale-95 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Video Player */}
            <video
              src={activeModalVideo.videoUrl}
              poster={activeModalVideo.poster}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Case Study / Official Website Link */}
            {(activeModalVideo.websiteUrl || activeModalVideo.caseStudyUrl) && (
              <div className="absolute bottom-4 inset-x-4 z-20">
                <a
                  href={activeModalVideo.websiteUrl || activeModalVideo.caseStudyUrl}
                  target={activeModalVideo.websiteUrl ? "_blank" : undefined}
                  rel={activeModalVideo.websiteUrl ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#FF4D00] hover:bg-[#E64500] text-white font-bold text-xs sm:text-sm shadow-xl transition-all active:scale-95 cursor-pointer"
                >
                  <span>{activeModalVideo.websiteUrl ? `Visit ${activeModalVideo.brandName || activeModalVideo.title} Website` : "Explore Full Case Study"}</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

