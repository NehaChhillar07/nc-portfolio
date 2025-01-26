"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export function AnimatedImageGallery() {
  const images = [
    { src: "/images/Component 132.png", alt: "Neha Portrait 1" },
    { src: "/images/Component 133.png", alt: "Neha Portrait 2" },
    { src: "/images/Component 134.png", alt: "Neha Portrait 3" }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500); // Change image every 1.5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-[444.086px] h-[558px]">
      {/* Image container with rotation */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-500 ease-in-out
            ${currentImageIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{ transform: 'rotate(10.24deg)' }}
        >
          <div className="relative w-full h-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: 'contain' }}
              priority
              className="rounded-[4px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
} 