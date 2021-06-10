var Gamestate = 'play';
var space,spaceimg
var rocket,rocketimg
var UFO,UFOimg




function preload(){
  spaceimg = loadImage('space4.png');
  rocketimg = loadImage('rocket2.png');
  UFOimg = loadImage('UFO2.png')

}

function setup() {
  createCanvas(600,600);
  space = createSprite(300,300);
  space.addImage(spaceimg);
  space.velocityY=10
  space.scale=2
  rocket = createSprite(300,500);
  rocket.addImage(rocketimg);
  rocket.scale = 0.4
  
  UFOgroup = new Group()
  
  }


function draw(){
   background('black')
  if(Gamestate==='play'){
    if(space.y>600){
      space.y = 300
    }
    rocket.x = mouseX
    spawnUfo()
    if(rocket.isTouching( UFOgroup)){
      Gamestate='end'
    }
    drawSprites()
    
    }
   if(Gamestate==='end'){
     fill('yellow');
     textSize(28)
     text('GAME OVER',200,300)
     fill('pink');
     textSize(15)
     text('kindly refresh your page to restart the game',200,500)
     
   }
     
   
  
  
} 
function spawnUfo(){
  if(frameCount % 100===0){
    ufo = createSprite(300,0);
    ufo.addImage(UFOimg);
    ufo.velocityY = 4;
    ufo.scale=0.4
    ufo.x = Math.round(random(30,570));
     UFOgroup.add(ufo);
  }}

 
  