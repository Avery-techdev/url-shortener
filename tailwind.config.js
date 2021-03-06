module.exports = {
  purge: [], //remove this line
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx", "./public/**/*.html"], //add this line
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      cyan: "hsl(180, 66%, 49%)",
      "light-cyan": "#9AE3E3",
      "dark-violet": "hsl(257, 27%, 26%)",
      red: "hsl(0, 87%, 67%)",
      gray: "hsl(0, 0%, 75%)",
      "light-gray": "#F0F1F6",
      "grayish-violet": "hsl(257, 7%, 63%)",
      "very-dark-blue": "hsl(255, 11%, 22%)",
      "very-dark-violet": "hsl(260, 8%, 14%)",
      white: "#fff",
    },
    fontFamily: {
      "poppins-regular": ["poppins-regular", "sans-serif"],
      "poppins-bold": ["poppins-bold", "sans-serif"],
    },
    fontSize: {
      h1: ["80px", "90px"],
      h2: ["40px", "48px"],
      h3: ["22px", "36px"],
      h4: ["20px", "30px"],
      h5: ["18px", "32px"],
      body: ["15px", "26px"],
      h1Mobile: ["42px", "48px"],
      h2Mobile: ["28px", "48px"],
      h3Mobile: ["20px", "30px"],
      h4Mobile: ["18px", "30px"],
      h5Mobile: ["16px", "28px"],
      headCards: ["22px", "33px"],
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      hd: "1920px",
      "4k": "3000px",
    },
    extend: {
      transformOrigin: {
        "1px": "1px",
      },
      backgroundImage: {
        "shortener-pattern": "url(/svgs/bg-shortener.svg)",
        "boost-background": "url(/svgs/BoostBackground.svg)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
