"use client";

import React, { useState } from "react";
import Link from "next/link";

// Empty interface is intentional as this component currently doesn't accept any props
export interface HeaderProps {
  /** Placeholder for future props */
  _?: never;
}

export function Header({}: HeaderProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header className="relative w-full">
      {/* Fixed header content */}
      <div className="flex justify-between items-center px-[52px] py-6 bg-white">
        <Link href="/" className="text-[#161C24] text-[18px] font-bold">
          Neha Chhillar
        </Link>
        <button
          type="button"
          aria-label="Toggle menu"
          className="flex flex-col gap-[6px]"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <div className="w-[18px] h-[2px] bg-[#161C24]" />
          <div className="w-[18px] h-[2px] bg-[#161C24]" />
        </button>
      </div>

      {/* Expanded menu overlay */}
      <div
        className={`absolute top-full left-0 w-full bg-white transition-transform duration-300 ease-in-out ${
          isExpanded ? "translate-y-0" : "-translate-y-full"
        } z-50`}
      >
        <nav className="px-[52px] py-6">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/about" className="text-[#161C24] hover:text-[#FFAB00]">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[#161C24] hover:text-[#FFAB00]">
                Get In Touch
              </Link>
            </li>
            <li>
              <Link href="/resume" className="text-[#161C24] hover:text-[#FFAB00]">
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 