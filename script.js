let mercadorias = {
    Margarina: 0,
    Melão: 0,
    Alface: 0,
    Manteiga: 0,
    Hamburguer: 0,
    Açaí: 0,
    Tomate: 0,
    Cebola: 0,
    Copo200ml: 0,
    Copo300ml: 0
};

function incrementar(mercadoria) {
    mercadorias[mercadoria]++;
    document.getElementById(`quantidade${mercadoria}`).textContent = mercadorias[mercadoria];
}

function decrementar(mercadoria) {
    if (mercadorias[mercadoria] > 0) {
        mercadorias[mercadoria]--;
        document.getElementById(`quantidade${mercadoria}`).textContent = mercadorias[mercadoria];
    }
}

function enviarWhatsApp() {
    let mensagem = gerarMensagem();
    let numeroWhatsApp = "5521989324855"; // Número de WhatsApp desejado

    // Codificar a mensagem para ser usada no URL
    mensagem = encodeURIComponent(mensagem);

    // Construir o link do WhatsApp com o número e a mensagem
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

    // Abrir o link no WhatsApp
    window.open(linkWhatsApp, "_blank");
}

function gerarMensagem() {
    let mensagem = "";

    for (const mercadoria in mercadorias) {
        if (mercadorias[mercadoria] > 0) {
            mensagem += `${mercadoria} ${mercadorias[mercadoria]}\n`;
        }
    }

    return mensagem;
}
