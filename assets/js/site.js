
const mobileToggle = document.querySelector("[data-mobile-toggle]");
const navLinks = document.querySelector("[data-nav-links]");

if (mobileToggle && navLinks) {
  mobileToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    mobileToggle.setAttribute("aria-expanded", navLinks.classList.contains("open") ? "true" : "false");
  });
}

document.querySelectorAll("[data-faq]").forEach((item) => {
  const button = item.querySelector("button");
  if (!button) return;
  button.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

const SIGNUP_URLS = {
  PERSONALOS_SIGNUP_URL: "https://personalos.com.br",
  FEIRANTE_SIGNUP_URL: "https://ofeirante.com.br",
  UNHAOS_SIGNUP_URL: "https://unhaos.com.br",
  BELLAOS_SIGNUP_URL: "https://bellaos.com.br",
  NAVALHAOS_SIGNUP_URL: "https://navalhaos.com.br"
};

window.SistemaSOS = {
  signupUrls: SIGNUP_URLS
};
