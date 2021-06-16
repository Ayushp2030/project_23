const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var player;
var playerBase;

var computer;
var computerBase;

function preload(){
  playerBaseImg = loadImage("./assets/base1.img");
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object

   player = new Player(285, playerBase.body.position.y - 153, 50, 180);
   World.add(world, player);
   
   playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
   World.add(world, playerBase);

   computer = new ComputerPlayer(50, ComputerBase.body.position.y - 153, 50, 180);
   World.add(world, computer);

   computerBase = new ComputerBase(70, random(450, height - 300, 180, 150));
   World.add(world, computerBase);


   ellipseMode(CENTER);
   rectMode(CENTER);


   Engine.run(engine);




 }

function draw() {
rectMode(CENTER);
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerBase.display();
   computerBase.display();
   


   //display Player and computerplayer
   player.display();
   computer.display();


}
