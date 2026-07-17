// Scroll reveal
const revealTargets = document.querySelectorAll(".card, .skill-card, .qa-block, .contact-card, .section-title, .section-sub, .about-grid");
revealTargets.forEach(el => el.classList.add("reveal"));
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
revealTargets.forEach(el => io.observe(el));

// Back to top
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => toTop.classList.toggle("show", window.scrollY > 500), { passive: true });
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
