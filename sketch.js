var bg1,scene
var knight,knightImage

function setup() {
  createCanvas(1000,570);
  scene=createSprite(500,200,1000,570)
  scene.addImage(bg1)
  knight=createSprite(100,displayHeight-350,20,20)
 knight.addImage("knight",knightImage)
 knight.scale=0.3;
scene.scale=1.5;
}

function preload(){
bg1=loadImage("Images/BG1.png");
knightImage=loadImage("Images/Knight 1.png");
}

function draw() {
  background("black");  
 console.log("displayWidth:"+displayWidth)
 console.log("displayHeight:"+displayHeight)
    drawSprites();
}