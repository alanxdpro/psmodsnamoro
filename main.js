const btnNo = document.querySelector(".btn-no");
const btnYes = document.querySelector(".btn-yes");

// Redireciona para a próxima página ao clicar em "Sim"
btnYes.addEventListener("click", function () {
  const nextPage = "corpo.html"; // Caminho da nova página
  window.location.href = nextPage;
});

// Função para calcular a distância entre dois pontos
function calculateDistance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

// Função para mover o botão para uma nova posição dentro dos limites da janela
function moveButton() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Calcula uma nova posição aleatória para o botão
  let newTop = Math.random() * (windowHeight - btnNo.offsetHeight);
  let newLeft = Math.random() * (windowWidth - btnNo.offsetWidth);

  // Garante que o botão permaneça visível na tela
  newTop = Math.max(0, Math.min(newTop, windowHeight - btnNo.offsetHeight));
  newLeft = Math.max(0, Math.min(newLeft, windowWidth - btnNo.offsetWidth));

  // Define a nova posição do botão
  btnNo.style.position = "absolute";
  btnNo.style.top = `${newTop}px`;
  btnNo.style.left = `${newLeft}px`;
}

// Ouvinte de evento para mousemove e touchstart
document.addEventListener("mousemove", function (event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const btnRect = btnNo.getBoundingClientRect();
  const distance = calculateDistance(
    mouseX,
    mouseY,
    btnRect.left + btnRect.width / 2,
    btnRect.top + btnRect.height / 2
  );

  // Se a distância entre o mouse e o centro do botão for menor que 50 pixels, mova o botão
  if (distance < 50) {
    moveButton();
  }
});

btnNo.addEventListener("touchstart", function () {
  moveButton();
});

// Define um intervalo para movimentar o botão automaticamente
setInterval(moveButton, 1500); // Move o botão a cada 1,5 segundos
