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

function enviarEmail() {
    let emailBody = "";

    for (const mercadoria in mercadorias) {
        if (mercadorias[mercadoria] > 0) {
            emailBody += `${mercadoria} ${mercadorias[mercadoria]}, `;
        }
    }

    emailBody = emailBody.slice(0, -2);

    const emailLink = `mailto:russelmytho@gmail.com?subject=Lista de Mercadorias&body=${emailBody}`;

    window.location.href = emailLink;
}