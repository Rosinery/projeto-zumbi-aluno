var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var zombieGroup;

var score = 0;
var life = 3;
var bullets = 70;

var heart1, heart2, heart3

var gameState = "fight"

var lose, winning, explosionSound;


function preload(){
  
  

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  
    //criando grupos de zumbis e balas
    


}

function draw() {
  background(0); 






drawSprites();

//exibindo a pontuação e as vidas e balas restantes
textSize(20)
  fill("white")
text("Balas = " + bullets,displayWidth-210,displayHeight/2-250)
text("Pontuação = " + score,displayWidth-200,displayHeight/2-220)
text("Vidas = " + life,displayWidth-200,displayHeight/2-280)

//destrua o zumbi e o jogador e exiba uma mensagem em gameState "lost"
if(gameState == "lost"){
  
  

}

//destrua o zumbi e o jogador e exiba uma mensagem em gameState "won"
else if(gameState == "won"){
 
  

}

//destrua o zumbi, o jogador e as balas e exiba uma mensagem no gameState "bullet"
else if(gameState == "bullet"){
 
  

}

}


//criando função para gerar zumbis
function enemy(){
  

}
