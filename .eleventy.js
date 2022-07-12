module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/download');
    eleventyConfig.addPassthroughCopy('./src/images');

    eleventyConfig.addPassthroughCopy('./src/404.html');
    
    eleventyConfig.addPassthroughCopy('./src/favicon.ico');

    eleventyConfig.addPassthroughCopy('./src/robots.txt');
    eleventyConfig.addPassthroughCopy('./src/sitemap.xml');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}