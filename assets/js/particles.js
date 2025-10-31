(function(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canvas = document.getElementById('particles');
  if (!canvas || prefersReduced) return;
  const ctx = canvas.getContext('2d');
  let width, height, dpr;

  function hexToRgb(hex){
    const m = hex.trim().replace('#','');
    const bigint = parseInt(m.length===3 ? m.split('').map(c=>c+c).join('') : m, 16);
    return { r: (bigint>>16)&255, g: (bigint>>8)&255, b: bigint&255 };
  }

  const primaryVar = getComputedStyle(document.documentElement).getPropertyValue('--primary') || '#00e0ff';
  const primary = hexToRgb(primaryVar || '#00e0ff');

  let particles = [];
  const BASE_DENSITY = 9500; // lower -> more particles
  const MAX_PARTICLES = 140;
  const LINK_DIST = 120;

  function resize(){
    dpr = Math.max(1, window.devicePixelRatio || 1);
    width = canvas.clientWidth = window.innerWidth;
    height = canvas.clientHeight = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initParticles();
  }

  function initParticles(){
    const target = Math.min(MAX_PARTICLES, Math.max(30, Math.floor((width*height)/BASE_DENSITY)));
    particles.length = 0;
    for (let i=0;i<target;i++){
      particles.push({
        x: Math.random()*width,
        y: Math.random()*height,
        vx: (Math.random()-0.5)*0.4,
        vy: (Math.random()-0.5)*0.4,
        r: Math.random()*1.2 + 0.6
      });
    }
  }

  function step(){
    ctx.clearRect(0,0,width,height);

    // Update + draw points
    ctx.fillStyle = `rgba(${primary.r},${primary.g},${primary.b},0.9)`;
    for (let p of particles){
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fill();
    }

    // Links
    for (let i=0;i<particles.length;i++){
      for (let j=i+1;j<particles.length;j++){
        const a = particles[i], b = particles[j];
        const dx = a.x-b.x, dy = a.y-b.y;
        const dist = Math.hypot(dx,dy);
        if (dist < LINK_DIST){
          const alpha = 0.12 * (1 - dist/LINK_DIST);
          ctx.strokeStyle = `rgba(${primary.r},${primary.g},${primary.b},${alpha.toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    raf = requestAnimationFrame(step);
  }

  let raf;
  function start(){ cancelAnimationFrame(raf); step(); }
  function handleVisibility(){
    if (document.hidden){ cancelAnimationFrame(raf); }
    else { start(); }
  }

  window.addEventListener('resize', resize);
  document.addEventListener('visibilitychange', handleVisibility);

  resize();
  start();
})();
