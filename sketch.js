const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var engine, world;

var particle;
var divisions=[];
var particles=[];
var plinkos=[];

var divisionHeight=300;

var gameState = "PLAY";

var turn = 0;
var score = 0;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,800,800,20);

//   line=new Ground(200,450,1200,10);
//   line.visible=false;

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,175));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,275));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
     plinkos.push(new Plinko(j,375));
  }
}

function draw()
{
   background(0);

   Engine.update(engine);
   
   fill("white");
   textSize(30);
   text("Score: "+score,0,100);
   textSize(200,1000);
   text("_",200,800);
   textSize(35);
   text("550",10,550);
   textSize(35);
   text("550",90,550);
   textSize(35);
   text("550",170,550);
   textSize(35);
   text("50",250,550);
   textSize(35);
   text("50",330,550);
   textSize(35);
   text("50",410,550);
   textSize(35);
   text("50",490,550);
   textSize(35);
   text("550",570,550);
   textSize(35);
   text("550",650,550);
   textSize(35);
   text("550",730,550);

   ground.display();
   // line.display();

  for (var i = 0; i < plinkos.length; i++) {
     
   plinkos[i].display();
   
 }

  if(frameCount % 60 === 0)
  {
     particles=new Particles(random(width/2-30,width/2+30),10,10);
  }

  for(var j = 0; j < particles.length; j++)
  {
     particles[j].display();
  }
  for(var k = 0; k < divisions.length; k++)
  {
      divisions[k].display();
  }
  
  if(particle!=null)
 {
   particle.display();

   if(particle.body.position.y>700)
   {
      if(particle.body.position.x > 550 || particle.body.position.x < 250)
      {
         score=score+500;
         particle=null;
         if(turn>=5)gameState = "end";
      }
      else(particle.body.position.x < 550 || particle.body.position.x > 250)
      {
         score=score+50;
         particle=null;
         if(turn>=5)gameState = "end";
      }
   }
 }
}

function mousePressed()
{
   if(gameState!=="end")
   {
      turn++;
      particle = new Particles(mouseX,10,10,10);
   }
}

function gameOver()
{
   if(gameState = "end")
 {
   textSize(40);
   text("Game Over",400,400);
 }
}