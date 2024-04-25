const btnNo = document.querySelector(".btn-no");
const btnYes = document.querySelector(".btn-yes");

btnYes.addEventListener("click", function() {
    // Defina o caminho da nova página HTML
    const nextPage = "corpo.html";
    // Redirecione o usuário para a nova página
    window.location.href = nextPage;
});


// Função para calcular a distância entre dois pontos
function calculateDistance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

// Função para mover o botão para uma nova posição aleatória dentro dos limites da janela
function moveButton() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  // Calcula uma nova posição aleatória para o botão
  let newTop = Math.floor(Math.random() * (windowHeight - btnNo.clientHeight));
  let newLeft = Math.floor(Math.random() * (windowWidth - btnNo.clientWidth));

  // Garante que o botão permaneça visível na tela
  if (newTop < 0) newTop = 0;
  if (newLeft < 0) newLeft = 0;

  // Define a nova posição do botão
  btnNo.style.top = newTop + "px";
  btnNo.style.left = newLeft + "px";
}

// Ouvinte de evento para mousemove no documento
document.addEventListener("mousemove", function(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const btnRect = btnNo.getBoundingClientRect();
  const distance = calculateDistance(
    mouseX,
    mouseY,
    btnRect.left + btnRect.width / 2,
    btnRect.top + btnRect.height / 2
  );

  // Se a distância entre o mouse e o centro do botão for menor que 5 cm (50 pixels), mova o botão
  if (distance < 50) {
    moveButton();
  }
});

// Definir um intervalo para mover continuamente o botão
setInterval(moveButton, 700); // Altere o valor do intervalo conforme desejado

