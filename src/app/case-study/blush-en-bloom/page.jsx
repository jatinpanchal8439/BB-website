import React from "react";
import CaseStudyBlush from "../../components/CaseStudyBlush";
import CaseStudyDetailedBlush from "../../components/CaseStudyDetailedBlush";
import Footer from "../../components/Footer";

export default function BlushEnBloomPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FCFBF8] font-sans">
      <CaseStudyBlush />
      <CaseStudyDetailedBlush />
      <Footer />
    </main>
  );
}
