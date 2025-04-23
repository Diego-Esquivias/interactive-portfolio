/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    extend: {
        colors: {
        mainColor: '#FFC3CB',
        },
        keyframes: {
        marquee: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(100%)' },
        },
        },
        animation: {
        marquee: 'marquee 10s linear infinite',
        },
    },
    },
    plugins: [],
}
