"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Phone, MessageSquare, User, Target, CheckCircle, Clock } from "lucide-react";
import { FormData } from "@/app/types/types";
import { subjectOptions, floatingElementsData, whyNebaSoftware } from "@/app/lib/data/contactSectionData";
import { useIntersectionObserver } from "@/app/hooks/aboutSectionHooks";

export default function ContactSection() {
    const [formRef, isFormInView] = useIntersectionObserver<HTMLDivElement>();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsLoading(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
            });
        }, 3000);
    };

    return (
        <section id="contact" className="px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-purple-50 py-16 relative overflow-hidden">

            {/* Floating Decorative Elements */}
            {floatingElementsData.map((dot, index) => (
                <div
                    key={index}
                    className={`absolute ${dot.top} ${dot.left} ${dot.size} bg-gradient-to-br ${dot.color} rounded-full ${dot.opacity} animate-bounce`}
                    style={{ animationDelay: dot.delay }}
                ></div>
            ))}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    // viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16 lg:mb-20"
                >
                    <div className="inline-flex items-center space-x-2 bg-purple-100 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-200 mb-6">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-purple-700 font-medium text-sm">Projenizi Konuşalım</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
                        Hayalinizdeki Projeye<br />
                        Birlikte Başlayalım
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Size özel çözümler geliştirmek için buradayız. Ücretsiz keşif görüşmesi ile projenizi değerlendirelim.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

                    {/* Left Side - Social Proof & Info */}
                    <div className="space-y-12">

                        {/* Process Steps */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-gray-200"
                        >
                            <h4 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 text-center">Nasıl Çalışıyoruz?</h4>
                            <div className="space-y-4">
                                {whyNebaSoftware.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                                        className="flex space-x-4 p-4 bg-white/50 rounded-xl border border-gray-100 hover:shadow-md hover:bg-white/70 transition-all duration-300"
                                    >
                                        <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <span className="text-purple-600 font-bold text-sm">{item.step}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-semibold text-blue-500 mb-1">{item.title}</h5>
                                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-gray-200"
                        >
                            <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center mb-6">İletişim Bilgileri</h4>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-green-500" />
                                    <span>+90 555 123 45 67</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-orange-500" />
                                    <span>info@nebasoftware.com</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-purple-500" />
                                    <span>Hafta içi: 09:00 - 18:00</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-yellow-500" />
                                    <span>Hızlı Yanıt: Ortalama 2 Saat</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* 3. Google Maps + Blur Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative rounded-2xl overflow-hidden shadow-xl"
                        >

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10143.142167226959!2d44.0754772163363!3d39.54623719871494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4014b73c85781721%3A0x33b8e2d8768b47c5!2zw4dpZnRlcMSxbmFyLCBCw7x5w7xrIEHEn3LEsSBDZC4gTm86NjAsIDA0NDAwIERvxJ91YmF5YXrEsXQvQcSfcsSx!5e1!3m2!1str!2str!4v1756734042604!5m2!1str!2str"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                className="rounded-2xl"
                            ></iframe>
                            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-xl p-2 rounded-xl shadow-lg text-sm text-gray-700">
                                <p className="font-bold text-purple-700 text-center">Ofis</p>
                                <p>Ağrı, Türkiye</p>
                            </div>
                        </motion.div>

                        {/* <div>
                            bu kısma resim gelecek ekranın tamamını kaplayan
                        </div> */}
                    </div>

                    {/* Right Side - Form */}
                    <motion.div
                        ref={formRef}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: isFormInView ? 1 : 0, x: isFormInView ? 0 : 50 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="bg-gray-100/80 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/20 relative overflow-hidden">

                            {/* Form Background Pattern */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-20 blur-2xl"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-green-200 to-purple-200 rounded-full opacity-20 blur-2xl"></div>

                            <div className="relative z-10">
                                {!isSubmitted ? (
                                    <>
                                        <div className="text-center mb-8">
                                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                <Mail className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Projenizi Paylaşın</h3>
                                            <p className="text-gray-600">24 saat içinde size geri dönüş yapacağız</p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-6">

                                            {/* Full Name - Required */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: isFormInView ? 1 : 0, y: isFormInView ? 0 : 20 }}
                                                transition={{ duration: 0.6, delay: 0.5 }}
                                            >
                                                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-3">
                                                    Ad Soyad <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                    <input
                                                        type="text"
                                                        id="fullName"
                                                        name="fullName"
                                                        value={formData.fullName}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-0 focus:border-purple-400 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
                                                        placeholder="Adınız ve soyadınız"
                                                    />
                                                </div>
                                            </motion.div>

                                            {/* Email - Required */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: isFormInView ? 1 : 0, y: isFormInView ? 0 : 20 }}
                                                transition={{ duration: 0.6, delay: 0.6 }}
                                            >
                                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                                                    E-posta Adresi <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-0 focus:border-purple-400 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
                                                        placeholder="ornek@email.com"
                                                    />
                                                </div>
                                            </motion.div>

                                            {/* Phone - Optional */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: isFormInView ? 1 : 0, y: isFormInView ? 0 : 20 }}
                                                transition={{ duration: 0.6, delay: 0.7 }}
                                            >
                                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                                                    Telefon Numarası <span className="text-gray-400 text-xs">(İsteğe Bağlı)</span>
                                                </label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-0 focus:border-purple-400 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
                                                        placeholder="05XX XXX XX XX"
                                                    />
                                                </div>
                                            </motion.div>

                                            {/* Subject Dropdown - Required */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: isFormInView ? 1 : 0, y: isFormInView ? 0 : 20 }}
                                                transition={{ duration: 0.6, delay: 0.8 }}
                                            >
                                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                                                    İlgilendiğim Konu <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <Target className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                    <select
                                                        id="subject"
                                                        name="subject"
                                                        value={formData.subject}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-0 focus:border-purple-400 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm appearance-none cursor-pointer"
                                                    >
                                                        {subjectOptions.map((option, index) => (
                                                            <option key={index} value={option.value} disabled={option.disabled}>
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            {/* Message - Required */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: isFormInView ? 1 : 0, y: isFormInView ? 0 : 20 }}
                                                transition={{ duration: 0.6, delay: 0.9 }}
                                            >
                                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                                                    Mesajınız <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleInputChange}
                                                        required
                                                        rows={5}
                                                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-0 focus:border-purple-400 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                                                        placeholder="Projenizden veya talebinizden kısaca bahseder misiniz?"
                                                    />
                                                </div>
                                            </motion.div>

                                            {/* Submit Button */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: isFormInView ? 1 : 0, y: isFormInView ? 0 : 20 }}
                                                transition={{ duration: 0.6, delay: 1.0 }}
                                            >
                                                <motion.button
                                                    type="submit"
                                                    disabled={isLoading}
                                                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                                                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                                                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                                >
                                                    {isLoading ? (
                                                        <>
                                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                            <span>Gönderiliyor...</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span>Ücretsiz Görüşme Talep Et</span>
                                                            <Send className="w-5 h-5" />
                                                        </>
                                                    )}
                                                </motion.button>
                                            </motion.div>
                                        </form>
                                    </>
                                ) : (
                                    // Success State
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-16"
                                    >
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle className="w-10 h-10 text-green-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Mesajınız Alındı!</h3>
                                        <p className="text-gray-600 mb-2">Teşekkürler! 24 saat içinde size geri dönüş yapacağız.</p>
                                        <p className="text-sm text-gray-500">Acil durumlar için: info@nebasoftware.com</p>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}