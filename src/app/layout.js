import { Plus_Jakarta_Sans, Caveat, Poppins } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://banegabrand.com"),
  title: "Banega Brand | From Idea to Market",
  description: "Helping entrepreneurs launch successful Perfume, Cosmetic, Skincare, and Ayurveda brands in India. End-to-end product development, compliance, manufacturing and brand building.",
  keywords: ["Brand Building", "Cosmetic Manufacturing", "Perfume Launch", "Ayurveda Brand", "Nutraceuticals India", "Private Labeling", "Brand Development India", "Business Strategy"],
  authors: [{ name: "Banega Brand" }],
  creator: "Banega Brand",
  publisher: "Banega Brand",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Banega Brand | From Idea to Market",
    description: "Launch your own successful brand in India with Banega Brand. We handle formulation, packaging, and brand development.",
    url: "https://banegabrand.com",
    siteName: "Banega Brand",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Banega Brand Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banega Brand | Launch Your Brand",
    description: "End-to-end brand development, compliance, and manufacturing for your ideas.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://banegabrand.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${plusJakarta.className} ${caveat.variable} ${poppins.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
