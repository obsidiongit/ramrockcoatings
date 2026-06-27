import type { Metadata } from "next";
import { Inter, Archivo, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/layout/MobileCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Display family for headings + stat numbers — a sturdy modern grotesque that
// reads premium yet industrial, pairing with the Oswald logo and Inter body.
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

// Industrial condensed gothic for the RamRock wordmark logo.
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ramrockcoatings.com"),
  title: {
    default: "RamRock Coatings | Epoxy Flooring Contractor — Cedar Rapids, IA",
    template: "%s",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  description:
    "RamRock Coatings is Cedar Rapids' trusted epoxy flooring contractor. Residential, commercial, and specialty coatings done right. Free estimates. (319) 257-2061.",
  keywords: [
    "epoxy flooring Cedar Rapids",
    "garage floor coating Iowa",
    "commercial epoxy flooring",
    "metallic epoxy flooring",
    "flooring contractor Cedar Rapids IA",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ramrockcoatings.com",
    siteName: "RamRock Coatings",
    images: [
      {
        url: "/images/hero/slide-3.jpg",
        width: 1200,
        height: 630,
        alt: "Finished interior epoxy floor by RamRock Coatings, Cedar Rapids IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/hero/slide-3.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} ${oswald.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
