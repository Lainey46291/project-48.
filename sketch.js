var fish, fishImg;
var shark, sharkImg;
var npcfish, npcfishImg;
var coin, coinImg;
var background, backgroundImg;
var gameState = "play";

function preload(){
backgroundImg = loadImage("background.jpg");
fishImg = loadImage("fish.webp");
npcfishImg = loadImage("npcfish.png");
coinImg = loadImage("coin.png");
sharkImg = loadImage("shark.png");
}

function setup(){
    createCanvas(1000,600);
    background = createSprite(500,300)
    background.velocityX = -1;
    background.addImage("background", backgroundImg);
    background.scale = 2;
    fish = createSprite(300,300,50,50);
    fish.scale = 0.3
    fish.addImage("fish", fishImg);
    shark = createSprite(800,300,50,50);
    shark.scale = 0.5;
    shark.addImage("shark", sharkImg);
    npcfishGroup = new Group();
    invisibleBlockGroup = new Group();
    coinGroup = new Group();
}

function draw(){
    if(gameState === "play"){
        if(keyDown("up_arrow")){
            fish.y = fish.y + 3;
        }
        if(keyDown("down_arrow")){
            fish.y = fish.y - 3;
        }
        fish.velocityX = fish.velocityX + 0.8;
        if(npcfishGroup.isTouching(fish)){
            fish.velocityX = 0
        }
        if(invisibleBlockGroup.isTouching(fish)){
            fish.destroy();
        }
        if(shark.isTouching(fish)){
            fish.destroy();
        }
        spawnNpcfish();
        spawnCoin();
        drawSprites();
    }
    if(gameState = "end"){
        text("Game Over", 470,250)
    }
}

function spawnNpcfish(){
    if(frameCount % 240 === 0){
        var npcfish = createSprite(600,-50);
        npcfish.addImage("npcfish", npcfish.png);
        var invisibleBlock = createSprite(620,-50);
        npcfish.y = Math.round(random(320, 700));
        npcfish.velocityX = -1;
        invisibleBlock.y = npcfish.y;
        invisibleBlock.velocityX = -1; 
        npcfish.lifetime = 800;
        invisibleBlock.debug = true;
        invisibleBlock.add(invisibleBlock);
        npcfishGroup.add(npcfish);
    }
}

function spawnCoin(){
    if(frameCount % 600 === 0){
        var coin = createSprite(600,-50);
        coin.addImage("coin", coin.png);
        coin.y = Math.round(random(320,700));
        coin.velocityX = -1;
        coin.lifetime = 800
        coinGroup.add(coin);
    }
}


