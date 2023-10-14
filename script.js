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
    "FlocosArroz": 0,
    "GranuladoPreto": 0,
    "GranuladoColorido": 0,
    "BiscoitinhoAçaí": 0,
    '150ml': 0,
    '200ml': 0,
    '250ml': 0,
    '300ml': 0,
    '400ml': 0,
    '500ml': 0,
    '770ml': 0,
    Coco: 0,
    Flocos: 0,
    Napolitano: 0,
    MiniSaia: 0,
    Milhoverde: 0,
    Limão: 0,
    BalaMole: 0,
    CartelaChiclete: 0,
    Mentos: 0,
    Freegels: 0,
    HallsCereja: 0,
    Trento: 0,
    Paçoquita: 0,
    ChicleteBlong: 0,
    Trakinas: 0,
    Zumbitos: 0,
    DoceAmendoim: 0,
    Pirulito: 0,
    DoceAbóbora: 0,
    PéDeMoça: 0,
    Chocolate: 0,
    Morango: 0,
    Uva: 0,
    'Tuti-frutti': 0,
    Caramelo: 0,
    LeiteCondensado: 0,
    Menta: 0,
    MaçãVerde: 0,
    Graviola: 0,
    Açaí: 0,
    SorveteFlocos: 0,
    SorveteNapolitano: 0,
    SorveteCreme: 0,
    'Coca-cola2lt': 0,
    'Coca lata': 0,
    'Artártica2lt': 0,
    'Antártica1lt': 0,
    'Antárticalata': 0,
    'Tobi2lt': 0,
    'Guaravita': 0,
    'ConvençãoPet': 0,
    'ÁguaMineral': 0,
    'Hamburguer': 0,
    'HamburguerPicanha': 0,
    'Bacon': 0,
    'BatataPalha': 0,
    'BatataFrita': 0,
    'Mussarela': 0,
    'Apresuntado': 0,
    'LinguiçaFatiada': 0,
    'Arroz': 0,
    'Feijão': 0,
    'Açúcar': 0,
    'LeiteIntegral': 0,
    'LeitePó': 0,
    'FiléPeitoFrango': 0,
    'Carne': 0,
    'CartelaOvos': 0,
    'Colher Descartável': 0,
    'Sacola Forte': 0,
    'Maionese': 0,
    'Billy e Jack': 0,
    'Ketchup': 0,
    'Sacola 25/35': 0

    
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
    let numeroWhatsApp = "21989324855"; 
    
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
