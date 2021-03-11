var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var finishline
var form, player, game;

var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;
var oilSpill_img
var obstacleGroup
var car_sound,sliding_sound
var bronze_img,silver_img,gold_img

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
  oilSpill_img=loadImage("images/f1.png");
  bronze_img=loadImage("images/bronze.png")
  silver_img=loadImage("images/silver.png")
  gold_img=loadImage("images/gold.png")
  car_sound=loadSound("sound/car.mp3")
  sliding_sound=loadSound("sound/sliding.mp3")
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
  finishedPlayers = 0;
 obstacleGroup= new Group()
  yVel = 0;
  xVel = 0;

  xSet = false;
  game = new Game();
  game.getState();
  game.start();
  for(var i=0;i<6;i++){}{
  w=random(200,950)
  h=random(-height*4,height-300)
  oilSpill=createSprite(w,h)
  oilSpill.addImage(oilSpill_img)
  obstacleGroup.add(oilSpill)
}
}


function draw(){
   //start the game
   background(200, 200, 255);

   //start the game
   if (playerCount === 4 && finishedPlayers===0 ) {
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if (finishedPlayers===4) {
     game.update(2)
   }
   if(gameState===2&&finishedPlayers===4){
     game.displayRanks
   }
  }
 
  
