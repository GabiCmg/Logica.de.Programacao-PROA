let velocidade, tempo, dt, lg;

velocidade=parseInt(prompt("Informe a velocidade media de seu carro em km"));
tempo=parseInt(prompt("Informe o tempo medio gasto em horas"));

dt=velocidade*tempo;
lg=dt/12;

alert("seu carro irá gastar ou gastou: "+ lg +"L")
alert("seu carro irá percorrer, mais ou menos: " + dt +"km")
alert("Em média, o tempo será: " + tempo +"h")
alert("Sua velocidade média seria aproximadamente: " + velocidade + "km/h")



// d) Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um 
// automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto 
// (TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a 
// distância percorrida com a fórmula DISTANCIA ← TEMPO * VELOCIDADE. Possuindo o valor da 
// distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula 
// LITROS_USADOS ← DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade 
// média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a 
// quantidade de litros (LITROS_USADOS) utilizada na viagem.