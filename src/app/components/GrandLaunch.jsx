"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Play, Pause, X, Maximize2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function GrandLaunch() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const videoRefs = useRef({});
  const [isInView, setIsInView] = useState(false);
  const [activeAudioIndex, setActiveAudioIndex] = useState(null);
  const [isPlayingState, setIsPlayingState] = useState({});
  const [activeModalVideo, setActiveModalVideo] = useState(null);

  useGSAP(() => {
    gsap.from(".gsap-launch-header", {
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

    gsap.from(".gsap-launch-card", {
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

  const launches = [
    {
      id: "contemprory-launch",
      title: "CONTEMPRORY",
      subtitle: "Grand Launch Event",
      tag: "50+ Creators & Media",
      videoUrl: "/videos/contemprory-launch-testimonial.mp4",
      poster: "/videos/contemprory-launch-thumb.jpg",
      thumb: "/videos/contemprory-launch-thumb.jpg",
      logo: "/logos/Contempory logo clean.png",
      caseStudyUrl: "/case-study/contemprory"
    },
    {
      id: "drefor-launch",
      title: "DREFOR",
      subtitle: "Grand Launch Celebration",
      tag: "Luxury Launch Experience",
      videoUrl: "/videos/drefor-launch.mp4",
      poster: "/videos/drefor-launch-thumb.jpg",
      thumb: "/videos/drefor-launch-thumb.jpg",
      logo: "/logos/DREFOR LOGO.png",
      caseStudyUrl: "/case-study/drefor"
    },
    {
      id: "blush-en-bloom-launch",
      title: "Blush En Bloom",
      subtitle: "Grand Launch Reel",
      tag: "Perfume Launch Premiere",
      videoUrl: "/videos/blush-en-bloom-launch.mp4",
      poster: "/videos/blush-en-bloom-launch-thumb.jpg",
      thumb: "/videos/blush-en-bloom-launch-thumb.jpg",
      logo: "/logos/Blush en Bloom Logo.png",
      caseStudyUrl: "/case-study/blush-en-bloom"
    },
    {
      id: "contemprory-celebration",
      title: "CONTEMPRORY",
      subtitle: "Launch Afterparty & Creators",
      tag: "Electric Launch Moments",
      videoUrl: "/videos/contemprory-celebration.mp4",
      poster: "/videos/contemprory-celebration-thumb.jpg",
      thumb: "/videos/contemprory-celebration-thumb.jpg",
      logo: "/logos/Contempory logo clean.png",
      caseStudyUrl: "/case-study/contemprory"
    }
  ];

  // Observer to detect when section is in view
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
      launches.forEach((_, idx) => {
        const vid = videoRefs.current[idx];
        if (vid) vid.pause();
      });
      setActiveAudioIndex(null);
      setIsPlayingState({});
    } else {
      if (activeAudioIndex === null && !activeModalVideo) {
        launches.forEach((_, idx) => {
          const vid = videoRefs.current[idx];
          if (vid) {
            vid.muted = true;
            vid.loop = true;
            const playPromise = vid.play();
            if (playPromise !== undefined) {
              playPromise.then(() => {
                setIsPlayingState((prev) => ({ ...prev, [idx]: true }));
              }).catch(() => {});
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

  // Click handler: ONLY ONE video plays with sound at a time
  const handleVideoCardClick = (index) => {
    const clickedVid = videoRefs.current[index];
    if (!clickedVid) return;

    if (activeAudioIndex === index) {
      if (clickedVid.paused) {
        clickedVid.play().then(() => {
          setIsPlayingState((prev) => ({ ...prev, [index]: true }));
        }).catch(() => {});
      } else {
        clickedVid.pause();
        setIsPlayingState((prev) => ({ ...prev, [index]: false }));
      }
    } else {
      launches.forEach((_, idx) => {
        const otherVid = videoRefs.current[idx];
        if (otherVid && idx !== index) {
          otherVid.pause();
          otherVid.muted = true;
        }
      });

      clickedVid.muted = false;
      clickedVid.volume = 1;
      const playPromise = clickedVid.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setActiveAudioIndex(index);
          setIsPlayingState({ [index]: true });
        }).catch(() => {
          clickedVid.muted = true;
          clickedVid.play().then(() => {
            setActiveAudioIndex(index);
            setIsPlayingState({ [index]: true });
          }).catch(() => {});
        });
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative bg-[#111317] pt-14 sm:pt-20 pb-16 sm:pb-20 overflow-hidden border-t border-neutral-800 font-sans text-white">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#FF4D00]/10 opacity-60 blur-[150px] rounded-full pointer-events-none -z-0" />
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#FF6A2A]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 sm:gap-4 mb-3 gsap-launch-header">
            <div className="w-8 sm:w-12 h-[1.5px] bg-[#FF4D00]"></div>
            <span className="font-bold tracking-[0.2em] uppercase text-[#FF4D00] text-xs sm:text-[13px] font-[family-name:var(--font-poppins)]">
              GRAND LAUNCH REELS
            </span>
            <div className="w-8 sm:w-12 h-[1.5px] bg-[#FF4D00]"></div>
          </div>
          
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-2.5 gsap-launch-header font-[family-name:var(--font-plus-jakarta)]">
            Grand Launches That <span className="text-[#FF4D00] relative inline-block">
              Made Waves
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FF4D00]" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                <path d="M2 9C25 3 75 3 98 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-[#94A3B8] text-xs sm:text-sm md:text-base font-medium max-w-xl gsap-launch-header">
            Watch the electrifying launch events, creator showcases, and celebration reels brought to life by Banega Brand.
          </p>
        </div>

        {/* Video Reels Grid / Carousel */}
        <div className="w-full relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-1 hide-scrollbar scroll-smooth justify-start md:justify-center"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {launches.map((item, index) => {
              const isThisActiveAudio = activeAudioIndex === index;
              const isThisPlaying = !!isPlayingState[index];

              return (
                <div 
                  key={item.id || index}
                  onClick={() => handleVideoCardClick(index)}
                  className={`gsap-launch-card relative w-[72vw] min-[420px]:w-[240px] sm:w-[260px] md:w-[270px] lg:w-[280px] aspect-[9/16] shrink-0 snap-center rounded-[22px] overflow-hidden bg-black select-none border transition-all duration-300 cursor-pointer group shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_36px_rgba(255,77,0,0.2)] hover:-translate-y-1.5 ${
                    isThisActiveAudio 
                      ? "ring-2 ring-[#FF4D00] border-transparent shadow-[0_12px_32px_rgba(255,77,0,0.35)]" 
                      : "border-neutral-800 hover:border-neutral-700"
                  }`}
                >
                  {/* Video Player */}
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[index] = el;
                      else delete videoRefs.current[index];
                    }}
                    src={item.videoUrl}
                    poster={item.poster}
                    muted={!isThisActiveAudio}
                    playsInline
                    loop
                    preload="metadata"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Vignette Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 pointer-events-none" />

                  {/* Top-Left Fullscreen Expand Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalVideo(item);
                    }}
                    title="Fullscreen preview"
                    aria-label="Fullscreen preview"
                    className="absolute top-3 left-3 z-20 w-8 h-8 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-white/80 hover:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-105 cursor-pointer"
                  >
                    <Maximize2 size={13} />
                  </button>

                  {/* Center Play / Pause Button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div 
                      className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-black/50 backdrop-blur-md border border-white/35 flex items-center justify-center text-white shadow-2xl transition-all duration-300 ${
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

                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Fullscreen Reel Modal */}
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
                type="button"
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
          </div>
        </div>
      )}
    </section>
  );
}
