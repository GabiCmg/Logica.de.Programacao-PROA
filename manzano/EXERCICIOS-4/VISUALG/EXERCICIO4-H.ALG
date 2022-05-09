Algoritmo "EXERCICIO4-H"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Obama
// Descrição   : Exercícios de Lógica (Capítulo 04. Estruturas de Controle
//– A Tomada de Decisões)
// Autoras    :   Aline Gallo, Gabriela Camargo e Giovanna Gomes
// Data atual  : 07/05/2022
Var
// Seção de Declarações das variáveis 
valor1,valor2,valor3,valor4:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval ("Digite o primeiro valor = ")
Leia (valor1)
Escreval ("Digite o segundo valor = ")
Leia (valor2)
Escreval ("Digite o terceiro valor = ")
Leia (valor3)
Escreval ("Digite o quarto valor = ")
Leia (valor4)
se ((valor1 mod 2)=0) e ((valor1 mod 3)=0) entao
   Escreval ("Primeiro valor é divisivel por 2 e 3 =",valor1)
   Escreval ("Dividido por 2 =",valor1/2)
   Escreval ("Dividido por 3 =",valor1/3)
fimse
se ((valor2 mod 2)=0) e ((valor2 mod 3)=0) entao
   Escreval ("Segundo valor é divisivel por 2 e 3 =",valor2)
   Escreval ("Dividido por 2 =",valor2/2)
   Escreval ("Dividido por 3 =",valor2/3)
fimse
se ((valor3 mod 2)=0) e ((valor3 mod 3)=0) entao
   Escreval ("Terceiro valor é divisivel por 2 e 3 =",valor3)
   Escreval ("Dividido por 2 =",valor3/2)
   Escreval ("Dividido por 3 =",valor3/3)
fimse
se ((valor4 mod 2)=0) e ((valor4 mod 3)=0) entao
   Escreval ("Quarto valor é divisivel por 2 e 3 =",valor4)
   Escreval ("Dividido por 2 =",valor4/2)
   Escreval ("Dividido por 3 =",valor4/3)
fimse

Fimalgoritmo