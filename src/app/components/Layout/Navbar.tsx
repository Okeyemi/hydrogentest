'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Products', href: '#' },
  { label: 'Business Type', href: '#' },
  { label: 'Company', href: '#' },
  { label: 'Contact Us', href: '#' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-black backdrop-blur-md text-white font-[Mail Sans Roman]">
   <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
  {/* Left side: Logo and Nav Links */}
  <div className="flex items-center space-x-8">
    {/* Logo */}
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative w-24 md:w-32 h-8 md:h-10">
        <Image
          src="/logo.png"
          alt="Hydrogen Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>

    {/* Desktop Nav */}
    <div className="hidden md:flex items-center space-x-6">
{navLinks.map((link) => (
  <Link
    key={link.label}
    href={link.href}
    className="relative group flex items-center text-sm transition-colors duration-300 hover:text-yellow-400"
  >
    <span className="flex items-center space-x-1">
      <span>{link.label}</span>
      {link.label === 'Products' && <ChevronDown size={16} />}
    </span>
    {/* Animated underline */}
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
  </Link>
))}


    </div>
  </div>

  {/* Right side: Auth Buttons */}
  <div className="hidden md:flex items-center space-x-4">
    <Link href="#" className="text-sm hover:text-yellow-400">
      Login
    </Link>
    <Link
      href="#"
      className="px-4 py-2  rounded-full text-yellow-500 text-sm font-semibold hover:text-white transition"
    >
      Sign Up
    </Link>
  </div>

  {/* Mobile Menu Button */}
  <button
    className="md:hidden text-white"
    onClick={() => setIsOpen(!isOpen)}
  >
    {isOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
</nav>


      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-4 pb-4 space-y-4 bg-black"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-sm text-white hover:text-yellow-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/10 space-y-2">
              <Link href="#" className="block text-sm text-white">
                Login
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 bg-yellow-400 rounded-full text-black text-sm font-semibold text-center"
              >
                Sign Up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
