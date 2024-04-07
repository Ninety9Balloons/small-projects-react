/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",

    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-jobs": "hsl(180, 29%, 50%)",
                "neutral-background": "hsl(180, 31%, 95%)",
                tablets: "hsl(180, 31%, 95%)",
                "dark-grayish-cyan": "hsl(180, 8%, 52%)",
                "very-dark-grayish-cyan": "hsl(180, 14%, 20%)",

                "lime-green": "hsl(163, 72%, 41%)",
                "bright-red": "hsl(356, 69%, 56%)",
                facebook: "hsl(208, 92%, 53%)",
                twitter: "hsl(203, 89%, 53%)",
                "instagram-start": "hsl(37, 97%, 70%)",
                "instagram-end": "hsl(329, 70%, 58%)",
                youtube: "hsl(348, 97%, 39%)",

                "light-theme": "hsl(230, 22%, 74%)",
                "very-pale-blue": "hsl(225, 100%, 98%)",
                "light-grayish-blue": "hsl(227, 47%, 96%)",
                "dark-grayish-blue": "hsl(228, 12%, 44%)",
                "very-dark-blue": "hsl(230, 17%, 14%)",

                "dark-theme-start": "hsl(210, 78%, 56%)",
                "dark-theme-end": "hsl(146, 68%, 55%)",
                "very-dark-blue-bg": "hsl(230, 17%, 14%)",
                "very-dark-blue-top": "hsl(232, 19%, 15%)",
                "dark-desaturated-blue": "hsl(228, 28%, 20%)",
                "desaturated-blue": "hsl(228, 34%, 66%)",
                white: "hsl(0, 0%, 100%)",
            },
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
