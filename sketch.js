const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var bg, chter1;

var snow;

function preload(){
bg = loadImage("snow1.jpg")

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  snow = new Snow(300,10,20);
  snow2 = new Snow (230,10,50);
  snow3 = new Snow (160,240,40);
  snow4= new Snow (350,100,40);
  snow5 =  new Snow (500,300,40);

  chter1 = createSprite(400, 200, 50, 100);
  
}

function draw() {
  background(bg); 
  
Engine.update(engine);
  if(keyWentDown(LEFT_ARROW)){
    chter1.velocityX = -3;
  }else if (keyWentUp(LEFT_ARROW)){
    chter1.velocityX = 0;
    }


    

    snow.display();

    snow2.display();
    snow3.display();
    snow4.display();
    snow5.display();




  drawSprites();
}