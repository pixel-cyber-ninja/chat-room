/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4c07f9",
          secondary: "#f9f086",
          accent: "#145670",
          neutral: "#25273C",
          "base-100": "#323B48",
          info: "#9FBEE9",
          success: "#1A7A72",
          warning: "#EFC348",
          error: "#EA4D4D"
        }
      }
    ]
  }
}
