/*Criar um programa do jogo da FORCA - personagens da DC comics.

Seu programa deve conter o vetor a seguir:

var dc = ["batman", “superman”, “wonder woman”,”arlequina”,”joker”];

O programa sorteia um dos Personagens e inicia o jogo para o player tentar adivinhar a palavra. O programa deve obrigatoriamente ter:

Laço de repetição para controlar as chances e/ou os turnos do jogo.
Deve ser exibido ao usuário uma máscara de caracteres que deixa claro ao jogador a quantidade de letras que compõem o nome do País. Use o caractere ? (sinal de interrogação) para a máscara da palavra. Por exemplo, quando o programa sortear a palavra "batman" então exibirá para o jogador seis sinais de interrogação que correspondem a quantidade de letras da palavra:


                            ? ? ? ? ? ?

A cada rodada o player tenta adivinhar uma letra do nome do personagem. SE acertar ENTÃO a máscara de ? revela a posição da letra. Por exemplo, seguindo o exemplo anterior caso o player jogue a letra a então o programa mostra a máscara assim:
  
                           ? a ? ? a ?

SE o palpite não estiver no nome do personagem então significa que o jogador errou a letra. A cada erro cometido o programa apresenta uma das partes do stickman (homem palito). O stickman é dividido em cabeça, braço esquerdo, corpo, braço direito, perna esquerda e perna direita, como no exemplo abaixo:
 o
/|\
/ \
Também será considerado em ERRO se o player repetir um palpite. 
O jogador deverá jogar dando o palpite de UMA ÚNICA letra apenas por turno.
O programa deve exibir uma mensagem de Vitória ou Game Over para quando o player vencer ou perder no jogo.


IMPORTANTE (1) 
O programa inteiro deve usar janelas de popup, como prompt ou alert para interagir com o jogador. O seu HTML deve obrigatoriamente ter o <body> vazio, ou seja, sem componentes HTML.


IMPORTANTE (2)  
Escreva o código-fonte APENAS COM OS COMANDOS VISTOS NAS AULAS DA CC1MA. O programa será invalidado caso contenha algum comando diferente dos que já foram vistos nas aulas.
*/





var dc = ["batman", "superman", "wonder woman","arlequina","joker"];

var forca = dc[Math.floor(Math.random() * dc.length)]

var vida = 6;

var i = 1;

if(forca === "batman") {
    alert("O personagem é: ??????")
}else if(forca === "superman") {
    alert("O personagem é:  ????????")
}else if(forca === "wonder woman") {
    alert("O personagem é:  ?????? ?????")
}else if(forca === "arlequina") {
    alert("O personagem é:  ?????????")
}else if(forca === "joker") {
    alert("O personagem é:  ?????")
}



do{
    var tentativa = prompt()
    if(forca.search(tentativa) === -1){
      alert("Você errou a letra, seu stick man perde uma parte do corpo:\n"+"  o\n "+"/|\\ \n"+" / \\ \n")
      vida--
    }else if(forca.search(tentativa) !== -1){
        alert("Voce acertou a letra")
    }
}while(i <= vida)




