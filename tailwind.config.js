/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
            backgroundColor: {
                primary: "var(--color-bg-primary)",
                secondary: "var(--color-bg-secondary)",
                "accent-1": "var(--color-bg-accent-1)",
                "accent-2": "var(--color-bg-accent-2)",
                "accent-3": "var(--color-bg-accent-3)",
            },
            textColor: {
                primary: "var(--color-text-primary)",
                secondary: "var(--color-text-secondary)",
                link: "var(--color-text-link)",
                accent: "var(--color-text-secondary)",
            },
        },
    },
    plugins: [],
};
