import React from "react";
import AboutHero from "../components/AboutHero";
import OurStory from "../components/OurStory";
import MeetFounder from "../components/MeetFounder";
import AboutImpact from "../components/AboutImpact";
import AboutValues from "../components/AboutValues";
import AboutProcess from "../components/AboutProcess";
import AboutTestimonials from "../components/AboutTestimonials";
import AboutCTA from "../components/AboutCTA";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FCFBF8] font-sans pt-20 sm:pt-24 overflow-x-hidden w-full">
      <AboutHero />
      <OurStory />
      <MeetFounder />
      <AboutImpact />
      <AboutValues />
      <AboutProcess />
      <AboutTestimonials />
      <AboutCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
