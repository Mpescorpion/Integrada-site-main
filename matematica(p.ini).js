// Seleciona o canvas e ajusta dimensões
const canvas = document.getElementById('mathCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Lista de símbolos matemáticos
const symbols = ['π', 'Σ', '√', '∞', '+', '-', '×', '÷', '='];
const particles = [];

// Classe para os símbolos flutuantes
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 30 + 10;
    this.text = symbols[Math.floor(Math.random() * symbols.length)];
    this.opacity = Math.random();
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Reposiciona se sair da tela
    if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
    }
  }

  draw() {
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.font = `${this.size}px Arial`;
    ctx.fillText(this.text, this.x, this.y);
  }
}

// Inicializa partículas
function init() {
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle());
  }
}

// Anima as partículas
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animate);
}

init();
animate();

