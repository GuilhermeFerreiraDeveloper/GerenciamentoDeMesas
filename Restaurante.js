const prompt = require("prompt-sync")();

// Array que representa as 10 mesas (false significa mesa livre)
let mesas = new Array(10).fill(false);

// Função para reservar uma mesa
function ReservarMesa() {
    let mesaNumero = parseInt(prompt("Digite o número da mesa (1-10): "));
    
    // Verifica se o número da mesa é válido e se está livre
    if (mesaNumero < 1 || mesaNumero > 10) {
        console.log("Número de mesa inválido. Escolha entre 1 e 10.");
    } else if (mesas[mesaNumero - 1] === false) {
        mesas[mesaNumero - 1] = true; // Marca a mesa como ocupada
        console.log(`Mesa ${mesaNumero} reservada com sucesso!`);
    } else {
        console.log(`A mesa ${mesaNumero} já está ocupada.`);
    }
}

// Exibindo o status das mesas
function exibirStatusMesas() {
    mesas.forEach((status, index) => {
        console.log(`Mesa ${index + 1}: ${status ? "ocupada" : "livre"}`);
    });
}

// Reservando uma mesa
ReservarMesa();

// Exibindo o status das mesas
exibirStatusMesas();

//FEITO PELO CHAT