gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".rectangle2Content", { x: 2000 }, { x: 0, duration: 0.7 });

gsap.fromTo(".searchDiv", { opacity: 0 }, { opacity: 1, duration: 2.5 });
gsap.fromTo(".searchDiv", { x: 2000 }, { x: 0, duration: 0.4 });
gsap.fromTo(".autoParts", { x: 2000 }, { x: 0, duration: 0.4 });
gsap.fromTo(
  ".autoExchange",
  { x: -2000 },
  {
    x: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".autoParts",
      start: "top center",
    },
  }
);

gsap.fromTo(
  ".leftservfix",
  { x: -2000 },
  {
    x: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".autoExchange",
      start: "top center",
    },
  }
);

gsap.fromTo(
  ".rightservfix",
  { x: 2000 },
  {
    x: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".autoExchange",
      start: "top center",
    },
  }
);

gsap.fromTo(
  ".serviceLeft2",
  { x: -2000 },
  {
    x: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".servicesFixedFirst",
      start: "bottom center",
    },
  }
);

gsap.fromTo(
  ".serviceRight2",
  { x: 2000 },
  {
    x: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".servicesFixedFirst",
      start: "bottom center",
    },
  }
);

let carousel = document.querySelector(".carousel");
let carouselBackBtn = document.getElementById("carouselBack");
let carouselForwardBtn = document.getElementById("carouselForward");
let carouselPage = 0;

function updateCarouselPage() {
  carousel.style.transform = `translateX(-${carouselPage * 10}%)`;
  if (carouselPage == 0) {
    carouselBackBtn.style.opacity = 0;
    carouselForwardBtn.style.opacity = 1;
  } else {
    carouselForwardBtn.style.opacity = 0;
    carouselBackBtn.style.opacity = 1;
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

let autoPartsCarousel = document.querySelector(".autoPartsSlider"); //271px width per unit
let productCount = Math.floor(autoPartsCarousel.offsetWidth / 271);
let forwardButton = document.getElementById("autoPartsArrowForward");
let backButton = document.getElementById("autoPartsArrowBackward");

let clickCounter = 3;
let translatePixels = 0;

forwardButton.addEventListener("click", () => {
  if (clickCounter >= 3 && clickCounter <= productCount) {
    clickCounter++;
    translatePixels -= 271;
    autoPartsCarousel.style.transform = `translateX(${translatePixels}px)`;
  }
  console.log(clickCounter, translatePixels);

  if (clickCounter > productCount) {
    forwardButton.style.opacity = "0";
  } else {
    forwardButton.style.opacity = "1";
  }

  if (clickCounter == 3) {
    backButton.style.opacity = "0";
  } else {
    backButton.style.opacity = "1";
  }
});

if (clickCounter > productCount) {
  forwardButton.style.opacity = "0";
} else {
  forwardButton.style.opacity = "1";
}

if (clickCounter == 3) {
  backButton.style.opacity = "0";
} else {
  backButton.style.opacity = "1";
}

backButton.addEventListener("click", () => {
  if (clickCounter > 3 && clickCounter <= productCount + 1) {
    clickCounter--;
    translatePixels += 271;
    autoPartsCarousel.style.transform = `translateX(${translatePixels}px)`;
  }
  console.log(clickCounter, translatePixels);

  if (clickCounter > productCount) {
    forwardButton.style.opacity = "0";
  } else {
    forwardButton.style.opacity = "1";
  }

  if (clickCounter == 3) {
    backButton.style.opacity = "0";
  } else {
    backButton.style.opacity = "1";
  }
});
