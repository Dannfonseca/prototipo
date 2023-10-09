let mercadorias = {
    Amendoim: 0,
    Aveia: 0,
    Paçoca: 0,
    Leite: 0,
    Ovomaltine: 0,
    Chocoball: 0,
    Sucrilhos: 0,
    Granola: 0,
    Jujuba: 0,
    "Flocos de Arroz": 0,
    "Granulado Preto": 0,
    "Granulado Colorido": 0,
    "Biscoitinho de Açaí": 0,
    '150 ml': 0,
    '200 ml': 0,
    '250 ml': 0,
    '300 ml': 0,
    '400 ml': 0,
    '500 ml': 0,
    '770 ml': 0,
    Coco: 0,
    Flocos: 0,
    Napolitano: 0,
    'Mini Saia': 0,
    'Milho Verde': 0,
    Limão: 0,
    'Bala Mole': 0,
    'Cartela de Chiclete': 0,
    Mentos: 0,
    Freegels: 0,
    'Halls Cereja': 0,
    Trento: 0,
    Paçoquita: 0,
    'Chiclete Blong': 0,
    Trakinas: 0,
    Zumbitos: 0,
    'Doce de Amendoim': 0,
    Pirulito: 0,
    'Doce de Abóbora': 0,
    'Pé de Moça': 0,
    Chocolate: 0,
    Morango: 0,
    Uva: 0,
    'Tuti-frutti': 0,
    Caramelo: 0,
    'Leite Condensado': 0,
    Menta: 0,
    'Maçã Verde': 0,
    Graviola: 0,
    Açaí: 0,
    'Sorvete de Flocos': 0,
    'Sorvete Napolitano': 0,
    'Sorvete de Creme': 0,
    'Coca-cola 2lt': 0,
    'Coca lata': 0,
    'Artártica 2lt': 0,
    'Antártica 1lt': 0,
    'Antártica Lata': 0,
    'Tobi 2lt': 0,
    'Guaravita': 0,
    'Convenção Pet': 0,
    'Água Mineral': 0,
    'Hamburguer': 0,
    'Hamburguer Picanha': 0,
    'Bacon': 0,
    'Batata Palha': 0,
    'Batata Frita': 0,
    'Mussarela': 0,
    'Apresuntado': 0,
    'Linguiça Fatiada': 0,
    'Arroz': 0,
    'Feijão': 0,
    'Açúcar': 0,
    'Leite Integral': 0,
    'Leite em Pó': 0,
    'Filé de Peito de Frango': 0,
    'Carne': 0,
    'Cartela de Ovos': 0
    
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
    let numeroWhatsApp = "5521984145211"; 
    
    mensagem = encodeURIComponent(mensagem);
    
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
   
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
