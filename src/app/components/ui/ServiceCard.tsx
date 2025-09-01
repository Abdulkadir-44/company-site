"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../../lib/data/servicesSectionData';
import Link from 'next/link';
function ServiceCard({ service, index }: { service: typeof servicesData[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const IconComponent = service.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 80 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
            className="group"
        >
            <div className={`relative bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border ${service.borderColor} hover:border-transparent overflow-hidden`}>

                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div className={`w-full h-full bg-gradient-to-br ${service.gradient} rounded-full blur-3xl`}></div>
                </div>

                <div className={`flex flex-col lg:flex-row items-stretch gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

                    {/* Content Side */}
                    <div className="flex-1 space-y-6">
                        {/* Icon & Title */}
                        <div className="flex items-center space-x-4">
                            <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center  shadow-lg`}>
                                <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                                {service.title}
                            </h3>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {service.description}
                        </p>

                        {/* Detailed Content */}
                        <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed">
                                {service.detailedContent}
                            </p>

                            {/* Features List */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                                    Öne Çıkan Özellikler:
                                </h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center space-x-2">
                                            <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full flex-shrink-0`}></div>
                                            <span className="text-gray-600 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-3">
                            {service.tags.map((tag, tagIndex) => (
                                <span
                                    key={tagIndex}
                                    className={`px-4 py-2 ${service.bgColor} border ${service.borderColor} rounded-full text-sm font-medium text-gray-700 hover:shadow-md transition-all duration-300`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* CTA Button */}
                        
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`group/btn inline-flex items-center cursor-pointer space-x-2 bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                            >
                                <Link href="#contact">Teklif Al</Link>
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </motion.button>
                        
                    </div>

                    {/* Image Side */}
                    <div className="flex-1 relative">
                        <Image
                            src={service.imageUrl}
                            alt={service.title}
                            fill
                            className="rounded-2xl select-none object-cover group-hover:scale-105 transition-transform duration-500"
                            loading='lazy'
                        />
                    </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-px bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
            </div>
        </motion.div>
    );
}

export default ServiceCard;