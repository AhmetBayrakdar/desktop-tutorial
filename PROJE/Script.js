const slidesData = [
  {
    img: "img/1.png",
    subTitle: "Radisson Blu Hotel, Havaalanı Abidjan",
    desc: "Bu proje Abidjan, Fildişi Sahili'nde yer almaktadır. 250 oda ve Genel Alanlar dahil olmak üzere 3,000 m2'lik binanın beton ve MEP işlerini üstlendik."
  },
  {
    img: "img/2.png",
    subTitle: "Marriott Hotel Kapadokya Nevşehir",
    desc: "Nevşehir Kapadokya'da yer alan bu proje, eşsiz doğal manzarası ve lüks konaklama olanaklarıyla öne çıkıyor."
  },
  {
    img: "img/3.png",
    subTitle: "Marinage Apart Radissons Bamenda",
    desc: "Bamenda'da yer alan bu rezidans projesi, modern mimarisi ve üst düzey sosyal imkanlarıyla dikkat çekiyor."
  }
];

const mainImage = document.getElementById("mainImage");
const projectSubTitle = document.getElementById("projectSubTitle");
const projectDesc = document.getElementById("projectDesc");
const prevArrow = document.getElementById("prevArrow");
const nextArrow = document.getElementById("nextArrow");
const thumbnailsContainer = document.getElementById("carouselThumbnails");

let currentIndex = 0;

function initCarousel() {
  updateSlide(currentIndex);

  slidesData.forEach((slide, index) => {
    const thumbImg = document.createElement("img");
    thumbImg.src = slide.img;
    thumbImg.alt = `Thumbnail ${index}`;
    thumbImg.addEventListener("click", () => {
      updateSlide(index);
    });
    thumbnailsContainer.appendChild(thumbImg);
  });

  thumbnailsContainer.children[currentIndex].classList.add("my-active");
}

function updateSlide(index) {
  currentIndex = index;
  const slideData = slidesData[index];

  mainImage.src = slideData.img;
  projectSubTitle.textContent = slideData.subTitle;
  projectDesc.textContent = slideData.desc;

  Array.from(thumbnailsContainer.children).forEach((img, i) => {
    img.classList.toggle("my-active", i === index);
  });
}

prevArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slidesData.length) % slidesData.length;
  updateSlide(currentIndex);
});
nextArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slidesData.length;
  updateSlide(currentIndex);
});
initCarousel();