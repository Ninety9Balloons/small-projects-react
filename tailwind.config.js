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
                accent: "var(--color-bg-accent)",
            },
            textColor: {
                primary: "var(--color-text-primary)",
                secondary: "var(--color-text-secondary)",
            },
        },
    },
    plugins: [],
};
