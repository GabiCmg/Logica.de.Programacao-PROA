let valor1, valor2, valor3; 

valor1=parseFloat(prompt("Digite um número:"));
valor2=parseFloat(prompt("Digite o segundo número:"));
valor3=parseFloat(prompt("Digite o terceiro número:"));

if ((valor1>valor2) && (valor1>valor3) && (valor2>valor3)){
    alert(valor3+ ", " +valor2+ ", " +valor1)
} else 
if ((valor2>valor1) && (valor2>valor3) && (valor3<valor1)) { 
    alert(valor3+ ", " +valor1+ ", " +valor2)
} else 
if ((valor3>valor2) && (valor3>valor1) && (valor2>valor1)){
    alert(valor1+ ", " +valor2+ ", " +valor3)
} else 
if (valor1>valor2 && valor1>valor3 && valor3>valor2){
    alert(valor2+ ", " +valor3+ ", " +valor1)
} else 
if (valor2>valor3 && valor2>valor1 && valor3>valor1){
    alert(valor1+ ", " +valor3+ ", " +valor2)
} else 
if (valor3>valor1 && valor3>valor2 && valor1>valor2){
    alert(valor2+", " +valor1+ ", " +valor3)
}
else {
    alert("Todos são iguais")
} 


// f. Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente. 


