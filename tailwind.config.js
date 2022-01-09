module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        basecolor: "#f5f5f0",
        primary: "#f72585",
        secondary: "#b5179e",
        tertiary: "#7209b7",
        quaternary: "#560bad",
        quinary: "#480ca8",
        senary: "#3a0ca3",
        septenary: "#3f37c9",
        octonary: "#4361ee",
        nonary: "#4895ef",
        denary: "#4cc9f0",

        success: "#0ead69",
        info: "#00bbf9",
        danger: "#fee440",
        failed: "#ff0054",

        "browser-light": "#e8e8e8",
        "browser-dark": "#36383a",
        expand: "#27c93f",
        "expand-ring": "#13ab42",
        minimize: "#ffbd2e",
        "minimize-ring": "#eba03f",
        close: "#ff5f56",
        "close-ring": "#f04744",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
