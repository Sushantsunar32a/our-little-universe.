/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 1800);
});

/* =========================
   RELATIONSHIP TIMER
========================= */

const startDate = new Date("2025-04-14T00:00:00");

function updateRelationshipTimer() {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months--;

    const previousMonth = new Date(
      now.getFullYear(),
      now.getMonth(),
      0
    );

    days += previousMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const difference = now - startDate;

  const hours =
    Math.floor(difference / (1000 * 60 * 60)) % 24;

  const minutes =
    Math.floor(difference / (1000 * 60)) % 60;

  const seconds =
    Math.floor(difference / 1000) % 60;

  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateRelationshipTimer();
setInterval(updateRelationshipTimer, 1000);

/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(element => {
  revealObserver.observe(element);
});

/* =========================
   STARS
========================= */

const starsContainer =
  document.getElementById("stars");

for (let i = 0; i < 250; i++) {
  const star = document.createElement("div");

  star.classList.add("star");

  star.style.left =
    Math.random() * 100 + "%";

  star.style.top =
    Math.random() * 100 + "%";

  star.style.animationDelay =
    Math.random() * 5 + "s";

  star.style.opacity =
    Math.random();

  starsContainer.appendChild(star);
}

/* =========================
   SHOOTING STARS
========================= */

const shootingContainer =
  document.getElementById("shootingStars");

function createShootingStar() {
  const shooting =
    document.createElement("div");

  shooting.classList.add("shooting-star");

  shooting.style.left =
    Math.random() * window.innerWidth + "px";

  shooting.style.top =
    Math.random() * 250 + "px";

  shootingContainer.appendChild(shooting);

  setTimeout(() => {
    shooting.remove();
  }, 2000);
}

setInterval(createShootingStar, 5000);

/* =========================
   FLOATING HEARTS
========================= */

const heartContainer =
  document.getElementById("floatingHearts");

function createHeart() {
  const heart =
    document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "❤️";

  heart.style.left =
    Math.random() * 100 + "vw";

  heart.style.fontSize =
    Math.random() * 20 + 15 + "px";

  heart.style.animationDuration =
    Math.random() * 4 + 6 + "s";

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 700);

/* =========================
   ENVELOPE
========================= */

const envelope =
  document.getElementById("envelope");

envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");
});

/* =========================
   MUSIC BUTTON
========================= */

const musicBtn =
  document.getElementById("musicBtn");

const bgMusic =
  document.getElementById("bgMusic");

let playing = false;

musicBtn.addEventListener("click", () => {

  if (!playing) {
    bgMusic.play();

    musicBtn.classList.add("playing");
    musicBtn.textContent = "🎶";

    playing = true;
  }
  else {
    bgMusic.pause();

    musicBtn.classList.remove("playing");
    musicBtn.textContent = "🎵";

    playing = false;
  }

});

/* =========================
   NAVBAR ACTIVE LINK
========================= */

const sections =
  document.querySelectorAll("section");

const navLinks =
  document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const top =
      section.offsetTop - 150;

    const height =
      section.offsetHeight;

    if (
      window.scrollY >= top &&
      window.scrollY < top + height
    ) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      "#" + current
    ) {
      link.classList.add("active");
    }
  });

});

const lightbox =
  document.getElementById("lightbox");

const lightboxImg =
  document.getElementById("lightboxImg");

const lightboxVideo =
  document.getElementById("lightboxVideo");

const memoryText =
  document.getElementById("memoryText");

const closeLightbox =
  document.getElementById("closeLightbox");

document
  .forEach(card => {

    card.addEventListener(
      "click",
      () => {

        const type =
          card.dataset.type;

        const src =
          card.dataset.src;

        const text =
          card.dataset.text;

        lightbox.classList.add(
          "show"
        );

        memoryText.textContent = text;

        if (type === "image") {

          lightboxVideo.style.display =
            "none";

          lightboxVideo.pause();

          lightboxImg.style.display =
            "block";

          lightboxImg.src = src;
        }

        else {

          lightboxImg.style.display =
            "none";

          lightboxVideo.style.display =
            "block";

          lightboxVideo.src = src;

          lightboxVideo.play();
        }

      }
    );

  });

closeLightbox.addEventListener(
  "click",
  () => {

    lightbox.classList.remove(
      "show"
    );

    lightboxVideo.pause();

  }
);
document
  .querySelectorAll(".memory-video")
  .forEach(video => {

    video.addEventListener("click", e => {

      e.stopPropagation();

      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }

    });

  });