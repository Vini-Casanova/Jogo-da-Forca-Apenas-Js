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





