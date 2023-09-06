let carousel = document.querySelector(".carousel");
let carouselBackBtn = document.getElementById("carouselBack");
let carouselForwardBtn = document.getElementById("carouselForward");
let carouselPage = 0;

function updateCarouselPage() {
  carousel.style.transform = `translateX(-${carouselPage * 10}%)`;
if(carouselPage==0){
    carouselBackBtn.style.opacity=0;
    carouselForwardBtn.style.opacity=1;


}else{
    carouselForwardBtn.style.opacity=0;
    carouselBackBtn.style.opacity=1;
}
}

carouselBackBtn.addEventListener("click", () => {
  carouselPage = Math.max(carouselPage - 1, 0);
  updateCarouselPage();

});

carouselForwardBtn.addEventListener("click", () => {
  //Max pages=1
  carouselPage = Math.min(carouselPage + 1, 1);
  updateCarouselPage();
});
