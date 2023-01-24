module.exports = {
  content: ["./public/**/*.html", "./public/**/*.js", "./public/**/*.css"],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {},
  },
  plugins: [],
};

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
