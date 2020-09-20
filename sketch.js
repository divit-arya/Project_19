var player, banana, stone, backGround, ground;
var player_running, bananaImg, stoneImg, backGroundImg;
var bananaGroup, stoneGroup;
var score=0;

 function preload(){
   backGroundImg = loadImage("jungle.jpg");
   stoneImg = loadImage("stone.png");
   bananaImg = loadImage("banana.png");
   player_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png",
"Monkey_09.png","Monkey_10.png");
 }
  
function setup() {
  createCanvas(800, 400);
  score = 0
  
  backGround = createSprite(00, 00, 3000, 400);
  backGround.addImage("background", backGroundImg);
  backGround.x = backGround.width/2;
  backGround.scale = 1.5
  backGround.velocityX = -3
  
  ground = createSprite(400, 350, 800, 10);
  ground.x = ground.width/2;
  ground.VelocityX = -4
  ground.visible = false;
  
  player = createSprite(100, 340, 20, 50);
  player.addAnimation("running", player_running);
  player.scale = 0.15
  
  bananaGroup = new Group();
  stoneGroup = new Group();
  
  
}

function draw() {
 
  if (backGround.x < 100) {
   backGround.x = backGround.width/2;
  }
  
  if (ground.x < 0) {
   ground.x = ground.width/2;
  }
  
  if (player.isTouching(stoneGroup)){
    score = score-2
    stoneGroup.destroyEach()
  }
  
  if (player.isTouching(bananaGroup)){
    score = score+2
    bananaGroup.destroyEach()
  }
  
  switch(score){
    case 10: player.scale = player.scale+0.02
            break;
    case 20: player.scale = player.scale+0.02
            break;
    case 30: player.scale = player.scale+0.02
            break;
    case 40: player.scale = player.scale+0.02
            break;
    default: break;
  } 
  
  spawnStones();
  spawnBanana();
  drawSprites() 
  
  stroke("white");
  textSize();
  fill("white");
  text("Score: " + score, 500, 50)
}
function spawnBanana() {
    if (frameCount % 80 === 0) {
    banana = createSprite(801, 250, 20, 50);
    banana.addImage(bananaImg);
    banana.scale = 0.05;
    banana.y = Math.round(random(120, 200));
    banana.velocityX = -6;
    banana.lifetime = 200;
    bananaGroup.add(banana);  
  }
   
}


function spawnStones() {
  var stone = createSprite(830, 345);
  stone.addImage(stoneImg);
  stone.scale = 0.15;
  var t = Math.round(random(250, 350));
  if (frameCount % t === 0) {
    stone.velocityX = -8;
    stone.lifetime = 200;
    stoneGroup.add(stone);
  }
}