"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-[#ffefef] via-white to-[#efffef] overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to top, white, transparent), url('/images/HeroBg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#e41e26] rounded-full filter blur-3xl opacity-10" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#0b4619] rounded-full filter blur-3xl opacity-10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative flex justify-end items-end lg:h-full">
            <div
              className="relative aspect-[3/4] w-full max-w-[400px] lg:max-w-[350px] mx-auto rounded-2xl overflow-hidden shadow-2xl transform translate-y-16"
            >
              <Image
                src="/images/chairman.png"
                alt="Hon. Setonji Sunday Balogun"
                fill
                className="object-cover object-bottom"
                priority
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6">
            <div className="absolute top-10 right-10 space-y-2 text-right">
              <span className="absolute text-[25px] bg-red-500 text-white px-2 py-1 font-extrabold mt-10 ml-5 text-sm rounded-l-md rounded-r-sm z-20">THE</span>
              <span className="text-6xl sm:text-7xl md:text-9xl font-extrabold text-white tracking-tight ml-10 z-10">
                BRIDGE
              </span>
              <p className="text-lg sm:text-xl md:text-2xl text-white sm:text-[#0b4619] font-semibold">
                THE PATHWAY TO A GREATER BADAGRY
              </p>
              <div className="inline-flex items-center justify-center bg-[#0b4619] text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full text-sm font-bold">
                <div className="flex flex-col items-center rounded-full">
                  <Image src="/images/SSB.jpg" alt="logo" width={80} height={80} className="rounded-full object-cover" />
                </div>
              </div>
            </div>

            {/* Bottom Right Content */}
            <div className="absolute bottom-10 right-10 space-y-4 text-right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white sm:text-[#1a1a1a]">
                HON. SETONJI SUNDAY
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white sm:text-[#0b4619]">
                BALOGUN
              </h3>
              <div className="bg-[#0b4619] text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg inline-block">
                EXECUTIVE CHAIRMAN
              </div>
              <p className="text-base sm:text-lg text-white sm:text-[#4a4a4a]">BADAGRY LOCAL GOVERNMENT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
