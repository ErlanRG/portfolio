/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'xl': '0 10px 15px -3px rgb(69, 71, 90, 0.2), 0 4px 6px -2px rgba(69, 71, 90, 0.3)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'cat-base': "#181825",
        'cat-red': "#f38ba8",
        'cat-text': "#cdd6f4",
        'cat-teal': "#94e2d5",
        'cat-maroon': "#eba0ac",
        'cat-surface0': "#1e1e2e",
        'cat-overlay0': "#6c7086",
      },
    },
  },
  plugins: [],
};
