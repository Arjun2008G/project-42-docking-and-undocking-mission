var bgimg;
var issimg;
var bg;
var iss;
var spacecraft;
var hasDocked=false;
var scimg1;
var scimg2;
var scimg3;
var scimg4;
var textimg;

function preload(){
bgimg = loadImage("spacebg.jpg");
issimg = loadImage("iss.png");
scimg1 = loadImage("spacecraft1.png");
scimg2 = loadImage("spacecraft2.png");
scimg3 = loadImage("spacecraft3.png");
scimg4 = loadImage("spacecraft4.png");
textimg = loadImage("textimage.png");
}

function setup() {
  createCanvas(800,400);
  bg = createSprite(400, 200, 800, 400);
  bg.addImage(bgimg);
  bg.scale=1.3;
  iss = createSprite(390,140,50,50);
  iss.addImage(issimg);
  iss.scale=0.7;
  spacecraft = createSprite(400,360,50,50);
  spacecraft.addImage(scimg1);
  spacecraft.scale=0.15;
}

function draw() {
  background(0);
  if(!hasDocked){

    if(keyDown(LEFT_ARROW)){
      spacecraft.x=spacecraft.x-10;
      spacecraft.addImage(scimg3);
    }

    if(keyDown(RIGHT_ARROW)){
      spacecraft.x=spacecraft.x+10;
      spacecraft.addImage(scimg4);
    }

    if(keyDown(UP_ARROW)){
      spacecraft.y=spacecraft.y-10;
      spacecraft.addImage(scimg2);
    }

    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(scimg2);
    }
  }

  if(spacecraft.x===340&&spacecraft.y===220){
    hasDocked=true;
    textds = createSprite(400,350,50,50);
    textds.addImage(textimg);
    textds.scale=0.8;
  }
  drawSprites();
}