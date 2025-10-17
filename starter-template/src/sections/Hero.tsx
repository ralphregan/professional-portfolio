"use client";
import React, { useState, useEffect, useRef } from "react";
import memojiHoverImage from "@/assets/images/NewPersonOn1.png";
import memojiImage from "@/assets/images/NewpersonOff.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import { OrbitStars } from "@/components/OrbitStars";
const MEMOJI_TRANSITION_DELAY = 8200;
export const HeroSection = () => {
  // State controls the opacity of the hover image
  const [isHovering, setIsHovering] = useState(false);

  // Correct TypeScript generic type definition for the Ref
  const mouseLeaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // BEST PRACTICE: Clear the timeout if the component unmounts
  useEffect(() => {
    // Return a cleanup function
    return () => {
      if (mouseLeaveTimeoutRef.current) {
        clearTimeout(mouseLeaveTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    // If a fade-out is currently delayed, cancel it immediately
    if (mouseLeaveTimeoutRef.current) {
      clearTimeout(mouseLeaveTimeoutRef.current);
      mouseLeaveTimeoutRef.current = null;
    }
    setIsHovering(true); // Starts the CSS fade-in immediately
  };

  const handleMouseLeave = () => {
    // Clear any previous timeout before starting a new one
    if (mouseLeaveTimeoutRef.current) {
      clearTimeout(mouseLeaveTimeoutRef.current);
    }

    // Start the delayed timer. The delay applies before the fade-out starts.
    mouseLeaveTimeoutRef.current = setTimeout(() => {
      setIsHovering(false); // Triggers the CSS fade-out after the delay
      mouseLeaveTimeoutRef.current = null;
    }, MEMOJI_TRANSITION_DELAY);
  };

  return (
    <div className="py-32 md:py-44 lg:py-58 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 mmask-vertical-fade ">
        <div
          className="absolute inset-0 -z-30 opacity-5 "
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[690px] hero-ring "></div>
        <div className="size-[890px] hero-ring "></div>
        <div className="size-[1090px] hero-ring "></div>
        <div className="size-[1290px] hero-ring "></div>
        <OrbitStars />
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          {/* Image Container: Handles hover events and stacking */}
          <div
            className="size-[100px] md:size-[140px] cursor-pointer relative z-10 hover:scale-105 transition-transform duration-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* 1. Base Image (Always visible at the bottom) */}
            <Image
              src={memojiImage}
              width={140}
              height={140}
              className={`absolute inset-0 size-full   `}
              alt="Person peeking from behind laptop (default)"
            />

            {/* 2. Hover Image (Fades in/out over the base image) */}
            <Image
              src={memojiHoverImage}
              width={140}
              height={140}
              // Apply opacity transition based on state
              className={`
                        absolute inset-0 size-full
                        transition-opacity duration-300 ease-in-out 
                        ${isHovering ? "opacity-100" : "opacity-0"}
                        `}
              alt="Person peeking from behind laptop (hover state)"
            />
          </div>

          <div
            className="bg-gray-950 border border-gray-800 px-4 py-1.5
inline-flex items-center gap-4 rounded-lg mt-4"
          >
            <div className="bg-green-500 size-2.5 rounded-full"> </div>
            <div className="text-sm font-md">Available for Partnership</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-center mt-8 tracking-wide">
            Building Reality From Imagination{" "}
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let&apos;s discuss next project
          </p>
        </div>
        <div className="relative flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button
            className="inline-flex items-center gap-2 border
 border-white/15 px-6 h-12 rounded-xl "
          >
            <span
              className="font-semibold hover:font-extrabold transition
              duration-300"
            >
              Explore My Work
            </span>
            <ArrowDown className="size-4" />
          </button>
          <button
            className="inline-flex items-center gap-2 border
            border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
          >
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
