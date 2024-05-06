let count = 1;
let intervalId;

document.getElementById("radio1").checked = true;

// Iniciar o intervalo quando a página carrega
intervalId = setInterval(function () {
    nextImage();
}, 2000);

function nextImage() {
    count++;
    if (count > 12) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

// Adicionar evento de clique aos botões de navegação para parar o intervalo temporariamente
const radioButtons = document.querySelectorAll('.manual-btn');

radioButtons.forEach((radioButton, index) => {
    radioButton.addEventListener('click', function () {
        clearInterval(intervalId);
        count = index + 1; // Definir o novo valor de count com base no índice do botão clicado
        setTimeout(function () {
            intervalId = setInterval(function () {
                nextImage();
            }, 2000);
        }, 2000); // Aguarde 5 segundos (ou o tempo desejado) antes de retomar o intervalo
    });
});
