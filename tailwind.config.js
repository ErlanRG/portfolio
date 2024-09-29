/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'cat-base': "#181825",
        'cat-red': "#f38ba8",
        'cat-text': "#cdd6f4",
        'cat-teal': "#94e2d5",
        'cat-maroon': "#eba0ac",
      },
    },
  },
  plugins: [],
};
