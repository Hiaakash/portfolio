module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        dark: "#050816",
        light: "#faf9e9",
        secondary: "#aaa6c3",
        'secondary-light': "#cbe9ac",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern-dark": "url('/src/assets/herobg.png')",
        "hero-pattern-light": "url('/src/assets/herobglight.png')",
        'custom-light-gradient': 'linear-gradient(to right, #f9fafb, #e5e7eb)',
      },
    },
  },
  plugins: [],
};
