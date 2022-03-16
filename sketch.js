const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var bg
var music
var snows=[]
var snows1=[]
function preload(){
bg=loadImage('snow3.jpg')
music =loadSound("backgroundMusic.mp3",true)
}
function setup() {
createCanvas(900,500);
 // music.play()
  engine=Engine.create()
  world=engine.world
}
function draw() {
background(bg)
  Engine.update(engine)
if (frameCount%10===0){
snows.push(new snow((random(0,900)),-50))
}
if (frameCount%10===0){
  snows1.push(new snow1((random(0,900)),-50))
  }
for(var i=0; i<snows.length; i++){
  snows[i].display()
}
for(var i=0; i<snows1.length; i++){
  snows1[i].display()
}
} 