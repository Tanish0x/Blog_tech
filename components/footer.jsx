import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-tertiary text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <Link href="/" className="block">
              <h1 className="text-4xl font-bold tracking-widest">TECH BlOG</h1>
            </Link>

            <div className="grid grid-cols-2 gap-4">
              <Link
                href="#"
                className="flex items-center justify-center py-2 bg-[#3b5998] text-white hover:bg-opacity-90 transition-colors"
              >
                <Facebook className="mr-2 h-5 w-5" />
                Facebook
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center py-2 bg-[#1DA1F2] text-white hover:bg-opacity-90 transition-colors"
              >
                <Twitter className="mr-2 h-5 w-5" />
                Twitter
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center py-2 bg-[#C13584] text-white hover:bg-opacity-90 transition-colors"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center py-2 bg-[#0077B5] text-white hover:bg-opacity-90 transition-colors"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Link>
            </div>

            <div className="space-y-4">
              <div className="border-b-2 border-primary">
                <div className="bg-primary py-1 uppercase px-2 text-sm font-bold w-fit">
                  Newsletter Signup
                </div>
              </div>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white text-black w-full border-0 px-3 py-2 rounded"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white w-24 py-2 rounded-sm">
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <div className="border-b-2 border-primary">
              <div className="bg-primary py-1 uppercase px-2 text-sm font-bold w-fit">
                Quick Links
              </div>
            </div>
            <ul className="space-y-2">
              <li className="border-b border-gray-700 pb-1">
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors text-sm font-bold"
                >
                  About Us
                </Link>
              </li>
              <li className="border-b border-gray-700 pb-1">
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors text-sm font-bold"
                >
                  Contact Us
                </Link>
              </li>
              <li className="border-b border-gray-700 pb-1">
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors text-sm font-bold"
                >
                  Disclaimer
                </Link>
              </li>
              <li className="border-b border-gray-700 pb-1">
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors text-sm font-bold"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="border-b border-gray-700 pb-1">
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors text-sm font-bold"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="border-b-2 border-primary">
              <div className="bg-primary py-1 uppercase px-2 text-sm font-bold w-fit">
                Recent Posts
              </div>
            </div>
            <ul className="space-y-4">
              <li className="border-b border-gray-700 pb-1">
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors block text-sm font-bold"
                >
                  Digital Arrest Scams and Family Emergency Scams in India: How
                  They Work, Red Flags, and What to Do
                </Link>
              </li>
              <li className="border-b border-gray-700 pb-1">
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors block text-sm font-bold"
                >
                  OTP Scam Explained: Common Tactics and How to Stay Safe
                </Link>
              </li>
              <li className="border-b border-gray-700 pb-1">
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors block text-sm font-bold"
                >
                  WhatsApp Job Scams in 2025: How to Spot Fake Offers, Protect
                  Yourself, and Find Legit Online Work
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
