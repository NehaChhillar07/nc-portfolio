"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export function AnimatedImageGallery() {
  const images = [
    { src: "/images/avatar.gif", alt: "Avatar animation" },
    { src: "/images/usability-testing.jpg", alt: "Usability testing session" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]); // Added images.length as dependency

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={`absolute top-0 left-0 w-full h-full object-cover rounded-[18px] transition-opacity duration-500 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          fill
          priority={index === 0}
        />
      ))}
    </div>
  );
} 