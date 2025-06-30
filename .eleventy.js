module.exports = function (eleventyConfig) {
  // Copy the entire img folder to _site
  eleventyConfig.addPassthroughCopy("img");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
  };
};
