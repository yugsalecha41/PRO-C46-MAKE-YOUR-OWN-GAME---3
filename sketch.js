var back;
var backimg;

var santa;
var santaimg;

var house;
var houseimg;

var chimney;
var chimneyimg;

var gift,giftimg,cookies,cookiesimg,gameover,gameoverimg,reset,resetimg,snow,snowimg,start,startimg
 var sound
 var gift,giftimg2
 var gift,giftimg3
 var gift,giftimg4
 var gift,giftimg5
var houseGroup,giftGroup

var invisibleGround;

var cookies1=0
var count=0

var gameState="start";
var fBack1,fbackImg;
var fSanta,fSantaImg;

var hed, hedImg

var instruct, instructImg

var life, lifeImage

var chimneyGroup

function setup() {
  createCanvas(displayWidth,displayHeight);
 back=createSprite(displayWidth/2,displayHeight/2,displayWidth+300,displayHeight)
 back.addImage(backimg)
back.scale=5.5; 

santa=createSprite(displayWidth/2-100,displayHeight/2-250)
santa.addAnimation("santa",santaimg)
santa.scale=2;

//invisibleGround=createSprite(displayWidth/2,displayHeight/2+420,displayWidth,20)
//invisibleGround.visible=true

cookies=createSprite(displayWidth/2+350,displayHeight/2-300)
cookies.addImage(cookiesimg)
cookies.scale=0.5
houseGroup=new Group();
giftGroup=new Group();

fBack1=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
fBack1.scale=2.7

fSanta=createSprite(displayWidth/2+430,displayHeight/2+100)

start=createSprite(displayWidth/2-80,displayHeight/2+150)
start.addImage(startimg)

fBack1.addImage(fbackImg)
fSanta.addImage(fSantaImg)

hed=createSprite(displayWidth/2+10, displayHeight/2-200);
hed.addImage(hedImg)

instruct=createSprite(displayWidth/2-80, displayHeight/2-50)
instruct.addImage(instructImg);
instruct.scale=0.7


life=createSprite(displayWidth/2-700, displayHeight/2-300)
life.addImage(lifeImage)
life.scale=2


gameOver=createSprite(displayWidth/2, displayHeight/2-50);
gameOver.addImage(gameoverimg);
gameOver.visible=false;

reset=createSprite(displayWidth/2, displayHeight/2)
reset.addImage(resetimg)
reset.visible=false

chimneyGroup =  new Group()

sound1.play();
}


function preload (){

  sound1 = loadSound("511346_preview.mp3")
backimg=loadImage("background.jpg")
santaimg=loadAnimation("1.png","2.png","3.png","4.png")
house1=loadImage("house1.png")
house2=loadImage("house2.png")
house3=loadImage("house3.png")
house4=loadImage("house4.png")

giftimg=loadImage("gift1.png")
giftimg2=loadImage("gift2.png")
giftimg3=loadImage("gift3.png")
giftimg4=loadImage("gift4.png")
giftimg5=loadImage("gift5.png")

cookiesimg=loadImage("cookies.png")

gameoverimg=loadImage("Game over.png")

resetimg=loadImage("Reset.png")

snowimg=loadImage("snow.jpeg")

startimg=loadImage("Start.png")

fbackImg=loadImage("frontImage.jpeg")
fSantaImg=loadImage("santa-2014-removebg-preview (2).png")

hedImg=loadImage("output-onlinetexttools__3_-removebg-preview.png")

instructImg=loadImage("output-onlinetexttools__4_-removebg-preview (1).png")

lifeImage=loadImage("final.png")

chimneyimg=loadImage("Chimney2.png")
}

 
function draw() {

drawSprites();



 if (gameState==="start"){
   
  
  giftGroup.setVisibleEach(false)
houseGroup.setVisibleEach(false)
chimneyGroup.setVisibleEach(false);
cookies.visible=false
santa.visible=false
back.visible=false
life.visible=false;

fSanta.visible=true;
fBack1.visible=true;
hed.visible=true;
start.visible=true;
instruct.visible=true;


if (mousePressedOver(start)){
gameState="play"

}

 }

if (gameState==="play"){

 


  textSize(50)
  fill("black");
  text("X", displayWidth/2+420,displayHeight/2-280)
  
  textSize(50)
  text(" "+cookies1,displayWidth/2+450,displayHeight/2-280)
 
 
  back.velocityX=-5
textSize(30)
text(" "+ count,displayWidth/2-396,displayHeight/2-320)
text("-", displayWidth/2-410,displayHeight/2-320)
text("Count", displayWidth/2-500,displayHeight/2-320)
cookies.visible=true
santa.visible=true
back.visible=true
life.visible=true
houseGroup.setVisibleEach(true);
chimneyGroup.setVisibleEach(true);
fSanta.visible=false
fBack1.visible=false
hed.visible=false
start.visible=false;
instruct.visible=false

spawnHouse()
gifts();


  if (back.x<0){
back.x=back.width/2
  }
if (keyDown(DOWN_ARROW) || keyDown("SPACE")){
giftGroup.setVisibleEach(true)
giftGroup.setVelocityYEach(5)
}
if (giftGroup.isTouching(chimneyGroup)){
giftGroup.destroyEach()
cookies1 += 1

}
if(giftGroup.isTouching(houseGroup)){
 //cookies1=cookies-1;
  count= count+1
 
  
}

if(count===5){
  gameState="end"
}

}

if(gameState==="end"){
 sound1.stop();
  textSize(50)
  fill("black");
  text("X", displayWidth/2+420,displayHeight/2-280)
 
  textSize(50)
  text(" "+cookies1,displayWidth/2+450,displayHeight/2-280)
  

houseGroup.setVelocityXEach(0)
santa.visible=false;
giftGroup.setVisibleEach(false)
chimneyGroup.setVisibleEach(false);
houseGroup.setVisibleEach(false);
houseGroup.setLifetimeEach(-1)
chimneyGroup.setLifetimeEach(-1)
reset.visible=true;
gameOver.visible=true;
back.velocityX=0;


}

if(mousePressedOver(reset)){
  reset1();
  cookies1=0
  count=3;
  sound1.play();

}

if(gameState==="end" && count===0){

}

if(count===0){
  gameState==="end";
}

}

function reset1(){

  gameState="play";
  gameOver.visible=false;
  reset.visible=false;
 houseGroup.destroyEach();
 chimneyGroup.destroyEach();


}

function spawnHouse(){
if (frameCount%250===0) {
house=createSprite(displayWidth,displayHeight/2+200,10,10)
house.scale=0.7
var ran=Math.round(random(1,2))
switch(ran){
case 1 :house.addImage(house2)
break

case 2 :house.addImage(house4)
break
default:break
}

house.lifetime=300
chimney=createSprite(displayWidth,displayHeight/2+30,10,10)
chimney.addImage(chimneyimg)
chimney.x=house.x

chimney.velocityX=-6
house.velocityX=-6

//house.debug=true;
//chimney.debug=true;

chimney.scale=0.5
chimney.lifetime=300
houseGroup.add(house)
chimneyGroup.add(chimney)

//houseGroup.setColliderEach("rectangle", 0, 0, 40, 40);
//chimneyGroup.setColliderEach("rectangle", 0, 0, 5, 5);



}
}

function gifts(){
  gift=createSprite(displayWidth/2-100,displayHeight/2-150)
 
gift.visible=false
 
gift.addImage(giftimg) 

 
 gift.x=santa.x
 gift.scale=0.5;
giftGroup.add(gift)
  }
  

 
