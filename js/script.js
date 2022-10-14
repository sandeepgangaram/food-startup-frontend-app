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
