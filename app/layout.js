import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

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

export const metadata = {
  title: "TechBlog",
  description: "Latest and trendy news all time!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`py-4 bg-background ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <p className="text-xs text-center pt-4">
          Copyright © 2023 Tech Blog. All rights reserved.
        </p>
      </body>
    </html>
  );
}
