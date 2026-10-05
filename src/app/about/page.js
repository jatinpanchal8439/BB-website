import React from "react";
import AboutHero from "../components/AboutHero";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FCFBF8] font-sans pt-24">
      <AboutHero />
      <Footer />
    </main>
  );
}
