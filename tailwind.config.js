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
        'violet': '#D4A7F2',
        'white': '#FFFFFF',
      },
      dropShadow: {
        'sm': '5px 5px 0 rgba(0, 0, 0, 1)',
        'md': '5px 5px 0 rgba(255, 255, 255, 1)',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': ['3.052rem', '1'],
        '6xl': ['6rem', '1'],
        '8xl': ['8rem', '1'],
        '10xl': ['10rem', '1'],
        '15xl': ['18rem', '1'],
      },
    },
  },
  plugins: [],
};
