var aeroplane,aeroplaneImg;
var story,keys,play,Menu;
var backImg,backImg;
var gameState = 0;

function preload(){
aeroplaneImg = loadImage("Images/Aeroplane image.png")
backImg = loadImage("Images/AIRPORT image.jpg")
backImg2 = loadImage("Images/Background image.jpg")
}

function setup() {
  createCanvas(displayWidth-100,displayHeight-200);

 
story = createButton("STORY")
story.position(400,100)
story.mousePressed(Story)

keys = createButton("KEYS")
keys.position(400,200)
keys.mousePressed(Keys)

play = createButton("PLAY")
play.position(400,300)
play.mousePressed(Play)
  
Menu = createButton("Main Menu")
Menu.position(50,450)
Menu.mousePressed(MENU)
}

function draw() {
  background(backImg);
 
  story.mousePressed(Story)
//  Menu = createButton("Main Menu")
//     Menu.position(50,450)
//     Menu.mousePressed(MENU)


  drawSprites()
 
//gameState = 1;
}

function Story(){

story.hide()
keys.hide()
play.hide()

 stroke(20)
 textSize(40)
 fill("yellow")
 textFont("Georgia")
 text("Dear Pilot,",10,30)
 text("This is to inform you that your application have been appcepted by",50,100)
 text("our company and your flight from Whales to 20,000 kilometers have",50,170)
 text("been accepted. You are requested to visit our company in Whales.",50,240)
 text("From,",10,310)
 text("The Company Owner,KETAN",10,380)

 //gameState = 1;
 //clear();
}

function Keys(){
story.hide()
keys.hide()
play.hide()
text("")
gameState = 1
}

function Play(){
 
  clear();
  
  story.hide()
  keys.hide()
  play.hide()

aeroplane = createSprite(600,470,50,50);
aeroplane.addImage(aeroplaneImg)



}

function keyPressed(){
 if(keyCode===LEFT_ARROW){
   aeroplane.velocityX = -2;
 }
 if(keyCode===RIGHT_ARROW){
  aeroplane.velocityX = 2;
}
if(keyCode===UP_ARROW){
  aeroplane.velocityY = -2;
}
if(keyCode===DOWN_ARROW){
  aeroplane.velocityY = 2;
}
}

function MENU(){
 
 Menu.hide()

story = createButton("STORY")
story.position(400,100)
story.mousePressed(Story)

keys = createButton("KEYS")
keys.position(400,200)
keys.mousePressed(Keys)

play = createButton("PLAY")
play.position(400,300)
play.mousePressed(Play)

  }