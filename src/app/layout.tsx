import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const coolvetica = localFont({
  src: "./fonts/Coolvetica Rg.otf",
  variable: "--coolvetica",
  weight: "100 700",
});


export const metadata: Metadata = {
  title: "Gabe and Adnan's Prom",
  description: "Best Prom Ever",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${coolvetica} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
