// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProtectDevTools from "./components/Home/ProtectDevTools";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SIX(mp3)",
  description: "Youtube to mp3 APP developed by Hazique Ahmed Khaan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="wOvY5mlEQo5ChLo-v-F4mrBPVMZA1nFa8JMmcT04wEs"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ProtectDevTools /> {/* ✅ protection enabled */}
        {children}
      </body>
    </html>
  );
}
