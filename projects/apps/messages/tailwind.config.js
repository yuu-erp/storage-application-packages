/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../package/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        main: "var(--text-main)",
        "sub-title": "var(--sub-title)",
        desc: "var(--desc)",
        icon: "var(--icon)",
        blur: "var(--bg-blur)",
        body: "var(--bg-body)",
        sidebar: "var(--bg-sidebar)",
        header: "var(--bg-header)",
        content: "var(--bg-content)",
        search: "var(--bg-search)",
        button: "var(--bg-button)",
        popover: "var(--bg-popover)",
        "message-list": "var(--bg-message-list)",
        "color-border": "var(--border)",
        "selected": "var(--selected)"
      },
      screens: {
        xs: "0px",
        sm: "640px",
        md: "988px",
        lg: "1078px",
        xl: "1265px",
        "2xl": "1384px",
      },
      boxShadow: {
        1: "0px 24px 30px 0px #0000000D",
        2: "2px 2px 6px 0px #0000004D inset, 0px 1px 1px 0px #FFFFFF80",
      },
      backgroundImage: {
        "ln-header": "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))"
      },
    }
  },
  plugins: [require("tailwindcss-animate")]
}
