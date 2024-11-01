/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
      bubble: ["Bubble Bobble", "sans-serif"],
      rainstrom: ["Rainstorm", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
