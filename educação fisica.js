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

// Elementos representando esportes
const esportes = ["🏀", "⚽", "🏐", "🏈", "🤾"];
const particulas = [];

// Criar partículas aleatórias
function criarParticula() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        tamanho: Math.random() * 2 + 1,
        velocidadeY: Math.random() * 1 + 0.5,
        simbolo: esportes[Math.floor(Math.random() * esportes.length)],
        opacidade: Math.random() * 0.8 + 0.2,
    };
}

// Desenhar partículas na tela
function desenharParticulas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particulas.forEach((particula, index) => {
        ctx.font = `${particula.tamanho * 20}px Arial`;
        ctx.fillStyle = `rgba(255, 255, 255, ${particula.opacidade})`;
        ctx.fillText(particula.simbolo, particula.x, particula.y);
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

