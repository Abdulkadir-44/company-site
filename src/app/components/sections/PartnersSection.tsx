"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { partners, recentProjects, statsData } from "../../lib/data/partnersSectionData";


export default function PartnersSection() {
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-14 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative mb-12 sm:mb-16 md:mb-20"
                >
                    <div className="bg-gray-100 rounded-2xl py-8  overflow-hidden">
                        {/* Gradient Overlays */}
                        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none"></div>

                        {/* Scrolling Logos */}
                        <div className="flex overflow-hidden">
                            <div className="flex animate-infinite-scroll space-x-8 sm:space-x-12 md:space-x-16 min-w-max items-center">
                                {partners.map((partner) => (
                                    <div
                                        key={`first-${partner.id}`}
                                        className="flex-shrink-0 flex items-center space-x-3 px-4 py-3 hover:bg-gray-100/50 rounded-xl transition-all duration-300 group"
                                    >
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-400 rounded-lg flex items-center justify-center group-hover:bg-gray-500 transition-colors duration-300">
                                            <span className="text-white font-bold text-xs sm:text-sm">
                                                {partner.name.substring(0, 2)}
                                            </span>
                                        </div>
                                        <span className="text-gray-500 font-medium text-sm sm:text-base md:text-lg whitespace-nowrap group-hover:text-gray-600 transition-colors duration-300">
                                            {partner.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex animate-infinite-scroll space-x-8 sm:space-x-12 md:space-x-16 min-w-max items-center ml-8 sm:ml-12 md:ml-16">
                                {partners.map((partner) => (
                                    <div
                                        key={`second-${partner.id}`}
                                        className="flex-shrink-0 flex items-center space-x-3 px-4 py-3 hover:bg-gray-100/50 rounded-xl transition-all duration-300 group"
                                    >
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-400 rounded-lg flex items-center justify-center group-hover:bg-gray-500 transition-colors duration-300">
                                            <span className="text-white font-bold text-xs sm:text-sm">
                                                {partner.name.substring(0, 2)}
                                            </span>
                                        </div>
                                        <span className="text-gray-500 font-medium text-sm sm:text-base md:text-lg whitespace-nowrap group-hover:text-gray-600 transition-colors duration-300">
                                            {partner.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
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
                                NEBASOFTWARE olarak, sadece bir yazılım şirketi değiliz—biz yenilikçiler,
                                problem çözücüler ve teknik tutkusuyuz. Modern, temiz ve ölçeklenebilir
                                yazılımlar ile işletmelerin sürekli gelişen dijital ortamda öne çıkmasına
                                yardımcı ediyoruz.
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
                        <div className="lg:col-span-1">
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
                                <h5 className="text-white text-lg font-semibold mb-4 flex items-center">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                                    Son Projelerimiz
                                </h5>

                                <div className="space-y-4 max-h-64 overflow-y-auto pr-3 custom-scrollbar">
                                    {recentProjects.concat(recentProjects).map((project, index) => (
                                        <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <span className="text-white font-bold text-xs">
                                                    {project.client.substring(0, 2)}
                                                </span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-white text-sm font-medium truncate group-hover:text-purple-300 transition-colors">
                                                    {project.client}
                                                </p>
                                                <p className="text-gray-400 text-xs">
                                                    {project.type}
                                                </p>
                                            </div>
                                            <div className="w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
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