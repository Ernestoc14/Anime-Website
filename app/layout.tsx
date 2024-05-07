import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime List",
  description: "The Best Animes all in one Place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-8xl mx-auto bg-[#0F1117]">
          {/* This section will center the whole app */}
          <section className="flex flex-col justify-center items-center">
            <Hero />
            {children}
            <Footer />
          </section>
        </main>
      </body>
    </html>
  );
}
