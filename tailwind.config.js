/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color_primary: "#1565D8",
        color_primary_dark: "#1e40af",
        color_primary_text: "#1565D8",
        color_secondary_text: "#C1BBEB",
        color_dark_text: "#262626",
        color_light: "#dbeafe",
        color_red: "#dc2626",
        color_red_dark: "#b91c1c",
        color_orange: "#FB7D5B",
        color_yellow: "#FCC43E",
        color_green: "#00E709",
        color_white: '#eff6ff',
        color_grey: '#6b7280'
      },
    },
  },
  plugins: [],
};
