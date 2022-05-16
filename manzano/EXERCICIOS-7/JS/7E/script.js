let valor, taxa, tempo, prestacao; 

valor=parseFloat(prompt("Por favor nos informe o valor original da prestação: "));
taxa=parseFloat(prompt("Qual é o valor taxa por atraso da prestação: "));
tempo=parseInt(prompt("Qual o tempo de atraso em dias: "));

prestacao=valor+(valor*(taxa/100)*tempo)

alert("O valor da prestação com a taxa de atraso será: " + "R$" + prestacao)


// e) Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula 
// PRESTACAO ← VALOR + (VALOR * TAXA/100) * TEMPO).