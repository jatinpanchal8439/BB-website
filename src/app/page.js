import HomeClient from "./components/banner/HomeClient";
import ClientLogos from "./components/ClientLogos";
import HowItWorks from "./components/HowItWorks";
import WhatWeDo from "./components/WhatWeDo";
import Stats from "./components/Stats";
import FeaturedLaunches from "./components/FeaturedLaunches";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HomeClient />
      <ClientLogos />
      <WhatWeDo />
      <Stats />
      <HowItWorks />
      <FeaturedLaunches />
      <Industries />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <Footer />
    </>
  );
}
