const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint=Matter.Constraint;

var backgroundImage;

var MyEngine,MyWorld

var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4,log5;
var ground1;
var bird1,platform;
var link;

function preload(){
backgroundImage=loadImage("sprites/bg.png")
}


function setup() {
  createCanvas(1200,400);
MyEngine= Engine.create()
MyWorld= MyEngine.world;

box1=new box(700,350,70,70);
box2=new box(900,350,70,70);
box3=new box(700,250,70,70);
box4=new box(900,250,70,70);
box5=new box(800,100,70,70);

pig1= new pig(800,350);
pig2=new pig(800,250);

log1=new log(800,250,270,PI/2)
log2=new log(800,150,270,PI/2)
log3=new log(750,100,150,PI/3)
log4=new log(820,100,120,-PI/3)
//log5=new log(250,200,80,PI/2);

bird1=new bird(450,200)

ground1=new ground(600,390,1200,20);
platform=new ground(120,300,250,200);


link=new slingShot(bird1.body,{x:150,y:90});

}

function draw() {
  background(backgroundImage);  
  Engine.update(MyEngine);
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  pig1.display();
  pig2.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();
 // log5.display();

  bird1.display();

  ground1.display();
  platform.display();

  link.display();
}

function mouseDragged() {
Matter.Body.setPosition(bird1.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
  link.fly();
}