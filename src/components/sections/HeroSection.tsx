'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const dummyImages = [
  '/images/hero-1.jpg',
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
                  <img 
                    src={src} 
                    alt={`Hero Background ${index + 1}`} 
                    className="w-full h-full object-cover"
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
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button as={Link} href="/authors/submission-guidelines" className="bg-primary-800 hover:bg-primary-600 text-white border-none rounded-none py-3 px-6 shadow-sm w-full sm:w-auto text-center">
              Submit a Paper
            </Button>
            <Button as={Link} href="/authors/call-for-papers" className="bg-white text-primary-900 hover:bg-gray-100 border-none rounded-none py-3 px-6 shadow-sm w-full sm:w-auto text-center">
              Call for Papers
            </Button>
            <Button as={Link} href="/patrons-exhibitors" className="bg-white text-primary-900 hover:bg-gray-100 border-none rounded-none py-3 px-6 shadow-sm w-full sm:w-auto text-center">
              Become a Patron/Exhibitor
            </Button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
