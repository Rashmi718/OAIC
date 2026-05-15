import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import { Button } from '@/components/ui/Button';
import { importantDates as dates } from '@/data/dates';

export const metadata: Metadata = {
  title: 'OAIC 2026',
  description: 'The 2026 1st Odisha AI Conference (OAIC) is a premier platform for exchanging ideas and presenting research findings in AI. Join us in Bhubaneswar, India, December 19-20, 2026.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* News and Announcements */}
      <section className="pt-12 pb-6 bg-white">
        <div className="container-wide">
          <div className="border border-primary-400 p-6 md:p-8 relative group hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900">News and Announcements</h2>
            <Link href="/authors/call-for-papers" className="text-base md:text-lg text-primary-400 hover:text-primary-600 hover:underline font-semibold transition-colors">
              OAIC 2026 Call for Papers Announced
            </Link>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="section-padding bg-white relative">
        <div className="container-wide">
          <div className="relative flex flex-col lg:flex-row min-h-[400px]">
            {/* Background Image Container */}
            <div className="absolute inset-0 w-full lg:w-2/3 h-[300px] lg:h-full z-0">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80')" }}
              >
                <div className="absolute inset-0 bg-primary-900/40 mix-blend-multiply" />
              </div>
              <div className="absolute top-8 left-0 bg-primary-900 text-white px-8 py-4 shadow-lg">
                <h2 className="text-2xl font-bold">Important Dates</h2>
              </div>
            </div>

            {/* Dates List - Overlapping on right */}
            <div className="w-full lg:w-1/2 ml-auto flex flex-col justify-center space-y-3 z-10 py-8 lg:py-12 mt-[260px] lg:mt-0 px-4 lg:px-0">
              {dates.slice(0, 4).map((item, index) => (
                <div key={index} className="flex shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <div className="bg-primary-900 text-white font-bold p-3 md:p-4 w-24 md:w-32 flex items-center justify-center shrink-0 group-hover:bg-primary-800 transition-colors text-center text-xs md:text-base">
                    {item.date}
                  </div>
                  <div className="bg-white border border-gray-200 p-3 md:p-4 flex-1 flex flex-col justify-center text-xs md:text-sm group-hover:border-primary-400 transition-colors">
                    <span className="font-bold text-gray-800">{item.event}</span>
                  </div>
                </div>
              ))}
              <div className="flex justify-end pt-4">
                <Button as={Link} href="/authors/important-dates" className="bg-primary-400 hover:bg-primary-500 text-white rounded-none border-none shadow-md transition-transform hover:-translate-y-1">
                  See All Dates
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-white relative">
        <div className="container-wide">
          <div className="relative p-8 md:p-12 mt-4">
            {/* Top Bracket */}
            <div className="absolute top-0 left-0 w-[80%] md:w-[60%] h-[20%] md:h-[30%] border-t-2 border-l-2 border-[#e67e22] pointer-events-none" />
            {/* Bottom Bracket */}
            <div className="absolute bottom-0 right-0 w-[80%] md:w-[60%] h-[20%] md:h-[30%] border-b-2 border-r-2 border-[#e67e22] pointer-events-none" />

            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Welcome to OAIC 2026!</h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify md:text-left mb-4">
              The <strong>2026 1st Odisha AI Conference (OAIC)</strong> will serve as a premier platform for exchanging ideas, presenting research findings, and fostering collaborations that address real-world challenges through AI-driven solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify md:text-left">
              OAIC focuses on both theoretical developments and practical applications of AI across diverse domains, emphasizing ethical AI, sustainable development, and the integration of AI with emerging technologies to drive societal and economic transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Destination & Travel Info */}
      <section className="section-padding bg-white pt-0">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start relative p-6 md:p-8 mb-4">
            {/* Bottom Left Bracket (under image) */}
            <div className="absolute -bottom-4 md:-bottom-6 -left-2 md:left-4 w-[80%] md:w-[60%] h-[30%] md:h-[40%] border-b-2 border-l-2 border-[#e67e22] pointer-events-none z-0" />
            {/* Top Right Bracket (above text) */}
            <div className="absolute -top-4 right-0 w-[80%] md:w-[40%] h-[20%] md:h-[30%] border-t-2 border-r-2 border-[#e67e22] pointer-events-none z-0" />

            <div className="w-full md:w-1/2 overflow-hidden shadow-md transition-shadow duration-500 relative z-10">
              <Image
                src="/images/siksha-o-anusandhan-bhubaneswar-featured.jpg"
                alt="ITER | Soa university"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                width={800}
                height={450}
              />
            </div>
            <div className="w-full md:w-1/2 pt-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">The Destination</h2>
              <p className="text-xl text-primary-800 mb-8">ITER, Siksha &apos;O&apos; Anusandhan, Bhubaneswar, Odisha, India</p>

              <h3 className="text-xl md:text-2xl font-bold text-primary-900 mb-4">Travel Information</h3>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button as={Link} href="/travel/attractions" className="bg-primary-400 hover:bg-primary-500 text-white rounded-none border-none text-center w-full sm:w-auto shadow-md transition-transform hover:-translate-y-1">
                  Hotel & Travel
                </Button>
                <Button as={Link} href="/travel/visa" className="bg-primary-400 hover:bg-primary-500 text-white rounded-none border-none text-center w-full sm:w-auto shadow-md transition-transform hover:-translate-y-1">
                  Visa Information
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
