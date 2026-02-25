const imageFiles = [
  "images/IMG_0236.PNG",
  "images/IMG_1038.PNG",
  "images/IMG_1719.PNG",
  "images/IMG_2068.PNG",
  "images/IMG_2079.PNG",
  "images/IMG_3979.PNG",
  "images/IMG_0014.jpg",
  "images/IMG_0200.jpg",
  "images/IMG_0247.jpg",
  "images/IMG_0545.jpg",
  "images/IMG_0627.jpg",
  "images/IMG_0769.jpg",
  "images/IMG_0821.jpg",
  "images/IMG_1042.jpg",
  "images/IMG_1061.jpg",
  "images/IMG_1063.jpg",
  "images/IMG_1362.jpg",
  "images/IMG_1567.jpg",
  "images/IMG_1685.jpg",
  "images/IMG_1724.jpg",
  "images/IMG_1769.jpg",
  "images/IMG_2133.jpg",
  "images/IMG_2148.jpg",
  "images/IMG_2470.jpg",
  "images/IMG_2603.jpg",
];

const artworkMeta = {
  "images/IMG_0236.PNG": { title: "Ember Pulse", year: "2024", medium: "Digital" },
  "images/IMG_1038.PNG": { title: "Midnight Window", year: "2024", medium: "Digital" },
  "images/IMG_1719.PNG": { title: "Liminal Bloom", year: "2024", medium: "Digital" },
  "images/IMG_2068.PNG": { title: "Fractured Tempo", year: "2024", medium: "Mixed Media" },
  "images/IMG_2079.PNG": { title: "Still Current", year: "2024", medium: "Digital" },
  "images/IMG_3979.PNG": { title: "Signal Through Fog", year: "2024", medium: "Digital" },
  "images/IMG_0014.jpg": { title: "First Transmission", year: "2025", medium: "Digital" },
  "images/IMG_0200.jpg": { title: "Afterimage Drift", year: "2025", medium: "Digital" },
  "images/IMG_0247.jpg": { title: "Wired Silence", year: "2025", medium: "Digital" },
  "images/IMG_0545.jpg": { title: "Soft Rupture", year: "2025", medium: "Digital" },
  "images/IMG_0627.jpg": { title: "Interior Echo", year: "2025", medium: "Digital" },
  "images/IMG_0769.jpg": { title: "Open Echo", year: "2025", medium: "Digital" },
  "images/IMG_0821.jpg": { title: "Flicker Language", year: "2025", medium: "Digital" },
  "images/IMG_1042.jpg": { title: "At The Threshold", year: "2025", medium: "Digital" },
  "images/IMG_1061.jpg": { title: "Shifting Atmosphere", year: "2025", medium: "Mixed Media" },
  "images/IMG_1063.jpg": { title: "Static Garden", year: "2025", medium: "Digital" },
  "images/IMG_1362.jpg": { title: "Held Breath", year: "2025", medium: "Digital" },
  "images/IMG_1567.jpg": { title: "Blue Memory", year: "2025", medium: "Digital" },
  "images/IMG_1685.jpg": { title: "Heat Signature", year: "2025", medium: "Digital" },
  "images/IMG_1724.jpg": { title: "Field Recording", year: "2025", medium: "Digital" },
  "images/IMG_1769.jpg": { title: "Pressure Weather", year: "2025", medium: "Mixed Media" },
  "images/IMG_2133.jpg": { title: "Veil of Noise", year: "2025", medium: "Digital" },
  "images/IMG_2148.jpg": { title: "Neon Thicket", year: "2025", medium: "Digital" },
  "images/IMG_2470.jpg": { title: "Late Light Horizon", year: "2025", medium: "Digital" },
  "images/IMG_2603.jpg": { title: "Quiet Departure", year: "2025", medium: "Digital" },
};

const initBackgroundAnimation = async () => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!window.tsParticles) {
    return;
  }

  const motionSpeed = reducedMotion ? 0 : 0.22;

  await window.tsParticles.load({
    id: "bg-animation",
    options: {
      background: {
        color: "transparent",
      },
      fullScreen: {
        enable: false,
      },
      detectRetina: true,
      fpsLimit: 60,
      particles: {
        number: {
          value: 42,
        },
        color: {
          value: ["#ffffff", "#cfd9ea", "#9fb1cf"],
        },
        move: {
          enable: true,
          speed: motionSpeed,
        },
        opacity: {
          value: {
            min: 0.08,
            max: 0.3,
          },
        },
        size: {
          value: {
            min: 0.4,
            max: 1.8,
          },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.02,
            opacity: 1,
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: false,
          },
          onClick: {
            enable: false,
          },
          resize: {
            enable: true,
          },
        },
      },
    },
  });
};

initBackgroundAnimation().catch(() => {
  console.warn("Background animation did not load.");
});

const galleryItems = Array.from(document.querySelectorAll(".gallery-wrap .item"));
const carouselModal = document.getElementById("carousel-modal");
const carouselImage = document.getElementById("carousel-image");
const carouselCaption = document.getElementById("carousel-caption");
const carouselClose = document.getElementById("carousel-close");
const carouselPrev = document.getElementById("carousel-prev");
const carouselNext = document.getElementById("carousel-next");

