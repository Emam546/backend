/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            inter: ["Inter", "sans-serif"],
        },
        colors: {
            black: "#0F1014",
            white: "#fff",
            "white-off": {
                1: "#e1e6f0",
                2: "#8f98b2",
                3: "#707a94",
            },

            grey: {
                1: "#97989A",
                2: "#cad2e5",
            },

            trans: "transparent",
            "black-off": {
                1: "#1A1D25",
                2: "#252833",
            },
        },
        extend: {},
    },
    plugins: [],
};
