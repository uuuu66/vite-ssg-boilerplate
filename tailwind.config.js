/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    screens: {
      "1200px": "1200px",
      "780px": "780px",
      "560px": "560px",
      "360px": "360px",
    },
    extend: {
      padding: {
        15: "60px",
      },
    },
  },
  plugins: [],
};
