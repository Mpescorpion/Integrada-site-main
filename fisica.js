const canvas = document.getElementById("animation-background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

// Partícula
class Particle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = Math.random() * 2 - 1; // Velocidade horizontal
        this.dy = Math.random() * 2 - 1; // Velocidade vertical
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(173, 216, 230, 0.8)";
        ctx.fill();
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.dy *= -1;

        this.draw();
    }
}

// Inicializar partículas
function init() {
    particles = [];
    for (let i = 0; i < 50; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let radius = Math.random() * 3 + 1;
        particles.push(new Particle(x, y, radius));
    }
}

// Conectar partículas com linhas
function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
            let dist = Math.hypot(
                particles[i].x - particles[j].x,
                particles[i].y - particles[j].y
            );

            if (dist < 100) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = "rgba(173, 216, 230, 0.1)";
                ctx.stroke();
            }
        }
    }
}

// Animação
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => particle.update());
    connectParticles();

    requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

