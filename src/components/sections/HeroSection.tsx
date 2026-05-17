'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const dummyImages = [
  '/images/hero-1.png',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
  '/images/hero-4.jpg'
];

export default function HeroSection() {
  const [progressWidth, setProgressWidth] = useState('0%');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMove = (splide: any) => {
    const end = splide.Components.Controller.getEnd() + 1;
    const rate = Math.min((splide.index + 1) / end, 1);
    setProgressWidth(`${100 * rate}%`);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMounted = (splide: any) => {
    handleMove(splide); // Set initial progress
  };

  return (
    <section className="relative text-white flex flex-col items-center">
      {/* Background Image Carousel Container */}
      <div className="w-full h-[60vh] md:h-[70vh] relative overflow-hidden">
        <Splide
          hasTrack={false}
          options={{
            type: 'loop',
            autoplay: true,
            interval: 4000,
            arrows: false,
            pagination: false,
            drag: false, // Prevent dragging since it's a background
          }}
          onMounted={handleMounted}
          onMove={handleMove}
          className="absolute inset-0 w-full h-full"
        >
          <SplideTrack className="w-full h-full">
            {dummyImages.map((src, index) => (
              <SplideSlide key={index} className="w-full h-full">
                <div className="w-full h-full relative">
                  <Image
                    src={src}
                    alt={`Hero Background ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Overlay to make text readable */}
                  <div className="absolute inset-0 bg-primary-900/30" />
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>

        {/* Progress Bar Element positioned at the bottom of the carousel */}
        <div className="absolute bottom-0 left-0 w-full bg-black/20 h-1.5 z-20">
          <div
            className="bg-primary-400 h-full transition-[width] duration-400 ease-in-out"
            style={{ width: progressWidth }}
          />
        </div>
      </div>

      {/* Overlapping Content Block */}
      <div className="container-wide relative z-20 -mt-20 sm:-mt-32 md:-mt-48">
        <div className="w-full bg-primary-900 p-6 sm:p-8 md:p-16 shadow-2xl">
          <div className="text-left space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
              OAIC 2026
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Bhubaneswar, Odisha, India
              <br className="hidden md:block" />
              <span className="md:hidden">, </span>
              19 - 20 December 2026
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 pt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {/* Primary CTA: Submit a Paper - Compact Premium Style */}
              <div className="relative group">
                {/* Thin Architectural Frame */}
                <div className="absolute -bottom-1.5 -right-1.5 w-full h-full border-2 border-[#E58A3E]/70 z-0 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5"></div>

                <Button
                  as={Link} target="self"
                  href="https://edas.info/login.php?rurl=aHR0cHM6Ly9lZGFzLmluZm8vTjM1MzYxP2M9MzUzNjE%3D"
                  className="relative z-10 bg-[#0C527D] hover:bg-[#08283C] text-white border-none rounded-none py-3 px-8 text-[13px] font-bold uppercase tracking-[0.15em] transition-all duration-300 shadow-lg w-full sm:w-auto text-center block"
                >
                  Submit a Paper
                </Button>
              </div>

              {/* Secondary CTA: Call for Papers - Sleek Editorial */}
              <div className="relative group">
                <div className="absolute -bottom-1 -right-1 w-full h-full border-2 border-[#b5d1eb]/70 z-0 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5"></div>
                <Button
                  as={Link}
                  href="/authors/call-for-papers"
                  className="relative z-10 bg-white text-[#08283C] hover:bg-gray-50 border border-gray-100 rounded-none py-3 px-8 text-[13px] font-bold uppercase tracking-[0.15em] transition-all duration-300 shadow-sm w-full sm:w-auto text-center block"
                >
                  Call for Papers
                </Button>
              </div>

              {/* Secondary CTA: Become a Patron - Sleek Editorial */}
              <div className="relative group">
                <div className="absolute -bottom-1 -right-1 w-full h-full border border-[#d5e6f5]/70 z-0 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5"></div>
                <Button
                  as={Link}
                  href="/patrons-exhibitors"
                  className="relative z-10 bg-white text-[#08283C] hover:bg-gray-50 border border-gray-100 rounded-none py-3 px-8 text-[13px] font-bold uppercase tracking-[0.15em] transition-all duration-300 shadow-sm w-full sm:w-auto text-center block"
                >
                  Become a Patron
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
