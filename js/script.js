document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  const contactForm = document.querySelector(".contact-form");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
  }

  if (contactForm) {
    const message = contactForm.querySelector(".form-message");

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      contactForm.reset();

      if (message) {
        message.textContent = "Thank you. Your message has been recorded for this static website demo.";
      }
    });
  }
});
