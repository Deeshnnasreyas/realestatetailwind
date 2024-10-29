import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Responsive from "@/components/Home/Navbar/Responsive";

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

export const metadata: Metadata = {
  title: "Real Estate App",
  description: "Real estate project using Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* common navbar */}
        <Responsive />
        {children}
        {/*common footer */}
      </body>
    </html>
  );
}
