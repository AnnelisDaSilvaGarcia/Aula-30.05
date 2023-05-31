function calcIMC(peso, altura){
	var imc = Math.round(peso/Math.pow(altura,2));
	if(imc<=17){
		resposta = "Muito abaixo do peso ideal.";
	}else if(imc > 17 && imc < 18.49){
		return "Abaixo do peso.";
	}else if(imc > 18.5 && imc < 24.99){
		resposta = "Peso Normal.";
	}else if(imc > 25 && imc < 29.99){
		resposta = "Acima do Peso.";
	}else if(imc > 30 && imc < 34.99){
		resposta = "Obesidade grau 1.";
	}else if(imc > 35 && imc < 34.99){
		resposta = "Obseidade grau 2.";
	}else{
		resposta = "Obesidade grau 3(Mormida).";
	}
	return resposta;
}
function exemplo1(){
	var n = parseInt(prompt("Digite um nº: "));
	var resposta;
	if(n%2==0){
		resposta = "par";
	}else{
		resposta = "impar";
	}
	alert("Nº" +n+ " é " +resposta+ ".");
}
function exemplo2(){
	var produto = parseInt(prompt("Escolha um produto:"+
								  "\n1-Bala---------R$ 0,20"+
								  "\n2-Bombom-------R$ 1,20"+
								  "\n3-Bis----------R$ 2,99"+
								  "\n4-Bolacha------R$ 3,20"));
	var quantidade = parseInt(prompt("Digite a quantidade: "));
	var valorPagar;
	var texto;
	if(produto==1){
		valorPagar = quantidade * 0.20;
		texto = "Bala"
	}else if(produto==2){
		valorPagar = quantidade * 1.20;
		texto = "Bombom"
	}else if(produto==3){
		valorPagar = quantidade * 2.99;
		texto = "Bis"
	}else{
		valorPagar = quantidade * 3,20;
		texto = "Bolacha"
	}
	alert("Seu produto é "+texto+" você comprou "+quantidade+" então ira pagar R$"+valorPagar+",00.");
}
function exemplo02(){
	var produto = parseInt(prompt("Escolha um produto:"+
								  "\n1-Bala---------R$ 0,20"+
								  "\n2-Bombom-------R$ 1,20"+
								  "\n3-Bis----------R$ 2,99"+
								  "\n4-Bolacha------R$ 3,20"));
	var quantidade = parseInt(prompt("Digite a quantidade: "));
	var valorPagar;
	var texto;
	switch(produto){
		case 1:
			valorPagar = quantidade * 0.20;
			texto = "Bala"
		break;
		case 2:
			valorPagar = quantidade * 1.20;
			texto = "Bombom"
		break;
		case 3:
			valorPagar = quantidade * 2.99;
			texto = "Bis"
		break;
		default:
			valorPagar = quantidade * 3.20;
			texto = "Bolacha"
	}
	alert("Seu produto é "+texto+" você comprou "+quantidade+" então ira pagar R$"+valorPagar+",00.");
}
function exemplo3(){
	do{
		var idade = prompt("Digite sua idade: ");
		if(idade<0){
			alert("ERROU!\nidade invalida")
		}
	}while(idade<0)
	var resposta;
	if(idade<=10){
		resposta = "Criança";
	}else if(idade>=11 && idade<=13){
		resposta = "Pré-adolecente";
	}else if(idade>=14 && idade<=17){
		resposta = "Adolecente";
	}else if(idade>=18 && idade<=64){
		resposta = "Adulto";
	}else{
		resposta = "Idoso";
	}
	alert("Sua idade é "+idade+"\nFaixa Etária: "+resposta+".");
}
function atividade1(){
	var salario = parseFloat(prompt("Digite o seu salario: "));
	var aumento = salario * 0.05;
	var juros = salario * 0.07;
	var salarioFinal = salario + aumento - juros;
	alert("Seu salário atual é R$"+salario+",00 recebeu R$"+aumento+",00 de aumento e de retirou de impostos R$"+juros+",00 seu sálario vai ser de R$"+salarioFinal+",00.");
}
function atividade2(){
	var nome = prompt("Digite seu nome: ");
	var nota1 = parseFloat(prompt("Digite sua primeira nota:"));
	var nota2 = parseFloat(prompt("Digite sua segunda nota:"));
	var peso1 = parseFloat(prompt("Digite o peso da primeira prova:"));
	var peso2 = parseFloat(prompt("Digite o peso da primeira prova:"));
	var media = (nota1 * peso1 + nota2 * peso2)/(peso1+peso2);
	var resposta
	if(media<6){
		resposta = "você foi reprovado"
	}else{
		resposta = "você foi aprovado"
	}
	alert("Aluno "+nome+" sua média é "+media+" e "+resposta+".");
}
function atividade3(){
	var com = parseInt(prompt("Escolha um combustível: "+
							  "\n1 - GNV ---- R$2,10"+ 
							  "\n2 - Etanol ---- R$2,98"+
							  "\n3 - Gasolina Comum ---- R$4,00"+
							  "\n4 - Gasolina Aditivada ---- R$4,40"));
	var texto;
	var litros = parseFloat(prompt("Digite quantos litros:"));
	var valor;
	switch(com){
		case 1:
			valor = Math.round(litros * 2.10);
			texto = "GNV";
		break;
		case 2:
			valor = Math.round(litros * 2,98);
			texto = "Etanol";
		break;
		case 3:
			valor = Math.round(litros * 4);
			texto = "Gasolina Comum";
		default:
			valor = Math.round(litros * 4.40);
			texto = "Gasolina Aditiva"
	}
	alert("Você escolheu "+texto+" comprou "+litros+"L então ira pagar R$"+valor+",00.");
}
function atividade4(){
	var nome = prompt("Digite seu nome: ");
	do{
		var peso = parseFloat(prompt("Digite seu peso: "));
		if(peso<2.5 || peso>634){
			alert("ERRO!!\nPeso ivalido")
		}
	}while(peso<2.5 || peso>634);
	do{
		var altura = window.parseFloat(prompt("Digite sua Altura: "));
		if(altura<=0.54 || altura>=2.50){
			alert("ERRO!!\nAltura ivalido")
		}
	}while(altura<=0.54 || altura>=2.50);
	var imc = Math.round(peso/Math.pow(altura,2));
	var resposta
	if(imc<=17){
		resposta = "Muito abaixo do peso ideal.";
	}else if(imc > 17 && imc < 18.49){
		resposta = "Abaixo do peso.";
	}else if(imc > 18.5 && imc < 24.99){
		resposta = "Peso Normal.";
	}else if(imc > 25 && imc < 29.99){
		resposta = "Acima do Peso.";
	}else if(imc > 30 && imc < 34.99){
		resposta = "Obesidade grau 1.";
	}else if(imc > 35 && imc < 34.99){
		resposta = "Obseidade grau 2.";
	}else{
		resposta = "Obesidade grau 3(Mormida).";
	}
	alert(" "+nome+" seu imc é "+imc+" e você está " +resposta);
}
function atividade5(){
	var nome = prompt("Digite seu nome");
	var salario = parseFloat(prompt("Digite seu salario"));
	var aumento;
	var resposta;
	if(salario<=1500){
		aumento = Math.round(salario * 0.15);
		resposta = "Funcionario "+nome+" vai receber um aumento de R$"+aumento+",00.";
	}else if(salario>=1500 && salario<=3000){
		aumento = Math.round(salario * 0.10);
		resposta = "Funcionario "+nome+" vai receber um aumento de R$"+aumento+",00.";
	}else if(salario>=3000 && salario<=4500){
		aumento = Math.round(salario * 0.08);
		resposta = "Funcionario "+nome+" vai receber um aumento de R$"+aumento+",00.";
	}else if(salario>=4500 && salario<=5800){
		aumento = Math.round(salario * 0.05);
		resposta = "Funcionario "+nome+" vai receber um aumento de R$"+aumento+",00.";
	}else{
		resposta = "Funcionario "+nome+" não terá aumento.";
	}
	alert(resposta);
}
function atividade6(){
	var numero = parseInt(prompt("Digite um nº: "));
	var resposta;
	switch(numero){
		case 1:
			numero = 1;
			resposta = "Janeiro";
		break;
		case 2:
			numero = 2;
			resposta = "Fevereiro";
		break;
		case 3:
			numero = 3;
			resposta = "Março";
		break;
		case 4: 
		    numero = 4;
			resposta = "Abril";
		break;
		case 5:
			numero = 5;
			resposta = "Maio";
		break;
		case 6:
			numero = 6;
			resposta = "Junho";
		break;
		case 7:
			numero = 7;
			resposta = "Julho";
		break;
		case 8: 
		    numero = 8;
			resposta = "Agosto";
		break;
		case 9:
			numero = 9;
			resposta = "Setembro";
		break;
		case 10:
			numero = 10;
			resposta = "Outubro";
		break;
		case 11:
			numero = 11;
			resposta = "Novembro";
		default:
			numero = 12;
			resposta = "Dezembro";
	}
	alert(resposta);
}
function testarTrabalho(){
	var nome = prompt("Digite seu nome: ");
	var peso = window.parseFloat(prompt("Digite seu peso: "));
	var altura = window.parseFloat(prompt("Digite seu peso: "));
	do{
	var diaN = parseInt(prompt("Digite seu dia de nascimento: "));
	var mesN = parseInt(prompt("Digite seu mês de nascimento: "));
	var anoN = parseInt(prompt("Digite seu ano de nascimento: "));
	var signo;
	var idade;
	var estacao;
	var estacaoA;
	var dataAtual = new Date();
    var diaA = dataAtual.getDate();
    var mesA = dataAtual.getMonth() + 1;
    var anoA = dataAtual.getFullYear();
	var resposta = calcIMC(peso,altura);

	if (mesA < mesN || (mesN == mesA && diaA < diaN)) {
	  idade = anoA - anoN - 1;
	} else {
	  idade = anoA - anoN;
	}
  
	if (
	  (mesN == 3 && diaN >= 21 && diaN <= 31) ||
	  (mesN == 4 && diaN >= 1 && diaN <= 19)
	) {
	  signo = "Áries";
	} else if (
	  (mesN == 4 && diaN >= 20 && diaN <= 30) ||
	  (mesN == 5 && diaN >= 1 && diaN <= 20)
	) {
	  signo = "Touro";
	} else if (
	  (mesN == 5 && diaN >= 21 && diaN <= 31) ||
	  (mesN == 6 && diaN >= 1 && diaN <= 20)
	) {
	  signo = "Gêmeos";
	} else if (
	  (mesN == 6 && diaN >= 21 && diaN <= 30) ||
	  (mesN == 7 && diaN >= 1 && diaN <= 22)
	) {
	  signo = "Câncer";
	} else if (
	  (mesN == 7 && diaN >= 23 && diaN <= 31) ||
	  (mesN == 8 && diaN >= 1 && diaN <= 22)
	) {
	  signo = "Leão";
	} else if (
	  (mesN == 8 && diaN >= 23 && diaN <= 31) ||
	  (mesN == 9 && diaN >= 1 && diaN <= 22)
	) {
	  signo = "Virgem";
	} else if (
	  (mesN == 9 && diaN >= 23 && diaN <= 30) ||
	  (mesN == 10 && diaN >= 1 && diaN <= 22)
	) {
	  signo = "Libra";
	} else if (
	  (mesN == 10 && diaN >= 23 && diaN <= 31) ||
	  (mesN == 11 && diaN >= 1 && diaN <= 21)
	) {
	  signo = "Escorpião";
	} else if (
	  (mesN == 11 && diaN >= 22 && diaN <= 30) ||
	  (mesN == 12 && diaN >= 1 && diaN <= 20)
	) {
	  signo = "Sagitário";
	} else if (
	  (mesN == 12 && diaN >= 21 && diaN <= 31) ||
	  (mesN == 1 && diaN >= 1 && diaN <= 19)
	) {
	  signo = "Capricórnio";
	} else if (
	  (mesN == 1 && diaN >= 20 && diaN <= 31) ||
	  (mesN == 2 && diaN >= 1 && diaN <= 17)
	) {
	  signo = "Aquário";
	} else {
	  signo = "Peixes";
	}
	if (
	  mesN == 12 && diaN >= 21 && diaN <= 31 ||
	  mesN == 1 && diaN >= 1 && diaN <= 31 ||
	  mesN == 2 && diaN >= 1 && diaN <= 29 ||
	  mesN == 3 && diaN >= 1 && diaN <= 20
	) {
	  estacao = "o Verão!";
	} else if (
	  mesN == 3 && diaN >= 20 && diaN <= 31 ||
	  mesN == 4 && diaN >= 1 && diaN <= 30 ||
	  mesN == 5 && diaN >= 1 && diaN <= 31 ||
	  mesN == 6 && diaN >= 1 && diaN <= 20
	) {
	  estacao = "o Outono!";
	} else if (
	  mesN == 6 && diaN >= 21 && diaN <= 30 ||
	  mesN == 7 && diaN >= 1 && diaN <= 31 ||
	  mesN == 8 && diaN >= 1 && diaN <= 31 ||
	  mesN == 9 && diaN >= 1 && diaN <= 22
	) {
	  estacao = "o Inverno!";
	} else {
	  estacao = "a Primavera!";
	}
	if (
		mesA == 12 && diaA >= 21 && diaA <= 31 ||
		mesA == 1 && diaA >= 1 && diaA <= 31 ||
		mesA == 2 && diaA >= 1 && diaA <= 29 ||
		mesA == 3 && diaA >= 1 && diaA <= 20
	  ) {
		estacaoA = "o Verão!";
	  } else if (
		mesA == 3 && diaA >= 20 && diaA <= 31 ||
		mesA == 4 && diaA >= 1 && diaA <= 30 ||
		mesA == 5 && diaA >= 1 && diaA <= 31 ||
		mesA == 6 && diaA >= 1 && diaA <= 20
	  ) {
		estacaoA = "o Outono!";
	  } else if (
		mesA == 6 && diaA >= 21 && diaA <= 30 ||
		mesA == 7 && diaA >= 1 && diaA <= 31 ||
		mesA == 8 && diaA >= 1 && diaA <= 31 ||
		mesA == 9 && diaA >= 1 && diaA <= 22
	  ) {
		estacaoA = "o Inverno!";
	  } else {
		estacaoA = "a Primavera!";
	  }
	if (mesN < 1 || mesN > 12) {
	  alert("ERRO! Este mês não existe.");
	} else if (diaN < 1 || diaN > 31) {
	  alert("ERRO! Este dia não existe.");
	} else if (anoN > anoA || anoN < 0) {
	  alert("ERRO! Este ano não existe.");
	} else if ((mesN == 4 || mesN == 6 || mesN == 9 || mesN == 11) && diaN == 31) {
	  alert("ERRO! Este mês não possui 31 dias.");
	} else if (diaN == 29 && mesN == 2 && anoN % 4 != 0) {
	  alert("ERRO! Este ano não é bissexto.");
	} else if (mesN == 2 && diaN > 29) {
	  alert("ERRO! Este dia é inválido para este mês.");
	} else if ((diaN > diaA && anoN >= anoA) || (mesN > mesA && anoN >= anoA)) {
	  alert("ERRO! Esta data é inválida.");
	} else if (idade > 150) {
	  alert("ERRO! Impossível ter mais que 150 anos.");
	} else {
	  alert("\n -Nome: " + nome +
	  		"\n -Data de Nascimento: " + diaN + "/" + mesN + "/" + anoN+
	  		"\n -Data Atual: " + diaA + "/" + mesA + "/" + anoA+
	  		"\n -Você tem " + idade + " anos;"+
	 		"\n -Você é do signo de " + signo + ";"+
	  		"\n -Você nasceu durante " + estacao +
			"\n -Estamos na estação "+ estacaoA +
			"\n -Seu imc é "+resposta);
	}
  
	if (diaN == diaA && mesN == mesA && anoN < anoA) {
	  alert("\nParabéns! Hoje é o seu aniversário.");
	}
  
	if (diaN == diaA && mesN == mesA && anoN == anoA) {
	  alert("\nParabéns! Bem-vindo à vida!");
	}
}while (
	mesN < 1 || mesN > 12 ||
	diaN < 1 || diaN > 31 ||
	anoN > anoA || anoN < 0 ||
	(mesN == 4 || mesN == 6 || mesN == 9 || mesN == 11) && diaN == 31 ||
	diaN == 29 && mesN == 2 && anoN % 4 != 0 ||
	mesN == 2 && diaN > 29 ||
	(diaN > diaA && anoN >= anoA) || (mesN > mesA && anoN >= anoA) ||
	idade > 150
  );
}
function produto(){
	var produto = prompt("Escolha um dos produtos:");
	var valor = parseInt(prompt("Quanto vale o produto"));
	var juros = Math.round(valor * 1.12);
	var desconto = Math.round(valor * 0.92);
	alert("Você comprou o produto "+produto+" que tinha o valor de R$"+valor+",00 esse valor com desconto é R$"+desconto+",00 o valor com os juros é R$"+juros+",00.");
}
function salarioFinal(){
	var salario1 = parseFloat(prompt("Digite o primeiro salario"));
	var salario2 = parseFloat(prompt("Digite o segundo salario"));
	var mediaSalario = (salario1+salario2)/2;
	alert("O primeiro sálario é de R$"+salario1+",00 o segundo salario é de R$"+salario2+",00 e a media salarial é de R$"+mediaSalario+",00.")
}
function idade(){
	var idade = parseInt(prompt("Digite a sua idade"));
	var resposta;
	if(idade<=17){
		resposta = "Menor de idade";
	}else if(idade>=18 || idade<=112){
		resposta = "Maior de idade";
	}else{
		resposta = "Idade invalida";
	}
	alert(resposta);
}
function escola(){
	var valorMensa = parseFloat(prompt("Digite o valor da mensalidade"));
	var valorRenda = parseFloat(prompt("Digite o valor da sua renda"));
	var desconto;
	var resposta;
	if(valorMensa>=valorRenda){
		desconto = valorMensa*0.50;
	}else{
		desconto = valorMensa;
	}
	alert("A mensalidade da escola é de R$"+valorMensa+",00\nSua rende é de R$"+valorRenda+",00\nVocê recebeu o desconto de R$"+desconto+",00.");
}
function pesoIdeal(){
	var altura = parseFloat(prompt("Digite sua altura"));
	var sexo = prompt("Qual é o seu sexo: \n1-Mulher\n2-Homem");
	var pesoIdeal
	if(sexo==1){
		pesoIdeal = Math.round((62.1*altura)-44.7);
	}else if(sexo==2){
		pesoIdeal = Math.round((72.7*altura)-58);
	}else{
		pesoIdeal = "Invalido";
	}
	alert("Sua altura é de "+altura+"cm seu peso ideal é de "+pesoIdeal);
}
function idadeMédia(){
	var contMaior = 0;
	var contMenor = 0;
	for(var i=1;i<=10;i++){
		var x = parseInt(prompt("Digite sua idade:"));
		if(x<=17){
			contMenor++
		}else if(x>=18 ||x<=112){
			contMaior++
		}
	}
	alert("Tem "+contMaior+" maiores de idade\nTem "+contMenor+" menores de idade.");
}
function desafio(){
	do{
		var lado1 = parseInt(prompt("Digite o tamanho de uns dos lados"));
		var lado2 = parseInt(prompt("Digite o tamanho de uns dos lados"));
		var lado3 = parseInt(prompt("Digite o tamanho de uns dos lados"));
		var resposta;
		if(!(lado1 < lado2+lado3 || lado2 < lado1+lado3 || lado3 < lado1+lado2)){
			alert("Digite um tamanho de lado que seja menor que a soma dos outros");
		}
	}while(!(lado1 < lado2+lado3 || lado2 < lado1+lado3 || lado3 < lado1+lado2));
	if((lado1==lado2 && lado3!=lado1) || (lado2==lado3 && lado1!=lado2) || (lado1==lado3 && lado1!=lado2)){
		resposta = "Seu triangulo é Isósceles";
	}else if(lado1!=lado2 && lado2!=lado3){
		resposta = "Seu triangulo é Escaleno";
	}else if(lado1==lado2 && lado2==lado3){
		resposta ="Seu triangulo é Equilátero";
	}else{
		resposta = "Triangulo invalido";
	}
	alert("O primeiro lado mede "+lado1+" segundo lado mede "+lado2+" terceiro lado mede "+lado3+"\n"+resposta+".");
}
function atividade1(){
	var pront = prompt("Digite o nome do produto que vai comprar");
	var val = parseFloat(prompt("Digite o valor desse produto"));
	var jur = parseInt(prompt("Digite quanto de juros mensal"));
	var mes = parseInt(prompt("Digite quantos meses"));
	jur = (jur/100);
	jur = (val*jur*mes).toFixed(0);
	var total = (val * jur).toFixed(2);
	alert ("Produto: "+pront+"\nValor: "+val+"\nJuros Mensal: "+jur+"\nMeses: "+mes)
}
function atividade2(){
	var valor = parseFloat(prompt("Digite o valor"));
	var juros = (parseInt(prompt("Digite o valor dos juros")))/100;
	var juro5 = (juros * valor * 60).toFixed(2);
	var juros10 = (juros * valor * 120).toFixed(2);
	var juros1 = (juros * valor * 12).toFixed(2);
	alert("Valor: "+valor+"\nJuros: "+juros+"\nJuros em 1 ano: "+juros1+"\nJuros em 5 anos: "+juro5+"\nJuros em 10 anos: "+juros10)
}
function atividade3(){
	var notaA1 = parseFloat(prompt("Digite 1º nota do 1º aluno "));
	var notaA2 = parseFloat(prompt("Digite 2º nota do 1º aluno "));
	var notaA3 = parseFloat(prompt("Digite 3º nota do 1º aluno "));
	var media1 = ((notaA1+notaA2+notaA3)/3).toFixed(2);
	var nota = parseFloat(prompt("Digite 1º nota do 2º aluno "));
	var nota2 = parseFloat(prompt("Digite 2º nota do 2º aluno "));
	var nota3 = parseFloat(prompt("Digite 3º nota do 2º aluno "));
	var media = ((nota+nota2+nota3)/3).toFixed(2);
	if(media1>media){
		resposta = "O 1º aluno teve a melhor desepenho";
	}else if(media>media1){
		resposta = "O 2º aluno teve o melhor desepenho";
	}else{
		resposta = "Tiveram a mesma nota";
	}
	alert("Media do 1º aluno: "+media1+"\nMédia do 2º aluno: "+media+"\n "+resposta+".");
}
function atividade_desafio1(){
	var idade = parseInt(prompt("Digite sua idade:"));
	var dataAtual = new Date();
	var anoA = dataAtual.getFullYear();
	for(var i=idade;i<=100;i++){
		anoA++
		idade++
		alert("Nesse "+anoA+" você terá "+idade);
	}
}
function atividade_desafio2(){
	var tam = parseFloat(prompt("Digite o tamanho da pista"));
	var vel1 = parseInt(prompt("Digite a velocidade do 1º carro"));
	var vel2 = parseInt(prompt("Digite a velocidade do 2º carro"));
	var i = 0;
	var d1 = 0;	
	var d2 = 0;
	while ( d1<tam || d2<tam) {
		i++;
		var d1 = vel1 * i;	
		var d2 = vel2 * i;
		alert ("Distancia que o 1º carro percorreu "+d1+ "\nDistancia que o 2º carro percorreu "+d2+"\ntempo: "+i*60);
	}
	if(vel1>vel2){
		alert("O carro 1 venceu");
	}else if(vel2>vel1){
		alert("O carro 2 venceu");
	}else{
		alert("Empate");
	}
}