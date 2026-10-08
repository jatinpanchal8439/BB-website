import React from "react";
import Footer from "../components/Footer";
import WhatWeDo from "../components/WhatWeDo";
import OurProcessHero from "../components/OurProcessHero";
import ProcessStep from "../components/ProcessStep";

export const metadata = {
  title: "Our Process | Banega Brand",
  description: "From idea to launch, learn about our process for building a product brand.",
};

export default function OurProcessPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FCFBF8] font-sans">
      
      {/* Hero Section */}
      <OurProcessHero />

      {/* Step 01 */}
      <ProcessStep 
        number="01"
        titleBlack="Idea To Launch"
        titleOrange="Your Brand"
        description1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero"
        description2="translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum."
        imageSrc="/idea-bulb-full.png"
        imageRight={false}
        bgColor="bg-[#FDF9F4]"
      />

      {/* Step 02 */}
      <ProcessStep 
        number="02"
        titleBlack="Idea To Launch"
        titleOrange="Your Brand"
        description1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero"
        description2="translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum."
        imageSrc="/product-box-full.png"
        imageRight={true}
        bgColor="bg-[#FCFBF8]"
      />

      {/* The 6 Steps component */}
      <WhatWeDo />

      <Footer />
    </main>
  );
}
