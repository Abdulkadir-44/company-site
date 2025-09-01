"use client";

import { useState } from 'react';
import Image from 'next/image';
import LoadingScreen from '../ui/LoadingSecreen';
import { motion } from "framer-motion"
import Link from 'next/link';

export default function HeroSection() {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <>
      {isImageLoading && <LoadingScreen />}

      <section id='home' className="relative min-h-screen flex items-center justify-center overflow-hidden ">
        <Image
          src="/bg.jpeg"
          alt="Hero Arkaplanı"
          fill
          priority
          className="object-cover absolute inset-0 -z-10 select-none"
          onLoad={() => setIsImageLoading(false)}
        />
        <div className="relative z-10 text-center text-white p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 max-w-7xl mx-auto w-full">
          <motion.h1
            initial={{ opacity: 0.3, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl select-none font-heading text-gray-100 mb-6 sm:mb-8 md:mb-10 font-bold leading-tight"
          >
            Dijital Geleceğinizi{" "}
            <span className='text-purple-300 border-t px-2 sm:px-3 md:px-4 pt-2 sm:pt-2.5 md:pt-3 border-white rounded-2xl sm:rounded-3xl md:rounded-full inline-block mt-2 sm:mt-0'>
              Birlikte
            </span>{" "}
            İnşa Edelim
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto text-gray-200 leading-relaxed px-2 sm:px-0">
              Modern teknolojilerle güçlü ve etkili dijital çözümler üretiyoruz. Web sitenizi, uygulamanızı veya özel yazılımınızı hayata geçiriyoruz.
            </p>

            <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-5 justify-center px-4 sm:px-0'>
              <Link
                href="/projects"
                className="w-full sm:w-auto select-none border border-white/30 bg-white/10 backdrop-blur-lg px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 cursor-pointer rounded-2xl sm:rounded-3xl text-white font-semibold shadow-lg hover:bg-white/70 hover:text-black hover:border-white/50 transition-all duration-300 text-sm sm:text-base min-w-[160px] sm:min-w-[180px] md:min-w-[200px]">
                Projelerimizi İncele
              </Link>
              <Link
                href="#contact"
                className="w-full sm:w-auto select-none border border-white/30 bg-white/10 backdrop-blur-lg px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 cursor-pointer rounded-2xl sm:rounded-3xl text-white font-semibold shadow-lg hover:bg-white/70 hover:text-black hover:border-white/50 transition-all duration-300 text-sm sm:text-base min-w-[160px] sm:min-w-[180px] md:min-w-[200px]">
                İletişime Geç
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}