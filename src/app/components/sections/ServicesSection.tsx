"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import ServiceCard from "../ui/ServiceCard";
import { servicesData } from "../../lib/data/servicesSectionData";



export default function ServicesSection() {
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true });

    return (
        <section id="services" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gray-100 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>

            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto relative">

                {/* Section Header */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : -50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16 lg:mb-24"
                >
                    <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-200 mb-6">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-purple-700 font-medium text-sm">Profesyonel Hizmetler</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Dijital <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Çözümlerimiz</span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Modern teknolojilerle işletmenizi geleceğe taşıyan, ölçeklenebilir ve güvenilir yazılım çözümleri sunuyoruz.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="space-y-16 lg:space-y-24">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center mt-20 lg:mt-28"
                >
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                    >
                        Bir sonraki projeniz için{" "}
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            hazır mısınız?
                        </span>
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
                    >
                        Hayalinizdeki dijital çözümü birlikte hayata geçirelim.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
                    >
                        <span>İletişime Geçin</span>
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}