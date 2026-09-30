/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0C",
        graphite: "#151517",
        graphite2: "#1D1D20",
        concrete: "#8E8B85",
        bone: "#E9E6E0",
        paper: "#F4F2ED",
        accent: "#B8452A",
      },
      fontFamily: {
        display: ["Archivo", "system-ui", "sans-serif"],
        serif: ["'Instrument Serif'", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
    },
  },
  plugins: [],
};
