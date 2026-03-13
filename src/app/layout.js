import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); 

export const metadata = {
  title: "Overturned",
  description: "Do you know which pitches to challenge?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white flex min-h-screen`}
      >
        <Sidebar />
        <div className="flex-1 w-full bg-slate-950 min-h-screen h-screen overflow-y-auto pb-16 md:pb-0 relative">
          {children}
        </div>
      </body>
    </html>
  );
}
