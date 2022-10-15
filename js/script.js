const yearElement = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Mobile Navigation

const btnNavElement = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");
const toggleNav = () => {
  headerElement.classList.toggle("nav-open");
};

btnNavElement.addEventListener("click", toggleNav);

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
