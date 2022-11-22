/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { fontFamily: { "eb-garamond": "'EB Garamond'" } },
    colors: {
      blue: "#5e17eb",
      gray: {
        "100": "#d9d9d9",
        "200": "#909090",
        "300": "#473544",
        "400": "rgba(0, 0, 0, 0.54)",
      },
      white: "#fff",
      black: "#000",
      turquoise: "#9fefa6",
    },
    fontSize: { sm: "16px", base: "18px", lg: "31px", xl: "32px" },
    screens: {
      lg: { max: "1200px" },
      md: { max: "768px" },
      sm: { max: "428px" },
      mq650: { raw: "screen and (max-width: 650px)" },
    },
  },
  corePlugins: { preflight: false },
};
