export interface FormData {
    fullName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export interface Testimonial {
    id: number;
    quote: string;
    name: string;
    title: string;
    image: string;
}


import { LucideIcon } from "lucide-react";


export interface FormInputProps {
    id: string;
    name: string;
    label: string;
    type: 'text' | 'email' | 'tel' | 'select' | 'textarea';
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    required?: boolean;
    optional?: boolean;
    placeholder?: string;
    icon: LucideIcon;
    isFormInView: boolean;
    delay: number;
    rows?: number;
    options?: { value: string; label: string; disabled?: boolean }[];
}

export interface FormField {
    id: string;
    name: keyof FormData;
    label: string;
    type: 'text' | 'email' | 'tel' | 'select' | 'textarea';
    required?: boolean;
    optional?: boolean;
    placeholder?: string;
    icon: LucideIcon;
    delay: number;
    rows?: number;
    options?: { value: string; label: string; disabled?: boolean }[];
}