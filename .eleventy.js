module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets/img": "assets/img" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

  eleventyConfig.addWatchTarget("./src/assets/css/");
  eleventyConfig.addWatchTarget("./tailwind.config.js");

  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  eleventyConfig.addShortcode("youtube", function (id, title = "Video") {
    return `<div class="aspect-video w-full overflow-hidden rounded-md ring-1 ring-ink-700/40">
      <iframe class="w-full h-full" src="https://www.youtube-nocookie.com/embed/${id}"
        title="${title}" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
        allowfullscreen></iframe>
    </div>`;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    pathPrefix: "/"
  };
};
