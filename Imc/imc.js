function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let imc = peso / (altura * altura)

    if (imc < 18.5) {
        mensagem = "Você está abaixo do peso";
    } else if (imc < 24.9) {
        mensagem = "Você está dentro do peso";
    } else if (imc < 29.9) {
        mensagem = "Você está com sobrepeso";
    } else if (imc < 34.9) {
        mensagem = "Você está no 1º Grau de obesidade";
    } else if (imc < 39.9) {
        mensagem = "Você está no 2º Grau de obesidade";
    } else if (imc >= 40) {
        mensagem = "Você está no 3º Grau de obesidade";
    }

    document.getElementById("resultado").innerText = mensagem;

}