let carouselFiles = [];
let carouselIndex = 0;
let lastFocusedItem = null;
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

const shuffle = (array) => {
  const result = [...array];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
};

const assignUniqueImages = () => {
  const randomized = shuffle(imageFiles);
  if (imageFiles.length < galleryItems.length) {
    console.warn("Not enough unique images to fill the gallery without duplicates. Extra slots are left empty.");
  }

  galleryItems.forEach((item, index) => {
    const fileName = randomized[index];

    if (fileName) {
      const metadata = getArtworkMeta(fileName);
      item.style.backgroundImage = `url("${fileName}")`;
      item.classList.remove("is-empty");
      item.dataset.fileName = fileName;
      item.setAttribute("role", "button");
      item.setAttribute("tabindex", "0");
      item.setAttribute("aria-label", `Gallery image ${index + 1}: ${metadata.title}`);
      return;
    }

    item.style.backgroundImage = "none";
    item.classList.add("is-empty");
    delete item.dataset.fileName;
    item.removeAttribute("role");
    item.removeAttribute("tabindex");
    item.setAttribute("aria-label", `Gallery slot ${index + 1} (empty)`);
  });
};

assignUniqueImages();

const getCarouselFiles = () => galleryItems.map((item) => item.dataset.fileName).filter(Boolean);

const formatCaption = (fileName) => fileName.replace(/\.[^.]+$/, "").replace(/_/g, " ");

const getArtworkMeta = (fileName) => {
  const metadata = artworkMeta[fileName];
  if (metadata) {
    return metadata;
  }

  return {
    title: formatCaption(fileName),
    year: "",
    medium: "Artwork",
  };
};

const updateCarouselView = () => {
  const currentFile = carouselFiles[carouselIndex];
  if (!currentFile) {
    return;
  }

  const metadata = getArtworkMeta(currentFile);
  const detailParts = [metadata.year, metadata.medium].filter(Boolean);
  const details = detailParts.length ? ` · ${detailParts.join(" · ")}` : "";

  carouselImage.src = currentFile;
  carouselImage.alt = metadata.title;
  carouselCaption.textContent = `${carouselIndex + 1} / ${carouselFiles.length} · ${metadata.title}${details}`;
};

const openCarousel = (startIndex, sourceItem) => {
  carouselFiles = getCarouselFiles();
  if (!carouselFiles.length) {
    return;
  }

  carouselIndex = startIndex;
  lastFocusedItem = sourceItem;
  updateCarouselView();
  carouselModal.classList.add("is-open");
  carouselModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  carouselClose.focus();
};

const closeCarousel = () => {
  carouselModal.classList.remove("is-open");
  carouselModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  carouselImage.src = "";
  carouselImage.alt = "";
  carouselCaption.textContent = "";
  if (lastFocusedItem) {
    lastFocusedItem.focus();
  }
};

const showPrevious = () => {
  if (!carouselFiles.length) {
    return;
  }
  carouselIndex = (carouselIndex - 1 + carouselFiles.length) % carouselFiles.length;
  updateCarouselView();
};

const showNext = () => {
  if (!carouselFiles.length) {
    return;
  }
  carouselIndex = (carouselIndex + 1) % carouselFiles.length;
  updateCarouselView();
};

const handleSwipe = () => {
  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;
  const swipeThreshold = 40;

  if (Math.abs(deltaX) < swipeThreshold || Math.abs(deltaX) <= Math.abs(deltaY)) {
    return;
  }

  if (deltaX < 0) {
    showNext();
    return;
  }

  showPrevious();
};

galleryItems.forEach((item) => {
  const openFromItem = () => {
    const fileName = item.dataset.fileName;
    if (!fileName) {
      return;
    }

    const files = getCarouselFiles();
    const startIndex = files.indexOf(fileName);
    if (startIndex < 0) {
      return;
    }

    openCarousel(startIndex, item);
  };

  item.addEventListener("click", openFromItem);
  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openFromItem();
    }
  });
});

carouselClose.addEventListener("click", closeCarousel);
carouselPrev.addEventListener("click", showPrevious);
carouselNext.addEventListener("click", showNext);

carouselModal.addEventListener("click", (event) => {
  if (event.target === carouselModal) {
    closeCarousel();
  }
});

carouselImage.addEventListener(
  "touchstart",
  (event) => {
    const touch = event.changedTouches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    touchEndX = touch.clientX;
    touchEndY = touch.clientY;
  },
  { passive: true },
);

carouselImage.addEventListener(
  "touchmove",
  (event) => {
    const touch = event.changedTouches[0];
    touchEndX = touch.clientX;
    touchEndY = touch.clientY;
  },
  { passive: true },
);

carouselImage.addEventListener("touchend", () => {
  if (!carouselModal.classList.contains("is-open")) {
    return;
  }
  handleSwipe();
});

document.addEventListener("keydown", (event) => {
  if (!carouselModal.classList.contains("is-open")) {
    return;
  }

  if (event.key === "Escape") {
    closeCarousel();
    return;
  }

  if (event.key === "ArrowLeft") {
    showPrevious();
    return;
  }

  if (event.key === "ArrowRight") {
    showNext();
  }
});
