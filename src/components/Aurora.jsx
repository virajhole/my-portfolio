import { useEffect, useRef } from 'react';

export default function Aurora() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    let ctx;
    try {
      ctx = canvas.getContext('2d');
    } catch {
      return undefined;
    }
    if (!ctx) return undefined;

    let raf = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const stars = [];
    const blobs = [
      { h: 210, s: 88, l: 24, r: 0.0009, px: 0.22, py: 0.3, rad: 0.4 },
      { h: 215, s: 95, l: 55, r: 0.0006, px: 0.78, py: 0.55, rad: 0.32 },
      { h: 205, s: 85, l: 35, r: 0.0011, px: 0.5, py: 0.15, rad: 0.38 },
    ];
    let mx = 0;
    let my = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars.length = 0;
      const count = Math.min(220, Math.floor((width * height) / 7000));
      for (let i = 0; i < count; i += 1) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.1 + 0.2,
          p: Math.random() * Math.PI * 2,
          s: Math.random() * 0.8 + 0.4,
        });
      }
    };

    const onMouse = (e) => {
      mx = (e.clientX / width - 0.5) * 2;
      my = (e.clientY / height - 0.5) * 2;
    };

    const draw = (now) => {
      ctx.clearRect(0, 0, width, height);
      const t = now / 1000;

      for (const s of stars) {
        const tw = 0.35 + 0.65 * ((Math.sin(t * s.s + s.p) + 1) / 2);
        ctx.globalAlpha = tw;
        ctx.fillStyle = '#9ca3af';
        ctx.beginPath();
        ctx.arc(s.x + mx * 14, s.y + my * 14, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      ctx.globalCompositeOperation = 'lighter';
      for (const b of blobs) {
        const cx =
          b.px * width + mx * 30 + Math.sin(t * 0.4 + b.r * 1000) * width * 0.06;
        const cy =
          b.py * height + my * 30 + Math.cos(t * 0.35 + b.r * 800) * height * 0.05;
        const rad = Math.max(width, height) * b.rad;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
        g.addColorStop(0, `hsla(${b.h} ${b.s}% ${b.l}% / 0.5)`);
        g.addColorStop(0.55, `hsla(${b.h + 15} ${b.s}% ${b.l + 14}% / 0.16)`);
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, width, height);
      }
      ctx.globalCompositeOperation = 'source-over';

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw(performance.now());
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouse);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}