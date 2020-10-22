
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var sling,ground1,ground2,block1,gameState;
gameState="0"
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	ground1= new Ground(600,300,300,20);
	ground2= new Ground(300,600,300,20);

	block1 = new Block(200,200,50,50);

	block2 = new Block(600,200,50,100);
	block3 = new Block(650,200,50,100);
	block4 = new Block(550,200,50,100);
	block5 = new Block(575,100,50,100);
	block6 = new Block(625,100,50,100);
	block7 = new Block(600,0,50,100);

	block8 = new Block(300,500,50,100);
	block9 = new Block(350,500,50,100);
	block10 = new Block(250,500,50,100);
	block11 = new Block(275,400,50,100);
	block12 = new Block(325,400,50,100);
	block13 = new Block(300,300,50,100);
	
	sling = new SlingShot(block1.body,{x:200,y:200});
	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background(0);
  ground1.display();
  ground2.display();

  block1.display();

  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  

  
  drawSprites();
 
}
function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(block1.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    sling.fly();
    gameState = "1";
}


function keyPressed(){
    if(keyCode === 32){
        sling.attach(block1.body);
        gameState =" "; 
        Matter.Body.setPosition(block1.body, {x: 200 , y: 200});
        Matter.Body.setVelocity(block1.Body,{x:0, y:0})
    }
}
    


