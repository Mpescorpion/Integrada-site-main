window.onload = function() {
    const canvas = document.getElementById("background");
    const ctx = canvas.getContext("2d");
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const symbols = ["π", "∞", "√", "Σ", "+", "-", "*", "/"];
    const particles = [];
  
    // Função para gerar partículas
    function createParticle() {
      const symbol = symbols[Math.floor(Math.random() * symbols.length)];
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 20 + 10;
      const speed = Math.random() * 2 + 1;
  
      particles.push({ symbol, x, y, size, speed });
    }
  
    // Função de animação
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // Desenho das partículas
      particles.forEach(particle => {
        ctx.font = `${particle.size}px Arial`;
        ctx.fillStyle = "white";
        ctx.fillText(particle.symbol, particle.x, particle.y);
        particle.y += particle.speed;
  
        if (particle.y > canvas.height) {
          particle.y = 0 - particle.size;
        }
      });
  
      requestAnimationFrame(animate);
    }
  
    setInterval(createParticle, 200); // Cria partículas a cada 200ms
    animate();
  };
  
