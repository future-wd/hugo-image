// search for images
let images = document.querySelectorAll('img.image--lazyload');
// loop over images
images.forEach(function (image) {
  // remove default tag (not required)
  image.classList.remove('image--lazyload');
  // add lazyloading tag to show js has picked up the image
  image.classList.add('image--lazyloading');
  // add lazyloaded tag if image load is complete
  let loaded = image.complete;
  if (loaded) {
    image.classList.remove('image--lazyloading');
    image.classList.add('image--lazyloaded');
  }
});


