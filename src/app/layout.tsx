import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LKM Informatika 2026 | Kepemimpinan & Organisasi",
    template: "%s | LKM Informatika 2026"
  },
  description: "Website dokumentasi tugas LKM Informatika 2026 - Kepemimpinan, Organisasi, dan Pra-Aksi.",
  keywords: ["LKM", "Informatika", "2026", "Kepemimpinan", "Organisasi", "Pra-Aksi"],
  authors: [{ name: "Muhamad Alfian Holidi" }],
  openGraph: {
    title: "LKM Informatika 2026",
    description: "Membangun Karakter & Semangat Informatika.",
    type: "website",
    locale: "id_ID",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-primary/30`}
      >
        <Suspense fallback={null}>
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
