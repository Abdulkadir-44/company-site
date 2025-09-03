// components/ui/FormInput.tsx
import { motion } from "framer-motion";
import { FormInputProps } from "@/app/types/types"


export default function FormInput({
    id,
    name,
    label,
    type,
    value,
    onChange,
    required = false,
    optional = false,
    placeholder,
    icon: Icon,
    isFormInView,
    delay,
    rows = 5,
    options = []
}: FormInputProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isFormInView ? 1 : 0, y: isFormInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay }}
        >
            <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-3">
                {label}
                {required && <span className="text-red-500"> *</span>}
                {optional && <span className="text-gray-400 text-xs"> (İsteğe Bağlı)</span>}
            </label>

            <div className="relative">
                <Icon className={`absolute left-4 ${type === 'textarea' ? 'top-4' : 'top-1/2 transform -translate-y-1/2'} w-5 h-5 text-gray-400`} />

                {type === 'select' ? (
                    <>
                        <select
                            id={id}
                            name={name}
                            value={value}
                            onChange={onChange}
                            required={required}
                            className="w-full lg:pl-12 lg:pr-4 pl-4 pr-1 py-4 border border-gray-200 rounded-2xl focus:ring-0 focus:border-purple-400 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm appearance-none cursor-pointer"
                        >
                            {options.map((option, index) => (
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
                    </>
                ) : type === 'textarea' ? (
                    <textarea
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                        required={required}
                        rows={rows}
                        className="w-full lg:pl-12 lg:pr-4 pl-4 pr-1 py-4 border border-gray-200 rounded-2xl focus:ring-0 focus:border-purple-400 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                        placeholder={placeholder}
                    />
                ) : (
                    <input
                        type={type}
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                        required={required}
                        className="w-full lg:pl-12 lg:pr-4 py-4 pl-4 pr-1 border border-gray-200 rounded-2xl focus:ring-0 focus:border-purple-400 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        placeholder={placeholder}
                    />
                )}
            </div>
        </motion.div>
    );
}