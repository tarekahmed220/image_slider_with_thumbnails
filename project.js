const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const imgId = document.querySelector(".img-id");
const slider = document.querySelectorAll(".slider img");
const thumbNailsContainer = document.querySelector(".thumbnail-container");
thumbNailsContainer.style.gridTemplateColumns = `repeat(${slider.length},1fr)`;
let imageIdCounter = 0;
updateControl();
function goToSlider(n) {
  slider[imageIdCounter].classList.remove("active");
  imageIdCounter = (n + slider.length) % slider.length;
  slider[imageIdCounter].classList.add("active");
  updateThumbnailActiveState(imageIdCounter);
  updateControl();
}

prevBtn.addEventListener("click", () => {
  goToSlider(imageIdCounter - 1);
});

nextBtn.addEventListener("click", () => {
  goToSlider(imageIdCounter + 1);
});

function updateControl() {
  prevBtn.disabled = imageIdCounter === 0;
  nextBtn.disabled = imageIdCounter === slider.length - 1;
  imgId.innerHTML = `${imageIdCounter + 1} of ${slider.length}`;
}

slider.forEach((img, index) => {
  const thumbnail = img.cloneNode();
  thumbnail.addEventListener("click", () => {
    goToSlider(index);
  });
  thumbNailsContainer.appendChild(thumbnail);
});

function updateThumbnailActiveState(index) {
  thumbNailsContainer.querySelectorAll("img").forEach((img, i) => {
    // ======first way =======
    // img.classList.remove("active");
    // if (i === index) {
    //   img.classList.add("active");
    // }
    // ======second way =======
    img.classList.toggle("active", i === index);
  });
}
