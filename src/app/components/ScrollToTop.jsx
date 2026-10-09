"use client";
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#FF5000] text-white shadow-[0_8px_30px_rgba(255,80,0,0.3)] hover:shadow-[0_12px_40px_rgba(255,80,0,0.4)] hover:bg-[#E64800] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} strokeWidth={2.5} />
        </button>
      )}
    </>
  );
}
