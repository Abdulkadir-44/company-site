"use client";

import { motion } from "framer-motion";
import { expertiseAreas, timelineData, valuesData } from "../../lib/data/aboutSectionData";
import { useIntersectionObserver } from "../../hooks/aboutSectionHooks";
import Image from "next/image";

export default function AboutSection() {
    const [headerRef, isHeaderInView] = useIntersectionObserver<HTMLDivElement>();
    const [storyRef, isStoryInView] = useIntersectionObserver<HTMLDivElement>();
    const [valuesRef, isValuesInView] = useIntersectionObserver<HTMLDivElement>();
    const [expertiseRef, isExpertiseInView] = useIntersectionObserver<HTMLDivElement>();

    return (
        <section id="about" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>

            <div className="max-w-7xl  mx-auto relative ">

                {/* Section Header */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : -50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20 lg:mb-28"
                >
                    <div className="inline-flex items-center space-x-2 bg-purple-50 px-6 py-3 rounded-full border border-purple-200 mb-6">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-purple-700 font-medium text-sm">Hikayemiz</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            NEBASOFTWARE
                        </span>{" "}
                        Hakkında
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Freelance deneyimimizden kurumsal kimliğimize, teknoloji tutkusuyla büyüyen hikayemiz
                    </p>
                </motion.div>

                {/* Company Story Timeline */}
                <motion.div
                    ref={storyRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isStoryInView ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-24 lg:mb-32 bg-purple-100/20 rounded-4xl py-5"
                >
                    {/* <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-purple-800 mb-4">Hikayemiz</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Freelance projelerden başlayarak kurumsal bir yazılım şirketine dönüşüm yolculuğumuz
                        </p>
                    </div> */}

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-200 via-blue-200 to-green-200 rounded-full hidden lg:block"></div>

                        <div className="space-y-16 lg:space-y-24">
                            {timelineData.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: isStoryInView ? 1 : 0, y: isStoryInView ? 0 : 50 }}
                                        transition={{ duration: 0.6, delay: 0.3 + (index * 0.2) }}
                                        className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                                    >
                                        {/* Content */}
                                        <div className="flex-1 lg:px-8">
                                            <div className={`bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-100 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                                                <div className="flex items-center space-x-4 mb-4">
                                                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                                                        <IconComponent className="w-6 h-6 text-white" />
                                                    </div>
                                                    <div>
                                                        <span className={`text-sm font-medium ${item.headColor}`}>{item.year}</span>
                                                        <h4 className={`text-xl font-bold ${item.headColor}`}>{item.title}</h4>
                                                    </div>
                                                </div>
                                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                            </div>
                                        </div>

                                        {/* Timeline Dot */}
                                        <div className="hidden lg:block relative z-10">
                                            <div className={`w-6 h-6 bg-gradient-to-br ${item.color} rounded-full border-4 border-white shadow-lg`}></div>
                                        </div>

                                        {/* Spacer */}
                                        <div className="flex-1 hidden lg:block"></div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* Mission, Vision, Values */}
                <motion.div
                    ref={valuesRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isValuesInView ? 1 : 0, y: isValuesInView ? 0 : 50 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-24 lg:mb-32 px-4 sm:px-6 lg:px-8"
                >
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">Değerlerimiz</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Çalışma prensiplerimizi ve gelecek hedeflerimizi şekillendiren temel değerlerimiz
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
                        {valuesData.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: isValuesInView ? 1 : 0, y: isValuesInView ? 0 : 30 }}
                                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.2) }}
                                    className="text-center group relative"
                                >
                                    {/* Circular Background with Gradient Border */}
                                    <div className="relative">
                                        {/* Gradient Border Ring - opacity azaltıldı */}
                                        {/* <div className={`absolute -inset-1 bg-gradient-to-br ${value.gradient} rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300 blur-sm`}></div> */}

                                        {/* Main Circle */}
                                        <div className="relative w-64 h-64 mx-auto bg-white/95 backdrop-blur-xl rounded-full shadow-2xl border border-white/30 flex flex-col items-center justify-center p-8 group-hover:scale-105 transition-all duration-500">

                                            {/* Icon Container - opacity azaltıldı */}
                                            <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg opacity-90`}>
                                                <IconComponent className="w-10 h-10 text-white" />
                                            </div>

                                            {/* Title - headColor prop kullanıldı */}
                                            <h4 className={`text-xl font-bold mb-4 ${value.headColor} group-hover:scale-105 transition-all duration-300`}>
                                                {value.title}
                                            </h4>

                                            {/* Description */}
                                            <p className="text-gray-600 text-sm leading-relaxed text-center">
                                                {value.description.length > 80
                                                    ? `${value.description.substring(0, 80)}...`
                                                    : value.description
                                                }
                                            </p>
                                        </div>

                                        {/* Floating Elements - opacity azaltıldı */}
                                        <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br ${value.gradient} rounded-full opacity-40 group-hover:animate-bounce`}></div>
                                        <div className={`absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br ${value.gradient} rounded-full opacity-30 group-hover:animate-bounce`} style={{ animationDelay: '0.5s' }}></div>
                                    </div>

                                    {/* Bottom Glow Effect - opacity azaltıldı */}
                                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-r ${value.gradient} rounded-full opacity-10 blur-2xl group-hover:opacity-25 transition-opacity duration-500`}></div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Expertise Areas */}
                <motion.div
                    ref={expertiseRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isExpertiseInView ? 1 : 0, y: isExpertiseInView ? 0 : 50 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-16 px-4 sm:px-6 lg:px-8"
                >
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">Uzmanlık Alanlarımız</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Yıllar süren deneyim ve sürekli öğrenme ile geliştirdiğimiz teknik yetkinliklerimiz
                        </p>
                    </div>

                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                        {expertiseAreas.map((area, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                animate={{
                                    opacity: isExpertiseInView ? 1 : 0,
                                    x: isExpertiseInView ? 0 : (index % 2 === 0 ? -30 : 30)
                                }}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                className="relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
                            >
                                <div className="grid grid-cols-2 h-full">
                                    {/* Sol Taraf - İçerik */}
                                    <div className="p-6 flex flex-col justify-center space-y-4 relative z-10">
                                        {/* Başlık */}
                                        <h4 className={`text-xl font-bold ${area.headColor || 'text-gray-900'}`}>
                                            {area.name}
                                        </h4>

                                        {/* Teknoloji Tagleri */}
                                        <div className="flex flex-wrap gap-2">
                                            {(area.tags || ['React', 'Next.js']).slice(0, 3).map((tag, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{
                                                        opacity: isExpertiseInView ? 1 : 0,
                                                        y: isExpertiseInView ? 0 : 10
                                                    }}
                                                    transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                                                    className={`px-3 py-1.5 text-xs font-semibold rounded-full text-white ${area.tagBgColor || 'bg-purple-500'} hover:scale-105 transition-transform`}
                                                >
                                                    {tag}
                                                </motion.span>
                                            ))}
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="space-y-2">
                                            
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: isExpertiseInView ? "100%" : 0 }}
                                                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                                                className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden"
                                            >
                                                <div
                                                    className={`h-full rounded-full transition-all ${area.color}`}
                                                    style={{
                                                        width: `100%`
                                                    }}
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Sağ Taraf - Resim */}
                                    <div className="relative overflow-hidden">
                                        <Image
                                            src={area.imageUrl}
                                            alt={area.name}
                                            fill
                                            loading="lazy"
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                        {/* Resim üzerine gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/5 to-black/20"></div>
                                    </div>
                                </div>

                                {/* Hover efekti için border */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-200 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}