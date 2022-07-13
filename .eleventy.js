const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/download');
    eleventyConfig.addPassthroughCopy('./src/images');

    eleventyConfig.addPassthroughCopy('./src/404.html');
    
    eleventyConfig.addPassthroughCopy('./src/favicon.ico');

    eleventyConfig.addPassthroughCopy('./src/robots.txt');
    eleventyConfig.addPassthroughCopy('./src/sitemap.xml');

    // format dates
    eleventyConfig.addFilter("toLocaleString", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}