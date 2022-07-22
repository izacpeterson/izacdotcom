const sharp = require("sharp");
const images = require("./images.js");
console.log("Making Thumbnails");
// import { images } from "./images.js";

console.log(images.images);

images.images.forEach((image) => {
  sharp("./images/" + image.src)
    .resize(400)
    .toFile("./thumbs/" + image.src);
});

// sharp("./images/ElephantTrunkNeb.jpg")
//   .resize(400)
//   .toFile("./thumbs/ElephantTrunkNeb_thumb.jpg");
