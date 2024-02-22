/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color_primary: "#1565D8",
        color_primary_dark: "#1e40af",
        color_dark_text: "#262626",
        color_light: "#f9fafb",
        color_red_light: "#fee2e2",
        color_red: "#b91c1c",
        color_red_dark: "#991b1b",
        color_yellow_light: "#fef9c3",
        color_yellow: "#a16207",
        color_green_light: "#dcfce7",
        color_green: "#15803d",
        color_blue_light: "#e0f2fe",
        color_blue: "#0369a1",
        color_indigo_light: "#e0e7ff",
        color_indigo: "#4338ca",
        color_white: "#fafafa",
        color_grey: "#d1d5db",
        color_grey_light: "#f3f4f6",
        color_text: "#6b7280",
      },
    },
  },
  plugins: [],
};
