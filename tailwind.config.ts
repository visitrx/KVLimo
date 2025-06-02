import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ["var(--font-inter)", "system-ui", "sans-serif"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "background-secondary": "var(--background-secondary)",
                accent: "var(--accent)",
            },
            animation: {
                "fade-in-up": "fadeInUp 1s ease-out forwards",
                "fade-in": "fadeIn 1.5s ease-out forwards",
                "letter-spacing": "letterSpacing 3s ease-in-out infinite",
                shimmer: "shimmer 2s ease-in-out infinite",
            },
            keyframes: {
                fadeInUp: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(30px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                letterSpacing: {
                    "0%": { letterSpacing: "0.1em" },
                    "50%": { letterSpacing: "0.3em" },
                    "100%": { letterSpacing: "0.2em" },
                },
                shimmer: {
                    "0%": { opacity: "0.8" },
                    "50%": { opacity: "1" },
                    "100%": { opacity: "0.8" },
                },
            },
            boxShadow: {
                "4xl": "0 50px 100px -20px rgba(0, 0, 0, 0.6)",
            },
        },
    },
    plugins: [],
};

export default config;
