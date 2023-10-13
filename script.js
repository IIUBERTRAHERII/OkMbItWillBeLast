const images = document.querySelectorAll(".image");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentImageIndex = 0;

function nextImage() {
  images[currentImageIndex].style.display = "none";
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.display = "block";
}

function prevImage() {
  images[currentImageIndex].style.display = "none";
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  images[currentImageIndex].style.display = "block";
}

nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", prevImage);