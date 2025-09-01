"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full text-white"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bg.jpeg"
                    alt="Footer Background"
                    className="object-cover select-none"
                    fill
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Footer Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Logo + Info */}
                    <div className="mr-10">
                        <Link href="/" className="text-gray-100 mb-4  text-lg sm:text-xl md:text-2xl font-bold tracking-wider flex justify-center items-center">
                            NEBA<span className='text-xl sm:text-2xl md:text-3xl text-purple-800'>SOFTWARE</span>
                        </Link>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Dijital dünyada güçlü çözümler üretiyoruz. Hedefimiz, işinizi bir
                            adım öteye taşımak.
                        </p>
                    </div>

                    {/* Quick Links */}
                    {/* Hızlı Bağlantılar */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Hızlı Bağlantılar</h3>
                        <ul className="space-y-3 text-gray-300 text-base">
                            <li>
                                <Link href="#home" className="hover:text-white transition">
                                    Ana Sayfa
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="hover:text-white transition">
                                    Hakkımızda
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="hover:text-white transition">
                                    Hizmetler
                                </Link>
                            </li>
                             <li>
                                <Link href="/projects" className="hover:text-white transition">
                                    Projeler
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="hover:text-white transition">
                                    İletişim
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* İletişim */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">İletişim</h3>
                        <ul className="space-y-3 text-gray-300 text-base">
                            <li className="flex items-center gap-3">
                                <MapPin className="w-8 h-8 text-purple-400" />
                                <span>Büyük Ağrı Cd. 60
                                    04400 Doğubayazıt Ağrı ,
                                    Türkiye</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-purple-400" />
                                <span>+90 555 123 45 67</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-purple-400" />
                                <span>info@nebasoftware.com</span>
                            </li>
                        </ul>
                    </div>


                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Bizi Takip Edin</h3>
                        <div className="flex space-x-4">
                            {/* Facebook */}
                            <Link
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-300 hover:bg-blue-700 hover:scale-110"
                            >
                                <Facebook className="w-5 h-5" />
                            </Link>

                            {/* Twitter */}
                            <Link
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-500 text-white transition-all duration-300 hover:bg-sky-600 hover:scale-110"
                            >
                                <Twitter className="w-5 h-5" />
                            </Link>

                            {/* Instagram */}
                            <Link
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white transition-all duration-300 hover:bg-pink-600 hover:scale-110"
                            >
                                <Instagram className="w-5 h-5" />
                            </Link>

                            {/* LinkedIn */}
                            <Link
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white transition-all duration-300 hover:bg-blue-800 hover:scale-110"
                            >
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>


                </div>

                {/* Divider */}
                <div className="border-t border-gray-500/30 my-8"></div>

                {/* Copyright */}
                <div className="text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} NEBA SOFTWARE. Tüm Hakları Saklıdır.
                </div>
            </div>
        </motion.footer>
    );
}
