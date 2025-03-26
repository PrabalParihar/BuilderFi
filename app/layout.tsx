import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BuilderFi | Agentic Workflow Builder for Educhain",
  description: "The first no-code Agentic workflow builder for the Educhain ecosystem. Create custom solutions with our intuitive drag-and-drop builder, seamlessly integrating with Blend, SailFish, and edu.fun.",
  keywords: ["BuilderFi", "Educhain", "DeFi", "Workflow Builder", "No-code", "Agentic", "Educational Finance"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
