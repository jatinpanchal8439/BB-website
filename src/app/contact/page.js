import React from "react";
import ContactHero from "../components/ContactHero";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact Us & Book a Call | Banega Brand",
  description: "Get in touch with Banega Brand. Tell us about your perfume, cosmetic, skincare or Ayurveda brand idea and get a turnkey launch plan.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FCFAF5] font-sans overflow-x-hidden w-full">
      <ContactHero />
      <ContactSection />
      <Footer />
    </main>
  );
}
