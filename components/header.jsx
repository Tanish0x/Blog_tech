"use client";
import Link from "next/link";
import { useState } from "react";
import { categoriesData } from "../data/categories";

const navlinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/",
  },
  {
    name: "Contact",
    href: "/",
  },
  {
    name: "Blog",
    href: "/",
  },
  {
    name: "Services",
    href: "/",
  },
  {
    name: "Portfolio",
    href: "/",
  },
];

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <header>
      <div className="bg-tertiary py-3 px-5 flex items-center">
        <span className="text-sm font-bold">{new Date().toDateString()}</span>
      </div>
      <Link
        href={"/"}
        className="bg-secondary h-[120px] px-7 flex items-center"
      >
        <span className="text-3xl md:text-6xl font-extrabold">Tech Blog</span>
      </Link>
      <div className="bg-tertiary py-3 px-3 flex gap-2 relative">
        <div
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <button className="text-white px-3 py-2 text-sm font-bold hover:bg-secondary transition rounded flex items-center gap-1">
            Categories
            <span className="ml-1">▼</span>
          </button>
          {showDropdown && (
            <div className="absolute left-0 mt-2 w-48 bg-secondary border border-gray-700 rounded shadow-lg z-50">
              {categoriesData.map((cat) => (
                <Link
                  key={cat.name}
                  href={`/category/${cat.name.toLowerCase().replace(/ /g, "-")}`}
                  className="block px-4 py-2 text-white hover:bg-primary transition text-sm"
                  onClick={() => setShowDropdown(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        {navlinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-white px-3 hover:underline underline-offset-4 py-2 text-sm font-bold hover:bg-secondary transition"
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
}
