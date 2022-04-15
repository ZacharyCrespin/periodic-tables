module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/images');
    eleventyConfig.addPassthroughCopy('./src/files');
    eleventyConfig.addPassthroughCopy('./src/css');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}