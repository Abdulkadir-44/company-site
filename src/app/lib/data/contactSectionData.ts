import { User, Mail, Phone, Target, MessageSquare } from "lucide-react";
import {FormField} from "@/app/types/types";

// Subject options
const subjectOptions = [
    { value: "", label: "Lütfen bir konu seçin", disabled: true },
    { value: "new-project", label: "Yeni Bir Proje Hakkında Bilgi Almak İstiyorum" },
    { value: "technical-support", label: "Mevcut Projem İçin Teknik Destek Arıyorum" },
    { value: "partnership", label: "İş Ortaklığı Teklifi" },
    { value: "career", label: "Kariyer ve İşe Alım" },
    { value: "other", label: "Diğer" }
];


const floatingElementsData = [
    { top: 'top-20', left: 'left-20', size: 'w-4 h-4', color: 'from-green-500 to-emerald-500', opacity: 'opacity-60', delay: '0s' },
    { top: 'top-32', left: 'right-32', size: 'w-3 h-3', color: 'from-purple-500 to-pink-500', opacity: 'opacity-40', delay: '1s' },
    { top: 'top-1/3', left: 'left-10', size: 'w-2 h-2', color: 'from-orange-500 to-red-500', opacity: 'opacity-50', delay: '2s' },
    { top: 'bottom-20', left: 'right-20', size: 'w-4 h-4', color: 'from-green-600 to-teal-600', opacity: 'opacity-45', delay: '3s' },
    { top: 'bottom-40', left: 'left-40', size: 'w-3 h-3', color: 'from-purple-600 to-indigo-600', opacity: 'opacity-35', delay: '0.5s' },
    { top: 'top-2/3', left: 'right-1/4', size: 'w-2 h-2', color: 'from-orange-600 to-yellow-600', opacity: 'opacity-55', delay: '4s' },
    { top: 'top-16', left: 'left-1/3', size: 'w-3 h-3', color: 'from-green-400 to-lime-500', opacity: 'opacity-30', delay: '1.5s' },
    { top: 'top-44', left: 'right-1/3', size: 'w-2 h-2', color: 'from-purple-400 to-violet-500', opacity: 'opacity-40', delay: '2.5s' },
    { top: 'bottom-32', left: 'left-1/4', size: 'w-4 h-4', color: 'from-orange-400 to-amber-500', opacity: 'opacity-25', delay: '3.5s' },
    { top: 'bottom-16', left: 'right-1/2', size: 'w-2 h-2', color: 'from-green-300 to-emerald-400', opacity: 'opacity-35', delay: '4.5s' },
    { top: 'top-1/4', left: 'left-1/2', size: 'w-3 h-3', color: 'from-purple-300 to-pink-400', opacity: 'opacity-45', delay: '5s' },
    { top: 'top-3/4', left: 'left-20', size: 'w-2 h-2', color: 'from-orange-300 to-red-400', opacity: 'opacity-50', delay: '0.8s' },
    { top: 'top-1/2', left: 'right-10', size: 'w-4 h-4', color: 'from-green-200 to-teal-300', opacity: 'opacity-25', delay: '1.8s' },
    { top: 'bottom-1/4', left: 'left-2/3', size: 'w-3 h-3', color: 'from-purple-200 to-indigo-300', opacity: 'opacity-40', delay: '2.8s' },
    { top: 'top-48', left: 'left-16', size: 'w-2 h-2', color: 'from-orange-200 to-yellow-300', opacity: 'opacity-35', delay: '3.8s' }
];

//why nebasoftware ?
const whyNebaSoftware = [
    { step: "01", title: "Ücretsiz Keşif", desc: "Projenizi detaylı anlayıp size özel roadmap çıkarıyoruz" },
    { step: "02", title: "Teklif & Planlama", desc: "Şeffaf fiyatlandırma ve net zaman planlaması sunuyoruz" },
    { step: "03", title: "Geliştirme", desc: "Modern teknolojilerle hızlı ve kaliteli geliştirme yapıyoruz" }
];

const formFields: FormField[] = [
  {
    id: "fullName",
    name: "fullName",
    label: "Ad Soyad",
    type: "text",
    required: true,
    placeholder: "Adınız ve soyadınız",
    icon: User,
    delay: 0.5
  },
  {
    id: "email",
    name: "email", 
    label: "E-posta Adresi",
    type: "email",
    required: true,
    placeholder: "ornek@email.com",
    icon: Mail,
    delay: 0.6
  },
  {
    id: "phone",
    name: "phone",
    label: "Telefon Numarası", 
    type: "tel",
    optional: true,
    placeholder: "05XX XXX XX XX",
    icon: Phone,
    delay: 0.7
  },
  {
    id: "subject",
    name: "subject",
    label: "İlgilendiğim Konu",
    type: "select",
    required: true,
    icon: Target,
    delay: 0.8,
    options: subjectOptions 
  },
  {
    id: "message", 
    name: "message",
    label: "Mesajınız",
    type: "textarea",
    required: true,
    placeholder: "Projenizden veya talebinizden kısaca bahseder misiniz?",
    icon: MessageSquare,
    delay: 0.9,
    rows: 5
  }
];

export { subjectOptions, floatingElementsData,whyNebaSoftware ,formFields};