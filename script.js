window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Lightbox Logic
const portfolioItems = document.querySelectorAll(".portfolio-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxDesc = document.getElementById("lightbox-desc");
const closeBtn = document.getElementById("close-lightbox");
const overlay = document.querySelector(".lightbox-overlay");

portfolioItems.forEach(item => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    const title = item.querySelector("h4").innerText;
    const desc = item.querySelector("p").innerText;

    lightboxImg.src = img.src;
    lightboxTitle.innerText = title;
    lightboxDesc.innerText = desc;

    lightbox.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling
  });
});

const closeLightbox = () => {
  lightbox.classList.remove("active");
  document.body.style.overflow = "auto";
};

closeBtn.addEventListener("click", closeLightbox);
overlay.addEventListener("click", closeLightbox);

// Close on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("active")) {
    closeLightbox();
  }
});
