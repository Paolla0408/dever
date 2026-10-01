let temperatura = Number(prompt("Digite a temperatura:"));
let unidade = prompt("Digite a unidade da temperatura (C ou F):").toUpperCase();

let resultado;

if (unidade === "C") {
    resultado = temperatura * 1.8 + 32;
    alert(temperatura + " °C = " + resultado + " °F");
} else if (unidade === "F") {
    resultado = (temperatura - 32) / 1.8;
    alert(temperatura + " °F = " + resultado + " °C");
} else {
    alert("Unidade inválida. Digite C ou F.");
}
