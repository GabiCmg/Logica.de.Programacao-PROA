let numero1, numero2, numero3, numero4; 

numero1=parseInt(prompt("Informe um número"))
numero2=parseInt(prompt("Informe o segundo número"))
numero3=parseInt(prompt("Informe o terceiro número"))
numero4=parseInt(prompt("Informe o quarto número"))

if (numero1 % 2 === 0 && numero1 % 3 === 0){
    alert(numero1 + " é divisivel por 2 e por 3")
} 
if (numero2 % 2 === 0 && numero2 % 3 === 0){
    alert(numero2 + " é divisivel por 2 e por 3")
} 
if (numero3 % 2 === 0 && numero3 % 3 === 0){
    alert(numero3 + " é divisivel por 2 e por 3")
} 
if (numero4 % 2 === 0 && numero4 % 3 === 0){
    alert(numero4 + " é divisivel por 2 e por 3")
} else {
    alert("Apenas essa opção é compativel")
}



// g. Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3. 