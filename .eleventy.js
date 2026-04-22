module.exports = function(eleventyConfig){

eleventyConfig.addPassthroughCopy("src/assets");

eleventyConfig.addCollection("releases", function(api){
 return api
   .getFilteredByGlob("src/changelog/*.md")
   .sort((a,b)=> b.date - a.date);
});

return {
 dir:{
   input:"src",
   includes:"_includes",
   output:"dist"
 }
}

}