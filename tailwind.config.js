/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{njk,md,html,js}",
    "./.eleventy.js"
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  "#faf6ee",
          100: "#f5f1e8",
          200: "#ece5d3",
          300: "#ddd2b6",
          400: "#c8b88f"
        },
        ink: {
          50:  "#3a342e",
          100: "#2b2520",
          200: "#231e1a",
          300: "#1f1b17",
          400: "#1a1714",
          500: "#141210",
          600: "#0f0d0c",
          700: "#3a3530",
          800: "#272320"
        },
        burgundy: {
          50:  "#f4dfe2",
          100: "#e0a8ad",
          200: "#c66b73",
          300: "#a73f48",
          400: "#8b1e2d",
          500: "#6e1622",
          600: "#511019"
        },
        emerald2: {
          100: "#bcd0c6",
          200: "#7ea596",
          300: "#46735f",
          400: "#1f4d3f",
          500: "#163a30",
          600: "#0d2620"
        },
        muted: {
          100: "#a89c8d",
          200: "#7a6f62",
          300: "#5d534a"
        }
      },
      fontFamily: {
        serif: ["\"Playfair Display\"", "\"Cormorant Garamond\"", "Georgia", "serif"],
        sans:  ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono:  ["\"JetBrains Mono\"", "ui-monospace", "monospace"]
      },
      letterSpacing: {
        academic: "0.02em",
        wider2:   "0.16em"
      },
      maxWidth: {
        prose2: "68ch"
      },
      boxShadow: {
        paper: "0 1px 0 rgba(0,0,0,0.04), 0 12px 30px -18px rgba(0,0,0,0.45)"
      },
      backgroundImage: {
        "grain": "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
        "vignette": "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)"
      }
    }
  },
  plugins: []
};
