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

const featuredMuralFiles = [
  "images/IMG_0236.PNG",
  "images/IMG_1038.PNG",
  "images/IMG_1719.PNG",
  "images/IMG_2068.PNG",
  "images/IMG_2079.PNG",
  "images/IMG_3979.PNG",
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
  const particleOptions = {
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
        value: 54,
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
          min: 0.12,
          max: 0.42,
        },
      },
      size: {
        value: {
          min: 0.5,
          max: 2,
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
  };

  try {
    await window.tsParticles.load({
      id: "bg-animation",
      options: particleOptions,
    });
  } catch {
    await window.tsParticles.load("bg-animation", particleOptions);
  }
};

initBackgroundAnimation().catch(() => {
  console.warn("Background animation did not load.");
});

const galleryItems = Array.from(document.querySelectorAll(".gallery-wrap .item"));
const featuredItems = Array.from(document.querySelectorAll(".featured-grid .featured-item"));
const carouselModal = document.getElementById("carousel-modal");
const carouselImage = document.getElementById("carousel-image");
const carouselCaption = document.getElementById("carousel-caption");
const carouselClose = document.getElementById("carousel-close");
const carouselPrev = document.getElementById("carousel-prev");
const carouselNext = document.getElementById("carousel-next");
const blogCards = Array.from(document.querySelectorAll(".blog-card[data-post]"));
const blogModal = document.getElementById("blog-modal");
const blogModalClose = document.getElementById("blog-modal-close");
const blogModalDate = document.getElementById("blog-modal-date");
const blogModalTitle = document.getElementById("blog-modal-title");
const blogModalBody = document.getElementById("blog-modal-body");
const themeToggle = document.getElementById("theme-toggle");
const navLinks = Array.from(document.querySelectorAll('.top-nav a[href^="#"]'));
const musicRefreshButton = document.getElementById("music-refresh");
const musicStatus = document.getElementById("music-status");
const musicList = document.getElementById("music-list");
const musicAudio = document.getElementById("music-audio");
const musicNowPlaying = document.getElementById("music-now-playing");
const siteHeader = document.querySelector(".site-header");

let carouselFiles = [];
let carouselIndex = 0;
let lastFocusedItem = null;
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;
let lastFocusedBlogCard = null;
let activeTrackButton = null;
let activePreviewUrl = "";

const MUSIC_SEARCH_TERM = "ambient instrumental chillhop";
const MUSIC_DEFAULT_VOLUME = 0.2;


