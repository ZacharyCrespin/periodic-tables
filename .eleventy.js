module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/table/*.png');
    eleventyConfig.addPassthroughCopy('./src/table/*.zip');

    eleventyConfig.addPassthroughCopy('./src/images');
    eleventyConfig.addPassthroughCopy('./src/css');

    eleventyConfig.addPassthroughCopy('./src/404.html');
    
    eleventyConfig.addPassthroughCopy('./src/robots.txt');
    eleventyConfig.addPassthroughCopy('./src/sitemap.xml');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}