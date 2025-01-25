import React from "react";

interface CaseStudyButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function CaseStudyButton({ children, className = "" }: CaseStudyButtonProps) {
  return (
    <button className={`flex items-center gap-2 ${className}`}>
      <span className="relative">
        {children}
        <div className="absolute w-full h-[0.25px] left-0 bottom-[0.125px] bg-[#FFAB00]" />
      </span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12L10 8L6 4"
          stroke="#161C24"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
} 