"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Empty interface is intentional as this component currently doesn't accept any props
export interface HeaderProps {
  /** Placeholder for future props */
  _?: never;
}

export function Header({}: HeaderProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header 
      className="sticky top-0 z-50"
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Main Header */}
      <div className="flex flex-col">
        <div className={`flex justify-between items-center px-[52px] h-[120px] backdrop-blur-[9px] transition-colors duration-300 ease-in-out ${isExpanded ? 'bg-white/90' : 'bg-white/25'}`}>
          <div className="flex items-center gap-2">
            <Link href="/" className="text-[24px] font-medium text-[#161C24]">
              Neha Chhillar
            </Link>
            <span className="text-[24px]">—</span>
          </div>
          {/* Hamburger Icon */}
          <div 
            className="flex flex-row justify-center items-center p-6 gap-[10px] w-[72px] h-[72px] cursor-pointer relative"
            onMouseEnter={() => setIsExpanded(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="#161C24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="#161C24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="#161C24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Expanded Navigation */}
        <div 
          className={`transform transition-all duration-300 ease-in-out ${
            isExpanded 
              ? 'flex opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 hidden'
          } flex-row justify-center items-start px-[52px] pb-[30px] bg-white/90 backdrop-blur-[9px] gap-[51px]`}
        >
          {/* Menu Section */}
          <div className="flex flex-col items-start pt-0 pl-12 gap-3 w-[398px]">
            <span className="text-[12px] font-medium italic text-[#919EAB]">menu --</span>
            <div className="flex flex-col items-start gap-4">
              <Button variant="custom" size="custom" asChild showArrow={false}>
                <Link href="/about">About</Link>
              </Button>
              <Button variant="custom" size="custom" asChild showArrow={false}>
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button variant="custom" size="custom" asChild showArrow={false}>
                <Link href="/resume">Resume</Link>
              </Button>
            </div>
          </div>

          {/* Projects Section */}
          <div className="flex flex-col items-start pt-0 pl-12 gap-3 w-[398px]">
            <span className="text-[12px] font-medium italic text-[#919EAB]">Projects --</span>
            <div className="flex flex-col items-start gap-4">
              <Button variant="custom" size="custom" asChild showArrow={false}>
                <Link href="#">Building UX in HR & People Management</Link>
              </Button>
              <Button variant="custom" size="custom" asChild showArrow={false}>
                <Link href="#">Website Design at TexlaCulture</Link>
              </Button>
              <Button variant="custom" size="custom" asChild showArrow={false}>
                <Link href="#">Trade India&apos;s website redesign to gain user&apos;s trust</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 