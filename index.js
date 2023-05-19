window.addEventListener("DOMContentLoaded", function () {
  var imgElement = document.getElementById("myImage");

  function updateImageSource() {
    if (window.innerWidth <= 768) {
      // Change image source for devices with viewport width less than or equal to 768px (small devices)
      imgElement.src = "./assets/images/image-web-3-mobile.jpg";
    } else {
      imgElement.src = "./assets/images/image-web-3-desktop.jpg";
    }
  }

  // Call the function on page load and window resize
  updateImageSource();
  window.addEventListener("resize", updateImageSource);
});
