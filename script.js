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
const shaderCanvas = document.getElementById("shader-canvas");
const shaderStage = document.getElementById("shader-stage");
const shaderKnobInputs = Array.from(document.querySelectorAll("input[data-knob]"));
const shaderKnobValues = Array.from(document.querySelectorAll("output[data-knob-value]"));
const shaderColorInputs = Array.from(document.querySelectorAll("input[data-knob-color]"));
const shaderColorValues = Array.from(document.querySelectorAll("output[data-color-value]"));
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
let shaderRenderNow = null;
let activeTrackButton = null;
let activePreviewUrl = "";

const shaderKnobState = {
  speed: 1,
  scale: 1,
  warp: 1,
  contrast: 1,
};

const shaderColorState = {
  accent: {
    hex: "#6ad8ff",
    rgb: [0.4156862745, 0.8470588235, 1],
  },
  pink: {
    hex: "#c77bdb",
    rgb: [0.7803921569, 0.4823529412, 0.8588235294],
  },
};

const MUSIC_SEARCH_TERM = "lofi ambient instrumental chillhop";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const formatKnobValue = (value) => value.toFixed(2);

const normalizeHexColor = (value, fallback) => {
  if (typeof value !== "string") {
    return fallback;
  }

  const trimmed = value.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(trimmed)) {
    return trimmed.toLowerCase();
  }

  return fallback;
};

const hexToRgbNormalized = (hexColor, fallbackHex) => {
  const normalized = normalizeHexColor(hexColor, fallbackHex);
  const red = Number.parseInt(normalized.slice(1, 3), 16) / 255;
  const green = Number.parseInt(normalized.slice(3, 5), 16) / 255;
  const blue = Number.parseInt(normalized.slice(5, 7), 16) / 255;
  return [red, green, blue];
};

const syncShaderKnobState = () => {
  const readoutMap = new Map(
    shaderKnobValues.map((node) => [node.dataset.knobValue, node]),
  );

  shaderKnobInputs.forEach((input) => {
    const knobName = input.dataset.knob;
    if (!knobName || !(knobName in shaderKnobState)) {
      return;
    }

    const parsedValue = Number.parseFloat(input.value);
    if (!Number.isFinite(parsedValue)) {
      return;
    }

    shaderKnobState[knobName] = parsedValue;

    const readout = readoutMap.get(knobName);
    if (readout) {
      readout.textContent = formatKnobValue(parsedValue);
    }
  });

  const colorReadoutMap = new Map(
    shaderColorValues.map((node) => [node.dataset.colorValue, node]),
  );

  shaderColorInputs.forEach((input) => {
    const colorKey = input.dataset.knobColor;
    if (!colorKey || !(colorKey in shaderColorState)) {
      return;
    }

    const existingColor = shaderColorState[colorKey];
    const normalizedColor = normalizeHexColor(input.value, existingColor.hex);
    existingColor.hex = normalizedColor;
    existingColor.rgb = hexToRgbNormalized(normalizedColor, existingColor.hex);

    const readout = colorReadoutMap.get(colorKey);
    if (readout) {
      readout.textContent = normalizedColor.toUpperCase();
    }
  });

  if (typeof shaderRenderNow === "function") {
    shaderRenderNow();
  }
};

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

  panelButton.append(title, artist, meta);
  item.append(panelButton);
  return item;
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
    tracks.forEach((track) => {
      fragment.append(createTrackItem(track));
    });
    musicList.append(fragment);
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

if (shaderKnobInputs.length || shaderColorInputs.length) {
  syncShaderKnobState();

  shaderKnobInputs.forEach((input) => {
    input.addEventListener("input", syncShaderKnobState);
    input.addEventListener("change", syncShaderKnobState);
  });

  shaderColorInputs.forEach((input) => {
    input.addEventListener("input", syncShaderKnobState);
    input.addEventListener("change", syncShaderKnobState);
  });
}

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

