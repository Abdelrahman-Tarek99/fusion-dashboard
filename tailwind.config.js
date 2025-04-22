// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        orbit: "orbit 20s linear infinite",
        "spin-slow": "spin 15s linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform: "translate(-50%, -50%) rotate(0deg)",
          },
          "100%": {
            transform: "translate(-50%, -50%) rotate(360deg)",
          },
        },
      },
    },
  },
  darkMode: "class",
  corePlugins: {
    preflight: true,
  },

  plugins: [
    // 1️⃣ built‑in direction modifiers (ltr: / rtl:) work out of the box ≥ v3.0
    // 2️⃣ optional: richer logical‑property helpers
    require("tailwindcss-rtl")(),
  ],
};
