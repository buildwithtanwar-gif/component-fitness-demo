// ===============================
// PRELOADER
// ===============================

window.addEventListener("load", () => {

  setTimeout(() => {
    document
      .getElementById("preloader")
      .classList.add("hide");
  }, 1600);

});


// ===============================
// NAVBAR
// ===============================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});


// ===============================
// MOBILE NAV
// ===============================

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("#nav a").forEach(link => {

  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });

});


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements =
  document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => {
  observer.observe(element);
});


// ===============================
// COUNTER ANIMATION
// ===============================

const counters =
  document.querySelectorAll("[data-count]");

const counterObserver = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const target = Number(counter.dataset.count);

      let current = 0;
      const duration = 1400;
      const increment = target / (duration / 16);

      const updateCounter = () => {

        current += increment;

        if (current < target) {

          counter.textContent =
            Math.floor(current).toLocaleString();

          requestAnimationFrame(updateCounter);

        } else {

          counter.textContent =
            target.toLocaleString();

        }

      };

      updateCounter();

      observer.unobserve(counter);

    });

  },
  {
    threshold: 1
  }
);

counters.forEach(counter => {
  counterObserver.observe(counter);
});


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(e) {

    const target =
      document.querySelector(this.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


// ===============================
// PROGRAM CARD INTERACTION
// ===============================

const programCards =
  document.querySelectorAll(".program-card");

programCards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    programCards.forEach(other => {
      if (other !== card) {
        other.classList.remove("active");
      }
    });

    card.classList.add("active");

  });

});


// ===============================
// PARALLAX HERO
// ===============================

const heroBg =
  document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {

  if (!heroBg) return;

  const scroll = window.scrollY;

  if (scroll < window.innerHeight) {
    heroBg.style.transform =
      `translateY(${scroll * 0.15}px) scale(1.02)`;
  }

});


// ===============================
// CURRENT YEAR
// ===============================

const yearElements =
  document.querySelectorAll(".current-year");

yearElements.forEach(element => {
  element.textContent =
    new Date().getFullYear();
});