const initShaderLab = () => {
  if (!shaderCanvas) {
    return;
  }

  const gl = shaderCanvas.getContext("webgl", { alpha: false, antialias: true });
  if (!gl) {
    if (shaderStage) {
      shaderStage.classList.add("is-fallback");
    }
    return;
  }

  const vertexSource = `
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  const fragmentSource = `
    precision mediump float;
    uniform vec2 u_resolution;
    uniform float u_time;
    uniform float u_theme;
    uniform float u_speed;
    uniform float u_scale;
    uniform float u_warp;
    uniform float u_contrast;
    uniform vec3 u_accent;
    uniform vec3 u_pink;

    void main() {
      vec2 uv = (gl_FragCoord.xy / u_resolution.xy) * 2.0 - 1.0;
      uv.x *= u_resolution.x / u_resolution.y;

      float scale = max(0.25, u_scale);
      vec2 suv = uv * scale;
      float time = u_time * 0.42 * u_speed;
      float ringFreq = 12.0 * (0.75 + u_warp * 0.45);
      float waveX = 4.2 * (0.7 + u_warp * 0.3);
      float waveY = 6.0 * (0.6 + u_warp * 0.4);
      float rings = sin(length(suv) * ringFreq - time * 3.0);
      float waves = sin((suv.x * waveX + time) + sin(suv.y * waveY - time * 1.8));
      float pulse = sin(time * 2.5 + length(suv) * 9.0);
      float glow = 0.5 + 0.5 * (rings * 0.55 + waves * 0.3 + pulse * 0.25);
      glow = clamp((glow - 0.5) * u_contrast + 0.5, 0.0, 1.0);

      vec3 darkA = vec3(0.06, 0.10, 0.22);
      vec3 darkB = vec3(0.62, 0.35, 0.84);
      vec3 darkC = vec3(0.10, 0.72, 0.88);

      vec3 lightA = vec3(0.84, 0.90, 1.00);
      vec3 lightB = vec3(0.50, 0.66, 0.95);
      vec3 lightC = vec3(0.89, 0.60, 0.93);

      vec3 paletteA = mix(darkA, lightA, u_theme);
      vec3 paletteB = mix(darkB, lightB, u_theme);
      paletteB = mix(paletteB, u_pink, 0.72);
      vec3 paletteC = mix(darkC, lightC, u_theme);
      paletteC = mix(paletteC, u_accent, 0.42);

      vec3 color = mix(paletteA, paletteB, glow);
      float paletteDrift = 0.5 + 0.5 * sin(time * 0.9 + length(suv) * 6.0 + waves * 0.7);
      color = mix(color, paletteC, paletteDrift);
      float accentWave = 0.5 + 0.5 * sin(time * 1.4 + rings * 2.0 + waves * 1.2);
      float accentMix = (0.18 + glow * 0.22) * accentWave;
      color = mix(color, u_accent, accentMix);

      gl_FragColor = vec4(color, 1.0);
    }
  `;

  const compileShader = (type, source) => {
    const shader = gl.createShader(type);
    if (!shader) {
      return null;
    }
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  };

  const vertexShader = compileShader(gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentSource);
  if (!vertexShader || !fragmentShader) {
    if (shaderStage) {
      shaderStage.classList.add("is-fallback");
    }
    return;
  }

  const program = gl.createProgram();
  if (!program) {
    if (shaderStage) {
      shaderStage.classList.add("is-fallback");
    }
    return;
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    if (shaderStage) {
      shaderStage.classList.add("is-fallback");
    }
    return;
  }

  const positionLocation = gl.getAttribLocation(program, "a_position");
  const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
  const timeLocation = gl.getUniformLocation(program, "u_time");
  const themeLocation = gl.getUniformLocation(program, "u_theme");
  const speedLocation = gl.getUniformLocation(program, "u_speed");
  const scaleLocation = gl.getUniformLocation(program, "u_scale");
  const warpLocation = gl.getUniformLocation(program, "u_warp");
  const contrastLocation = gl.getUniformLocation(program, "u_contrast");
  const accentLocation = gl.getUniformLocation(program, "u_accent");
  const pinkLocation = gl.getUniformLocation(program, "u_pink");

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW,
  );

  const resizeCanvas = () => {
    const dpr = window.devicePixelRatio || 1;
    const width = Math.floor(shaderCanvas.clientWidth * dpr);
    const height = Math.floor(shaderCanvas.clientHeight * dpr);
    if (shaderCanvas.width !== width || shaderCanvas.height !== height) {
      shaderCanvas.width = width;
      shaderCanvas.height = height;
      gl.viewport(0, 0, width, height);
    }
  };

  const render = (elapsedMs) => {
    resizeCanvas();
    const timeSeconds = elapsedMs * 0.001;
    const isLightTheme = document.body.classList.contains("light") ? 1 : 0;

    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.uniform2f(resolutionLocation, shaderCanvas.width, shaderCanvas.height);
    gl.uniform1f(timeLocation, timeSeconds);
    gl.uniform1f(themeLocation, isLightTheme);
    gl.uniform1f(speedLocation, clamp(shaderKnobState.speed, 0.0, 2.0));
    gl.uniform1f(scaleLocation, clamp(shaderKnobState.scale, 0.6, 1.8));
    gl.uniform1f(warpLocation, clamp(shaderKnobState.warp, 0.0, 2.0));
    gl.uniform1f(contrastLocation, clamp(shaderKnobState.contrast, 0.5, 1.5));
    gl.uniform3f(accentLocation, shaderColorState.accent.rgb[0], shaderColorState.accent.rgb[1], shaderColorState.accent.rgb[2]);
    gl.uniform3f(pinkLocation, shaderColorState.pink.rgb[0], shaderColorState.pink.rgb[1], shaderColorState.pink.rgb[2]);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  };

  shaderRenderNow = () => {
    render(window.performance.now());
  };

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion) {
    render(0);
    window.addEventListener("resize", () => render(0));
    return;
  }

  const loop = (elapsedMs) => {
    render(elapsedMs);
    window.requestAnimationFrame(loop);
  };

  window.addEventListener("resize", resizeCanvas);
  window.requestAnimationFrame(loop);
};

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
initShaderLab();
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
