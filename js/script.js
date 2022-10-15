const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile Navigation

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const toggleNav = () => {
  headerEl.classList.toggle("nav-open");
};

btnNavEl.addEventListener("click", toggleNav);

// Sticky Navigation

const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];

    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (entry.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(sectionHeroEl);

/*
Smooth scroll  
- for old browsers which don't support
smooth scroll behavior css property
 */

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    const headerEl = document.querySelector("header");
    if (href === "#") {
      scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const scrollToEl = document.querySelector(href);
      scrollToEl.scrollIntoView({
        behavior: "smooth",
      });
    }
    // headerEl.classList.toggle("nav-open"); //this alone leads to bug

    // If nav-menu open. Just close it during any sort of click induced scroll
    if (headerEl.classList.contains("nav-open")) {
      headerEl.classList.remove("nav-open");
    }
  });
});
