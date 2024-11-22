// Função para configurar o canvas e a animação
function setup() {
    createCanvas(windowWidth, windowHeight); // Cria um canvas que preenche a tela inteira
  }
  
  // Função que desenha a animação no canvas
  function draw() {
    background('rgba(1, 2, 34, 0.945)'); // Cor de fundo solicitada
    noStroke(); // Remove a borda das formas desenhadas
    for (let i = 0; i < 14000; i++) {
      rect(random(width), random(height), 2, 2); // Desenha pequenos quadrados aleatórios
    }
  }
  