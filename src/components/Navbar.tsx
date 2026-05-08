"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Rocket, User, BookOpen, BarChart3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: <Rocket className="w-4 h-4" /> },
    { name: "Materi", href: "/materi", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Anggota", href: "/anggota", icon: <User className="w-4 h-4" /> },
    { name: "Analytics", href: "/analytics", icon: <BarChart3 className="w-4 h-4" /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-2 shadow-md" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg">
            <Rocket className="text-primary-foreground w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tighter">LKM 2026</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 font-medium hover:text-primary transition-colors"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform">
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 glass shadow-xl py-6 px-6 flex flex-col gap-4 border-t border-border"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-4 text-lg font-medium p-3 hover:bg-primary/10 rounded-xl transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            <button className="bg-primary text-primary-foreground w-full py-4 rounded-xl font-bold mt-4">
              Login
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
