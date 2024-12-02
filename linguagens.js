'use strict';

// Configuração do Canvas
const canvas = document.getElementById('animation-background');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Letras para a Animação
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#&';
const particles = [];

function createParticle() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedY: Math.random() * 1 + 0.5,
        letter: letters[Math.floor(Math.random() * letters.length)],
        alpha: Math.random() * 0.5 + 0.5,
    };
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, index) => {
        ctx.font = `${particle.size * 10}px Arial`;
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`;
        ctx.fillText(particle.letter, particle.x, particle.y);
        particle.y += particle.speedY;
        if (particle.y > canvas.height) particles[index] = createParticle();
    });
}

function animate() {
    drawParticles();
    requestAnimationFrame(animate);
}

for (let i = 0; i < 100; i++) {
    particles.push(createParticle());
}
animate();

