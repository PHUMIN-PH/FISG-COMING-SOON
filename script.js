const title = "Coming Soon...";
const typedText = document.getElementById("typed-text");
let i = 0;

function typeLoop() {
  if (i <= title.length) {
    typedText.textContent = title.slice(0, i);
    i += 1;
    setTimeout(typeLoop, 110);
  } else {
    setTimeout(() => {
      i = 0;
      typeLoop();
    }, 1800);
  }
}

typeLoop();

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  const count = Math.min(80, Math.floor(window.innerWidth / 16));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2.4 + 0.6,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
  }));
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(110, 231, 183, 0.55)";
    ctx.fill();
  }

  requestAnimationFrame(drawParticles);
}

window.addEventListener("resize", () => {
  resizeCanvas();
  createParticles();
});

resizeCanvas();
createParticles();
drawParticles();
