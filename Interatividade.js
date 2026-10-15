// Captura o botão e associa a função de clique
const botao = document.getElementById("calcular");
botao.addEventListener("click", calcularIMC);

function calcularIMC() {
    // 1. Captura os valores digitados (sempre chegam como texto)
    const pesoTexto = document.getElementById("peso").value;
    const alturaTexto = document.getElementById("altura").value;

    // 2. Converte para número (aceita vírgula como separador decimal)
    const peso = parseFloat(pesoTexto.replace(",", "."));
    const altura = parseFloat(alturaTexto.replace(",", "."));

    const resultado = document.getElementById("resultado");
    const classificacao = document.getElementById("classificacao");

    // 3. Valida os dados
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.textContent = "Informe peso e altura válidos.";
        classificacao.textContent = "";
        return;
    }

    // 4. Fórmula: IMC = peso / (altura × altura)
    const imc = peso / (altura * altura);

    // 5. Exibe o resultado na tela
    resultado.textContent = "Seu IMC é " + imc.toFixed(2);
    classificacao.textContent = classificar(imc);
}

// Classificação conforme a tabela da OMS
function classificar(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso normal";
    if (imc < 30) return "Sobrepeso";
    if (imc < 35) return "Obesidade grau I";
    if (imc < 40) return "Obesidade grau II";
    return "Obesidade grau III";
}