/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        meteor: {
          50: "#fffcea",
          100: "#fff7c5",
          200: "#ffee87",
          300: "#ffdf48",
          400: "#ffcd1e",
          500: "#fcac04",
          600: "#d17a00",
          700: "#b95b04",
          800: "#96460a",
          900: "#7b390c",
          950: "#471c01",
        },
      },
    },
  },
  plugins: [],
};
