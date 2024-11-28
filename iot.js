// Exemplo de animação ao clicar nos botões
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
      // Efeito de aumento ao clicar
      this.style.transform = 'scale(1.1)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 200); // Retorna ao tamanho normal após 200ms
    });
  });
  
  // Exemplo de efeito de transição de cor ao passar o mouse por cima do título
  document.querySelector('header h1').addEventListener('mouseover', function() {
    this.style.color = '#ff6f61'; // Mudando a cor do título ao passar o mouse
  });
  
  document.querySelector('header h1').addEventListener('mouseout', function() {
    this.style.color = '#00f7ff'; // Retorna à cor original
  });
  
