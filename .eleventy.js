const { DateTime } = require("luxon");

const CleanCSS = require("clean-css");
const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);

  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/download");
  eleventyConfig.addPassthroughCopy("./src/images");

  eleventyConfig.addPassthroughCopy("./src/favicon.ico");

  eleventyConfig.addPassthroughCopy("./src/robots.txt");
  eleventyConfig.addPassthroughCopy("./src/sitemap.xml");

  eleventyConfig.addFilter("toTitleCase", function (value) {
    function toTitleCase(value) {
      return value.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
    return toTitleCase(value);
  });
  eleventyConfig.addFilter("toLowerCase", function (value) {
    return value.toLowerCase();
  });
  eleventyConfig.addFilter("toUpperCase", function (value) {
    return value.toUpperCase();
  });

  // format dates
  eleventyConfig.addFilter("toLocaleString", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // minify css
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
