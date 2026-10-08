import React from "react";
import CaseStudyBiographey from "../../components/CaseStudyBiographey";
import CaseStudyDetailedBiographey from "../../components/CaseStudyDetailedBiographey";
import Footer from "../../components/Footer";

export default function BiographeyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FCFBF8] font-sans">
      <CaseStudyBiographey />
      <CaseStudyDetailedBiographey />
      <Footer />
    </main>
  );
}
