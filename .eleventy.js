module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/images');
    eleventyConfig.addPassthroughCopy('./src/files');
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/404.html');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}