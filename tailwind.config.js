/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}", "./src/Components/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                "primary-blue": "#062BEB",
            },
            fontFamily: {
                Agrandir: ["Agrandir"],
            },
        },
    },
    plugins: [],
};