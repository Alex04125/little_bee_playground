module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
    // Process HTML files as templates
    htmlTemplateEngine: "njk",
  };
};
