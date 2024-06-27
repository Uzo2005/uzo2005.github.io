/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{md,mdx,astro}"],
  theme: {
    extend: {
      colors: {
        backgroundDark: "#002b36",
        backgroundHighlightDark: "#073642",
        emphasizedContent: "#586e75",
        bodyText: "#465c64",
        bodyTextDark: "#a1b4b8",
        emphasizedContentLight: "#93a1a1",
        backgroundHighlightLight: "#eee8d5",
        backgroundLight: "#fdf8df",
        yellow: "#b58900",
        yellowLight: "#FDE68A",
        orange: "#cb4b16",
        red: "#dc322f",
        magenta: "#d33682",
        violet: "#6c71c4",
        blue: "#268bd2",
        cyan: "#2aa198",
        green: "#859900",
        grey: "#181818",
      },
      backgroundImage: {
        bannerImageMd: "url('/bannerImage-md.png')",
        bannerImageSm: "url('/bannerImage-sm.png')",
      },
      fontFamily: {
        atkinson: "Atkinson Hyperlegible",
      },
    },
  },
  plugins: [],
};
