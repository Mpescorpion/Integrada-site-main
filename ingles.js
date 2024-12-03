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

// Elementos para representar conteúdos de Língua Inglesa
const elementos = [
    "I am", "You are", "He is", 
    "was", "were", "been", 
    "do", "does", "did", 
    "quickly", "slowly", "beautifully", 
    "hello", "goodbye", "please", "thank you",
    "cat", "dog", "book"
];

const particulas = [];

// Função para criar uma partícula com propriedades aleatórias
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

// Função para desenhar as partículas
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

// Criar várias partículas iniciais
for (let i = 0; i < 100; i++) {
    particulas.push(criarParticula());
}
animar();