const formatTrackDuration = (durationMs) => {
  if (!Number.isFinite(durationMs) || durationMs <= 0) {
    return "";
  }

  const totalSeconds = Math.floor(durationMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const clearMusicList = () => {
  if (musicList) {
    musicList.innerHTML = "";
  }
};

const setMusicStatus = (message) => {
  if (musicStatus) {
    musicStatus.textContent = message;
  }
};

const setNowPlayingLabel = (message) => {
  if (musicNowPlaying) {
    musicNowPlaying.textContent = `Now playing: ${message}`;
  }
};

const setTrackButtonState = (button, isActive) => {
  if (!button) {
    return;
  }

  button.classList.toggle("is-active", isActive);
};

const resetActiveTrackButton = () => {
  if (activeTrackButton) {
    setTrackButtonState(activeTrackButton, false);
  }
  activeTrackButton = null;
};

const loadTrackIntoPlayer = (track, button) => {
  if (!musicAudio || !button || !track.previewUrl) {
    return;
  }

  if (activePreviewUrl !== track.previewUrl) {
    musicAudio.src = track.previewUrl;
    activePreviewUrl = track.previewUrl;
    musicAudio.load();
  }

  if (activeTrackButton && activeTrackButton !== button) {
    setTrackButtonState(activeTrackButton, false);
  }

  activeTrackButton = button;
  setTrackButtonState(button, true);
  setNowPlayingLabel(`${track.trackName || "Untitled track"} — ${track.artistName || "Unknown artist"}`);
  setMusicStatus("Track loaded in player.");
};

const createTrackItem = (track) => {
  const item = document.createElement("li");
  item.className = "music-item";

  const panelButton = document.createElement("button");
  panelButton.type = "button";
  panelButton.className = "music-item-button";

  const title = document.createElement("h3");
  title.textContent = track.trackName || "Untitled track";

  const artist = document.createElement("p");
  artist.className = "music-artist";
  artist.textContent = track.artistName || "Unknown artist";

  const meta = document.createElement("p");
  meta.className = "music-meta";
  const duration = formatTrackDuration(track.trackTimeMillis);
  const album = track.collectionName || "";
  meta.textContent = [duration, album].filter(Boolean).join(" • ");

  panelButton.append(title, artist, meta);

  if (track.previewUrl) {
    panelButton.addEventListener("click", () => {
      loadTrackIntoPlayer(track, panelButton);
    });
  } else {
    const noPreview = document.createElement("span");
    noPreview.className = "music-no-preview";
    noPreview.textContent = "No preview";
    panelButton.disabled = true;
    panelButton.classList.add("is-disabled");
    panelButton.append(noPreview);
  }

  item.append(panelButton);
  return {
    item,
    panelButton,
    hasPreview: Boolean(track.previewUrl),
  };
};

const loadMusicFeed = async () => {
  if (!musicList || !musicRefreshButton) {
    return;
  }

  musicRefreshButton.disabled = true;
  resetActiveTrackButton();
  activePreviewUrl = "";

  if (musicAudio) {
    musicAudio.pause();
    musicAudio.removeAttribute("src");
    musicAudio.load();
  }

  setNowPlayingLabel("none");
  clearMusicList();
  setMusicStatus("Loading tracks…");

  const endpoint = new URL("https://itunes.apple.com/search");
  endpoint.searchParams.set("term", MUSIC_SEARCH_TERM);
  endpoint.searchParams.set("media", "music");
  endpoint.searchParams.set("entity", "song");
  endpoint.searchParams.set("limit", "6");

  try {
    const response = await fetch(endpoint.toString(), {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Music API request failed with status ${response.status}`);
    }

    const payload = await response.json();
    const tracks = Array.isArray(payload.results) ? payload.results : [];

    if (!tracks.length) {
      setMusicStatus("No tracks found right now.");
      return;
    }

    const fragment = document.createDocumentFragment();
    let firstPlayableTrack = null;

    tracks.forEach((track) => {
      const trackNode = createTrackItem(track);
      fragment.append(trackNode.item);

      if (!firstPlayableTrack && trackNode.hasPreview) {
        firstPlayableTrack = {
          track,
          button: trackNode.panelButton,
        };
      }
    });

    musicList.append(fragment);

    if (firstPlayableTrack && musicAudio) {
      loadTrackIntoPlayer(firstPlayableTrack.track, firstPlayableTrack.button);

      try {
        await musicAudio.play();
        setMusicStatus(`Loaded ${tracks.length} tracks. Autoplay on at 20% volume.`);
      } catch {
        setMusicStatus(`Loaded ${tracks.length} tracks. Tap a track to start playback.`);
      }
      return;
    }

    setMusicStatus(`Loaded ${tracks.length} tracks.`);
  } catch {
    setMusicStatus("Music feed unavailable right now.");
  } finally {
    musicRefreshButton.disabled = false;
  }
};

const initMusicFeed = () => {
  if (!musicList || !musicRefreshButton) {
    return;
  }

  if (musicAudio) {
    musicAudio.volume = MUSIC_DEFAULT_VOLUME;

    musicAudio.addEventListener("ended", () => {
      resetActiveTrackButton();
      activePreviewUrl = "";
      setNowPlayingLabel("none");
    });
  }

  musicRefreshButton.addEventListener("click", () => {
    loadMusicFeed();
  });

  loadMusicFeed();
};


const blogPosts = {
  "atmosphere-contrast": {
    date: "February 2026",
    title: "Building Atmosphere Through Contrast",
    body: "Contrast is one of the fastest ways to create emotional direction. I usually begin by defining a dominant dark or light zone, then introduce a counterweight that pulls the eye across the composition. Negative space keeps that movement readable and gives texture room to breathe. When the contrast balance is right, the image feels active even when the subject is still.",
  },
  "sketch-to-texture": {
    date: "January 2026",
    title: "From Sketch to Final Texture",
    body: "I start with loose value sketches to test composition before detail. Once the structure is strong, I build texture in passes: broad grain first, then selective edges and micro-contrast. The final color pass is where cohesion happens. I trim back anything that competes with the focal rhythm so the finished piece keeps its momentum.",
  },
  "commission-workflow": {
    date: "December 2025",
    title: "Commission Workflow Update",
    body: "Commissions run in clear phases: concept alignment, composition draft, texture and color development, and final polish. Each phase has a feedback checkpoint so decisions stay intentional and on schedule. This keeps revisions focused and protects the visual language of the piece while still giving room for collaboration.",
  },
};

const shuffle = (array) => {
  const result = [...array];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
};

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

const assignFeaturedImages = () => {
  featuredItems.forEach((item, index) => {
    const fileName = featuredMuralFiles[index];

    if (fileName) {
      const metadata = getArtworkMeta(fileName);
      item.style.backgroundImage = `url("${fileName}")`;
      item.classList.remove("is-empty");
      item.dataset.fileName = fileName;
      item.setAttribute("role", "button");
      item.setAttribute("tabindex", "0");
      item.setAttribute("aria-label", `Featured mural ${index + 1}: ${metadata.title}`);
      return;
    }

    item.style.backgroundImage = "none";
    item.classList.add("is-empty");
    delete item.dataset.fileName;
    item.removeAttribute("role");
    item.removeAttribute("tabindex");
    item.setAttribute("aria-label", `Featured mural slot ${index + 1} (empty)`);
  });
};

assignUniqueImages();
assignFeaturedImages();

const getCarouselFiles = () => [...featuredItems, ...galleryItems].map((item) => item.dataset.fileName).filter(Boolean);

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

const openBlogModal = (postId, sourceCard) => {
  const post = blogPosts[postId];
  if (!post || !blogModal || !blogModalDate || !blogModalTitle || !blogModalBody) {
    return;
  }

  lastFocusedBlogCard = sourceCard;
  blogModalDate.textContent = post.date;
  blogModalTitle.textContent = post.title;
  blogModalBody.textContent = post.body;
  blogModal.classList.add("is-open");
  blogModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  if (blogModalClose) {
    blogModalClose.focus();
  }
};

const closeBlogModal = () => {
  if (!blogModal || !blogModalDate || !blogModalTitle || !blogModalBody) {
    return;
  }

  blogModal.classList.remove("is-open");
  blogModal.setAttribute("aria-hidden", "true");
  blogModalDate.textContent = "";
  blogModalTitle.textContent = "";
  blogModalBody.textContent = "";
  document.body.style.overflow = "";
  if (lastFocusedBlogCard) {
    lastFocusedBlogCard.focus();
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

const addCarouselInteraction = (items) => {
  items.forEach((item) => {
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
};

addCarouselInteraction(galleryItems);
addCarouselInteraction(featuredItems);

blogCards.forEach((card) => {
  const postId = card.dataset.post;
  if (!postId) {
    return;
  }

  const openFromCard = () => {
    openBlogModal(postId, card);
  };

  card.addEventListener("click", openFromCard);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openFromCard();
    }
  });
});

carouselClose.addEventListener("click", closeCarousel);
carouselPrev.addEventListener("click", showPrevious);
carouselNext.addEventListener("click", showNext);

if (blogModalClose) {
  blogModalClose.addEventListener("click", closeBlogModal);
}

carouselModal.addEventListener("click", (event) => {
  if (event.target === carouselModal) {
    closeCarousel();
  }
});

if (blogModal) {
  blogModal.addEventListener("click", (event) => {
    if (event.target === blogModal) {
      closeBlogModal();
    }
  });
}

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
  const isCarouselOpen = carouselModal.classList.contains("is-open");
  const isBlogOpen = blogModal ? blogModal.classList.contains("is-open") : false;

  if (event.key === "Escape") {
    if (isCarouselOpen) {
      closeCarousel();
      return;
    }

    if (isBlogOpen) {
      closeBlogModal();
    }
    return;
  }

  if (isCarouselOpen) {
    if (event.key === "ArrowLeft") {
      showPrevious();
      return;
    }

    if (event.key === "ArrowRight") {
      showNext();
    }
  }
});


const setTheme = (theme) => {
  const isLight = theme === "light";
  document.body.classList.toggle("light", isLight);
  document.body.setAttribute("data-theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  if (themeToggle) {
    themeToggle.textContent = isLight ? "Dark mode" : "Light mode";
    themeToggle.setAttribute("aria-pressed", String(isLight));
    themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
  }
};

const readStoredTheme = () => {
  try {
    return window.localStorage.getItem("portfolio-theme");
  } catch {
    return null;
  }
};

const writeStoredTheme = (theme) => {
  try {
    window.localStorage.setItem("portfolio-theme", theme);
  } catch {
    return;
  }
};

const initializeTheme = () => {
  const storedTheme = readStoredTheme();
  const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = storedTheme || (preferredDark ? "dark" : "light");
  setTheme(initialTheme);
};

const syncHeaderOffset = () => {
  if (!siteHeader) {
    return;
  }

  const headerHeight = Math.ceil(siteHeader.getBoundingClientRect().height);
  document.documentElement.style.setProperty("--header-offset", `${headerHeight}px`);
};

const updateHeaderStuckState = () => {
  if (!siteHeader) {
    return;
  }

  siteHeader.classList.toggle("is-stuck", window.scrollY > 6);
};

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light") ? "dark" : "light";
    setTheme(nextTheme);
    writeStoredTheme(nextTheme);
  });
}

initializeTheme();
initMusicFeed();
syncHeaderOffset();
updateHeaderStuckState();
window.addEventListener("scroll", updateHeaderStuckState, { passive: true });
window.addEventListener("resize", syncHeaderOffset);

const setCurrentNavLink = (targetId) => {
  navLinks.forEach((link) => {
    const isCurrent = link.getAttribute("href") === `#${targetId}`;
    if (isCurrent) {
      link.setAttribute("aria-current", "page");
      return;
    }
    link.removeAttribute("aria-current");
  });
};

const initSectionTracking = () => {
  if (!navLinks.length) {
    return;
  }

  const sectionMap = navLinks
    .map((link) => {
      const hash = link.getAttribute("href");
      if (!hash) {
        return null;
      }

      const section = document.querySelector(hash);
      if (!section || !section.id) {
        return null;
      }

      return {
        id: section.id,
        element: section,
      };
    })
    .filter(Boolean);

  if (!sectionMap.length) {
    return;
  }

  let activeId = sectionMap[0].id;
  setCurrentNavLink(activeId);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        activeId = entry.target.id;
      });

      setCurrentNavLink(activeId);
    },
    {
      root: null,
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0.01,
    },
  );

  sectionMap.forEach(({ element }) => observer.observe(element));

  window.addEventListener("hashchange", () => {
    const hashId = window.location.hash.replace("#", "");
    if (!hashId) {
      return;
    }

    const exists = sectionMap.some((section) => section.id === hashId);
    if (exists) {
      setCurrentNavLink(hashId);
    }
  });
};

initSectionTracking();
