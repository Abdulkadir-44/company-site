"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Phone, CheckCircle, Clock } from "lucide-react";
import { FormData } from "@/app/types/types";
import { floatingElementsData, whyNebaSoftware, formFields } from "@/app/lib/data/contactSectionData";
import { useIntersectionObserver } from "@/app/hooks/aboutSectionHooks";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import FormInput from "@/app/components/ui/Input"

export default function ContactSection() {
    const [formRef, isFormInView] = useIntersectionObserver<HTMLDivElement>();

    const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [responseMessage, setResponseMessage] = useState('');

    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const { executeRecaptcha } = useGoogleReCaptcha();

    const isFormValid = () => {
        // Required alanları kontrol et
        const requiredFields = formFields.filter(field => field.required);

        return requiredFields.every(field => {
            const value = formData[field.name];
            return value && value.trim().length > 0;
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // console.log("--- 1. Form Submission Started ---"); // LOG: Fonksiyonun başladığını teyit et
        setFormStatus('loading');
        setResponseMessage('');

        if (!executeRecaptcha) {
            // console.error("❌ ERROR: executeRecaptcha function is not available. reCAPTCHA script might not have loaded.");
            setFormStatus('error');
            setResponseMessage("Security validation failed to load. Please refresh the page.");
            return;
        }

        try {
            // console.log("... 2. Requesting reCAPTCHA token ..."); // LOG: Token isteme adımına gelindiğini gör
            const token = await executeRecaptcha('contactForm');
            // console.log("✅ 3. reCAPTCHA Token received:", token.substring(0, 30) + '...'); // LOG: Alınan token'ı (kısaltılmış olarak) konsolda gör

            const payload = { ...formData, token };
            // console.log("➡️ 4. Sending this payload to API:", payload); // LOG: Backend'e gönderilen verinin tamamını kontrol et

            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            // console.log("⬅️ 5. API Response Received. Status:", res.status); // LOG: API'den gelen cevabın durum kodunu gör (201, 400, 500 vb.)

            if (res.ok) {
                // const successData = await res.json();
                // console.log("✅ 6. API Success Data:", successData); // LOG: Başarılı olduğunda API'den dönen veriyi gör
                setFormStatus('success');
                setResponseMessage('Your message has been received!');

                if (formRef.current) {
                    formRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start' // veya 'center'
                    });
                }

                setTimeout(() => {
                    setFormStatus('idle');
                    setFormData({
                        fullName: "", email: "", phone: "", subject: "", message: ""
                    });
                }, 5000);
            } else {
                // If response is not OK, it might not be JSON. We try to parse it, but catch if it fails.
                try {
                    const errorData = await res.json();
                    // console.error("❌ 6. API Error Data (JSON):", errorData); // LOG: Hata durumunda API'den dönen JSON verisini gör
                    setResponseMessage(errorData.message || 'An error occurred. Please try again.');
                } catch (jsonError) {
                    // const errorText = await res.text();
                    // console.error("❌ 6. API Error Data (Not JSON):", errorText); // LOG: Cevap JSON değilse, ham metin olarak gör (HTML hata sayfası gibi)
                    setResponseMessage('A server error occurred. Please try again later.');
                }
                setFormStatus('error');
            }
        } catch (error) {
            console.error("❌ FATAL: A network error or unexpected issue occurred in handleSubmit.", error); // LOG: Fetch'in kendisi başarısız olursa (network hatası gibi) bu hata tetiklenir
            setFormStatus('error');
            setResponseMessage('Could not connect to the server. Please check your connection.');
        }
    };

    return (
        <section id="contact" className="sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-purple-50 py-16 relative overflow-hidden">

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
                                    <span>+90 546 601 57 38</span>
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
                            viewport={{ once: true }}
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
                                {formStatus !== 'success' ? (
                                    <>
                                        <div className="text-center mb-8">
                                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                <Mail className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Projenizi Paylaşın</h3>
                                            <p className="text-gray-600">24 saat içinde size geri dönüş yapacağız</p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-6">

                                            {formFields.map((field) => (
                                                <FormInput
                                                    key={field.id}
                                                    id={field.id}
                                                    name={field.name}
                                                    label={field.label}
                                                    type={field.type}
                                                    value={formData[field.name] || ''}
                                                    onChange={handleInputChange}
                                                    required={field.required}
                                                    optional={field.optional}
                                                    placeholder={field.placeholder}
                                                    icon={field.icon}
                                                    isFormInView={isFormInView}
                                                    delay={field.delay}
                                                    rows={field.rows}
                                                    options={field.options}
                                                />
                                            ))}

                                            {/* Submit Button */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: isFormInView ? 1 : 0, y: isFormInView ? 0 : 20 }}
                                                transition={{ duration: 0.6, delay: 1.0 }}
                                            >
                                                <motion.button
                                                    type="submit"
                                                    disabled={formStatus === 'loading' || !isFormValid()} // Burada validation eklendi
                                                    whileHover={{ scale: (formStatus === 'loading' || !isFormValid()) ? 1 : 1.02 }}
                                                    whileTap={{ scale: (formStatus === 'loading' || !isFormValid()) ? 1 : 0.98 }}
                                                    className={`w-full ${isFormValid()
                                                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                                                            : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                                        } py-4 lg:px-8 rounded-2xl font-semibold lg:text-lg text-base  shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed`}
                                                >
                                                    {formStatus === 'loading' ? (
                                                        <>
                                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                            <span>Gönderiliyor...</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span>
                                                                {isFormValid()
                                                                    ? 'Ücretsiz Görüşme Talep Et'
                                                                    : 'Lütfen Gerekli Alanları Doldurun'
                                                                }
                                                            </span>
                                                            <Send className={`w-5 h-5 ${!isFormValid() ? 'opacity-50' : ''}`} />
                                                        </>
                                                    )}
                                                </motion.button>

                                            </motion.div>
                                        </form>

                                        {formStatus === 'error' && (
                                            <p className="text-red-500 text-center mt-4 text-sm">{responseMessage}</p>
                                        )}
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
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{responseMessage}</h3>
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