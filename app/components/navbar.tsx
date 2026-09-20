"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-full py-4">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900"
        >
          Book Vibe
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/"
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              isActive("/")
                ? "border border-[#23BE0A] text-[#23BE0A]"
                : "text-gray-600 hover:text-gray-900 border border-transparent"
            }`}
          >
            Home
          </Link>

          <Link
            href="/listed-book"
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              isActive("/listed-book")
                ? "border border-[#23BE0A] text-[#23BE0A]"
                : "text-gray-600 hover:text-gray-900 border border-transparent"
            }`}
          >
            Listed Books
          </Link>

          <Link
            href="/pages-to-read"
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              isActive("/pages-to-read")
                ? "border border-[#23BE0A] text-[#23BE0A]"
                : "text-gray-600 hover:text-gray-900 border border-transparent"
            }`}
          >
            Pages to Read
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="bg-[#23BE0A] hover:bg-[#1fa308] text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors">
            Sign In
          </button>

          <button className="bg-[#59C6D2] hover:bg-[#4bb1bd] text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}