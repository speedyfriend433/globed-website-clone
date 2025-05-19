"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const screenshots = [
  {
    src: "/images/screenshot1.webp",
    alt: "Screenshot of the Globed mod being used in GD to play together with friends",
  },
  {
    src: "/images/screenshot2.webp",
    alt: "Screenshot of the Globed mod being used in GD to play together with friends",
  },
  {
    src: "/images/screenshot3.webp",
    alt: "Screenshot of the Globed mod being used in GD to play together with friends",
  },
  {
    src: "/images/screenshot4.webp",
    alt: "Screenshot of the Globed mod being used in GD to play together with friends",
  },
  {
    src: "/images/screenshot5.webp",
    alt: "Screenshot of the Globed mod being used in GD to play together with friends",
  },
  {
    src: "/images/screenshot6.webp",
    alt: "Screenshot of the Globed mod being used in GD to play together with friends",
  },
];

const ScreenshotCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };

  return (
    <div className="gallery flex flex-col justify-center items-center">
      <div className="relative max-w-paragraph overflow-hidden rounded-xl">
        <div className="relative flex flex-row max-w-paragraph overflow-hidden select-none">
          <Image
            src={screenshots[currentIndex].src}
            alt={screenshots[currentIndex].alt}
            width={576}
            height={324}
            className="rounded-xl"
            priority={currentIndex === 0}
          />

          {/* Navigation buttons */}
          <button
            onClick={goToPrevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 rounded-full p-2 text-white opacity-0 hover:opacity-100 transition-opacity"
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            onClick={goToNextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 rounded-full p-2 text-white opacity-0 hover:opacity-100 transition-opacity"
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <footer className="flex flex-row mt-4 gap-4">
        {screenshots.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full bg-[hsl(var(--globed-foreground))] transition-opacity ${
              index === currentIndex ? "opacity-100" : "opacity-35"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </footer>
    </div>
  );
};

export default ScreenshotCarousel;
