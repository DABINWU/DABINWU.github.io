/* Subtle contour water behind the static portrait; no dependencies. */
(() => {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const canvas = document.createElement('canvas');
  canvas.className = 'hero-water';
  canvas.setAttribute('aria-hidden', 'true');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  hero.prepend(canvas);
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  let width = 0, height = 0, frame = 0, lastPaint = 0;
  let visible = true, lastInput = -Infinity;
  const waves = [];
  const draw = time => {
    ctx.clearRect(0, 0, width, height);
    const phase = preference.matches ? 0 : time * .00016;
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(98,113,62,.16)';
    const unit = Math.max(width, height) * .095;
    for (let ring = 1; ring <= 17; ring++) {
      ctx.beginPath();
      for (let i = 0; i <= 180; i++) {
        const angle = i / 180 * Math.PI * 2;
        const bend = Math.sin(angle*3 + phase + ring*.55)*.11 + Math.cos(angle*5-phase*.6)*.05;
        const radius = unit * ring * (1 + bend);
        let x = width*.50 + Math.cos(angle)*radius*1.18;
        let y = height*.48 + Math.sin(angle)*radius*.78;
        for (const wave of waves) {
          const dx = x-wave.x, dy = y-wave.y, distance = Math.hypot(dx,dy);
          const age = (time-wave.time)/1000;
          const front = age*160;
          const influence = Math.exp(-Math.pow((distance-front)/65,2)) * Math.max(0,1-age/2.8);
          const displacement = Math.sin((distance-front)*.045)*18*influence;
          x += dx/Math.max(distance,1)*displacement;
          y += dy/Math.max(distance,1)*displacement;
        }
        if (!i) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      }
      ctx.closePath(); ctx.stroke();
    }
    canvas.dataset.painted = 'true';
  };
  const animate = time => {
    frame = 0;
    if (!visible || document.hidden || preference.matches) return;
    if (time-lastPaint >= 33) {
      while (waves.length && time-waves[0].time > 2800) waves.shift();
      draw(time); lastPaint = time;
    }
    frame = requestAnimationFrame(animate);
  };
  const resume = () => {
    if (!frame && visible && !document.hidden && !preference.matches) frame = requestAnimationFrame(animate);
  };
  const resize = () => {
    width = hero.clientWidth; height = hero.clientHeight;
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width*ratio); canvas.height = Math.round(height*ratio);
    ctx.setTransform(ratio,0,0,ratio,0,0);
    draw(performance.now()); resume();
  };
  new ResizeObserver(resize).observe(hero);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      if (!visible && frame) { cancelAnimationFrame(frame); frame = 0; }
      else resume();
    }).observe(hero);
  }
  const disturb = event => {
    if (preference.matches) return;
    const time = performance.now();
    if (time-lastInput < 110) return;
    lastInput = time;
    const bounds = hero.getBoundingClientRect();
    waves.push({ x: event.clientX-bounds.left, y: event.clientY-bounds.top, time });
    if (waves.length > 6) waves.shift();
    canvas.dataset.disturbances = String(waves.length);
    resume();
  };
  hero.addEventListener('pointermove', event => {
    if (event.pointerType !== 'touch') disturb(event);
  }, { passive: true });
  hero.addEventListener('pointerdown', disturb, { passive: true });
  preference.addEventListener('change', () => {
    waves.length = 0;
    if (frame) cancelAnimationFrame(frame);
    frame = 0; draw(0); resume();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && frame) { cancelAnimationFrame(frame); frame = 0; }
    else resume();
  });
  resize();
})();
