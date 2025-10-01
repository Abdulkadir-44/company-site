"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";
import { partners, recentProjects, statsData } from "../../lib/data/partnersSectionData";


export default function PartnersSection() {
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true });
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-14 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative mb-12 sm:mb-16 md:mb-12"
                >
                    <motion.div
                        ref={headerRef}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : -50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center mb-16 lg:mb-12"
                    >
                        <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-200 mb-6">
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                            <span className="text-purple-700 font-medium text-sm">Başlangıç Noktamız</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Bugünün Fikri <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Yarının Standartları</span>
                        </h2>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Yeni nesil yazılım çözümleriyle iş dünyasına taze bir bakış açısı getirmek istiyoruz.Genç ama kararlı ekibimizle, işinizi  büyütmeye hazırız.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 mb-12 sm:mb-16 md:mb-20 shadow-2xl overflow-hidden"
                >
                    <Image
                        src="/bg.jpeg"
                        alt="Background"
                        fill
                        className="absolute select-none inset-0 object-cover rounded-3xl opacity-20 z-0"
                        loading="lazy"
                    />

                    <div className="relative z-10 grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">

                        {/* Left Content */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                                    {/* <span className="text-white font-bold text-lg">NS</span> */}
                                    <Image src="/logo.png" alt="Logo" width={40} height={40} loading="lazy" />
                                </div>
                                <h3 className="text-white text-xl sm:text-2xl font-bold">NEBASOFTWARE</h3>
                            </div>

                            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                                Gelecek Nesil Yazılımlarla İşletmeleri Güçlendiriyoruz
                            </h4>

                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                                Biz NEBASOFTWARE olarak sadece yazılım üreten bir ekip değiliz; sorunları keşfetmeyi ve onları basit, anlaşılır çözümlere dönüştürmeyi seviyoruz. Her satır kodu bir ürün değil, bir deneyim olarak görüyoruz. Amacımız; işletmelerin karmaşık süreçlerini kolaylaştırmak, zaman kazandırmak ve işleri daha verimli hale getirmek. Bizim için teknoloji yeni ya da eski değil; doğru sorunu doğru şekilde çözebildiği sürece değerlidir. Bu yüzden odak noktamız hep aynı: güvenilir, anlaşılır ve gerçekten işe yarayan yazılımlar geliştirmek.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
                                    Web Development
                                </span>
                                <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                                    Mobile Apps
                                </span>
                                <span className="px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium">
                                    Custom Software
                                </span>
                            </div>
                        </div>

                        {/* Right Scroll Area */}
                        <div className="relative w-full h-full">
                            <Image src="/bg-3.jpeg" alt="Background" fill className="object-cover rounded-2xl" loading="lazy" />
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Stats Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10"
                >
                    {statsData.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="text-center group"
                            >
                                {/* Icon */}
                                <div className="mb-4 flex justify-center">
                                    <div className={`w-16 h-16 md:w-18 md:h-18  ${stat.bgGradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <IconComponent
                                            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white"
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                </div>

                                {/* Number */}
                                <div className={`text-2xl sm:text-3xl ${stat.textColor} md:text-4xl  font-bold  mb-2 group-hover:scale-105 transition-transform duration-300`}>
                                    {stat.number}
                                </div>

                                {/* Title */}
                                <div className={` text-sm  font-medium ${stat.textColor}`}>
                                    {stat.title}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}