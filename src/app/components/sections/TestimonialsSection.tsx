"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import {testimonials} from "@/app/lib/data/testimonalSectionData"


const SLIDE_INTERVAL = 7000;
const ANIMATION_DURATION = 1.0;

const TestimonialsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, SLIDE_INTERVAL);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const getCardStyle = (index: number) => {
        const offset = index - activeIndex;
        const total = testimonials.length;
        const normalizedOffset = (offset + total) % total;

        switch (normalizedOffset) {
            case 0:
                return {
                    x: "0%",
                    scale: 1,
                    zIndex: 3,
                    opacity: 1,
                    y: 0,
                };
            case 1:
                return {
                    x: "80%",
                    scale: 0.75,
                    zIndex: 2,
                    opacity: 0.5,
                    y: 20,
                };
            case total - 1:
                return {
                    x: "-80%",
                    scale: 0.75,
                    zIndex: 2,
                    opacity: 0.5,
                    y: 20,
                };
            default:
                return {
                    x: normalizedOffset > total / 2 ? "-160%" : "160%",
                    scale: 0.6,
                    zIndex: 1,
                    opacity: 0,
                    y: 40,
                };
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative py-16 sm:py-24 overflow-hidden bg-gray-900"
        >
            <Image
                src="/bg-2.jpeg"
                alt="Testimonials background"
                fill
                priority
                className="absolute inset-0 object-cover w-full h-full opacity-30 select-none"
            />
            <div className="relative max-w-6xl mx-auto  sm:px-6 lg:px-8 z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Müşterilerimiz Bizim İçin Ne Diyor?
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Başarı hikayelerimizi doğrudan onlardan dinleyin.
                    </p>
                </div>
                <div className="relative h-[450px] md:h-[400px] flex items-center justify-center">
                    <AnimatePresence initial={false}>
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                className="absolute w-[90%] max-w-lg "
                                initial={getCardStyle(index)}
                                animate={getCardStyle(index)}
                                transition={{
                                    duration: ANIMATION_DURATION,
                                    ease: [0.32, 0.72, 0, 1],
                                }}
                                style={{ originX: 0.5, originY: 0.5 }}
                            >
                                <div className="bg-slate-900/50 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-8 h-full flex flex-col justify-between">
                                    <div>
                                        <Quote className="w-10 h-10 text-violet-400" />
                                        <blockquote className="mt-6 text-slate-200">
                                            <p className="text-base md:text-lg">{testimonial.quote}</p>
                                        </blockquote>
                                    </div>
                                    <figcaption className="mt-6 flex items-center">
                                        <Image
                                            className="w-14 h-14 select-none rounded-full object-cover border-2 border-violet-400/50"
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={56}
                                            height={56}
                                        />
                                        <div className="ml-4">
                                            <div className="text-base font-bold text-slate-100">
                                                {testimonial.name}
                                            </div>
                                            <div className="text-sm text-slate-400">
                                                {testimonial.title}
                                            </div>
                                        </div>
                                    </figcaption>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </motion.section>
    );
};

export default TestimonialsSection;