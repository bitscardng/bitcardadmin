/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "var(--color-white)",
        primary: "var(--color-primary)",
        sec: "var(--color-sec)",
        active: "var(--color-active)",
      },
    },
  },
  plugins: [require("daisyui")],
};

