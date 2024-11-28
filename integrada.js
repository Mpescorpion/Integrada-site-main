'use strict';

// Configuração da animação no canvas
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function drawAnimation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Aqui você pode inserir a lógica de animação (pontos, clusters, etc.)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 3;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    requestAnimationFrame(drawAnimation);
}
drawAnimation();

