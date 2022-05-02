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




//Dfinição de variaveis
var dc = ["batman", "superman", "wonder woman","arlequina","joker"];

var forca = dc[Math.floor(Math.random() * dc.length)]

var vidaStickman =6;

var stickman = ["  o","  o \n /","  o \n /|","  o \n /|\\", "  o \n /|\\ \n /", "  o \n /|\\ \n /\\"];

var guess = [];

//Transformando a palavra escolhida em "?"
for(var i=0;i<=forca.length - 1;i++){
    guess.push("?")
}

//Instruções ao Usuário
alert("O tema é personagens da DC")
alert("O seu personagem é: "+guess)


//Laço de repetição de controle de turnos do jogo
do{
   play()

}while(guess.includes("?")==true && vidaStickman != 0);

if(guess.includes("?")==false){
  alert("Parabens voce ganhou")
}else{
    alert("Voce Perdeu")
}



//Funcão de análise e laços do jogo
function play() {
    //Jogador Adivinha uma letra
    alert("Digite uma letra")
    let adivinhar = prompt();

    //Verifica se a letra está na palavra
    if(forca.includes(adivinhar)==false){
        vidaStickman--;
        alert("Você errou, seu stickman perde um membro do corpo: \n"+ stickman[vidaStickman-1])
    }else if(forca.includes(adivinhar)==true){
        if(guess.includes(adivinhar)==true){
          vidaStickman--;
          alert("Você repetiu uma letra que ja foi, seu stickman perde um membro: \n"+ stickman[vidaStickman-1])
        }else{
            //Laço para adicionar apenas as letras da adivinhação do usuário
            for(i=0;i<=forca.length;i++){
                if(adivinhar == forca[i]){
                    guess[i] = adivinhar
                }else if(guess[i] != "?"){
                    guess[i]= guess[i]
                }else{
                    guess[i]= "?"
                }
                
             }
        }
        
        alert(guess)
    }
}





