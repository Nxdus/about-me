import type { Metadata } from "next";
import type { Viewport } from 'next'
import { Darumadrop_One } from "next/font/google";
import "./globals.css";

const darumadropOne = Darumadrop_One({
  variable: "--font-darumadrop-one",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "All About Paitong",
  description: "This is Paitong's personal website.",
};


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: 'resizes-visual',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${darumadropOne.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
