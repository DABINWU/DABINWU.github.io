/* Progressive enhancement: content remains visible without JavaScript. */
(() => {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  if (preference.matches || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      if (!preference.matches) entry.target.classList.add('theme-arrived');
      observer.unobserve(entry.target);
    });
  }, { threshold: .08 });
  document.querySelectorAll('.subhero h1, .content-section, .project, .contact-row, .wa-row').forEach(element => observer.observe(element));
})();
