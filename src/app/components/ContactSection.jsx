"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { User, Phone, ChevronDown, FileText, LayoutGrid, IndianRupee, Clock } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: '',
    budget: '',
    timeline: '',
    idea: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          industry: formData.category,
          budget: formData.budget,
          timeline: formData.timeline,
          description: formData.idea,
        }),
      });
      const result = await res.json();
      if (res.ok && result.success) {
        setStatus('success');
        setFormData({ name: '', phone: '', category: '', idea: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full font-sans overflow-hidden bg-[#FCFAF5] bg-cover bg-center bg-no-repeat py-10 sm:py-16 lg:py-20 xl:py-24"
      style={{ backgroundImage: "url('/contact-exact-bg.png')" }}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12 relative z-10">

        {/* Left — Sketch Illustration matching design */}
        <div className="w-full lg:w-[50%] xl:w-[49%] flex items-center justify-center lg:justify-start relative">
          <div className="relative w-full max-w-[420px] sm:max-w-[540px] lg:max-w-none transform-gpu lg:scale-105 xl:scale-110 lg:-translate-x-2">
            <Image
              src="/contact-sketch-illustration.png"
              alt="Brand Idea Concept Sketch"
              width={1740}
              height={904}
              priority
              className="w-full h-auto object-contain drop-shadow-sm select-none pointer-events-none"
            />
          </div>
        </div>

        {/* Right — Text + Form matching screenshot */}
        <div className="w-full lg:w-[48%] xl:w-[46%] flex flex-col items-start pt-1 lg:pt-0">
          
          {/* Orange horizontal dash */}
          <div className="w-10 sm:w-12 h-[3.5px] bg-[#FF5000] rounded-full mb-4 sm:mb-6" />

          {/* Heading */}
          <h2 className="text-[28px] xs:text-[32px] sm:text-[42px] lg:text-[48px] xl:text-[52px] font-[800] text-[#0F1C36] leading-[1.15] sm:leading-[1.12] tracking-tight mb-3 sm:mb-4">
            Let&apos;s Talk About<br />
            <span className="text-[#FF5000]">Your Idea</span>
          </h2>

          {/* Subtitle */}
          <p className="text-[#64748B] text-[14px] sm:text-[16px] leading-[1.6] sm:leading-[1.65] mb-6 sm:mb-7 max-w-[490px]">
            No formula or manufacturer needed. Tell us what you&apos;re thinking of building, and we&apos;ll help you figure out the next step.
          </p>

          {/* Form */}
          {status === 'success' ? (
            <div className="w-full bg-white rounded-2xl p-6 sm:p-8 text-center shadow-md border border-[#E2E8F0]">
              <div className="text-4xl mb-3 sm:mb-4">🎉</div>
              <h3 className="text-[#0F1C36] font-black text-xl mb-2">We got your idea!</h3>
              <p className="text-[#64748B] text-sm">Our team will reach out to you shortly. Thank you!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-[520px] flex flex-col gap-3.5 sm:gap-4">
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="relative">
                  <User size={18} className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#E2E8F0] rounded-xl pl-10 sm:pl-11 pr-4 py-3 sm:py-3.5 text-[16px] sm:text-[14px] text-[#0F1C36] placeholder-[#94A3B8] outline-none focus:border-[#FF5000] focus:ring-1 focus:ring-[#FF5000] transition-colors shadow-xs"
                  />
                </div>
                <div className="relative">
                  <Phone size={18} className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone / WhatsApp"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#E2E8F0] rounded-xl pl-10 sm:pl-11 pr-4 py-3 sm:py-3.5 text-[16px] sm:text-[14px] text-[#0F1C36] placeholder-[#94A3B8] outline-none focus:border-[#FF5000] focus:ring-1 focus:ring-[#FF5000] transition-colors shadow-xs"
                  />
                </div>
              </div>

              {/* Row 2: Category Dropdown */}
              <div className="relative">
                <LayoutGrid size={18} className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" />
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-[#E2E8F0] rounded-xl pl-10 sm:pl-11 pr-10 py-3 sm:py-3.5 text-[16px] sm:text-[14px] text-[#0F1C36] placeholder-[#94A3B8] outline-none focus:border-[#FF5000] focus:ring-1 focus:ring-[#FF5000] transition-colors shadow-xs appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select Category</option>
                  <option value="Perfume & Fragrance">Perfume & Fragrance</option>
                  <option value="Skincare & Beauty">Skincare & Beauty</option>
                  <option value="Ayurveda & Wellness">Ayurveda & Wellness</option>
                  <option value="Nutraceuticals">Nutraceuticals</option>
                  <option value="Other">Other</option>
                </select>
                <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" />
              </div>

              {/* Row 2.5: Budget and Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {/* Budget Dropdown */}
                <div className="relative">
                  <IndianRupee size={18} className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" />
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#E2E8F0] rounded-xl pl-10 sm:pl-11 pr-10 py-3 sm:py-3.5 text-[16px] sm:text-[14px] text-[#0F1C36] placeholder-[#94A3B8] outline-none focus:border-[#FF5000] focus:ring-1 focus:ring-[#FF5000] transition-colors shadow-xs appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Estimated Budget</option>
                    <option value="Below ₹5 Lakh">Below ₹5 Lakh</option>
                    <option value="₹5-10 Lakh">₹5-10 Lakh</option>
                    <option value="₹10-25 Lakh">₹10-25 Lakh</option>
                    <option value="₹25 Lakh+">₹25 Lakh+</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" />
                </div>

                {/* Timeline Dropdown */}
                <div className="relative">
                  <Clock size={18} className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" />
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#E2E8F0] rounded-xl pl-10 sm:pl-11 pr-10 py-3 sm:py-3.5 text-[16px] sm:text-[14px] text-[#0F1C36] placeholder-[#94A3B8] outline-none focus:border-[#FF5000] focus:ring-1 focus:ring-[#FF5000] transition-colors shadow-xs appearance-none cursor-pointer"
                  >
                    <option value="" disabled>How Soon To Launch?</option>
                    <option value="1 Month">1 Month</option>
                    <option value="3 Months">3 Months</option>
                    <option value="More than 3 months">More than 3 months</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" />
                </div>
              </div>

              {/* Row 3: Idea Textarea */}
              <div className="relative">
                <FileText size={18} className="absolute left-3.5 sm:left-4 top-3.5 sm:top-4 text-[#94A3B8]" />
                <textarea
                  name="idea"
                  placeholder="Tell us about your idea..."
                  value={formData.idea}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-white border border-[#E2E8F0] rounded-xl pl-10 sm:pl-11 pr-4 py-3 sm:py-3.5 text-[16px] sm:text-[14px] text-[#0F1C36] placeholder-[#94A3B8] outline-none focus:border-[#FF5000] focus:ring-1 focus:ring-[#FF5000] transition-colors shadow-xs resize-none"
                />
              </div>

              {/* Row 4: Submit Button */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto inline-flex items-center justify-between gap-4 sm:gap-6 bg-[#0E1E38] hover:bg-[#162B4E] text-white pl-6 sm:pl-8 pr-2 sm:pr-2.5 py-2.5 rounded-full font-bold text-[14px] sm:text-[15px] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 group disabled:opacity-60 cursor-pointer"
                >
                  <span>{status === 'loading' ? 'Sending...' : 'Book a Free Call'}</span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FF5000] flex items-center justify-center shrink-0 shadow-inner">
                    <Phone size={16} className="text-white fill-white rotate-[15deg]" />
                  </div>
                </button>
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm mt-1">Something went wrong. Please try again.</p>
              )}
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
