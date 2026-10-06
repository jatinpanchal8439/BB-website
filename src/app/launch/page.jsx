import React from "react";
import MarketplaceLaunch from "../components/MarketplaceLaunch";
import MarketplaceChannels from "../components/MarketplaceChannels";
import Footer from "../components/Footer";

export const metadata = {
  title: "Marketplace Launch | Sell on Amazon, Flipkart & Nykaa | Banega Brand",
  description: "Not every brand needs every channel. See how Banega Brand helps you decide where to launch first – Amazon, Flipkart, Nykaa or your own website.",
};

export default function LaunchPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FCFAF5] font-sans overflow-x-hidden w-full">
      <MarketplaceLaunch />
      <MarketplaceChannels />
      <Footer />
    </main>
  );
}
