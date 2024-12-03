'use strict';

const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

// Ajustar o tamanho do canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Elementos visuais para a animação
const elementos = [
  "ca*fé*", "já*ca*rá", "pa*ra*",
  "eu", "tu", "ele", "nós", "vós", "eles",
  "andar", "andei", "andamos", "andando", 
  ",", ".", "!", "↔", "“ ”", "?",
  "vídeo", "imagem", "🎥", "📸"
];

const particulas = [];

// Função para criar uma partícula
function criarParticula() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    tamanho: Math.random() * 2 + 1,
    velocidadeY: Math.random() * 1 + 0.5,
    texto: elementos[Math.floor(Math.random() * elementos.length)],
    opacidade: Math.random() * 0.7 + 0.3,
  };
}

// Função para desenhar partículas
function desenharParticulas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particulas.forEach((particula, index) => {
    ctx.font = `${particula.tamanho * 15}px Arial`;
    ctx.fillStyle = `rgba(255, 255, 255, ${particula.opacidade})`;
    ctx.fillText(particula.texto, particula.x, particula.y);
    particula.y += particula.velocidadeY;

    // Recriar partícula se sair da tela
    if (particula.y > canvas.height) particulas[index] = criarParticula();
  });
}

// Animação
function animar() {
  desenharParticulas();
  requestAnimationFrame(animar);
}

// Criar partículas iniciais
for (let i = 0; i < 100; i++) {
  particulas.push(criarParticula());
}
animar();

