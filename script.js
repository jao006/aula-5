function calcular() {
    let codigo = Number(document.getElementById("codigo").value);
    let quantidade = Number(document.getElementById("quantidade").value);
    let texto = document.getElementById("texto");
    let total = 0;

    // Testando os códigos dos lanches 
    switch (codigo) {
        case 1:
            total = quantidade * 18.00; // X-Calabresa
            break;
        case 2:
            total = quantidade * 25.00; // X-Salamimho
            break;
        case 3:
            total = quantidade * 21.00; // X-Frango
            break;
        case 4:
            total = quantidade * 15.00; // X-Salada
            break;
        case 5:
            total = quantidade * 17.00; // X-Burguer
            break;
        case 6:
            total = quantidade * 35.00; // A moda da casa
            break;
        case 7:
            total = quantidade * 44.00; // X-Gourmet
            break;
        case 8:
            total = quantidade * 55.00; // X-Gourmet
            break;
        case 9:
            total = quantidade * 44.00; // X-Gourmet
            break;
        case 10:
            total = quantidade * 144.00; // X-Gourmet
            break;
        default:
            texto.innerHTML = 'Código inválido'; // Mensagem de erro
            return; // Sai da função se o código for inválido
    }

    
    texto.innerHTML = "R$ " + total.toFixed(2);
}