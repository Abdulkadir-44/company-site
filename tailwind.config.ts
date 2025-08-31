import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                newsreader: ['var(--font-newsreader)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                heading: ['var(--font-poppins)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            animation: {
                'infinite-scroll': 'infinite-scroll 30s linear infinite',
                'infinite-scroll-slow': 'infinite-scroll 45s linear infinite',
                'infinite-scroll-fast': 'infinite-scroll 20s linear infinite',
            },
        },
    },
    plugins: [],
}

export default config