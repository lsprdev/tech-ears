import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Providers } from "@/components/providers/providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "TechEars",
  description: "From developers to developers",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />

        <title>Tech Ears </title>
        <meta name="title" content="Tech Ears " />
        <meta
          name="description"
          content="Improve your listening with just a few minutes per day!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Tech Ears " />
        <meta
          property="og:description"
          content="Improve your listening with just a few minutes per day!"
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Tech Ears " />
        <meta
          property="twitter:description"
          content="Improve your listening with just a few minutes per day!"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        <body className={inter.className}>
          <SpeedInsights />
          <Analytics />
          <Providers>{children}</Providers>
        </body>
      </html>
    </>
  );
}
