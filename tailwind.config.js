/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{njk,md,html,js}",
    "./.eleventy.js"
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          50:  "#ffffff",
          100: "#fdfcfa",
          200: "#f7f5f1",
          300: "#f0ece5",
          400: "#e5e0d6"
        },
        clay: {
          50:  "#a39e96",
          100: "#847f77",
          200: "#615c55",
          300: "#433e38",
          400: "#2a2520",
          500: "#1a1714"
        },
        sage: {
          50:  "rgb(var(--accent-50)  / <alpha-value>)",
          100: "rgb(var(--accent-100) / <alpha-value>)",
          200: "rgb(var(--accent-200) / <alpha-value>)",
          300: "rgb(var(--accent-300) / <alpha-value>)",
          400: "rgb(var(--accent-400) / <alpha-value>)",
          500: "rgb(var(--accent-500) / <alpha-value>)",
          600: "rgb(var(--accent-600) / <alpha-value>)"
        },
        muted: {
          100: "#b5b0a8",
          200: "#8a857d",
          300: "#6b6660"
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
        paper:  "0 2px 8px -2px rgba(0,0,0,0.08), 0 6px 20px -6px rgba(0,0,0,0.06)",
        soft:   "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px -4px rgba(0,0,0,0.06)"
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
