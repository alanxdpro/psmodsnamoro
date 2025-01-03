const btnNao = document.querySelector(".btn-nao");
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

// Função para mover o botão "Não"
function moveButton() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let newTop = Math.random() * (windowHeight - btnNao.offsetHeight);
    let newLeft = Math.random() * (windowWidth - btnNao.offsetWidth);

    newTop = Math.max(0, Math.min(newTop, windowHeight - btnNao.offsetHeight));
    newLeft = Math.max(0, Math.min(newLeft, windowWidth - btnNao.offsetWidth));

    btnNao.style.position = "absolute";
    btnNao.style.top = `${newTop}px`;
    btnNao.style.left = `${newLeft}px`;

    // Adiciona o efeito de vibração ao botão "Sim"
    btnYes.classList.add("btn-vibrate");

    // Remove o efeito de vibração após a animação
    setTimeout(() => {
        btnYes.classList.remove("btn-vibrate");
    }, 600);
}

// Eventos de movimento para o botão "Não"
document.addEventListener("mousemove", function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const btnRect = btnNao.getBoundingClientRect();
    const distance = calculateDistance(
        mouseX,
        mouseY,
        btnRect.left + btnRect.width / 2,
        btnRect.top + btnRect.height / 2
    );

    // Se a distância entre o mouse e o botão "Não" for menor que 50px, mova o botão
    if (distance < 50) {
        moveButton();
    }
});

btnNao.addEventListener("touchstart", function () {
    moveButton();
});

// Movimentação automática do botão "Não" em intervalos
setInterval(moveButton, 1500);
