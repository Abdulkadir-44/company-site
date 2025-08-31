"use client";

import { motion } from "framer-motion";
import { expertiseAreas, timelineData, valuesData } from "../../lib/data/aboutSectionData";
import { useIntersectionObserver } from "../../hooks/aboutSectionHooks";


export default function AboutSection() {
    const [headerRef, isHeaderInView] = useIntersectionObserver<HTMLDivElement>();
    const [storyRef, isStoryInView] = useIntersectionObserver<HTMLDivElement>();
    const [valuesRef, isValuesInView] = useIntersectionObserver<HTMLDivElement>();
    const [expertiseRef, isExpertiseInView] = useIntersectionObserver<HTMLDivElement>();

    return (
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
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
                        <h3 className="text-4xl font-bold text-purple-800 mb-4">Değerlerimiz</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Çalışma prensiplerimizi ve gelecek hedeflerimizi şekillendiren temel değerlerimiz
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {valuesData.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: isValuesInView ? 1 : 0, y: isValuesInView ? 0 : 30 }}
                                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.2) }}
                                    className="text-center group"
                                >
                                    <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent className="w-10 h-10 text-white" />
                                    </div>
                                    <h4 className={`text-xl font-bold  mb-4 ${value.headColor}`}>{value.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
                        <h3 className="text-4xl font-bold text-purple-800 mb-4">Uzmanlık Alanlarımız</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Yıllar süren deneyim ve sürekli öğrenme ile geliştirdiğimiz teknik yetkinliklerimiz
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 ">
                        {expertiseAreas.map((area, index) => {
                            const skillLevel = Math.floor(area.percentage / 20); // 5 yıldıza böl

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    animate={{ opacity: isExpertiseInView ? 1 : 0, x: isExpertiseInView ? 0 : (index % 2 === 0 ? -30 : 30) }}
                                    transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                                >
                                    {/* Başlık + Yıldız */}
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className={`text-lg font-semibold ${area.headColor}`}>{area.name}</h4>
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, starIndex) => (
                                                <motion.svg
                                                    key={starIndex}
                                                    initial={{ scale: 0 }}
                                                    animate={{
                                                        scale: isExpertiseInView ? 1 : 0,
                                                        fill: starIndex < skillLevel ? "#8B5CF6" : "#E5E7EB"
                                                    }}
                                                    transition={{ duration: 0.3, delay: 0.5 + (starIndex * 0.1) }}
                                                    className="w-5 h-5 ml-1"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </motion.svg>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Teknoloji Tagleri */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {area.tags.map((tag, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: isExpertiseInView ? 1 : 0, y: isExpertiseInView ? 0 : 10 }}
                                                transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
                                                className={`px-3 py-1 text-xs font-medium ${area.tagBgColor} text-white rounded-full border select-none transition`}
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Progress Bar */}
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: isExpertiseInView ? '100%' : 0 }}
                                        transition={{ duration: 0.8, delay: 0.7 }}
                                        className="h-1 bg-gray-200 rounded-full mt-3 overflow-hidden"
                                    >
                                        <div
                                            className={`h-full ${area.color} rounded-full`}
                                            style={{ width: `100%` }}
                                        ></div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}