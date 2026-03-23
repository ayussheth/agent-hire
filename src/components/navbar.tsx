"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-white">
              Agent<span className="text-purple-500">Hire</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="/agents"
              className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
            >
              Browse Agents
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
            >
              How It Works
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
            >
              Dashboard
            </Link>
          </div>

          {/* Connect Wallet Button */}
          <div className="hidden md:block">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5">
              Connect Wallet
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-gray-900/95 backdrop-blur-xl">
            <div className="py-4 space-y-4">
              <Link
                href="/agents"
                className="block text-gray-300 hover:text-white font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Agents
              </Link>
              <Link
                href="/how-it-works"
                className="block text-gray-300 hover:text-white font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/dashboard"
                className="block text-gray-300 hover:text-white font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <button
                className="w-full text-left bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}