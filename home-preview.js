(() => {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  if (preference.matches) return;
  document.body.classList.add('motion-enabled');
  const hero = document.querySelector('.hero');
  let frame = 0;
  addEventListener('scroll', () => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      const progress = Math.min(1, Math.max(0, -hero.getBoundingClientRect().top / hero.offsetHeight));
      hero.style.setProperty('--title-shift', `${progress * -120}px`);
      const world = document.querySelector('.image-world');
      const offset = Math.max(-1, Math.min(1, world.getBoundingClientRect().top / innerHeight));
      world.querySelectorAll('.world-photo').forEach((photo, index) => {
        photo.style.setProperty('--photo-shift', `${offset * (index % 2 ? -45 : 65)}px`);
      });
    });
  }, { passive: true });
  const countUp = element => {
    const target = Number(element.textContent);
    const start = performance.now();
    const tick = now => {
      const progress = Math.min(1, (now - start) / 1100);
      element.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3)))).padStart(2, '0');
      if (progress < 1 && !preference.matches) requestAnimationFrame(tick);
      else element.textContent = String(target).padStart(2, '0');
    };
    requestAnimationFrame(tick);
  };
  preference.addEventListener('change', event => document.body.classList.toggle('motion-enabled', !event.matches));
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('reveal-arrived');
      if (!preference.matches) entry.target.querySelectorAll('.metric-value').forEach(countUp);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.metrics, .intro-copy, .directory, .entry, .collection-card').forEach(section => observer.observe(section));
})();
