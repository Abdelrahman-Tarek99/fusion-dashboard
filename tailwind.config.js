// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  /* ↑ keep scans tight for perf */

  darkMode: "class", // <‑‑ enables the .dark selector
  corePlugins: {
    preflight: true, // keep Tailwind’s reset (it’s dir‑aware)
  },

  plugins: [
    // 1️⃣ built‑in direction modifiers (ltr: / rtl:) work out of the box ≥ v3.0
    // 2️⃣ optional: richer logical‑property helpers
    require("tailwindcss-rtl")(),
  ],
};
